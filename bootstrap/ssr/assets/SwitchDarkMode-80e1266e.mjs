import { resolveDirective, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from "vue/server-renderer";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
import { useDark, useToggle } from "@vueuse/core";
const _sfc_main = {
  __name: "SwitchDarkMode",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(_attrs)}><button${ssrRenderAttrs(mergeProps({ class: "p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.dark_mode)))}>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(unref(SunIcon), { class: "w-5 h-5 fill-current" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDark)) {
        _push(ssrRenderComponent(unref(MoonIcon), { class: "w-5 h-5 fill-current" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SwitchDarkMode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
