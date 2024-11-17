import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "./DangerButton-172f14d6.mjs";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./SecondaryButton-ee4ce9eb.mjs";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Permission",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    role: Object
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: props.show,
        onClose: ($event) => emit("close"),
        maxWidth: "2xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><h2 class="text-lg font-medium"${_scopeId}>${ssrInterpolate(_ctx.lang().label.permission)}</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.lang().label.all_permission)} ${ssrInterpolate(_ctx.lang().label.role)} <b${_scopeId}>${ssrInterpolate((_a = props.role) == null ? void 0 : _a.name)}</b></p><div class="my-6 grid grid-cols-2 sm:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList((_b = props.role) == null ? void 0 : _b.permissions, (permission, index) => {
              _push2(`<div class="flex justify-between w-full px-4 py-2"${_scopeId}>${ssrInterpolate(++index + ". " + permission.name)}</div>`);
            });
            _push2(`<!--]--></div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
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
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                createVNode("h2", { class: "text-lg font-medium" }, toDisplayString(_ctx.lang().label.permission), 1),
                createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, [
                  createTextVNode(toDisplayString(_ctx.lang().label.all_permission) + " " + toDisplayString(_ctx.lang().label.role) + " ", 1),
                  createVNode("b", null, toDisplayString((_c = props.role) == null ? void 0 : _c.name), 1)
                ]),
                createVNode("div", { class: "my-6 grid grid-cols-2 sm:grid-cols-3" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList((_d = props.role) == null ? void 0 : _d.permissions, (permission, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "flex justify-between w-full px-4 py-2"
                    }, toDisplayString(++index + ". " + permission.name), 1);
                  }), 128))
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$2, {
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Role/Permission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
