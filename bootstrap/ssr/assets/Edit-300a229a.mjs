import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuthenticatedLayout-75fcaeef.mjs";
import _sfc_main$5 from "./DeleteUserForm-64a67a1a.mjs";
import _sfc_main$4 from "./UpdatePasswordForm-eeeb9862.mjs";
import _sfc_main$3 from "./UpdateProfileInformationForm-925d48b3.mjs";
import { Head } from "@inertiajs/vue3";
import "@heroicons/vue/24/solid";
import "./SwitchLangNavbar-dc6a22d1.mjs";
import "@vueuse/core";
import "@headlessui/vue";
import "./DangerButton-172f14d6.mjs";
import "./TextInput-640fd3c8.mjs";
import "./SecondaryButton-ee4ce9eb.mjs";
import "./PrimaryButton-2c41e289.mjs";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: Boolean,
    status: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.lang().label.profile
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Profile",
              breadcrumbs: []
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Profile",
                breadcrumbs: []
              }),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                  createVNode(_sfc_main$3, {
                    "must-verify-email": __props.mustVerifyEmail,
                    status: __props.status,
                    class: "max-w-xl"
                  }, null, 8, ["must-verify-email", "status"])
                ]),
                createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                  createVNode(_sfc_main$4, { class: "max-w-xl" })
                ]),
                createVNode("div", { class: "p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                  createVNode(_sfc_main$5, { class: "max-w-xl" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
