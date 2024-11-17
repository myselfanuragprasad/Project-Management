<script setup>
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import Modal from "@/Components/Modal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { watchEffect } from "vue";

const props = defineProps({
  show: Boolean,
  title: String,
});

const emit = defineEmits(["close"]);

const form = useForm({
  task_name: "",
  task_file: "",
});
// method for inserting form records
const create = () => {
  form.post(route("task.store"), {
    preserveScroll: true,
    onSuccess: () => {
      emit("close");
      form.reset();
    },
    onError: () => null,
    onFinish: () => null,
  });
};

watchEffect(() => {
  if (props.show) {
    form.errors = {};
  }
});

// file change code
const taskFileChange = (event) => {
  const fileInput = event.target;
  const formErrors = {};
  let fileExt;
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
  if (form.errors.task_file|| fileExt.endsWith(".pdf")) {
    inputElement.style.display = "none";
  } else {
    inputElement.style.display = "block";
  }
};
</script>

<template>
  <section class="space-y-6">
    <Modal :show="props.show" @close="emit('close')">
      <form class="p-6" @submit.prevent="create" enctype="multipart/form-data">
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
          {{ lang().label.add }} New {{ props.title }}
        </h2>
        <div class="my-6 space-y-4">
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
              alt="Client Logo Preview"
              class="mt-2 task-file"
            />
            <InputError class="mt-2" :message="form.errors.task_file" />
          </div>
        </div>
        <div class="flex justify-end">
          <SecondaryButton :disabled="form.processing" @click="emit('close')">
            {{ lang().button.close }}
          </SecondaryButton>
          <PrimaryButton
            class="ml-3"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            @click="create"
          >
            {{
              form.processing ? lang().button.add + "..." : lang().button.add
            }}
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  </section>
</template>

<style scoped>
.task-file {
  max-width: 100px;
  border: 2px solid #0284c7;
  display: none; /* Initially hidden */
  object-fit: cover; /* Ensures the image maintains aspect ratio */
}

.task-file.show {
  display: block; /* Shows image when file is selected */
}
</style>
