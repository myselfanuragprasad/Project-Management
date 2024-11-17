import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "SelectInput",
  __ssrInlineRender: true,
  props: ["modelValue", "dataSet"],
  emits: ["update:modelValue"],
  setup(__props) {
    const input = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({
        class: "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-primary dark:focus:border-primary focus:ring-primary dark:focus:ring-primary rounded-md shadow-sm placeholder:text-gray-400 placeholder:dark:text-gray-400/50",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.dataSet, (data, index) => {
        _push(`<option${ssrRenderAttr("value", data.value)}>${ssrInterpolate(data.label)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SelectInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
