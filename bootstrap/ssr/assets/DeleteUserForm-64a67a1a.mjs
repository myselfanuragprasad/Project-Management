import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, withKeys, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./DangerButton-172f14d6.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$2, a as _sfc_main$6 } from "./SecondaryButton-ee4ce9eb.mjs";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">${ssrInterpolate(_ctx.lang().profile.delete_account)}</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(_ctx.lang().profile.delete_account_caption)}</p></header>`);
      _push(ssrRenderComponent(_sfc_main$1, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.lang().button.delete_account)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.lang().button.delete_account), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(_ctx.lang().profile.delete_account_modal_title)}</h2><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.lang().profile.delete_account_modal_caption)}</p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password",
              value: _ctx.lang().label.password,
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              onKeyup: deleteUser,
              placeholder: _ctx.lang().placeholder.password,
              error: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, { onClick: closeModal }, {
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
            _push2(ssrRenderComponent(_sfc_main$1, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(form).processing ? _ctx.lang().button.delete_account + "..." : _ctx.lang().button.delete_account)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.delete_account + "..." : _ctx.lang().button.delete_account), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, toDisplayString(_ctx.lang().profile.delete_account_modal_title), 1),
                createVNode("p", { class: "mt-1 text-sm text-gray-600 dark:text-gray-400" }, toDisplayString(_ctx.lang().profile.delete_account_modal_caption), 1),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$3, {
                    for: "password",
                    value: _ctx.lang().label.password,
                    class: "sr-only"
                  }, null, 8, ["value"]),
                  createVNode(_sfc_main$4, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    onKeyup: withKeys(deleteUser, ["enter"]),
                    placeholder: _ctx.lang().placeholder.password,
                    error: unref(form).errors.password
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup", "placeholder", "error"]),
                  createVNode(_sfc_main$5, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$6, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.lang().button.close), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$1, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.delete_account + "..." : _ctx.lang().button.delete_account), 1)
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
