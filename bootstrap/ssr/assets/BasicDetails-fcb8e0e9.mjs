import { watchEffect, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuthenticatedLayout-75fcaeef.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-2c41e289.mjs";
import "lodash";
import "@heroicons/vue/24/solid";
import "./SwitchLangNavbar-dc6a22d1.mjs";
import "@vueuse/core";
import "@headlessui/vue";
const BasicDetails_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "BasicDetails",
  __ssrInlineRender: true,
  props: {
    title: String,
    breadcrumbs: Object
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const form = useForm({
      client_name: "",
      client_id: "",
      client_erp_id: "",
      client_type: "",
      client_cat: "",
      client_sec: "",
      client_inds: "",
      client_logo: "",
      client_code: "",
      parent_company: ""
    });
    const createBasicDetails = () => {
      form.post(route("client.basicdetails.store"), {
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
      _push(ssrRenderComponent(unref(Head), {
        title: props.title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: __props.title,
              breadcrumbs: __props.breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="form-container"${_scopeId}><form class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(_ctx.lang().label.add)} ${ssrInterpolate(props.title)}</h2><div class="my-6 grid gap-4 grid-cols-1 sm:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "client_id",
              value: _ctx.lang().label.client_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_id,
              "onUpdate:modelValue": ($event) => unref(form).client_id = $event,
              type: "text",
              id: "client_id",
              name: "client_id",
              placeholder: _ctx.lang().placeholder.client_id,
              error: unref(form).errors.client_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "client_name",
              value: _ctx.lang().label.client_name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_name,
              "onUpdate:modelValue": ($event) => unref(form).client_name = $event,
              type: "text",
              name: "client_name",
              id: "client_name",
              placeholder: _ctx.lang().placeholder.client_name,
              error: unref(form).errors.client_name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_name
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_logo,
              for: "client_logo"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full bg-gray-100 rounded p-2",
              modelValue: unref(form).client_logo,
              "onUpdate:modelValue": ($event) => unref(form).client_logo = $event,
              type: "file",
              name: "client_logo",
              id: "client_logo",
              error: unref(form).errors.client_logo
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_logo
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_code,
              for: "client_code"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              type: "number",
              modelValue: unref(form).client_code,
              "onUpdate:modelValue": ($event) => unref(form).client_code = $event,
              name: "client_code",
              id: "client_code",
              placeholder: _ctx.lang().placeholder.client_code,
              error: unref(form).errors.client_code
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_code
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_erp_id,
              for: "client_erp_id",
              class: "form-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_erp_id,
              "onUpdate:modelValue": ($event) => unref(form).client_erp_id = $event,
              type: "text",
              name: "client_erp_id",
              id: "client_erp_id",
              placeholder: _ctx.lang().placeholder.client_erp_id,
              error: unref(form).errors.client_erp_id
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_erp_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_cat,
              class: "form-label",
              for: "client_cat"
            }, null, _parent2, _scopeId));
            _push2(`<div class="input-group input-group-merge"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              type: "text",
              id: "client_cat",
              name: "client_cat",
              class: "form-control w-full",
              modelValue: unref(form).client_cat,
              "onUpdate:modelValue": ($event) => unref(form).client_cat = $event,
              placeholder: _ctx.lang().placeholder.client_cat,
              error: unref(form).errors.client_cat
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_cat
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_sec,
              for: "client_sec",
              class: "form-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_sec,
              "onUpdate:modelValue": ($event) => unref(form).client_sec = $event,
              type: "text",
              name: "client_sec",
              id: "client_sec",
              placeholder: _ctx.lang().placeholder.client_sec,
              error: unref(form).errors.client_sec
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_sec
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_inds,
              for: "client_inds",
              class: "form-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_inds,
              "onUpdate:modelValue": ($event) => unref(form).client_inds = $event,
              type: "text",
              name: "client_inds",
              id: "client_inds",
              placeholder: _ctx.lang().placeholder.client_inds,
              error: unref(form).errors.client_inds
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_inds
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.client_type,
              for: "client_type",
              class: "form-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).client_type,
              "onUpdate:modelValue": ($event) => unref(form).client_type = $event,
              type: "text",
              name: "client_type",
              id: "client_type",
              placeholder: _ctx.lang().placeholder.client_type,
              error: unref(form).errors.client_type
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.client_type
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              value: _ctx.lang().label.parent_company,
              for: "parent_company",
              class: "form-label"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "form-control w-full",
              modelValue: unref(form).parent_company,
              "onUpdate:modelValue": ($event) => unref(form).parent_company = $event,
              type: "text",
              name: "parent_company",
              id: "parent_company",
              placeholder: _ctx.lang().placeholder.parent_company,
              error: unref(form).errors.client_sec
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.parent_company
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: createBasicDetails
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(form).processing ? _ctx.lang().button.save + "..." : _ctx.lang().button.save)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.save + "..." : _ctx.lang().button.save), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: __props.title,
                breadcrumbs: __props.breadcrumbs
              }, null, 8, ["title", "breadcrumbs"]),
              createVNode("div", { class: "form-container" }, [
                createVNode("form", {
                  class: "p-6",
                  onSubmit: withModifiers(createBasicDetails, ["prevent"])
                }, [
                  createVNode("h2", { class: "text-lg font-medium text-gray-900 dark:text-gray-100" }, toDisplayString(_ctx.lang().label.add) + " " + toDisplayString(props.title), 1),
                  createVNode("div", { class: "my-6 grid gap-4 grid-cols-1 sm:grid-cols-2" }, [
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        for: "client_id",
                        value: _ctx.lang().label.client_id
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_id,
                        "onUpdate:modelValue": ($event) => unref(form).client_id = $event,
                        type: "text",
                        id: "client_id",
                        name: "client_id",
                        placeholder: _ctx.lang().placeholder.client_id,
                        error: unref(form).errors.client_id
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_id
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        for: "client_name",
                        value: _ctx.lang().label.client_name
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_name,
                        "onUpdate:modelValue": ($event) => unref(form).client_name = $event,
                        type: "text",
                        name: "client_name",
                        id: "client_name",
                        placeholder: _ctx.lang().placeholder.client_name,
                        error: unref(form).errors.client_name
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_name
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_logo,
                        for: "client_logo"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full bg-gray-100 rounded p-2",
                        modelValue: unref(form).client_logo,
                        "onUpdate:modelValue": ($event) => unref(form).client_logo = $event,
                        type: "file",
                        name: "client_logo",
                        id: "client_logo",
                        error: unref(form).errors.client_logo
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_logo
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_code,
                        for: "client_code"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        type: "number",
                        modelValue: unref(form).client_code,
                        "onUpdate:modelValue": ($event) => unref(form).client_code = $event,
                        name: "client_code",
                        id: "client_code",
                        placeholder: _ctx.lang().placeholder.client_code,
                        error: unref(form).errors.client_code
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_code
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_erp_id,
                        for: "client_erp_id",
                        class: "form-label"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_erp_id,
                        "onUpdate:modelValue": ($event) => unref(form).client_erp_id = $event,
                        type: "text",
                        name: "client_erp_id",
                        id: "client_erp_id",
                        placeholder: _ctx.lang().placeholder.client_erp_id,
                        error: unref(form).errors.client_erp_id
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_erp_id
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_cat,
                        class: "form-label",
                        for: "client_cat"
                      }, null, 8, ["value"]),
                      createVNode("div", { class: "input-group input-group-merge" }, [
                        createVNode(_sfc_main$4, {
                          type: "text",
                          id: "client_cat",
                          name: "client_cat",
                          class: "form-control w-full",
                          modelValue: unref(form).client_cat,
                          "onUpdate:modelValue": ($event) => unref(form).client_cat = $event,
                          placeholder: _ctx.lang().placeholder.client_cat,
                          error: unref(form).errors.client_cat
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                        createVNode(_sfc_main$5, {
                          class: "mt-2",
                          message: unref(form).errors.client_cat
                        }, null, 8, ["message"])
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_sec,
                        for: "client_sec",
                        class: "form-label"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_sec,
                        "onUpdate:modelValue": ($event) => unref(form).client_sec = $event,
                        type: "text",
                        name: "client_sec",
                        id: "client_sec",
                        placeholder: _ctx.lang().placeholder.client_sec,
                        error: unref(form).errors.client_sec
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_sec
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_inds,
                        for: "client_inds",
                        class: "form-label"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_inds,
                        "onUpdate:modelValue": ($event) => unref(form).client_inds = $event,
                        type: "text",
                        name: "client_inds",
                        id: "client_inds",
                        placeholder: _ctx.lang().placeholder.client_inds,
                        error: unref(form).errors.client_inds
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_inds
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.client_type,
                        for: "client_type",
                        class: "form-label"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).client_type,
                        "onUpdate:modelValue": ($event) => unref(form).client_type = $event,
                        type: "text",
                        name: "client_type",
                        id: "client_type",
                        placeholder: _ctx.lang().placeholder.client_type,
                        error: unref(form).errors.client_type
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.client_type
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        value: _ctx.lang().label.parent_company,
                        for: "parent_company",
                        class: "form-label"
                      }, null, 8, ["value"]),
                      createVNode(_sfc_main$4, {
                        class: "form-control w-full",
                        modelValue: unref(form).parent_company,
                        "onUpdate:modelValue": ($event) => unref(form).parent_company = $event,
                        type: "text",
                        name: "parent_company",
                        id: "parent_company",
                        placeholder: _ctx.lang().placeholder.parent_company,
                        error: unref(form).errors.client_sec
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "error"]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.parent_company
                      }, null, 8, ["message"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_sfc_main$6, {
                      class: ["ml-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: createBasicDetails
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(form).processing ? _ctx.lang().button.save + "..." : _ctx.lang().button.save), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Client/BasicDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
