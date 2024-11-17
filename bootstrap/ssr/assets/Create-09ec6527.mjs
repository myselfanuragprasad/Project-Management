import { watchEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./SecondaryButton-ee4ce9eb.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-2c41e289.mjs";
import { _ as _sfc_main$5 } from "./SelectInput-d8b73601.mjs";
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
    var _a;
    const props = __props;
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "admin"
    });
    const create = () => {
      form.post(route("user.store"), {
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
    const roles = (_a = props.roles) == null ? void 0 : _a.map((role) => ({ label: role.name, value: role.name }));
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
              for: "name",
              value: _ctx.lang().label.name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              placeholder: _ctx.lang().placeholder.name,
              error: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: _ctx.lang().label.email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              placeholder: _ctx.lang().placeholder.email,
              error: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: _ctx.lang().label.password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              placeholder: _ctx.lang().placeholder.password,
              error: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: _ctx.lang().label.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              placeholder: _ctx.lang().placeholder.password_confirmation,
              error: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "role",
              value: _ctx.lang().label.role
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "role",
              class: "mt-1 block w-full",
              modelValue: unref(form).role,
              "onUpdate:modelValue": ($event) => unref(form).role = $event,
              required: "",
              dataSet: unref(roles)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.role
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$7, {
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
                      for: "name",
                      value: _ctx.lang().label.name
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "name",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      placeholder: _ctx.lang().placeholder.name,
                      error: unref(form).errors.name
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "email",
                      value: _ctx.lang().label.email
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      placeholder: _ctx.lang().placeholder.email,
                      error: unref(form).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "password",
                      value: _ctx.lang().label.password
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      placeholder: _ctx.lang().placeholder.password,
                      error: unref(form).errors.password
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "password_confirmation",
                      value: _ctx.lang().label.password_confirmation
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$3, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      placeholder: _ctx.lang().placeholder.password_confirmation,
                      error: unref(form).errors.password_confirmation
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.password_confirmation
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$2, {
                      for: "role",
                      value: _ctx.lang().label.role
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$5, {
                      id: "role",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).role,
                      "onUpdate:modelValue": ($event) => unref(form).role = $event,
                      required: "",
                      dataSet: unref(roles)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "dataSet"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.role
                    }, null, 8, ["message"])
                  ])
                ]),
                createVNode("div", { class: "flex justify-end" }, [
                  createVNode(_sfc_main$6, {
                    disabled: unref(form).processing,
                    onClick: ($event) => emit("close")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"]),
                  createVNode(_sfc_main$7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
