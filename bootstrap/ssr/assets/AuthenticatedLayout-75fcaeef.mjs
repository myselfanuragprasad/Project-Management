import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, onMounted, onUnmounted, computed, ref, renderSlot, resolveDirective, createVNode, withDirectives, vShow, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrGetDirectiveProps } from "vue/server-renderer";
import { ChevronRightIcon, SunIcon, MoonIcon, Bars3CenterLeftIcon, UserIcon, CheckBadgeIcon, ChevronDownIcon, HomeIcon, KeyIcon, ShieldCheckIcon, XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/solid";
import { Link } from "@inertiajs/vue3";
import { A as ApplicationLogo, _ as _sfc_main$a, a as _export_sfc } from "./SwitchLangNavbar-dc6a22d1.mjs";
import { useDark, useToggle } from "@vueuse/core";
import { TransitionRoot, Dialog, TransitionChild, DialogOverlay } from "@headlessui/vue";
const _sfc_main$9 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    title: String,
    breadcrumbs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between py-4 px-4 sm:px-0 text-gray-500 dark:text-gray-300" }, _attrs))}><p>${ssrInterpolate(__props.title)}</p><div class="hidden sm:flex space-x-2 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        style: __props.breadcrumbs.length != 0 ? null : { display: "none" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(__props.breadcrumbs, (breadcrumb, index) => {
        _push(`<div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(unref(ChevronRightIcon), { class: "w-3 h-3" }, null, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: breadcrumb.href
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(breadcrumb.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(breadcrumb.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumb.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white dark:bg-gray-700"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[unref(widthClass), unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({ class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SwitchDarkModeNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark();
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_tooltip = resolveDirective("tooltip");
      _push(`<div${ssrRenderAttrs(_attrs)}><button${ssrRenderAttrs(mergeProps({ class: "hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 inline-flex items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out" }, ssrGetDirectiveProps(_ctx, _directive_tooltip, _ctx.lang().tooltip.dark_mode)))}>`);
      if (unref(isDark)) {
        _push(ssrRenderComponent(unref(SunIcon), { class: "w-5 h-5 fill-current" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!unref(isDark)) {
        _push(ssrRenderComponent(unref(MoonIcon), { class: "w-5 h-5 fill-current" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SwitchDarkModeNavbar.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  emits: ["open"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 border-gray-700 text-gray-300 lg:bg-white dark:bg-gray-900 border-b lg:border-gray-100 dark:border-gray-800 lg:text-gray-500 dark:text-gray-300" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="mr-4 shrink-0 flex items-center lg:hidden"><button class="hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 inline-flex items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out">`);
      _push(ssrRenderComponent(unref(Bars3CenterLeftIcon), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div><div class="flex">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "flex items-center space-x-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "hidden md:block h-5 w-auto fill-current" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.$page.props.app.name)}</p>`);
          } else {
            return [
              createVNode(ApplicationLogo, { class: "hidden md:block h-5 w-auto fill-current" }),
              createVNode("p", null, toDisplayString(_ctx.$page.props.app.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<div class=""><div class="relative">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 inline-flex items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out sm:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UserIcon), { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</button><button type="button" class="hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out truncate w-fit hidden sm:inline-flex"${_scopeId}><span class="flex justify-between items-center"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name.split(" ")[0])} `);
            _push2(ssrRenderComponent(unref(CheckBadgeIcon), {
              class: "ml-[2px] w-4 h-4 text-white dark:text-white lg:text-primary",
              style: _ctx.$page.props.auth.user.email_verified_at ? null : { display: "none" }
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
            _push2(ssrRenderComponent(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5 fill-current" }, null, _parent2, _scopeId));
            _push2(`</button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 inline-flex items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out sm:hidden"
                }, [
                  createVNode(unref(UserIcon), { class: "h-5 w-5" })
                ]),
                createVNode("button", {
                  type: "button",
                  class: "hover:text-gray-400 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-400 items-center justify-center p-2 rounded-md lg:hover:text-gray-500 dark:hover:text-gray-400 lg:hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none lg:focus:bg-gray-100 dark:focus:bg-gray-900 lg:focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out truncate w-fit hidden sm:inline-flex"
                }, [
                  createVNode("span", { class: "flex justify-between items-center" }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name.split(" ")[0]) + " ", 1),
                    withDirectives(createVNode(unref(CheckBadgeIcon), { class: "ml-[2px] w-4 h-4 text-white dark:text-white lg:text-primary" }, null, 512), [
                      [vShow, _ctx.$page.props.auth.user.email_verified_at]
                    ])
                  ]),
                  createVNode(unref(ChevronDownIcon), { class: "ml-2 h-5 w-5 fill-current" })
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"${_scopeId}><span class="flex items-center justify-start text-sm truncate"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} `);
            _push2(ssrRenderComponent(unref(CheckBadgeIcon), {
              class: "ml-[2px] w-4 h-4 dark:text-white text-primary",
              style: _ctx.$page.props.auth.user.email_verified_at ? null : { display: "none" }
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.email)}</span></div>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.lang().label.profile)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.lang().label.profile), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.lang().label.logout)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.lang().label.logout), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "py-3 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300" }, [
                createVNode("span", { class: "flex items-center justify-start text-sm truncate" }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  withDirectives(createVNode(unref(CheckBadgeIcon), { class: "ml-[2px] w-4 h-4 dark:text-white text-primary" }, null, 512), [
                    [vShow, _ctx.$page.props.auth.user.email_verified_at]
                  ])
                ]),
                createVNode("span", { class: "block text-sm font-medium text-gray-500 truncate dark:text-gray-400" }, toDisplayString(_ctx.$page.props.auth.user.email), 1)
              ]),
              createVNode(_sfc_main$7, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.lang().label.profile), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$7, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.lang().label.logout), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SideBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-gray-300 pt-5 pb-20" }, _attrs))}><div class="flex justify-center side-color"><div class="rounded-full flex items-center justify-center bg-primary text-gray-300 w-24 h-24 text-4xl uppercase">${ssrInterpolate(_ctx.$page.props.auth.user.name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join(""))}</div></div><div class="text-center py-3 px-4 border-b border-gray-700 dark:border-gray-800"><span class="flex items-center justify-center"><p class="truncate text-md">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</p><div>`);
      _push(ssrRenderComponent(unref(CheckBadgeIcon), {
        class: "ml-[2px] w-4 h-4",
        style: _ctx.$page.props.auth.user.email_verified_at ? null : { display: "none" }
      }, null, _parent));
      _push(`</div></span><span class="block text-sm font-medium truncate">${ssrInterpolate(_ctx.$page.props.auth.user.roles[0].name)}</span></div><ul class="space-y-2 my-4"><li class="${ssrRenderClass([_ctx.route().current("dashboard") ? "bg-primary" : "bg-gray-700/40 dark:bg-gray-800/40", "text-white rounded-lg hover:bg-primary dark:hover:bg-primary"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "flex items-center py-2 px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HomeIcon), { class: "w-6 h-5" }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode(unref(HomeIcon), { class: "w-6 h-5" }),
              createVNode("span", { class: "ml-3" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle(_ctx.can(["read user"]) ? null : { display: "none" })}" class="py-2"><p>${ssrInterpolate(_ctx.lang().label.data)}</p></li><li style="${ssrRenderStyle(_ctx.can(["read user"]) ? null : { display: "none" })}" class="${ssrRenderClass([_ctx.route().current("user.index") ? "bg-primary" : "bg-gray-700/40 dark:bg-gray-800/40", "text-white rounded-lg hover:bg-primary dark:hover:bg-primary"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("user.index"),
        class: "flex items-center py-2 px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserIcon), { class: "w-6 h-5" }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(_ctx.lang().label.user)}</span>`);
          } else {
            return [
              createVNode(unref(UserIcon), { class: "w-6 h-5" }),
              createVNode("span", { class: "ml-3" }, toDisplayString(_ctx.lang().label.user), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle(_ctx.can(["read client"]) ? null : { display: "none" })}" class="${ssrRenderClass([_ctx.route().current("client.dashboard") ? "bg-primary" : "bg-gray-700/40 dark:bg-gray-800/40", "text-white rounded-lg hover:bg-primary dark:hover:bg-primary"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("client.dashboard"),
        class: "flex items-center py-2 px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(UserIcon), { class: "w-6 h-5" }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(_ctx.lang().label.client)}</span>`);
          } else {
            return [
              createVNode(unref(UserIcon), { class: "w-6 h-5" }),
              createVNode("span", { class: "ml-3" }, toDisplayString(_ctx.lang().label.client), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle(_ctx.can(["read role", "read permission"]) ? null : { display: "none" })}" class="py-2"><p>${ssrInterpolate(_ctx.lang().label.access)}</p></li><li style="${ssrRenderStyle(_ctx.can(["read role"]) ? null : { display: "none" })}" class="${ssrRenderClass([_ctx.route().current("role.index") ? "bg-primary" : "bg-gray-700/40 dark:bg-gray-800/40", "text-white rounded-lg hover:bg-primary dark:hover:bg-primary"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("role.index"),
        class: "flex items-center py-2 px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(KeyIcon), { class: "w-6 h-5" }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(_ctx.lang().label.role)}</span>`);
          } else {
            return [
              createVNode(unref(KeyIcon), { class: "w-6 h-5" }),
              createVNode("span", { class: "ml-3" }, toDisplayString(_ctx.lang().label.role), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li style="${ssrRenderStyle(_ctx.can(["read permission"]) ? null : { display: "none" })}" class="${ssrRenderClass([_ctx.route().current("permission.index") ? "bg-primary" : "bg-gray-700/40 dark:bg-gray-800/40", "text-white rounded-lg hover:bg-primary dark:hover:bg-primary"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("permission.index"),
        class: "flex items-center py-2 px-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ShieldCheckIcon), { class: "w-6 h-5" }, null, _parent2, _scopeId));
            _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(_ctx.lang().label.permission)}</span>`);
          } else {
            return [
              createVNode(unref(ShieldCheckIcon), { class: "w-6 h-5" }),
              createVNode("span", { class: "ml-3" }, toDisplayString(_ctx.lang().label.permission), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideBarMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  props: {
    open: Boolean
  },
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="hidden lg:flex"><aside class="fixed lg:flex flex-col h-screen overflow-hidden w-64 bg-gray-800 dark:bg-gray-900 dark:border-r dark:border-gray-800"><div class="flex-1 h-screen overflow-y-auto scrollbar-sidebar px-3">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></aside></div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), { show: __props.open }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: ($event) => emit("close"),
              class: "fixed inset-0 z-10 flex lg:hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "transition ease-in-out duration-200 transform",
                    "enter-from": "-translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transition ease-in-out duration-200 transform",
                    "leave-from": "translate-x-0",
                    "leave-to": "-translate-x-full",
                    as: "template"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<aside class="flex flex-col relative z-10 w-64 bg-gray-800 dark:bg-gray-900 dark:border-r dark:border-gray-800"${_scopeId3}><div class="flex flex-col relative h-screen min-h-screen"${_scopeId3}><div class="overflow-y-auto flex-1 scrollbar-sidebar px-3"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(`</div></div></aside>`);
                      } else {
                        return [
                          createVNode("aside", { class: "flex flex-col relative z-10 w-64 bg-gray-800 dark:bg-gray-900 dark:border-r dark:border-gray-800" }, [
                            createVNode("div", { class: "flex flex-col relative h-screen min-h-screen" }, [
                              createVNode("div", { class: "overflow-y-auto flex-1 scrollbar-sidebar px-3" }, [
                                createVNode(_sfc_main$4)
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "transition-opacity ease-linear duration-200",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0",
                    as: "template"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 lg:hidden" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 lg:hidden" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      enter: "transition ease-in-out duration-200 transform",
                      "enter-from": "-translate-x-full",
                      "enter-to": "translate-x-0",
                      leave: "transition ease-in-out duration-200 transform",
                      "leave-from": "translate-x-0",
                      "leave-to": "-translate-x-full",
                      as: "template"
                    }, {
                      default: withCtx(() => [
                        createVNode("aside", { class: "flex flex-col relative z-10 w-64 bg-gray-800 dark:bg-gray-900 dark:border-r dark:border-gray-800" }, [
                          createVNode("div", { class: "flex flex-col relative h-screen min-h-screen" }, [
                            createVNode("div", { class: "overflow-y-auto flex-1 scrollbar-sidebar px-3" }, [
                              createVNode(_sfc_main$4)
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TransitionChild), {
                      enter: "transition-opacity ease-linear duration-200",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "transition-opacity ease-linear duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0",
                      as: "template"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 lg:hidden" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                onClose: ($event) => emit("close"),
                class: "fixed inset-0 z-10 flex lg:hidden"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    enter: "transition ease-in-out duration-200 transform",
                    "enter-from": "-translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transition ease-in-out duration-200 transform",
                    "leave-from": "translate-x-0",
                    "leave-to": "-translate-x-full",
                    as: "template"
                  }, {
                    default: withCtx(() => [
                      createVNode("aside", { class: "flex flex-col relative z-10 w-64 bg-gray-800 dark:bg-gray-900 dark:border-r dark:border-gray-800" }, [
                        createVNode("div", { class: "flex flex-col relative h-screen min-h-screen" }, [
                          createVNode("div", { class: "overflow-y-auto flex-1 scrollbar-sidebar px-3" }, [
                            createVNode(_sfc_main$4)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(TransitionChild), {
                    enter: "transition-opacity ease-linear duration-200",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "transition-opacity ease-linear duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0",
                    as: "template"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75 lg:hidden" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SideBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Toast_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  components: {
    XMarkIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon
  },
  props: {
    flash: Object
  },
  data() {
    return {
      isVisible: false,
      isErrorVisible: false,
      timeout: null
    };
  },
  methods: {
    toggle() {
      this.isVisible = false;
      this.isErrorVisible = false;
    }
  },
  watch: {
    flash: {
      deep: true,
      handler(newVal) {
        this.isVisible = true;
        this.isErrorVisible = true;
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.isVisible = false;
        }, 3e3);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_ExclamationCircleIcon = resolveComponent("ExclamationCircleIcon");
  _push(`<!--[-->`);
  if ($props.flash.success && $data.isVisible) {
    _push(`<div class="absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]"><div class="flex p-4 justify-between items-center bg-green-600 rounded-lg"><div>`);
    _push(ssrRenderComponent(_component_CheckCircleIcon, {
      class: "h-8 w-8 text-white",
      fill: "currentColor"
    }, null, _parent));
    _push(`</div><div class="mx-3 text-sm font-medium text-white">${$props.flash.success}</div><button type="button" class="ml-auto bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8"><span class="sr-only">Close</span>`);
    _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent));
    _push(`</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.flash.info && $data.isVisible) {
    _push(`<div class="absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]"><div class="flex p-4 justify-between items-center bg-primary rounded-lg"><div>`);
    _push(ssrRenderComponent(_component_InformationCircleIcon, {
      class: "h-8 w-8 text-white",
      fill: "currentColor"
    }, null, _parent));
    _push(`</div><div class="mx-3 text-sm font-medium text-white">${$props.flash.info}</div><button type="button" class="ml-auto bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8"><span class="sr-only">Close</span>`);
    _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent));
    _push(`</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.flash.warning && $data.isVisible) {
    _push(`<div class="absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]"><div class="flex p-4 justify-between items-center bg-amber-600 rounded-lg"><div>`);
    _push(ssrRenderComponent(_component_ExclamationTriangleIcon, {
      class: "h-8 w-8 text-white",
      fill: "currentColor"
    }, null, _parent));
    _push(`</div><div class="mx-3 text-sm font-medium text-white">${$props.flash.warning}</div><button type="button" class="ml-auto bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8"><span class="sr-only">Close</span>`);
    _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent));
    _push(`</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.flash.error && $data.isErrorVisible) {
    _push(`<div class="absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]"><div class="flex p-4 justify-between items-center bg-red-600 rounded-lg"><div>`);
    _push(ssrRenderComponent(_component_ExclamationCircleIcon, {
      class: "h-8 w-8 text-white",
      fill: "currentColor"
    }, null, _parent));
    _push(`</div><div class="mx-3 text-sm font-medium text-white">${$props.flash.error}</div><button type="button" class="ml-auto bg-white/20 text-white rounded-lg focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8">`);
    _push(ssrRenderComponent(_component_XMarkIcon, { class: "w-5 h-5" }, null, _parent));
    _push(`</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Toast.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Toast = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "sticky top-[100vh] border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-300" }, _attrs))}><div class="flex items-center justify-center sm:justify-end max-w-7xl mx-auto p-4 sm:px-6 lg:px-8"><p class="text-center"><a href="https://2coms.com" target="_blank" class="font-bold">${ssrInterpolate(_ctx.$page.props.app.name)}</a> ©️ ${ssrInterpolate(new Date().getFullYear())} <a href="https://github.com/erikwibowo" target="_blank" class="font-bold text-primary">2C Dev T3am</a></p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  emits: ["close", "open"],
  setup(__props, { emit }) {
    const sidebarOpened = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        open: sidebarOpened.value,
        onClose: ($event) => sidebarOpened.value = false
      }, null, _parent));
      _push(`<div class="pl-0 lg:pl-64 w-full min-h-screen block bg-gray-100 dark:bg-gray-900">`);
      _push(ssrRenderComponent(Toast, {
        flash: _ctx.$page.props.flash
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        open: sidebarOpened.value,
        onOpen: ($event) => sidebarOpened.value = true
      }, null, _parent));
      _push(`<main class="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-10 text-gray-900 dark:text-gray-100 text-sm">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$9 as a
};
