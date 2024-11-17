import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { A as ApplicationLogo, _ as _sfc_main$1 } from "./SwitchLangNavbar-dc6a22d1.mjs";
import { _ as _sfc_main$2 } from "./SwitchDarkMode-80e1266e.mjs";
import { Head, Link } from "@inertiajs/vue3";
import "@heroicons/vue/24/solid";
import "@vueuse/core";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.lang().label.welcome
      }, null, _parent));
      _push(`<div class="relative flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 items-center sm:pt-0"><div class="max-w-2xl mx-auto sm:px-6 lg:px-8"><div class="flex items-center pt-8 px-4 sm:px-0 justify-between sm:pt-0"><div class="flex items-center">`);
      _push(ssrRenderComponent(ApplicationLogo, { class: "h-10 w-auto text-primary fill-current sm:h-16" }, null, _parent));
      _push(`<p class="text-3xl sm:text-5xl ml-4 text-primary">${ssrInterpolate(_ctx.$page.props.app.name)}</p></div><div class="flex space-x-2 items-center">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div></div><div class="mt-4 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg"><div class="grid grid-cols-1"><div class="p-6"><div class="flex items-center"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg><div class="ml-4 text-lg leading-7 font-semibold"><a href="#" class="underline text-gray-900 dark:text-white">${ssrInterpolate(_ctx.lang().label.documentation)}</a></div></div><div class="ml-12"><div class="mt-2 text-gray-600 dark:text-gray-400 text-sm">${ssrInterpolate(_ctx.lang().label.documentation_detail)}</div>`);
      if (__props.canLogin) {
        _push(`<div class="flex items-center justify-start space-x-4 mt-4">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "text-lg text-gray-700 dark:text-gray-500 underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dashboard`);
              } else {
                return [
                  createTextVNode("Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "text-lg text-gray-700 dark:text-gray-500 underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.lang().label.login)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.lang().label.login), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ml-4 text-lg text-gray-700 dark:text-gray-500 underline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.lang().label.register)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.lang().label.register), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="sm:flex justify-between mt-4 text-sm text-gray-500"><div class="flex mx-4 sm:mx-0 flex-row justify-center text-center"><p><a href="https://2coms.com" target="_blank">${ssrInterpolate(_ctx.$page.props.app.name)}</a> ©️ ${ssrInterpolate(new Date().getFullYear())} <a href="#" target="_blank" class="text-primary">2Coms Dev Team</a></p></div><div class="flex mx-4 sm:mx-0 justify-center text-center"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
