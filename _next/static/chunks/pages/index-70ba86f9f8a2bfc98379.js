(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6124:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7757),a=n.n(r),s=n(5893),c=n(2137),i=n(3226),l=n(387),o=n(7616),u=n(241),d=n(7294),p=n(9669),x=n.n(p),h=n(2484),f=n.n(h),m=n(2025),g=n(6102),w=n(491);function v(){var e=(0,d.useState)([]),t=e[0],n=e[1],r=(0,d.useState)("not-loaded"),p=r[0],h=r[1];function v(){return N.apply(this,arguments)}function N(){return(N=(0,c.Z)(a().mark((function e(){var t,r,s,u,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new i.r("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),r=new l.CH(m.k,g.Mt,t),s=new l.CH(m.A,w.Mt,t),e.next=5,s.fetchMarketItems();case 5:return u=e.sent,e.next=8,Promise.all(u.map(function(){var e=(0,c.Z)(a().mark((function e(t){var n,s,c,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.tokenURI(t.itemId);case 2:return n=e.sent,e.next=5,x().get(n);case 5:return s=e.sent,c=o.bM(t.price.toString(),"ether"),i={price:c,itemId:t.itemId.toNumber(),seller:t.seller,owner:t.owner,image:s.data.image,name:s.data.name,description:s.data.description,url:n},e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:d=e.sent,n(d),h("loaded");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,c.Z)(a().mark((function e(t){var n,r,s,c,i,d,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(f()),e.next=3,n.connect();case 3:return r=e.sent,s=new u.Q(r),c=s.getSigner(),i=new l.CH(m.A,w.Mt,c),d=o.vz(t.price.toString(),"ether"),e.next=10,i.createMarketSale(t.itemId,{value:d});case 10:return p=e.sent,e.next=13,p.wait();case 13:v();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,d.useEffect)((function(){v()}),[]),"loaded"!==p||t.length?(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl py-2 text-gold text-center",children:"Purchase NFTs"}),(0,s.jsx)("div",{className:"flex items-center justify-center px-4",style:{maxWidth:"1600px"},children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,s.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,s.jsx)("img",{src:e.image}),(0,s.jsx)("a",{className:"text-gray-500 pl-4",target:"_blank",rel:"noreferrer",href:e.url,children:"Meta on IPFS"}),(0,s.jsxs)("div",{className:"p-4 pb-0",children:[(0,s.jsx)("p",{style:{height:"64px"},className:"text-2xl font-semibold text-gray-100",children:e.name}),(0,s.jsx)("div",{style:{height:"70px",overflow:"hidden"},children:(0,s.jsx)("p",{className:"text-gray-400",children:e.description})})]}),(0,s.jsxs)("div",{className:"p-4 pt-0 bg-black",children:[(0,s.jsxs)("p",{className:"text-2xl mb-4 text-gold",children:[e.price," ETH"]}),(0,s.jsx)("button",{className:"w-full bg-gold text-black font-bold py-2 px-12 rounded",onClick:function(){return function(e){return b.apply(this,arguments)}(e)},children:"Purchase"})]})]},t)}))})})]}):(0,s.jsx)("h1",{className:"px-20 py-10 text-3xl text-gold",children:"No items in marketplace"})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6124)}])}},function(e){e.O(0,[277,87,669,230,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);