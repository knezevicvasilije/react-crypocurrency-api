(this["webpackJsonpreact-crypocurrency-api"]=this["webpackJsonpreact-crypocurrency-api"]||[]).push([[0],{19:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(2),n=t.n(a),r=t(13),s=t.n(r),i=t(4),o=(t(19),t(14)),l=t.n(o),p=(t(38),t(0)),j=function(e){var c=e.image,t=e.name,a=e.symbol,n=e.price,r=e.volume,s=e.priceChange,i=e.marketcap;return Object(p.jsx)("div",{className:"coin-container",children:Object(p.jsxs)("div",{className:"coin-row",children:[Object(p.jsxs)("div",{className:"coin",children:[Object(p.jsx)("img",{src:c,alt:"crypto"}),Object(p.jsx)("h1",{children:t}),Object(p.jsx)("p",{className:"coin-symbol",children:a})]}),Object(p.jsxs)("div",{className:"coin-data",children:[Object(p.jsxs)("p",{className:"coin-price",children:["$",n]}),Object(p.jsxs)("p",{className:"coin-volume",children:["$",r.toLocaleString()]}),s<0?Object(p.jsxs)("p",{className:"coin-percent red",children:[s.toFixed(2),"%"]}):Object(p.jsxs)("p",{className:"coin-percent green",children:[s.toFixed(2),"%"]}),Object(p.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})};var m=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),o=s[0],m=s[1];Object(a.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){n(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toString().toLowerCase())}));return Object(p.jsxs)("div",{className:"coin-app",children:[Object(p.jsxs)("div",{className:"coin-search",children:[Object(p.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(p.jsx)("form",{children:Object(p.jsx)("input",{type:"text",onChange:function(e){m(e.target.value)},className:"coin-input",placeholder:"Search"})})]}),d.map((function(e){return Object(p.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,volume:e.total_volume,price:e.current_price,priceChange:e.price_change_percentage_24h,marketcap:e.market_cap},e.id)}))]})};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2cb54970.chunk.js.map