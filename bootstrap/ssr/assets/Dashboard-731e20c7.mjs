import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./AuthenticatedLayout-75fcaeef.mjs";
import { UserIcon, ChevronRightIcon, KeyIcon, ShieldCheckIcon } from "@heroicons/vue/24/solid";
import { Head, Link } from "@inertiajs/vue3";
import "./SwitchLangNavbar-dc6a22d1.mjs";
import "@vueuse/core";
import "@headlessui/vue";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    users: Number,
    roles: Number,
    permissions: Number
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              title: "Dashboard",
              breadcrumbs: []
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}><div class="text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm"${_scopeId}><div${_scopeId}><div class="rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-500/80 items-center overflow-hidden"${_scopeId}><div class="flex flex-col"${_scopeId}><p class="text-4xl font-bold"${_scopeId}>${ssrInterpolate(props.users)}</p><p class="text-md md:text-lg uppercase"${_scopeId}>${ssrInterpolate(_ctx.lang().label.user)}</p></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UserIcon), { class: "w-16 h-auto" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-blue-600 dark:bg-blue-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/70"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("user.index"),
              class: "flex justify-between items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(_ctx.lang().label.more)}</p>`);
                  _push3(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                    createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-green-600/70 dark:bg-green-500/80 items-center overflow-hidden"${_scopeId}><div class="flex flex-col"${_scopeId}><p class="text-4xl font-bold"${_scopeId}>${ssrInterpolate(props.roles)}</p><p class="text-md md:text-lg uppercase"${_scopeId}>${ssrInterpolate(_ctx.lang().label.role)}</p></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(KeyIcon), { class: "w-16 h-auto" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-green-600 dark:bg-green-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-green-600/90 dark:hover:bg-green-600/70"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("role.index"),
              class: "flex justify-between items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(_ctx.lang().label.more)}</p>`);
                  _push3(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                    createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}><div class="rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-amber-600/70 dark:bg-amber-500/80 items-center overflow-hidden"${_scopeId}><div class="flex flex-col"${_scopeId}><p class="text-4xl font-bold"${_scopeId}>${ssrInterpolate(props.permissions)}</p><p class="text-md md:text-lg uppercase"${_scopeId}>${ssrInterpolate(_ctx.lang().label.permission)}</p></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ShieldCheckIcon), { class: "w-16 h-auto" }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="bg-amber-600 dark:bg-amber-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-amber-600/90 dark:hover:bg-amber-600/70"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("permission.index"),
              class: "flex justify-between items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(_ctx.lang().label.more)}</p>`);
                  _push3(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                    createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode(_sfc_main$2, {
                title: "Dashboard",
                breadcrumbs: []
              }),
              createVNode("div", { class: "space-y-4" }, [
                createVNode("div", { class: "text-white dark:text-gray-100 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 overflow-hidden shadow-sm" }, [
                  createVNode("div", null, [
                    createVNode("div", { class: "rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-blue-600/70 dark:bg-blue-500/80 items-center overflow-hidden" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("p", { class: "text-4xl font-bold" }, toDisplayString(props.users), 1),
                        createVNode("p", { class: "text-md md:text-lg uppercase" }, toDisplayString(_ctx.lang().label.user), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode(unref(UserIcon), { class: "w-16 h-auto" })
                      ])
                    ]),
                    createVNode("div", { class: "bg-blue-600 dark:bg-blue-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-blue-600/90 dark:hover:bg-blue-600/70" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("user.index"),
                        class: "flex justify-between items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                          createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-green-600/70 dark:bg-green-500/80 items-center overflow-hidden" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("p", { class: "text-4xl font-bold" }, toDisplayString(props.roles), 1),
                        createVNode("p", { class: "text-md md:text-lg uppercase" }, toDisplayString(_ctx.lang().label.role), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode(unref(KeyIcon), { class: "w-16 h-auto" })
                      ])
                    ]),
                    createVNode("div", { class: "bg-green-600 dark:bg-green-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-green-600/90 dark:hover:bg-green-600/70" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("role.index"),
                        class: "flex justify-between items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                          createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "rounded-t-none sm:rounded-t-lg px-4 py-6 flex justify-between bg-amber-600/70 dark:bg-amber-500/80 items-center overflow-hidden" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("p", { class: "text-4xl font-bold" }, toDisplayString(props.permissions), 1),
                        createVNode("p", { class: "text-md md:text-lg uppercase" }, toDisplayString(_ctx.lang().label.permission), 1)
                      ]),
                      createVNode("div", null, [
                        createVNode(unref(ShieldCheckIcon), { class: "w-16 h-auto" })
                      ])
                    ]),
                    createVNode("div", { class: "bg-amber-600 dark:bg-amber-600/80 rounded-b-none sm:rounded-b-lg p-2 overflow-hidden hover:bg-amber-600/90 dark:hover:bg-amber-600/70" }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("permission.index"),
                        class: "flex justify-between items-center"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(_ctx.lang().label.more), 1),
                          createVNode(unref(ChevronRightIcon), { class: "w-5 h-5" })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
