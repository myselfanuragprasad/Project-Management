import { reactive, watch, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode, withDirectives, vShow, openBlock, createBlock, Fragment, renderList, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttrs } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuthenticatedLayout-75fcaeef.mjs";
import { usePage, router, Head } from "@inertiajs/vue3";
import { a as _sfc_main$b } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$3 } from "./PrimaryButton-2c41e289.mjs";
import { _ as _sfc_main$d, a as _sfc_main$e } from "./Pagination-9696935c.mjs";
import { _ as _sfc_main$9 } from "./SelectInput-d8b73601.mjs";
import { _ as _sfc_main$a } from "./DangerButton-172f14d6.mjs";
import pkg from "lodash";
import { TrashIcon, ChevronUpDownIcon, PencilIcon } from "@heroicons/vue/24/solid";
import _sfc_main$4 from "./Create-6525897d.mjs";
import _sfc_main$5 from "./Edit-69fc2603.mjs";
import _sfc_main$6 from "./Delete-c532dc4f.mjs";
import _sfc_main$7 from "./DeleteBulk-2a4346f6.mjs";
import { _ as _sfc_main$c } from "./Checkbox-d02a6e0f.mjs";
import _sfc_main$8 from "./Permission-75c7b88e.mjs";
import "./SwitchLangNavbar-dc6a22d1.mjs";
import "@vueuse/core";
import "@headlessui/vue";
import "./SecondaryButton-ee4ce9eb.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    title: String,
    filters: Object,
    roles: Object,
    permissions: Object,
    breadcrumbs: Object,
    perPage: Number
  },
  setup(__props) {
    const props = __props;
    const { _, debounce, pickBy } = pkg;
    const data = reactive({
      params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        perPage: props.perPage
      },
      selectedId: [],
      multipleSelect: false,
      createOpen: false,
      editOpen: false,
      deleteOpen: false,
      deleteBulkOpen: false,
      permissionOpen: false,
      role: null,
      dataSet: usePage().props.app.perpage
    });
    const order = (field) => {
      data.params.field = field;
      data.params.order = data.params.order === "asc" ? "desc" : "asc";
    };
    watch(() => _.cloneDeep(data.params), debounce(() => {
      let params = pickBy(data.params);
      router.get(route("role.index"), params, {
        replace: true,
        preserveState: true,
        preserveScroll: true
      });
    }, 150));
    const selectAll = (event) => {
      var _a;
      if (event.target.checked === false) {
        data.selectedId = [];
      } else {
        (_a = props.roles) == null ? void 0 : _a.data.forEach((role) => {
          data.selectedId.push(role.id);
        });
      }
    };
    const select = () => {
      var _a;
      if (((_a = props.roles) == null ? void 0 : _a.data.length) == data.selectedId.length) {
        data.multipleSelect = true;
      } else {
        data.multipleSelect = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: props.title
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: __props.title,
              breadcrumbs: __props.breadcrumbs
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}><div class="px-4 sm:px-0"${_scopeId}><div class="rounded-lg overflow-hidden w-fit"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              style: _ctx.can(["create role"]) ? null : { display: "none" },
              class: "rounded-none",
              onClick: ($event) => data.createOpen = true
            }, {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.lang().button.add)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.lang().button.add), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              show: data.createOpen,
              onClose: ($event) => data.createOpen = false,
              permissions: props.permissions,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: data.editOpen,
              onClose: ($event) => data.editOpen = false,
              role: data.role,
              permissions: props.permissions,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              show: data.deleteOpen,
              onClose: ($event) => data.deleteOpen = false,
              role: data.role,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              show: data.deleteBulkOpen,
              onClose: ($event) => (data.deleteBulkOpen = false, data.multipleSelect = false, data.selectedId = []),
              selectedId: data.selectedId,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              show: data.permissionOpen,
              onClose: ($event) => data.permissionOpen = false,
              role: data.role,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}><div class="flex justify-between p-2"${_scopeId}><div class="flex space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              modelValue: data.params.perPage,
              "onUpdate:modelValue": ($event) => data.params.perPage = $event,
              dataSet: data.dataSet
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, mergeProps({
              onClick: ($event) => data.deleteBulkOpen = true,
              style: data.selectedId.length != 0 && _ctx.can(["delete role"]) ? null : { display: "none" },
              class: "px-3 py-1.5"
            }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.delete_selected)), {
              default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TrashIcon), { class: "w-5 h-5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              modelValue: data.params.search,
              "onUpdate:modelValue": ($event) => data.params.search = $event,
              type: "text",
              class: "block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",
              placeholder: _ctx.lang().placeholder.search
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto scrollbar-table"${_scopeId}><table class="w-full"${_scopeId}><thead class="uppercase text-sm border-t border-gray-200 dark:border-gray-700"${_scopeId}><tr class="dark:bg-gray-900/50 text-left"${_scopeId}><th class="px-2 py-4 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$c, {
              checked: data.multipleSelect,
              "onUpdate:checked": ($event) => data.multipleSelect = $event,
              onChange: selectAll
            }, null, _parent2, _scopeId));
            _push2(`</th><th class="px-2 py-4 text-center"${_scopeId}>#</th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.name)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>Guard</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4"${_scopeId}>${ssrInterpolate(_ctx.lang().label.permission)}</th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.created)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.updated)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 sr-only"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.roles.data, (role, index) => {
              _push2(`<tr class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"${_scopeId}><td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"${_scopeId}><input class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary" type="checkbox"${ssrRenderAttr("value", role.id)}${ssrIncludeBooleanAttr(Array.isArray(data.selectedId) ? ssrLooseContain(data.selectedId, role.id) : data.selectedId) ? " checked" : ""}${_scopeId}></td><td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"${_scopeId}>${ssrInterpolate(++index)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(role.name)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(role.guard_name)}</td>`);
              if (role.permissions.length == props.permissions.length) {
                _push2(`<td${ssrRenderAttrs(mergeProps({ class: "whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.detail)))}${_scopeId}>${ssrInterpolate(_ctx.lang().label.all_permission)}</td>`);
              } else if (role.permissions.length != 0) {
                _push2(`<td${ssrRenderAttrs(mergeProps({ class: "whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.detail)))}${_scopeId}>${ssrInterpolate(role.permissions.length)} ${ssrInterpolate(_ctx.lang().label.permission)}</td>`);
              } else {
                _push2(`<td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(_ctx.lang().label.no_permission)}</td>`);
              }
              _push2(`<td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(role.created_at)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(role.updated_at)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><div class="rounded-md overflow-hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$d, mergeProps({
                style: _ctx.can(["update role"]) ? null : { display: "none" },
                type: "button",
                onClick: ($event) => (data.editOpen = true, data.role = role),
                class: "px-2 py-1.5 rounded-none"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.edit)), {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(PencilIcon), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$a, mergeProps({
                style: _ctx.can(["delete role"]) ? null : { display: "none" },
                type: "button",
                onClick: ($event) => (data.deleteOpen = true, data.role = role),
                class: "px-2 py-1.5 rounded-none"
              }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.delete)), {
                default: withCtx((_3, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TrashIcon), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div><div class="flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$e, {
              links: props.roles,
              filters: data.params
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: __props.title,
                breadcrumbs: __props.breadcrumbs
              }, null, 8, ["title", "breadcrumbs"]),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "px-4 sm:px-0" }, [
                  createVNode("div", { class: "rounded-lg overflow-hidden w-fit" }, [
                    withDirectives(createVNode(_sfc_main$3, {
                      class: "rounded-none",
                      onClick: ($event) => data.createOpen = true
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.lang().button.add), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]), [
                      [vShow, _ctx.can(["create role"])]
                    ]),
                    createVNode(_sfc_main$4, {
                      show: data.createOpen,
                      onClose: ($event) => data.createOpen = false,
                      permissions: props.permissions,
                      title: props.title
                    }, null, 8, ["show", "onClose", "permissions", "title"]),
                    createVNode(_sfc_main$5, {
                      show: data.editOpen,
                      onClose: ($event) => data.editOpen = false,
                      role: data.role,
                      permissions: props.permissions,
                      title: props.title
                    }, null, 8, ["show", "onClose", "role", "permissions", "title"]),
                    createVNode(_sfc_main$6, {
                      show: data.deleteOpen,
                      onClose: ($event) => data.deleteOpen = false,
                      role: data.role,
                      title: props.title
                    }, null, 8, ["show", "onClose", "role", "title"]),
                    createVNode(_sfc_main$7, {
                      show: data.deleteBulkOpen,
                      onClose: ($event) => (data.deleteBulkOpen = false, data.multipleSelect = false, data.selectedId = []),
                      selectedId: data.selectedId,
                      title: props.title
                    }, null, 8, ["show", "onClose", "selectedId", "title"]),
                    createVNode(_sfc_main$8, {
                      show: data.permissionOpen,
                      onClose: ($event) => data.permissionOpen = false,
                      role: data.role,
                      title: props.title
                    }, null, 8, ["show", "onClose", "role", "title"])
                  ])
                ]),
                createVNode("div", { class: "relative bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                  createVNode("div", { class: "flex justify-between p-2" }, [
                    createVNode("div", { class: "flex space-x-2" }, [
                      createVNode(_sfc_main$9, {
                        modelValue: data.params.perPage,
                        "onUpdate:modelValue": ($event) => data.params.perPage = $event,
                        dataSet: data.dataSet
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "dataSet"]),
                      withDirectives((openBlock(), createBlock(_sfc_main$a, {
                        onClick: ($event) => data.deleteBulkOpen = true,
                        class: "px-3 py-1.5"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TrashIcon), { class: "w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])), [
                        [vShow, data.selectedId.length != 0 && _ctx.can(["delete role"])],
                        [_directive_tooltip, _ctx.lang().tooltip.delete_selected]
                      ])
                    ]),
                    createVNode(_sfc_main$b, {
                      modelValue: data.params.search,
                      "onUpdate:modelValue": ($event) => data.params.search = $event,
                      type: "text",
                      class: "block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",
                      placeholder: _ctx.lang().placeholder.search
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  createVNode("div", { class: "overflow-x-auto scrollbar-table" }, [
                    createVNode("table", { class: "w-full" }, [
                      createVNode("thead", { class: "uppercase text-sm border-t border-gray-200 dark:border-gray-700" }, [
                        createVNode("tr", { class: "dark:bg-gray-900/50 text-left" }, [
                          createVNode("th", { class: "px-2 py-4 text-center" }, [
                            createVNode(_sfc_main$c, {
                              checked: data.multipleSelect,
                              "onUpdate:checked": ($event) => data.multipleSelect = $event,
                              onChange: selectAll
                            }, null, 8, ["checked", "onUpdate:checked"])
                          ]),
                          createVNode("th", { class: "px-2 py-4 text-center" }, "#"),
                          createVNode("th", {
                            class: "px-2 py-4 cursor-pointer",
                            onClick: ($event) => order("name")
                          }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("span", null, toDisplayString(_ctx.lang().label.name), 1),
                              createVNode(unref(ChevronUpDownIcon), { class: "w-4 h-4" })
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            class: "px-2 py-4 cursor-pointer",
                            onClick: ($event) => order("email")
                          }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("span", null, "Guard"),
                              createVNode(unref(ChevronUpDownIcon), { class: "w-4 h-4" })
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "px-2 py-4" }, toDisplayString(_ctx.lang().label.permission), 1),
                          createVNode("th", {
                            class: "px-2 py-4 cursor-pointer",
                            onClick: ($event) => order("created_at")
                          }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("span", null, toDisplayString(_ctx.lang().label.created), 1),
                              createVNode(unref(ChevronUpDownIcon), { class: "w-4 h-4" })
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", {
                            class: "px-2 py-4 cursor-pointer",
                            onClick: ($event) => order("updated_at")
                          }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("span", null, toDisplayString(_ctx.lang().label.updated), 1),
                              createVNode(unref(ChevronUpDownIcon), { class: "w-4 h-4" })
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "px-2 py-4 sr-only" }, "Action")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.roles.data, (role, index) => {
                          return openBlock(), createBlock("tr", {
                            key: index,
                            class: "border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"
                          }, [
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" }, [
                              withDirectives(createVNode("input", {
                                class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",
                                type: "checkbox",
                                onChange: select,
                                value: role.id,
                                "onUpdate:modelValue": ($event) => data.selectedId = $event
                              }, null, 40, ["value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, data.selectedId]
                              ])
                            ]),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" }, toDisplayString(++index), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(role.name), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(role.guard_name), 1),
                            role.permissions.length == props.permissions.length ? withDirectives((openBlock(), createBlock("td", {
                              key: 0,
                              onClick: ($event) => (data.permissionOpen = true, data.role = role),
                              class: "whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"
                            }, [
                              createTextVNode(toDisplayString(_ctx.lang().label.all_permission), 1)
                            ], 8, ["onClick"])), [
                              [_directive_tooltip, _ctx.lang().tooltip.detail]
                            ]) : role.permissions.length != 0 ? withDirectives((openBlock(), createBlock("td", {
                              key: 1,
                              onClick: ($event) => (data.permissionOpen = true, data.role = role),
                              class: "whitespace-nowrap py-4 px-2 sm:py-3 cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"
                            }, [
                              createTextVNode(toDisplayString(role.permissions.length) + " " + toDisplayString(_ctx.lang().label.permission), 1)
                            ], 8, ["onClick"])), [
                              [_directive_tooltip, _ctx.lang().tooltip.detail]
                            ]) : (openBlock(), createBlock("td", {
                              key: 2,
                              class: "whitespace-nowrap py-4 px-2 sm:py-3"
                            }, toDisplayString(_ctx.lang().label.no_permission), 1)),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(role.created_at), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(role.updated_at), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, [
                              createVNode("div", { class: "flex justify-center items-center" }, [
                                createVNode("div", { class: "rounded-md overflow-hidden" }, [
                                  withDirectives((openBlock(), createBlock(_sfc_main$d, {
                                    type: "button",
                                    onClick: ($event) => (data.editOpen = true, data.role = role),
                                    class: "px-2 py-1.5 rounded-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [vShow, _ctx.can(["update role"])],
                                    [_directive_tooltip, _ctx.lang().tooltip.edit]
                                  ]),
                                  withDirectives((openBlock(), createBlock(_sfc_main$a, {
                                    type: "button",
                                    onClick: ($event) => (data.deleteOpen = true, data.role = role),
                                    class: "px-2 py-1.5 rounded-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [vShow, _ctx.can(["delete role"])],
                                    [_directive_tooltip, _ctx.lang().tooltip.delete]
                                  ])
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700" }, [
                    createVNode(_sfc_main$e, {
                      links: props.roles,
                      filters: data.params
                    }, null, 8, ["links", "filters"])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Role/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
