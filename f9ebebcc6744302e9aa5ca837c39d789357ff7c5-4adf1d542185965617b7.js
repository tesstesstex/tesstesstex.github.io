/*! For license information please see f9ebebcc6744302e9aa5ca837c39d789357ff7c5-4adf1d542185965617b7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/d1K":function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("iSRb"),u=n.n(o),s=function(e){var t=e.author,n=e.isIndex;return r.a.createElement("div",{className:u.a.author},r.a.createElement(i.Link,{to:"/"},r.a.createElement("img",{src:Object(i.withPrefix)(t.photo),className:u.a.author__photo,width:"75",height:"75",alt:t.name})),!0===n?r.a.createElement("h1",{className:u.a.author__title},r.a.createElement(i.Link,{className:u.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:u.a.author__title},r.a.createElement(i.Link,{className:u.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:u.a.author__subtitle},t.bio))},c=n("7Qib"),l=n("euHg"),d=n.n(l),m=function(e){var t=e.name,n=e.icon;return r.a.createElement("svg",{className:d.a.icon,viewBox:n.viewBox},r.a.createElement("title",null,t),r.a.createElement("path",{d:n.path}))},f=n("aU/I"),h=n.n(f),g=function(e){var t=e.contacts;return r.a.createElement("div",{className:h.a.contacts},r.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?r.a.createElement("li",{className:h.a["contacts__list-item"],key:e},r.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(c.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(m,{name:e,icon:Object(c.b)(e)}))):null}))))},w=n("Nrk+"),v=n.n(w),b=function(e){var t=e.copyright;return r.a.createElement("div",{className:v.a.copyright},t)},p=n("je8k"),_=n.n(p),y=function(e){var t=e.menu;return r.a.createElement("nav",{className:_.a.menu},r.a.createElement("ul",{className:_.a.menu__list},t.map((function(e){return r.a.createElement("li",{className:_.a["menu__list-item"],key:e.path},r.a.createElement(i.Link,{to:e.path,className:_.a["menu__list-item-link"],activeClassName:_.a["menu__list-item-link--active"]},e.label))}))))},k=n("SySy"),x=n.n(k),M=n("gGy4"),T=function(e){var t=e.isIndex,n=Object(M.b)(),a=n.author,i=n.copyright,o=n.menu;return r.a.createElement("div",{className:x.a.sidebar},r.a.createElement("div",{className:x.a.sidebar__inner},r.a.createElement(s,{author:a,isIndex:t}),r.a.createElement(y,{menu:o}),r.a.createElement(g,{contacts:a.contacts}),r.a.createElement(b,{copyright:i})))}},"1xLx":function(e,t,n){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,n){"use strict";n.d(t,"a",(function(){return ne}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz");function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function u(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){o(1,arguments);var t=u(e);return!isNaN(t)}var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var d={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=a.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(l,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(l,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(c.length)}}}var g,w={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:d,formatRelative:function(e,t,n,a){return m[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(g.matchPattern);if(!r)return null;var i=r[0],o=n.match(g.parsePattern);if(!o)return null;var u=g.valueCallback?g.valueCallback(o[0]):o[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function b(e,t){o(2,arguments);var n=u(e).getTime(),a=v(t);return new Date(n+a)}function p(e,t){o(2,arguments);var n=v(t);return b(e,-n)}function _(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var y={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return _("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):_(n+1,2)},d:function(e,t){return _(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return _(e.getUTCHours()%12||12,t.length)},H:function(e,t){return _(e.getUTCHours(),t.length)},m:function(e,t){return _(e.getUTCMinutes(),t.length)},s:function(e,t){return _(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return _(Math.floor(a*Math.pow(10,n-3)),t.length)}};function k(e){o(1,arguments);var t=1,n=u(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function x(e){o(1,arguments);var t=u(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=k(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var s=k(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function M(e){o(1,arguments);var t=x(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=k(n);return a}function T(e,t){o(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:v(r),s=null==n.weekStartsOn?i:v(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=u(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function C(e,t){o(1,arguments);var n=u(e,t),a=n.getUTCFullYear(),r=t||{},i=r.locale,s=i&&i.options&&i.options.firstWeekContainsDate,c=null==s?1:v(s),l=null==r.firstWeekContainsDate?c:v(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,l),d.setUTCHours(0,0,0,0);var m=T(d,t),f=new Date(0);f.setUTCFullYear(a,0,l),f.setUTCHours(0,0,0,0);var h=T(f,t);return n.getTime()>=m.getTime()?a+1:n.getTime()>=h.getTime()?a:a-1}function E(e,t){o(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:v(r),u=null==n.firstWeekContainsDate?i:v(n.firstWeekContainsDate),s=C(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var l=T(c,t);return l}var P="midnight",N="noon",D="morning",U="afternoon",S="evening",W="night";function O(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+_(i,2)}function Y(e,t){return e%60==0?(e>0?"-":"+")+_(Math.abs(e)/60,2):q(e,t)}function q(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+_(Math.floor(r/60),2)+n+_(r%60,2)}var F={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return y.y(e,t)},Y:function(e,t,n,a){var r=C(e,a),i=r>0?r:1-r;return"YY"===t?_(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):_(i,t.length)},R:function(e,t){return _(x(e),t.length)},u:function(e,t){return _(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return _(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return _(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return y.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return _(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){o(1,arguments);var n=u(e),a=T(n,t).getTime()-E(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):_(r,t.length)},I:function(e,t,n){var a=function(e){o(1,arguments);var t=u(e),n=k(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):_(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):y.d(e,t)},D:function(e,t,n){var a=function(e){o(1,arguments);var t=u(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):_(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return _(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return _(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return _(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?N:0===r?P:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?S:r>=12?U:r>=4?D:W,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return y.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):y.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):_(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):_(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):y.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):y.s(e,t)},S:function(e,t){return y.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Y(r);case"XXXX":case"XX":return q(r);case"XXXXX":case"XXX":default:return q(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return Y(r);case"xxxx":case"xx":return q(r);case"xxxxx":case"xxx":default:return q(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+O(r,":");case"OOOO":default:return"GMT"+q(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+O(r,":");case"zzzz":default:return"GMT"+q(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return _(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return _((a._originalDate||e).getTime(),t.length)}};function L(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function j(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var z={p:j,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return L(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",L(r,t)).replace("{{time}}",j(i,t))}};function H(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var A=["D","DD"],B=["YY","YYYY"];function X(e){return-1!==A.indexOf(e)}function G(e){return-1!==B.indexOf(e)}function Q(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function Z(e,t,n){o(2,arguments);var a=String(t),r=n||{},i=r.locale||w,c=i.options&&i.options.firstWeekContainsDate,l=null==c?1:v(c),d=null==r.firstWeekContainsDate?l:v(r.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,f=null==m?0:v(m),h=null==r.weekStartsOn?f:v(r.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=u(e);if(!s(g))throw new RangeError("Invalid time value");var b=H(g),_=p(g,b),y={firstWeekContainsDate:d,weekStartsOn:h,locale:i,_originalDate:g},k=a.match(I).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,z[t])(e,i.formatLong,y):e})).join("").match(R).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return $(n);var o=F[a];if(o)return!r.useAdditionalWeekYearTokens&&G(n)&&Q(n,t,e),!r.useAdditionalDayOfYearTokens&&X(n)&&Q(n,t,e),o(_,n,i.localize,y);if(a.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return k}function $(e){return e.match(J)[1].replace(V,"'")}var ee=n("1xLx"),te=n.n(ee),ne=function(e){var t=e.edges;return r.a.createElement("div",{className:te.a.feed},t.map((function(e){return r.a.createElement("div",{className:te.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:te.a["feed__item-meta"]},r.a.createElement("time",{className:te.a["feed__item-meta-time"],dateTime:Z(new Date(e.node.frontmatter.date),"yyyy/MM/dd")},Z(new Date(e.node.frontmatter.date),"yyyy/MM/dd")),r.a.createElement("span",{className:te.a["feed__item-meta-divider"]}),r.a.createElement("span",{className:te.a["feed__item-meta-category"]},r.a.createElement(i.Link,{to:e.node.fields.categorySlug,className:te.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:te.a["feed__item-title"]},r.a.createElement(i.Link,{className:te.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",null,r.a.createElement(i.Link,{className:te.a["feed__item-description"],to:e.node.fields.slug},e.node.frontmatter.description),r.a.createElement("br",null),r.a.createElement(i.Link,{to:e.node.fields.slug},"read more")))})))}},"Nrk+":function(e,t,n){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,n){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("RBgx"),o=n.n(i),u=function(e){var t=e.title,n=e.children,i=Object(a.useRef)();return Object(a.useEffect)((function(){i.current.scrollIntoView()})),r.a.createElement("div",{ref:i,className:o.a.page},r.a.createElement("div",{className:o.a.page__inner},t&&r.a.createElement("h1",{className:o.a.page__title},t),r.a.createElement("div",{className:o.a.page__body},n)))}},SySy:function(e,t,n){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U4DU:function(e,t,n){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(r.apply(this,a));else if("object"===i)if(a.toString===Object.prototype.toString)for(var o in a)n.call(a,o)&&a[o]&&e.push(this&&this[o]||o);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"aU/I":function(e,t,n){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,n){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,n){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,n){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),i=n("UbMB"),o=n.n(i),u=n("Wbzz"),s=n("WlAH"),c=n("U4DU"),l=n.n(c),d=o.a.bind(l.a),m=function(e){var t=e.prevPagePath,n=e.nextPagePath,a=e.hasNextPage,i=e.hasPrevPage,o=d({"pagination__prev-link":!0,"pagination__prev-link--disable":!i}),c=d({"pagination__next-link":!0,"pagination__next-link--disable":!a});return r.a.createElement("div",{className:l.a.pagination},r.a.createElement("div",{className:l.a.pagination__prev},r.a.createElement(u.Link,{rel:"prev",to:i?t:"/",className:o},s.b.PREV_PAGE)),r.a.createElement("div",{className:l.a.pagination__next},r.a.createElement(u.Link,{rel:"next",to:a?n:"/",className:c},s.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=f9ebebcc6744302e9aa5ca837c39d789357ff7c5-4adf1d542185965617b7.js.map