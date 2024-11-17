import { watchEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$1, a as _sfc_main$5 } from "./SecondaryButton-ee4ce9eb.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-2c41e289.mjs";
import "./SelectInput-d8b73601.mjs";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    roles: Object
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({
      client_name: "",
      client_id: "",
      client_erp_id: ""
    });
    const create = () => {
      form.post(route("client.store"), {
        preserveScroll: true,
        onSuccess: () => {
          emit("close");
          form.reset();
        },
        onError: () => null,
        onFinish: () => null
      });
    };
    watchEffect(() => {
      if (props.show) {
        form.errors = {};
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: props.show,
        onClose: ($event) => emit("close")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(_ctx.lang().label.add)} ${ssrInterpolate(props.title)}</h2><div class="my-6 space-y-4"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "client_name",
              value: _ctx.lang().label.name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "client_name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).client_name,
              "onUpdate:modelValue": ($event) => unref(form).client_name = $event,
              required: "",
              placeholder: _ctx.lang().placeholder.client_name,
              error: unref(form).errors.client_name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.client_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "client_id",
              value: _ctx.lang().label.client_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "client_id",
              type: "number",
              class: "mt-1 block w-full",
              modelValue: unref(form).client_id,
              "onUpdate:modelValue": ($event) => unref(form).client_id = $event,
              placeholder: _ctx.lang().placeholder.client_id,
              error: unref(form).errors.client_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.client_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "client_erp_id",
              value: _ctx.lang().label.client_erp_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "client_erp_id",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).client_erp_id,
              "onUpdate:modelValue": ($event) => unref(form).client_erp_id = $event,
              placeholder: _ctx.lang().placeholder.client_erp_id,
              error: unref(form).errors.client_erp_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.client_erp_id
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
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
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: create
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(form).processing ? _ctx.lang().button.add + "..." : _ctx.lang().button.add)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.add + "..." : _ctx.lang().button.add), 1)
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
                onSubmit: withModifiers(create, ["prevent"])
              }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, toDisplayString(_ctx.lang().label.add) + " " + toDisplayString(props.title), 1),
                createVNode("div", { class: "my-6 space-y-4" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "client_name",
                      value: _ctx.lang().label.name
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "client_name",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).client_name,
                      "onUpdate:modelValue": ($event) => unref(form).client_name = $event,
                      required: "",
                      placeholder: _ctx.lang().placeholder.client_name,
                      error: unref(form).errors.client_name
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.client_name
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "client_id",
                      value: _ctx.lang().label.client_id
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "client_id",
                      type: "number",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).client_id,
                      "onUpdate:modelValue": ($event) => unref(form).client_id = $event,
                      placeholder: _ctx.lang().placeholder.client_id,
                      error: unref(form).errors.client_id
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.client_id
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "client_erp_id",
                      value: _ctx.lang().label.client_erp_id
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "client_erp_id",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).client_erp_id,
                      "onUpdate:modelValue": ($event) => unref(form).client_erp_id = $event,
                      placeholder: _ctx.lang().placeholder.client_erp_id,
                      error: unref(form).errors.client_erp_id
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.client_erp_id
                    }, null, 8, ["message"])
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_sfc_main$5, {
                    disabled: unref(form).processing,
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_sfc_main$6, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: create
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.add + "..." : _ctx.lang().button.add), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
