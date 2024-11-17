import { withCtx, createVNode, unref, createTextVNode, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuntheticationIllustration-2ce04c83.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-2c41e289.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import "./SwitchLangNavbar-dc6a22d1.mjs";
import "./SwitchDarkMode-80e1266e.mjs";
import "@heroicons/vue/24/solid";
import "@vueuse/core";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        illustration: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              type: "login",
              class: "w-72 h-auto"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                type: "login",
                class: "w-72 h-auto"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: _ctx.lang().label.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.lang().label.confirm_password)}</div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password",
              value: _ctx.lang().label.password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: "",
              placeholder: _ctx.lang().placeholder.password,
              error: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(form).processing ? _ctx.lang().button.confirm_password + "..." : _ctx.lang().button.confirm_password)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.confirm_password + "..." : _ctx.lang().button.confirm_password), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), {
                title: _ctx.lang().label.password_confirmation
              }, null, 8, ["title"]),
              createVNode("div", { class: "mb-4 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(_ctx.lang().label.confirm_password), 1),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$3, {
                    for: "password",
                    value: _ctx.lang().label.password
                  }, null, 8, ["value"]),
                  createVNode(_sfc_main$4, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: "",
                    placeholder: _ctx.lang().placeholder.password,
                    error: unref(form).errors.password
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_sfc_main$6, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.confirm_password + "..." : _ctx.lang().button.confirm_password), 1)
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
