import { mergeProps, useSSRContext, ref, onMounted } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main$2 = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: ["message"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600 dark:text-red-400">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700 dark:text-gray-300" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String,
    error: {
      type: String,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: [__props.error ? "border-red-500 dark:border-red-400 dark:bg-gray-900 dark:text-gray-300 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-500 dark:focus:ring-red-400" : "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary dark:focus:border-primary focus:ring-primary dark:focus:ring-primary", "rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50"],
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  _sfc_main$2 as b
};