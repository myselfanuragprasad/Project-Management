<script setup>
import Breadcrumb from '@/Components/Breadcrumb.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ChevronRightIcon, KeyIcon, ShieldCheckIcon, UserIcon } from '@heroicons/vue/24/solid';
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps({
    tasks: Number,
   
})

</script>

<template>

    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <Breadcrumb :title="'Dashboard'" :breadcrumbs="[]" />
        <div class="space-y-4">
            <div
                class="text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm">
                <div>
                    <div
                        class="rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-500/80 items-center overflow-hidden">
                        <div class="flex flex-col">
                            <p class="text-4xl font-bold">{{ props.tasks }}</p>
                            <p class="text-md md:text-lg uppercase">{{ lang().label.task }}</p>
                        </div>
                        <div>
                            <UserIcon class="w-16 h-auto" />
                        </div>
                    </div>
                    <div
                        class="bg-blue-600 dark:bg-blue-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/70">
                        <Link :href="route('tasklist.dashboard')" class="flex justify-between items-center">
                        <p>{{ lang().label.more }}</p>
                        <ChevronRightIcon class="w-5 h-5" />
                        </Link>
                    </div>
                </div>
              
               
            </div>
        </div>
    </AuthenticatedLayout>
</template>
