import { mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./DangerButton-172f14d6.mjs";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./SecondaryButton-ee4ce9eb.mjs";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Delete",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    role: Object
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({});
    const destory = () => {
      var _a;
      form.delete(route("role.destroy", (_a = props.role) == null ? void 0 : _a.id), {
        preserveScroll: true,
        onSuccess: () => {
          emit("close");
          form.reset();
        },
        onError: () => null,
        onFinish: () => null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: props.show,
        onClose: ($event) => emit("close"),
        maxWidth: "lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<form class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(_ctx.lang().label.delete)} ${ssrInterpolate(props.title)}</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.lang().label.delete_confirm)} <b${_scopeId}>${ssrInterpolate((_a = props.role) == null ? void 0 : _a.name)}</b>? </p><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              disabled: unref(form).processing,
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.lang().button.close)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: destory
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(form).processing ? _ctx.lang().button.delete + "..." : _ctx.lang().button.delete)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.delete + "..." : _ctx.lang().button.delete), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                class: "p-6",
                onSubmit: withModifiers(destory, ["prevent"])
              }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, toDisplayString(_ctx.lang().label.delete) + " " + toDisplayString(props.title), 1),
                createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, [
                  createTextVNode(toDisplayString(_ctx.lang().label.delete_confirm) + " ", 1),
                  createVNode("b", null, toDisplayString((_b = props.role) == null ? void 0 : _b.name), 1),
                  createTextVNode("? ")
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$2, {
                    disabled: unref(form).processing,
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_sfc_main$3, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: destory
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.delete + "..." : _ctx.lang().button.delete), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Role/Delete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
