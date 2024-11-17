<script setup>
import {
  XMarkIcon,
} from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted } from "vue";
const data = reactive({
    timeoutId: null,
});

const isVisible = ref(false);
const toggle = () => {
    
    if (data.timeoutId) {
      
        clearTimeout(data.timeoutId);
        data.timeoutId = null;
    }

    // Make the toast message visible
    isVisible.value = true;


    data.timeoutId = setTimeout(() => {
        isVisible.value = false;
        data.timeoutId = null;  
    }, 3000);
};


onMounted(toggle);
</script>

<template>
 
  <transition name="slide-fade">
    <div
      v-if="$page.props.flash.success && isVisible"
      class="fixed top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[200]"
    >
      <div
        class="flex p-4 justify-between items-center bg-green-600 rounded-lg"
      >
        <div>
          <CheckCircleIcon class="h-8 w-8 text-white" fill="currentColor" />
        </div>
        <div
          class="mx-3 text-sm font-medium text-white"
          v-html="$page.props.flash.success"
        ></div>
        <button
          @click="toggle"
          type="button"
          class="ml-auto bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8"
        >
          <span class="sr-only">Close</span>
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </transition>
 
</template>


