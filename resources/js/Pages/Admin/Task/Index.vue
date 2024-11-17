<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import Breadcrumb from "@/Components/Breadcrumb.vue";
import TextInput from "@/Components/TextInput.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InfoButton from "@/Components/InfoButton.vue";
import SelectInput from "@/Components/SelectInput.vue";
import { reactive, watch } from "vue";
import DangerButton from "@/Components/DangerButton.vue";
import pkg from "lodash";
import { router } from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import { Link } from "@inertiajs/vue3";
import {
  ChevronUpDownIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";
import Create from "@/Pages/Admin/Task/Create.vue";
import Delete from "@/Pages/Admin/Task/Delete.vue";
import DeleteBulk from "@/Pages/Admin/Task/DeleteBulk.vue";
import Checkbox from "@/Components/Checkbox.vue";
import { formatDate } from "@/Components/DateTimeFormat";
import { usePage } from "@inertiajs/vue3";
import CustomToast from "@/Components/CustomToast.vue";

const { _, debounce, pickBy } = pkg;
const props = defineProps({
  title: String,
  filters: Object,
  tasks: Object,
  breadcrumbs: Object,
  perPage: Number,
});
const data = reactive({
  params: {
    search: props.filters.search,
    field: props.filters.field,
    order: props.filters.order,
    perPage: props.perPage,
  },
  selectedId: [],
  multipleSelect: false,
  createOpen: false,
  editOpen: false,
  deleteOpen: false,
  deleteBulkOpen: false,
  task: null,
  dataSet: usePage().props.app.perpage,
});

const order = (field) => {
  data.params.field = field;
  data.params.order = data.params.order === "asc" ? "desc" : "asc";
};

watch(
  () => _.cloneDeep(data.params),
  debounce(() => {
    let params = pickBy(data.params);
    router.get(route("tasklist.dashboard"), params, {
      replace: true,
      preserveState: true,
      preserveScroll: true,
    });
  }, 150)
);

const selectAll = (event) => {
  if (event.target.checked === false) {
    data.selectedId = [];
  } else {
    props.users?.data.forEach((user) => {
      data.selectedId.push(user.id);
    });
  }
};
const select = () => {
  if (props.users?.data.length == data.selectedId.length) {
    data.multipleSelect = true;
  } else {
    data.multipleSelect = false;
  }
};
</script>

<template>
  <Head :title="props.title" />
 <CustomToast />
  <AuthenticatedLayout>
    <Breadcrumb :title="title" :breadcrumbs="breadcrumbs" />
    <div class="space-y-4">
      <div class="px-4 sm:px-0">
        <div class="rounded-lg overflow-hidden w-fit">
          <PrimaryButton
            v-show="can(['create task'])"
            class="rounded-none"
            @click="data.createOpen = true"
          >
            {{ lang().button.add_task }}
          </PrimaryButton>
          <Create
            :show="data.createOpen"
            @close="data.createOpen = false"
            :tasks="props.tasks"
            :title="props.title"
          />

          <Delete
            :show="data.deleteOpen"
            @close="data.deleteOpen = false"
            :task="data.task"
            :title="props.title"
          />
          <DeleteBulk
            :show="data.deleteBulkOpen"
            @close="
              (data.deleteBulkOpen = false),
                (data.multipleSelect = false),
                (data.selectedId = [])
            "
            :selectedId="data.selectedId"
            :title="props.title"
          />
        </div>
      </div>
      <div class="relative bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <div class="flex justify-between p-2">
          <div class="flex space-x-2">
            <SelectInput
              v-model="data.params.perPage"
              :dataSet="data.dataSet"
            />
            <DangerButton
              @click="data.deleteBulkOpen = true"
              v-show="data.selectedId.length != 0 && can(['delete task'])"
              class="px-3 py-1.5"
              v-tooltip="lang().tooltip.delete_selected"
            >
              <TrashIcon class="w-5 h-5" />
            </DangerButton>
          </div>
          <TextInput
            v-model="data.params.search"
            type="text"
            class="block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg"
            :placeholder="lang().placeholder.search"
          />
        </div>
        <div class="overflow-x-auto scrollbar-table">
          <table class="w-full">
            <thead
              class="uppercase text-sm border-t border-gray-200 dark:border-gray-700"
            >
              <tr class="dark:bg-gray-900/50 text-left">
                <th class="px-2 py-4 text-center">
                  <Checkbox
                    v-model:checked="data.multipleSelect"
                    @change="selectAll"
                  />
                </th>
                <th class="px-2 py-4 text-center">#</th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('task_name')"
                >
                  <div class="flex justify-between items-center">
                    <span>{{ lang().label.task_name }}</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('task_status')"
                >
                  <div class="flex justify-between items-center">
                    <span>{{ lang().label.task_status }}</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>

                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('created_at')"
                >
                  <div class="flex justify-between items-center">
                    <span>{{ lang().label.created_at }}</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th
                  class="px-2 py-4 cursor-pointer"
                  v-on:click="order('updated_at')"
                >
                  <div class="flex justify-between items-center">
                    <span>{{ lang().label.updated_at }}</span>
                    <ChevronUpDownIcon class="w-4 h-4" />
                  </div>
                </th>
                <th class="px-2 py-4 cursor-pointer text-center">
                  {{ lang().label.action }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(task, index) in tasks.data"
                :key="index"
                class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"
              >
                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">
                  <input
                    class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary"
                    type="checkbox"
                    @change="select"
                    :value="task.id"
                    v-model="data.selectedId"
                  />
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">
                  {{ ++index }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  <span class="flex justify-start items-center">
                    {{ task.task_name }}
                  </span>
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  {{ task.task_status }}
                </td>

                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  {{ formatDate(task.created_at) }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  {{ formatDate(task.updated_at) }}
                </td>
                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                  <div class="flex justify-center items-center">
                    <div class="rounded-md overflow-hidden">
                      <InfoButton
                        v-show="can(['update task'])"
                        type="button"
                        class="px-2 py-1.5"
                        v-tooltip="lang().tooltip.edit_task"
                      >
                        <Link :href="route('task.edit', { id: task.id })">
                          <PencilIcon class="w-4 h-4" />
                        </Link>
                      </InfoButton>
                      <DangerButton
                        v-show="can(['delete task'])"
                        type="button"
                        @click="(data.deleteOpen = true), (data.task = task)"
                        class="px-2 py-1.5 ml-2"
                        v-tooltip="lang().tooltip.delete"
                      >
                        <TrashIcon class="w-4 h-4" />
                      </DangerButton>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"
        >
          <Pagination :links="props.tasks" :filters="data.params" />
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
