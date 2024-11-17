import { mergeProps, useSSRContext, reactive, watchEffect } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import "@inertiajs/vue3";
import "lodash";
const _sfc_main$2 = {
  __name: "InfoButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-2 py-1.5 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InfoButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      if (props.name === "nodata") {
        _push(`<svg${ssrRenderAttrs(mergeProps({
          xmlns: "http://www.w3.org/2000/svg",
          "data-name": "Layer 1",
          width: "647.63626",
          height: "632.17383",
          viewBox: "0 0 647.63626 632.17383",
          "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, _attrs))}><path d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z" transform="translate(-276.18187 -133.91309)" fill="#f2f2f2"></path><path d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"></path><path d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z" transform="translate(-276.18187 -133.91309)" class="text-primary fill-current"></path><circle cx="190.15351" cy="24.95465" r="20" class="text-primary fill-current"></circle><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"></circle><path d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z" transform="translate(-276.18187 -133.91309)" fill="#e6e6e6"></path><path d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-276.18187 -133.91309)" fill="#3f3d56"></path><path d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z" transform="translate(-276.18187 -133.91309)" class="text-primary fill-current"></path><circle cx="433.63626" cy="105.17383" r="20" class="text-primary fill-current"></circle><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"></circle></svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icon.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    links: Object,
    filters: Object
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const data = reactive({
      params: {
        search: (_a = props.filters) == null ? void 0 : _a.search,
        field: (_b = props.filters) == null ? void 0 : _b.field,
        order: (_c = props.filters) == null ? void 0 : _c.order,
        perPage: (_d = props.filters) == null ? void 0 : _d.perPage
      }
    });
    watchEffect(() => {
      var _a2, _b2, _c2, _d2;
      data.params.search = (_a2 = props.filters) == null ? void 0 : _a2.search;
      data.params.field = (_b2 = props.filters) == null ? void 0 : _b2.field;
      data.params.order = (_c2 = props.filters) == null ? void 0 : _c2.order;
      data.params.perPage = (_d2 = props.filters) == null ? void 0 : _d2.perPage;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.links.data.length != 0) {
        _push(`<div class="ml-2">${ssrInterpolate(__props.links.from)}-${ssrInterpolate(__props.links.to)} ${ssrInterpolate(_ctx.lang().label.of)} ${ssrInterpolate(__props.links.total)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.links.data.length == 0) {
        _push(`<div class="flex flex-col space-y-2 mx-auto p-6 text-lg">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          name: "nodata",
          class: "w-auto h-16"
        }, null, _parent));
        _push(`<p>${ssrInterpolate(_ctx.lang().label.no_data)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.links.links.length > 3) {
        _push(`<div><ul class="flex justify-center items-center rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"><li><button class="px-4 py-2"${ssrIncludeBooleanAttr(__props.links.prev_page_url == null) ? " disabled" : ""}>${"«"}</button></li><li><p class="px-4 py-2 bg-primary text-white">${__props.links.current_page}</p></li><li><button class="px-4 py-2"${ssrIncludeBooleanAttr(__props.links.next_page_url == null) ? " disabled" : ""}>${"»"}</button></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$2 as _,
  _sfc_main as a
};
