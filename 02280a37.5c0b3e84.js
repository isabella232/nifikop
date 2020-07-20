(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{126:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(1),a=t(9),i=(t(0),t(180)),o={id:"4_node",title:"Node",sidebar_label:"Node"},c={id:"5_references/1_nifi_cluster/4_node",title:"Node",description:"Node defines the nifi node basic configuration",source:"@site/docs/5_references/1_nifi_cluster/4_node.md",permalink:"/nifikop/docs/5_references/1_nifi_cluster/4_node",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/website/docs/5_references/1_nifi_cluster/4_node.md",sidebar_label:"Node",sidebar:"docs",previous:{title:"Node configuration",permalink:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config"},next:{title:"Node state",permalink:"/nifikop/docs/5_references/1_nifi_cluster/5_node_state"}},l=[{value:"Node",id:"node",children:[]}],b={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Node defines the nifi node basic configuration"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'    - id: 0\n      # nodeConfigGroup can be used to ease the node configuration, if set only the id is required\n      nodeConfigGroup: "default_group"\n      # readOnlyConfig can be used to pass Nifi node config\n      # which has type read-only these config changes will trigger rolling upgrade\n      readOnlyConfig:\n        nifiProperties:\n          overrideConfigs: |\n            nifi.ui.banner.text=NiFiKop by Orange - Node 0\n      # node configuration\n#       nodeConfig:\n    - id: 2\n      # readOnlyConfig can be used to pass Nifi node config\n      # which has type read-only these config changes will trigger rolling upgrade\n      readOnlyConfig:\n        overrideConfigs: |\n          nifi.ui.banner.text=NiFiKop by Orange - Node 2\n      # node configuration\n      nodeConfig:\n        resourcesRequirements:\n          limits:\n            cpu: "2"\n            memory: 3Gi\n          requests:\n            cpu: "1"\n            memory: 1Gi\n        storageConfigs:\n          # Name of the storage config, used to name PV to reuse into sidecars for example.\n          - name: provenance-repository\n            # Path where the volume will be mount into the main nifi container inside the pod.\n            mountPath: "/opt/nifi/provenance_repository"\n            # Kubernetes PVC spec\n            # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n            pvcSpec:\n              accessModes:\n                - ReadWriteOnce\n              storageClassName: "standard"\n              resources:\n                requests:\n                  storage: 8Gi\n')),Object(i.b)("h2",{id:"node"},"Node"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"int32"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"unique Node id."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nodeConfigGroup"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"can be used to ease the node configuration, if set only the id is required"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"readOnlyConfig"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/2_read_only_config"}),"ReadOnlyConfig")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"readOnlyConfig can be used to pass Nifi node config which has type read-only these config changes will trigger rolling upgrade."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nodeConfig"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config"}),"NodeConfig")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"node configuration."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")))))}d.isMDXComponent=!0},180:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),d=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=d(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,f=u["".concat(o,".").concat(p)]||u[p]||s[p]||i;return t?a.a.createElement(f,c({ref:n},b,{components:t})):a.a.createElement(f,c({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);