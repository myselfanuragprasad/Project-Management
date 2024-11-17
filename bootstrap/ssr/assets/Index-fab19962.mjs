import { reactive, watch, resolveDirective, unref, withCtx, createTextVNode, toDisplayString, mergeProps, createVNode, withDirectives, vShow, openBlock, createBlock, Fragment, renderList, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuthenticatedLayout-75fcaeef.mjs";
import { usePage, router, Head } from "@inertiajs/vue3";
import { a as _sfc_main$a } from "./TextInput-640fd3c8.mjs";
import { _ as _sfc_main$3 } from "./PrimaryButton-2c41e289.mjs";
import { _ as _sfc_main$c, a as _sfc_main$d } from "./Pagination-9696935c.mjs";
import { _ as _sfc_main$8 } from "./SelectInput-d8b73601.mjs";
import { _ as _sfc_main$9 } from "./DangerButton-172f14d6.mjs";
import pkg from "lodash";
import { TrashIcon, ChevronUpDownIcon, CheckBadgeIcon, PencilIcon } from "@heroicons/vue/24/solid";
import _sfc_main$4 from "./Create-09ec6527.mjs";
import _sfc_main$5 from "./Edit-44f6fc05.mjs";
import _sfc_main$6 from "./Delete-6697b4e1.mjs";
import _sfc_main$7 from "./DeleteBulk-245dd951.mjs";
import { _ as _sfc_main$b } from "./Checkbox-d02a6e0f.mjs";
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
    users: Object,
    roles: Object,
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
      user: null,
      dataSet: usePage().props.app.perpage
    });
    const order = (field) => {
      data.params.field = field;
      data.params.order = data.params.order === "asc" ? "desc" : "asc";
    };
    watch(() => _.cloneDeep(data.params), debounce(() => {
      let params = pickBy(data.params);
      router.get(route("user.index"), params, {
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
        (_a = props.users) == null ? void 0 : _a.data.forEach((user) => {
          data.selectedId.push(user.id);
        });
      }
    };
    const select = () => {
      var _a;
      if (((_a = props.users) == null ? void 0 : _a.data.length) == data.selectedId.length) {
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
              style: _ctx.can(["create user"]) ? null : { display: "none" },
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
              roles: props.roles,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: data.editOpen,
              onClose: ($event) => data.editOpen = false,
              user: data.user,
              roles: props.roles,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              show: data.deleteOpen,
              onClose: ($event) => data.deleteOpen = false,
              user: data.user,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              show: data.deleteBulkOpen,
              onClose: ($event) => (data.deleteBulkOpen = false, data.multipleSelect = false, data.selectedId = []),
              selectedId: data.selectedId,
              title: props.title
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"${_scopeId}><div class="flex justify-between p-2"${_scopeId}><div class="flex space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              modelValue: data.params.perPage,
              "onUpdate:modelValue": ($event) => data.params.perPage = $event,
              dataSet: data.dataSet
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, mergeProps({
              onClick: ($event) => data.deleteBulkOpen = true,
              style: data.selectedId.length != 0 && _ctx.can(["delete user"]) ? null : { display: "none" },
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
            _push2(ssrRenderComponent(_sfc_main$a, {
              modelValue: data.params.search,
              "onUpdate:modelValue": ($event) => data.params.search = $event,
              type: "text",
              class: "block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",
              placeholder: _ctx.lang().placeholder.search
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto scrollbar-table"${_scopeId}><table class="w-full"${_scopeId}><thead class="uppercase text-sm border-t border-gray-200 dark:border-gray-700"${_scopeId}><tr class="dark:bg-gray-900/50 text-left"${_scopeId}><th class="px-2 py-4 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$b, {
              checked: data.multipleSelect,
              "onUpdate:checked": ($event) => data.multipleSelect = $event,
              onChange: selectAll
            }, null, _parent2, _scopeId));
            _push2(`</th><th class="px-2 py-4 text-center"${_scopeId}>#</th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.name)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.email)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4"${_scopeId}>${ssrInterpolate(_ctx.lang().label.role)}</th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.created)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 cursor-pointer"${_scopeId}><div class="flex justify-between items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(_ctx.lang().label.updated)}</span>`);
            _push2(ssrRenderComponent(unref(ChevronUpDownIcon), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(`</div></th><th class="px-2 py-4 sr-only"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.users.data, (user, index) => {
              _push2(`<tr class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"${_scopeId}><td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"${_scopeId}><input class="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary" type="checkbox"${ssrRenderAttr("value", user.id)}${ssrIncludeBooleanAttr(Array.isArray(data.selectedId) ? ssrLooseContain(data.selectedId, user.id) : data.selectedId) ? " checked" : ""}${_scopeId}></td><td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center"${_scopeId}>${ssrInterpolate(++index)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}><span class="flex justify-start items-center"${_scopeId}>${ssrInterpolate(user.name)} `);
              _push2(ssrRenderComponent(unref(CheckBadgeIcon), {
                class: "ml-[2px] w-4 h-4 text-primary dark:text-white",
                style: user.email_verified_at ? null : { display: "none" }
              }, null, _parent2, _scopeId));
              _push2(`</span></td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(user.email)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(user.roles.length == 0 ? "not selected" : user.roles[0].name)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(user.created_at)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}>${ssrInterpolate(user.updated_at)}</td><td class="whitespace-nowrap py-4 px-2 sm:py-3"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><div class="rounded-md overflow-hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$c, mergeProps({
                style: _ctx.can(["update user"]) ? null : { display: "none" },
                type: "button",
                onClick: ($event) => (data.editOpen = true, data.user = user),
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
              _push2(ssrRenderComponent(_sfc_main$9, mergeProps({
                style: _ctx.can(["delete user"]) ? null : { display: "none" },
                type: "button",
                onClick: ($event) => (data.deleteOpen = true, data.user = user),
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
            _push2(ssrRenderComponent(_sfc_main$d, {
              links: props.users,
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
                      [vShow, _ctx.can(["create user"])]
                    ]),
                    createVNode(_sfc_main$4, {
                      show: data.createOpen,
                      onClose: ($event) => data.createOpen = false,
                      roles: props.roles,
                      title: props.title
                    }, null, 8, ["show", "onClose", "roles", "title"]),
                    createVNode(_sfc_main$5, {
                      show: data.editOpen,
                      onClose: ($event) => data.editOpen = false,
                      user: data.user,
                      roles: props.roles,
                      title: props.title
                    }, null, 8, ["show", "onClose", "user", "roles", "title"]),
                    createVNode(_sfc_main$6, {
                      show: data.deleteOpen,
                      onClose: ($event) => data.deleteOpen = false,
                      user: data.user,
                      title: props.title
                    }, null, 8, ["show", "onClose", "user", "title"]),
                    createVNode(_sfc_main$7, {
                      show: data.deleteBulkOpen,
                      onClose: ($event) => (data.deleteBulkOpen = false, data.multipleSelect = false, data.selectedId = []),
                      selectedId: data.selectedId,
                      title: props.title
                    }, null, 8, ["show", "onClose", "selectedId", "title"])
                  ])
                ]),
                createVNode("div", { class: "relative bg-white dark:bg-gray-800 shadow sm:rounded-lg" }, [
                  createVNode("div", { class: "flex justify-between p-2" }, [
                    createVNode("div", { class: "flex space-x-2" }, [
                      createVNode(_sfc_main$8, {
                        modelValue: data.params.perPage,
                        "onUpdate:modelValue": ($event) => data.params.perPage = $event,
                        dataSet: data.dataSet
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "dataSet"]),
                      withDirectives((openBlock(), createBlock(_sfc_main$9, {
                        onClick: ($event) => data.deleteBulkOpen = true,
                        class: "px-3 py-1.5"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(TrashIcon), { class: "w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])), [
                        [vShow, data.selectedId.length != 0 && _ctx.can(["delete user"])],
                        [_directive_tooltip, _ctx.lang().tooltip.delete_selected]
                      ])
                    ]),
                    createVNode(_sfc_main$a, {
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
                            createVNode(_sfc_main$b, {
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
                              createVNode("span", null, toDisplayString(_ctx.lang().label.email), 1),
                              createVNode(unref(ChevronUpDownIcon), { class: "w-4 h-4" })
                            ])
                          ], 8, ["onClick"]),
                          createVNode("th", { class: "px-2 py-4" }, toDisplayString(_ctx.lang().label.role), 1),
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
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.users.data, (user, index) => {
                          return openBlock(), createBlock("tr", {
                            key: index,
                            class: "border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"
                          }, [
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" }, [
                              withDirectives(createVNode("input", {
                                class: "rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",
                                type: "checkbox",
                                onChange: select,
                                value: user.id,
                                "onUpdate:modelValue": ($event) => data.selectedId = $event
                              }, null, 40, ["value", "onUpdate:modelValue"]), [
                                [vModelCheckbox, data.selectedId]
                              ])
                            ]),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" }, toDisplayString(++index), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, [
                              createVNode("span", { class: "flex justify-start items-center" }, [
                                createTextVNode(toDisplayString(user.name) + " ", 1),
                                withDirectives(createVNode(unref(CheckBadgeIcon), { class: "ml-[2px] w-4 h-4 text-primary dark:text-white" }, null, 512), [
                                  [vShow, user.email_verified_at]
                                ])
                              ])
                            ]),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(user.email), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(user.roles.length == 0 ? "not selected" : user.roles[0].name), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(user.created_at), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, toDisplayString(user.updated_at), 1),
                            createVNode("td", { class: "whitespace-nowrap py-4 px-2 sm:py-3" }, [
                              createVNode("div", { class: "flex justify-center items-center" }, [
                                createVNode("div", { class: "rounded-md overflow-hidden" }, [
                                  withDirectives((openBlock(), createBlock(_sfc_main$c, {
                                    type: "button",
                                    onClick: ($event) => (data.editOpen = true, data.user = user),
                                    class: "px-2 py-1.5 rounded-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(PencilIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [vShow, _ctx.can(["update user"])],
                                    [_directive_tooltip, _ctx.lang().tooltip.edit]
                                  ]),
                                  withDirectives((openBlock(), createBlock(_sfc_main$9, {
                                    type: "button",
                                    onClick: ($event) => (data.deleteOpen = true, data.user = user),
                                    class: "px-2 py-1.5 rounded-none"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(TrashIcon), { class: "w-4 h-4" })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [vShow, _ctx.can(["delete user"])],
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
                    createVNode(_sfc_main$d, {
                      links: props.users,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
