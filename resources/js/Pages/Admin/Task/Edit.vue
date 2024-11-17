<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import SelectInput from "@/Components/SelectInput.vue";
import { useForm } from "@inertiajs/vue3";
import { watchEffect, ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import Breadcrumb from "@/Components/Breadcrumb.vue";

const props = defineProps({
  show: Boolean,
  title: String,
  task: Object,
  breadcrumbs: Object,
});

const emit = defineEmits(["close"]);

const form = useForm({
  task_name: "",
  task_file: "",
  task_status: "",
});
const task_status = [
  { value: "Completed", label: "Completed" },
  { value: "Pending", label: "Pending" },
];

// update the form data
const update = () => {
  form.post(route("task.update", props.task?.id), {
    preserveScroll: true,
    onSuccess: () => {
      emit("close");
      form.reset();
    },
    onError: () => null,
    onFinish: () => null,
  });
};

// Reactive imageUrl ref
const imageUrl = ref(null);

watchEffect(() => {
  if (props.task) {
    form.errors = {};
    form.task_name = props.task?.task_name;
    form.task_status = props.task?.task_status;
    imageUrl.value = props.task.file_attachment
      ? `/task_docs/${props.task.id}/${props.task.file_attachment}`
      : null;
  }
});

// file change code
const taskFileChange = (event) => {
  const fileInput = event.target;
  const fetchElement = document.getElementById("taskFileFetch");
  if (fetchElement) {
    fetchElement.style.display = "none";
  }

  const formErrors = {};
  let fileExt;
  imageUrl.value = "";
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];

    if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type)) {
      formErrors.task_file =
        "Invalid file type. Only PNG and PDF files are allowed.";
    } else if (file.size > 4 * 1024 * 1024) {
      formErrors.task_file = "File size exceeds the maximum limit of 4MB.";
    } else {
      // Update the image preview
      form.task_file = file;

      const taskFilePreview = document.getElementById("taskFilePreview");
      const reader = new FileReader();
      reader.onload = (e) => {
        taskFilePreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
      formErrors.task_file = null;
    }
  }

  form.errors = { ...form.errors, ...formErrors };
  fileExt = fileInput.files[0]?.name || "";

  // Hide or show the image preview element based on whether there are errors or not and file type
  const inputElement = document.getElementById("taskFilePreview");
  if (form.errors.task_file || fileExt.endsWith(".pdf")) {
    inputElement.style.display = "none";
  } else {
    inputElement.style.display = "block";
  }
};
</script>

<template>
  <section class="space-y-6">
    <Head :title="props.title" />
    <AuthenticatedLayout>
      <Breadcrumb :title="title" :breadcrumbs="breadcrumbs" />
      <div class="bg-white rounded-lg shadow-lg mt-5 p-4">
        <h2
          class="text-lg font-medium text-gray-900 dark:text-gray-100 p-1 ml-3"
        >
          {{ props.title }}

          <Link
            :href="route('tasklist.dashboard')"
            class="task-list border rounded px-2 py-1"
          >
            {{ lang().button.task_list }}
          </Link>
        </h2>
        <hr class="border-t-2 border-black mt-3 w-full" />

        <form
          class="p-6"
          @submit.prevent="update"
          enctype="multipart/form-data"
        >
          <div
            class="my-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2"
          >
            <div>
              <InputLabel for="name" :value="lang().label.name" />
              <TextInput
                id="name"
                type="text"
                class="mt-1 block w-full"
                v-model="form.task_name"
                required
                :placeholder="lang().placeholder.task_name"
                :error="form.errors.task_name"
              />
              <InputError class="mt-2" :message="form.errors.task_name" />
            </div>
            <div>
              <InputLabel
                :value="lang().label.task_status"
                for="task_status"
                class="form-label"
              />
              <SelectInput
                v-model="form.task_status"
                :dataSet="
                  task_status.map((status) => ({
                    value: status.value,
                    label: status.label,
                  }))
                "
                :placeholder="lang().placeholder.task_status"
                class="form-select w-full"
                :error="form.errors.task_status"
              >
              </SelectInput>

              <InputError class="mt-2" :message="form.errors.task_status" />
            </div>
          </div>
          <div
            class="my-6 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-2"
          >
            <div>
              <InputLabel :value="lang().label.task_file" for="task_file" />

              <TextInput
                class="form-control w-full bg-gray-100 rounded p-2"
                type="file"
                name="task_file"
                id="task_file"
                :error="form.errors.task_file"
                @change="taskFileChange"
              />
              <!-- Image preview section -->
              <img
                id="taskFilePreview"
                :src="form.task_file"
                alt="Loading.."
                class="mt-2 task-file"
              />
              <img
                id="taskFileFetch"
                v-if="imageUrl"
                :src="imageUrl"
                alt="Task File Preview"
                class="mt-2 show-file"
              />
              <InputError class="mt-2" :message="form.errors.task_file" />
            </div>
          </div>
          <div class="flex justify-end">
            <PrimaryButton
              class="ml-3"
              :class="{ 'opacity-25': form.processing }"
              :disabled="form.processing"
              @click="update"
            >
              {{
                form.processing
                  ? lang().button.update + "..."
                  : lang().button.update
              }}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  </section>
</template>

<style scoped>
.task-list {
  float: right;
  color: white;
  background-color: #0284c7;
}
.task-file {
  max-width: 100px;
  border: 2px solid #0284c7;
  display: none; /* Initially hidden */
  object-fit: cover; /* Ensures the image maintains aspect ratio */
}

.task-file.show {
  display: block; /* Shows image when file is selected */
}

.show-file {
  max-width: 100px;
  border: 2px solid #0284c7;
  display: block; /* Initially hidden */
  object-fit: cover; /* Ensures the image maintains aspect ratio */
}
</style>
