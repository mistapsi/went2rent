(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-WebmasterTools-vue"],{"3e92":function(t,i,e){t.exports=e.p+"img/yandex.png"},"4b87":function(t,i,e){t.exports=e.p+"img/google.png"},"514f":function(t,i,e){t.exports=e.p+"img/bing.png"},7910:function(t,i,e){t.exports=e.p+"img/pinterest.png"},"9fc3":function(t,i,e){t.exports=e.p+"img/googleAnalytics.png"},c1c8:function(t,i,e){},c414:function(t,i,e){t.exports=e.p+"img/baidu.png"},e57a:function(t,i,e){"use strict";var s=e("c1c8"),o=e.n(s);o.a},ead6:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"aioseo-webmaster-tools"},[e("core-card",{attrs:{slug:"webmasterTools","header-text":t.strings.webmasterToolsVerification}},[e("div",{staticClass:"webmaster-tools-description"},[t._v(" Enter your verification codes below to activate webmaster tools. ")]),e("grid-row",{staticClass:"webmaster-tools-toggles"},[t._l(t.tools,(function(i,s){return e("grid-column",{key:"toggle_"+s,staticClass:"tool-toggle",style:{order:t.getOrder(i)},attrs:{sm:"6",md:"4",lg:"3"}},[e("div",{class:[{active:i.slug===t.activeTool},{connected:t.isConnected(i)}],on:{click:function(e){return t.toggleActiveTool(i.slug)}}},[e("img",{attrs:{src:i.logo}}),e("div",{domProps:{innerHTML:t._s(i.name)}}),t.isConnected(i)?e("svg-circle-check-solid"):t._e()],1)])})),t._l(t.tools,(function(i,s){return e("transition-slide",{key:"content_"+s,staticClass:"tool-settings-slide",style:{order:t.getOrder(i,!0)},attrs:{active:i.slug===t.activeTool},on:{"open-start":function(i){t.heightOkay=t.activeTool},"close-end":function(i){t.heightOkay=t.activeTool}}},[e("grid-column",{staticClass:"tool-settings"},["googleAnalytics"!==i.slug||t.notGaActivated&&t.showMiPromo&&!t.gaDeprecated?[t._l(i.settings,(function(s,o){return[t.heightOkay===i.slug&&t.shouldDisplaySetting(s)?e("div",{key:o},[e("core-settings-row",{attrs:{noSideMargin:"","align-small":""},scopedSlots:t._u([{key:"name",fn:function(){return[t._v(" "+t._s(s.label)+" ")]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"d-flex"},[s.parent?t._e():[e("base-input",{attrs:{size:"small"},on:{blur:function(i){return t.maybeUpdateId(s.option)}},model:{value:t.options.webmasterTools[s.option],callback:function(i){t.$set(t.options.webmasterTools,s.option,i)},expression:"options.webmasterTools[setting.option]"}})],!s.parent||s.pro&&t.isUnlicensed?t._e():["input"!==s.type&&s.type?t._e():e("base-input",{attrs:{size:"small",placeholder:s.placeholder,disabled:t.isUnlicensed&&s.pro},model:{value:t.options.deprecated.webmasterTools[s.parent][s.option],callback:function(i){t.$set(t.options.deprecated.webmasterTools[s.parent],s.option,i)},expression:"options.deprecated.webmasterTools[setting.parent][setting.option]"}}),"toggle"===s.type?e("base-toggle",{attrs:{disabled:t.isUnlicensed&&s.pro},model:{value:t.options.deprecated.webmasterTools[s.parent][s.option],callback:function(i){t.$set(t.options.deprecated.webmasterTools[s.parent],s.option,i)},expression:"options.deprecated.webmasterTools[setting.parent][setting.option]"}}):t._e(),"radio-toggle"===s.type?e("base-radio-toggle",{attrs:{name:s.option,options:s.options,disabled:t.isUnlicensed&&s.pro},model:{value:t.options.deprecated.webmasterTools[s.parent][s.option],callback:function(i){t.$set(t.options.deprecated.webmasterTools[s.parent],s.option,i)},expression:"options.deprecated.webmasterTools[setting.parent][setting.option]"}}):t._e(),"textarea"===s.type?e("base-textarea",{attrs:{"min-height":100,disabled:t.isUnlicensed&&s.pro},model:{value:t.options.deprecated.webmasterTools[s.parent][s.option],callback:function(i){t.$set(t.options.deprecated.webmasterTools[s.parent],s.option,i)},expression:"options.deprecated.webmasterTools[setting.parent][setting.option]"}}):t._e(),"multicheck"===s.type?e("grid-row",t._l(s.options,(function(i,o){return e("grid-column",{key:o,attrs:{md:"4"}},[e("base-checkbox",{attrs:{size:"medium",value:t.getValue(s,i)},on:{input:function(e){return t.updateValue(e,s,i)}}},[t._v(" "+t._s(i.label)+" ")])],1)})),1):t._e()]],2),e("p",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.description)}}),e("br"),s.showMiPromo&&t.showMiPromo?e("core-alert",{attrs:{type:"blue"}},[t.prefersEm?e("div",{domProps:{innerHTML:t._s(t.emPromo)}}):e("div",{domProps:{innerHTML:t._s(t.miPromo)}}),e("br"),t.$aioseo.plugins.miLite.canInstall?t._e():e("base-button",{attrs:{type:"blue",size:"medium",tag:"a",target:"_blank",href:t.$aioseo.plugins.miLite.wpLink}},[e("svg-external"),t._v(" "+t._s(t.strings.installMi)+" ")],1),t.$aioseo.plugins.miLite.canInstall?e("base-button",{attrs:{loading:t.installingPlugin,type:t.miInstalled?"green":"blue",size:"medium"},on:{click:t.installMi}},[t.miInstalled?e("span",[t._v(t._s(t.strings.miInstalled))]):t._e(),t.miInstalled?t._e():e("span",[t._v(t._s(t.strings.installMi))])]):t._e()],1):t._e()]},proxy:!0}],null,!0)})],1):t._e()]}))]:t._e(),"googleAnalytics"!==i.slug||!t.gaActivated&&t.showMiPromo&&!t.gaDeprecated?t._e():[e("div",{staticClass:"mi-alert"},[e("core-alert",{attrs:{type:"blue"}},[t.$aioseo.plugins.miLite.activated||t.$aioseo.plugins.miPro.activated?e("div",[t._v(t._s(t.strings.miHandlesGa))]):t._e(),t.$aioseo.plugins.emLite.activated||t.$aioseo.plugins.emPro.activated?e("div",[t._v(t._s(t.strings.emHandlesGa))]):t._e(),t.gaDeprecated&&!t.gaActivated&&t.prefersEm?e("div",{domProps:{innerHTML:t._s(t.emPromo)}}):t._e(),!t.gaDeprecated||t.gaActivated||t.prefersEm?t._e():e("div",{domProps:{innerHTML:t._s(t.miPromo)}}),e("br"),e("base-button",{attrs:{type:"blue",size:"medium",tag:"a",href:t.$aioseo.urls.aio.monsterinsights}},[t.gaActivated||!t.showMiPromo?[t._v(" "+t._s(t.strings.manageGa)+" ")]:[t._v(" "+t._s(t.strings.startGa)+" ")]],2)],1)],1)]],2)],1)}))],2),e("grid-row",{staticClass:"webmaster-tools-spacer"},[e("grid-column",[e("div")])],1),e("core-settings-row",{attrs:{name:t.strings.miscellaneousVerification,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t.$aioseo.user.unfilteredHtml?t._e():e("core-alert",{staticClass:"no-access",attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.unfilteredHtmlError)}}),t.$aioseo.user.unfilteredHtml?t._e():e("base-editor",{attrs:{disabled:"",value:t.options.webmasterTools.miscellaneousVerification,"line-numbers":"",monospace:""}}),t.$aioseo.user.unfilteredHtml?e("base-editor",{attrs:{"line-numbers":"",monospace:""},model:{value:t.options.webmasterTools.miscellaneousVerification,callback:function(i){t.$set(t.options.webmasterTools,"miscellaneousVerification",i)},expression:"options.webmasterTools.miscellaneousVerification"}}):t._e(),e("p",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.miscellaneousVerificationDescription)}})]},proxy:!0}])})],1)],1)},o=[],n=(e("a623"),e("c740"),e("4160"),e("caad"),e("d81d"),e("b64b"),e("ac1f"),e("2532"),e("5319"),e("2ca0"),e("159b"),e("5530")),a=e("2f62"),r=e("9c0e"),l={mixins:[r["h"]],data:function(){return{showMiPromo:!0,installingPlugin:!1,miInstalled:!1,heightOkay:!1,activeTool:null,columnsPerRow:4,strings:{miscellaneousVerification:this.$t.__("Miscellaneous Verification",this.$td),miscellaneousVerificationDescription:this.$t.sprintf(this.$t.__("The code above will be added between the %1$s tags on every page on your website.",this.$td),"<em>&lt;head&gt; &lt/head&gt;</em>"),webmasterToolsVerification:this.$t.__("Webmaster Tools Verification",this.$td),miLink:this.$t.sprintf("<strong>%1$s</strong>",this.$t.__("Click here",this.$td)),installMi:this.$t.sprintf(this.$t.__("Install %1$s",this.$td),"MonsterInsights"),miInstalled:this.$t.__("Success!",this.$td),miHandlesGa:this.$t.sprintf(this.$t.__("Google Analytics is now handled by %1$s.",this.$td),"MonsterInsights"),emHandlesGa:this.$t.sprintf(this.$t.__("Google Analytics is now handled by %1$s.",this.$td),"ExactMetrics"),manageGa:this.$t.__("Manage Google Analytics",this.$td),startGa:this.$t.__("Get Started",this.$td),unfilteredHtmlError:this.$t.sprintf(this.$t.__("Your user account role does not have access to edit this field. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(a["c"])(["isUnlicensed"])),Object(a["e"])(["options","internalOptions"])),{},{miPromo:function(){return this.$t.sprintf(this.$t.__("We recommend using the %1$sFree MonsterInsights%2$s plugin to get the most out of Google Analytics.",this.$td),"<strong>","</strong>")},emPromo:function(){return this.$t.sprintf(this.$t.__("We recommend using the %1$sFree ExactMetrics%2$s plugin to get the most out of Google Analytics.",this.$td),"<strong>","</strong>")},notGaActivated:function(){return!this.$aioseo.plugins.miLite.activated&&!this.$aioseo.plugins.emLite.activated&&!this.$aioseo.plugins.miPro.activated&&!this.$aioseo.plugins.emPro.activated},gaActivated:function(){return this.$aioseo.plugins.miLite.activated||this.$aioseo.plugins.emLite.activated||this.$aioseo.plugins.miPro.activated||this.$aioseo.plugins.emPro.activated},gaDeprecated:function(){return!this.$aioseo.internalOptions.internal.deprecatedOptions.includes("googleAnalytics")&&!this.$aioseo.options.deprecated.webmasterTools.googleAnalytics.id&&!this.$aioseo.options.deprecated.webmasterTools.googleAnalytics.gtmContainerId},prefersEm:function(){return(this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.emPro.installed)&&!this.$aioseo.plugins.miLite.installed&&!this.$aioseo.plugins.miPro.installed},tools:function(){var t=this;return[{slug:"googleSearchConsole",name:this.$t.__("Google Search Console",this.$td),logo:e("4b87"),settings:[{option:"google",label:this.$t.__("Google Verification Code",this.$td),description:this.$t.sprintf(this.$t.__("Get your Google verification code in %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Google Search Console",this.$td),"googleSearchConsole"))}]},{slug:"bing",name:this.$t.__("Bing Webmaster Tools",this.$td),logo:e("514f"),settings:[{option:"bing",label:this.$t.__("Bing Verification Code",this.$td),description:this.$t.sprintf(this.$t.__("Get your Bing verification code in %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Bing Webmaster Tools",this.$td),"bingWebmasterVerification"))}]},{slug:"yandex",name:this.$t.__("Yandex Webmaster Tools",this.$td),logo:e("3e92"),settings:[{option:"yandex",label:this.$t.__("Yandex Verification Code",this.$td),description:this.$t.sprintf(this.$t.__("Get your Yandex verification code in %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Yandex Webmaster Tools",this.$td),"yandexWebmasterVerification"))}]},{slug:"baidu",name:this.$t.__("Baidu Webmaster Tools",this.$td),logo:e("c414"),settings:[{option:"baidu",label:this.$t.__("Baidu Verification Code",this.$td),description:this.$t.sprintf(this.$t.__("Get your Baidu verification code in %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Baidu Webmaster Tools",this.$td),"baiduWebmasterVerification"))}]},{slug:"pinterest",name:this.$t.__("Pinterest Site Verification",this.$td),logo:e("7910"),settings:[{option:"pinterest",label:this.$t.__("Pinterest Verification Code",this.$td),description:this.$t.sprintf(this.$t.__("Get your Pinterest verification code in your %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Pinterest account",this.$td),"pinterestSiteVerification"))}]},{slug:"googleAnalytics",name:this.$t.__("Google Analytics",this.$td),logo:e("9fc3"),settings:[{parent:"googleAnalytics",option:"id",placeholder:"UA-XXXXXXXX-X",label:this.$t.__("Google Analytics ID",this.$td),description:this.$t.sprintf(this.$t.__("Get your Google Analytics ID in your %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Google Analytics account",this.$td),"googleAnalytics")),showMiPromo:!0},{parent:"googleAnalytics",option:"advanced",label:this.$t.__("Enable Advanced Analytics Options",this.$td),type:"toggle",displayIf:["id"],description:this.$t.sprintf(this.$t.__("This enables Advanced Google Analytics options.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"advancedGoogleAnalytics",!0))},{parent:"googleAnalytics",option:"trackingDomain",label:this.$t.__("Tracking Domain",this.$td),displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("Enter your domain name without the %1$s to set your cookie domain.%2$s%3$s",this.$td),"http://","<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackingDomain",!0))},{parent:"googleAnalytics",option:"multipleDomains",label:this.$t.__("Track Multiple Domains",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("Use this option to enable tracking of multiple or additional domains.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackMultipleDomains",!0))},{parent:"googleAnalytics",option:"additionalDomains",label:this.$t.__("Additional Domains",this.$td),type:"textarea",displayIf:["id","advanced","multipleDomains"],description:this.$t.sprintf(this.$t.__("Add a list of additional domains to track here. Enter one domain name per line without the http://.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"additionalDomains",!0))},{parent:"googleAnalytics",option:"anonymizeIp",label:this.$t.__("Anonymize IP Addresses",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("This enables support for IP Anonymization in Google Analytics.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"anonymizeIps",!0))},{parent:"googleAnalytics",option:"displayAdvertiserTracking",label:this.$t.__("Display Advertiser Tracking",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("This enables support for the Display Advertiser Features in Google Analytics.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"displayAdvertiserTracking",!0))},{parent:"googleAnalytics",option:"excludeUsers",label:this.$t.__("Exclude Users from Tracking",this.$td),type:"multicheck",options:Object.keys(this.$aioseo.user.roles).map((function(i){var e=t.$aioseo.user.roles[i];return{value:i,label:e}})),displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("Exclude logged-in users from Google Analytics tracking by role.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"excludeUsers",!0))},{parent:"googleAnalytics",option:"enhancedLinkAttribution",label:this.$t.__("Enhanced Link Attribution",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced"],description:this.$t.sprintf(this.$t.__("This enables support for the Enhanced Link Attribution in Google Analytics.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"enhancedLinkAttribution",!0))},{parent:"googleAnalytics",option:"trackOutboundLinks",label:this.$t.__("Track Outbound Links",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking outbound links with Google Analytics.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackOutboundLinks",!0))},{parent:"googleAnalytics",option:"enhancedEcommerce",label:this.$t.__("Enhanced Ecommerce",this.$td),type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables support for the Enhanced Ecommerce in Google Analytics.%1$s%2$s",this.$td),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"enhancedEcommerce",!0))},{parent:"googleAnalytics",option:"trackOutboundForms",label:this.$t.__("Track Outbound Forms",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking outbound forms with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackOutboundForms",!0))},{parent:"googleAnalytics",option:"trackEvents",label:this.$t.__("Track Events",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking events with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackEvents",!0))},{parent:"googleAnalytics",option:"trackUrlChanges",label:this.$t.__("Track URL Changes",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking URL changes for single pages with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackUrlChanges",!0))},{parent:"googleAnalytics",option:"trackVisibility",label:this.$t.__("Track Page Visibility",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking how long pages are in visible state with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackVisibility",!0))},{parent:"googleAnalytics",option:"trackMediaQueries",label:this.$t.__("Track Media Queries",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking media queries with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackMediaQueries",!0))},{parent:"googleAnalytics",option:"trackImpressions",label:this.$t.__("Track Elements Visibility",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking when elements are visible within the viewport with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackImpressions",!0))},{parent:"googleAnalytics",option:"trackScrollbar",label:this.$t.__("Track Page Scrolling",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking how far down a user scrolls a page with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackScrollbar",!0))},{parent:"googleAnalytics",option:"trackSocial",label:this.$t.__("Track Facebook and Twitter",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This enables tracking interactions with the official Facebook and Twitter widgets with Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackSocial",!0))},{parent:"googleAnalytics",option:"trackCleanUrl",label:this.$t.__("Ensure URL Consistency",this.$td),pro:!0,type:"radio-toggle",options:[{label:this.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:this.$constants.GLOBAL_STRINGS.yes,value:!0}],displayIf:["id","advanced","!gtmContainerId"],description:this.$t.sprintf(this.$t.__("This ensures consistency in URL paths reported to Google Analytics.%1$s%2$s",this.$tdPro),"<br>",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"trackCleanUrl",!0))},{parent:"googleAnalytics",option:"gtmContainerId",label:this.$t.__("Google Tag Manager Container ID",this.$td),pro:!0,placeholder:"GTM-XXXXXX",description:this.$t.sprintf(this.$t.__("Get your Google Tag Manager ID in your %1$s.",this.$td),this.$links.getDocLink(this.$t.__("Google Tag Manager account",this.$tdPro),"gtmContainerId"))}]}]}}),methods:Object(n["a"])(Object(n["a"])({},Object(a["b"])(["installPlugins"])),{},{updateValue:function(t,i,e){if(t){var s=this.options.deprecated.webmasterTools[i.parent][i.option];return s.push(e.value),void this.$set(this.options.deprecated.webmasterTools[i.parent],i.option,s)}var o=this.options.deprecated.webmasterTools[i.parent][i.option].findIndex((function(t){return t===e.value}));-1!==o&&this.$delete(this.options.deprecated.webmasterTools[i.parent][i.option],o)},getValue:function(t,i){return this.options.deprecated.webmasterTools[t.parent][t.option].includes(i.value)},installMi:function(){var t=this;this.installingPlugin=!0,this.installPlugins([{plugin:"miLite",type:"plugin"}]).then((function(i){t.installingPlugin=!1,i.body.failed.length?t.miInstalledFailed=!0:(t.miInstalled=!0,setTimeout((function(){t.showMiPromo=!1,t.$aioseo.plugins.miLite.activated=!0,window.aioseo.plugins.miLite.activated=!0}),3e3))})).catch((function(t){console.error(t)}))},getLinkWrapper:function(t,i){return this.$t.sprintf('<a href="%1$s" target="_blank">%2$s</a>',t,i)},getOrder:function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=this.tools.findIndex((function(i){return i.slug===t.slug}));return i?this.getRow(this.columnsPerRow-1,e):e},getRow:function(t,i){return i-1<t?t:this.getRow(t+this.columnsPerRow,i)},toggleActiveTool:function(t){this.activeTool!==t?this.activeTool=t:this.activeTool=null},maybeChangeColumnsPerRow:function(){window.matchMedia("(max-width: 600px)").matches&&(this.columnsPerRow=1),window.matchMedia("(min-width: 600px) and (max-width: 912px)").matches&&(this.columnsPerRow=2),window.matchMedia("(min-width: 912px) and (max-width: 1042px)").matches&&(this.columnsPerRow=3),window.matchMedia("(min-width: 1042px)").matches&&(this.columnsPerRow=4)},isConnected:function(t){return t.settings[0].parent?this.options.deprecated.webmasterTools[t.settings[0].parent][t.settings[0].option]&&!this.$aioseo.plugins.miLite.activated:this.options.webmasterTools[t.settings[0].option]},shouldDisplaySetting:function(t){var i=this;if(this.isUnlicensed&&t.pro)return!1;if(!t.displayIf)return!0;if("string"===typeof t.displayIf)return t.displayIf.startsWith("!")?!this.options.deprecated.webmasterTools[t.parent][t.displayIf.replace("!","")]:this.options.deprecated.webmasterTools[t.parent][t.displayIf];if(Array.isArray(t.displayIf)){var e=[];return t.displayIf.forEach((function(s){e.push(s.startsWith("!")?!i.options.deprecated.webmasterTools[t.parent][s.replace("!","")]:i.options.deprecated.webmasterTools[t.parent][s])})),e.every((function(t){return t}))}return!1}}),beforeDestroy:function(){window.removeEventListener("resize",this.maybeChangeColumnsPerRow)},mounted:function(){var t=this;this.maybeChangeColumnsPerRow(),this.$nextTick((function(){return t.tools.forEach((function(i){t.getOrder(i),t.getOrder(i,!0)}))})),window.addEventListener("resize",this.maybeChangeColumnsPerRow)}},c=l,d=(e("e57a"),e("2877")),p=Object(d["a"])(c,s,o,!1,null,null,null);i["default"]=p.exports}}]);