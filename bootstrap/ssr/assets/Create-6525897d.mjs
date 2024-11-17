import { reactive, watchEffect, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./SecondaryButton-ee4ce9eb.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-2c41e289.mjs";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./Checkbox-d02a6e0f.mjs";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    show: Boolean,
    title: String,
    permissions: Object
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const data = reactive({
      multipleSelect: false
    });
    const form = useForm({
      name: "",
      guard_name: "web",
      permissions: []
    });
    const create = () => {
      form.post(route("role.store"), {
        preserveScroll: true,
        onSuccess: () => {
          emit("close");
          form.reset();
          data.multipleSelect = false;
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
    const selectAll = (event) => {
      if (event.target.checked === false) {
        form.permissions = [];
      } else {
        form.permissions = [];
        props.permissions.forEach((permission) => {
          form.permissions.push(permission.id);
        });
      }
    };
    const select = () => {
      if (props.permissions.length == form.permissions.length) {
        data.multipleSelect = true;
      } else {
        data.multipleSelect = false;
      }
    };
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
              value: _ctx.lang().label.role
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
              value: _ctx.lang().label.permission
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.permissions
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex justify-start items-center space-x-2 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "permission-all",
              checked: data.multipleSelect,
              "onUpdate:checked": ($event) => data.multipleSelect = $event,
              onChange: selectAll
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "permission-all",
              value: _ctx.lang().label.check_all
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"${_scopeId}><!--[-->`);
            ssrRenderList(props.permissions, (permission, index) => {
              _push2(`<div class="flex items-center justify-start space-x-2"${_scopeId}><input class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary" type="checkbox"${ssrRenderAttr("id", "permission_" + permission.id)}${ssrRenderAttr("value", permission.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).permissions) ? ssrLooseContain(unref(form).permissions, permission.id) : unref(form).permissions) ? " checked" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "permission_" + permission.id,
                value: permission.name
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div><div class="flex justify-end"${_scopeId}>`);
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
                      value: _ctx.lang().label.role
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
                      value: _ctx.lang().label.permission
                    }, null, 8, ["value"]),
                    createVNode(_sfc_main$4, {
                      class: "mt-2",
                      message: unref(form).errors.permissions
                    }, null, 8, ["message"]),
                    createVNode("div", { class: "flex justify-start items-center space-x-2 mt-2" }, [
                      createVNode(_sfc_main$5, {
                        id: "permission-all",
                        checked: data.multipleSelect,
                        "onUpdate:checked": ($event) => data.multipleSelect = $event,
                        onChange: selectAll
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(_sfc_main$2, {
                        for: "permission-all",
                        value: _ctx.lang().label.check_all
                      }, null, 8, ["value"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(props.permissions, (permission, index) => {
                        return openBlock(), createBlock("div", {
                          class: "flex items-center justify-start space-x-2",
                          key: index
                        }, [
                          withDirectives(createVNode("input", {
                            onChange: select,
                            class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",
                            type: "checkbox",
                            id: "permission_" + permission.id,
                            value: permission.id,
                            "onUpdate:modelValue": ($event) => unref(form).permissions = $event
                          }, null, 40, ["id", "value", "onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).permissions]
                          ]),
                          createVNode(_sfc_main$2, {
                            for: "permission_" + permission.id,
                            value: permission.name
                          }, null, 8, ["for", "value"])
                        ]);
                      }), 128))
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Role/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
