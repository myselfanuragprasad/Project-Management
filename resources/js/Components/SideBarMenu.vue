<script setup>
import {
  HomeIcon,
  UserIcon,
  KeyIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ChevronRightIcon,
  ListBulletIcon,
  MapIcon,
} from "@heroicons/vue/24/solid";
import { Link } from "@inertiajs/vue3";

const toggleIcon = () => {
  const chevronIcon = document.querySelector(".submenu-toggle-icon");
  chevronIcon.classList.toggle("rotate-90");

  const myElement = document.getElementById("myElement");
  if (myElement) {
    if (myElement.getAttribute("id")) {
      myElement.removeAttribute("id");
    } else {
      myElement.setAttribute("id", "myElement");
    }
  }
};
</script>
<template>
  <div class="text-gray-300 pt-5 pb-20">
    <div class="flex justify-center side-color">
      <div
        class="rounded-full flex items-center justify-center bg-primary text-gray-300 w-24 h-24 text-4xl uppercase"
      >
        {{
          $page.props.auth.user.name
            .match(/(^\S\S?|\b\S)?/g)
            .join("")
            .match(/(^\S|\S$)?/g)
            .join("")
        }}
      </div>
    </div>
    <div
      class="text-center py-3 px-4 border-b border-gray-700 dark:border-gray-800"
    >
      <span class="flex items-center justify-center">
        <p class="truncate text-md">{{ $page.props.auth.user.name }}</p>
        <div>
          <CheckBadgeIcon
            class="ml-[2px] w-4 h-4"
            v-show="$page.props.auth.user.email_verified_at"
          />
        </div>
      </span>
      <span class="block text-sm font-medium truncate">{{
        $page.props.auth.user.roles[0].name
      }}</span>
    </div>
    <ul class="space-y-2 my-4 menu">
      <li
        class="text-white rounded-lg hover:bg-primary dark:hover:bg-primary menu-item"
        v-bind:class="
          route().current('dashboard')
            ? 'bg-primary'
            : 'bg-gray-700/40 dark:bg-gray-800/40'
        "
      >
        <Link :href="route('dashboard')" class="flex items-center py-2 px-4">
          <HomeIcon class="w-6 h-5" />
          <span class="ml-3">Dashboard</span>
        </Link>
      </li>
      <li v-show="can(['read user'])" class="py-2">
        <p>{{ lang().label.data }}</p>
      </li>

      <li
        v-show="can(['read task'])"
        class="text-white rounded-lg hover:bg-primary dark:hover:bg-primary menu-item"
        v-bind:class="route().current('tasklist.dashboard') ? 'bg-primary' : 'bg-gray-700/40 dark:bg-gray-800/40'"
      >
        <Link
          :href="route('tasklist.dashboard')"
          class="flex items-center py-2 px-4"
        >
          <ListBulletIcon class="w-6 h-5" />
          <span class="ml-3">{{ lang().label.task_list }}</span>
        </Link>
      </li>

    
     
    </ul>
  </div>
</template>
<style>
.submenu {
  width: fit-content;
  margin: auto;
  margin-top: inherit;
}
#myElement {
  display: none;
}
.rotate-90 {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}
</style>
