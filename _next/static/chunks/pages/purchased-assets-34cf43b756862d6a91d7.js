(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28],{3351:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(7757),s=r.n(n),c=r(6156),a=r(5893),i=r(2137),u=r(241),o=r(387),l=r(7616),p=r(7294),d=r(9669),f=r.n(d),x=r(2484),h=r.n(x),w=r(2025),m=r(6102),g=r(491);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(){var e=(0,p.useState)([]),t=e[0],r=e[1],n=(0,p.useState)({price:""}),c=n[0],d=n[1],x=(0,p.useState)("not-loaded"),b=x[0],j=x[1];function y(){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)(s().mark((function e(){var t,n,c,a,p,d,x,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(h())({network:"mainnet",cacheProvider:!0}),e.next=3,t.connect();case 3:return n=e.sent,c=new u.Q(n),a=c.getSigner(),p=new o.CH(w.A,g.Mt,a),d=new o.CH(w.k,m.Mt,c),e.next=10,p.fetchMyNFTs();case 10:return x=e.sent,e.next=13,Promise.all(x.map(function(){var e=(0,i.Z)(s().mark((function e(t){var r,n,c,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.tokenURI(t.itemId);case 2:return r=e.sent,e.next=5,f().get(r);case 5:return n=e.sent,c=l.bM(t.price.toString(),"ether"),a={price:c,itemId:t.itemId.toNumber(),seller:t.seller,owner:t.owner,image:n.data.image},e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 13:b=e.sent,r(b),j("loaded");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,i.Z)(s().mark((function e(t){var r,n,a,i,p,d,f,x,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=c.price,!(Number(r)!=r||Number(r)<=0)){e.next=3;break}return e.abrupt("return");case 3:return r=l.vz(r,"ether"),n=new(h()),e.next=7,n.connect();case 7:return a=e.sent,i=new u.Q(a),p=i.getSigner(),d=new o.CH(w.A,g.Mt,p),f=new o.CH(w.k,m.Mt,i),e.next=14,d.listingPrice();case 14:return x=e.sent,e.next=17,f.connect(p).setApprovalForAll(w.A,!0);case 17:return b=e.sent,e.next=20,b.wait();case 20:return e.next=22,d.updateMarketItem(t.itemId,r,{value:x});case 22:return b=e.sent,e.next=25,b.wait();case 25:y();case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,p.useEffect)((function(){y()}),[]),"loaded"!==b||t.length?(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl py-2 text-gold text-center",children:"Items Purchased"}),(0,a.jsx)("div",{className:"p-4 flex justify-center",children:(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsxs)("div",{className:"p-4 bg-black",children:[(0,a.jsxs)("p",{className:"text-2xl text-white pb-2",children:["Bought for ",e.price," ETH"]}),(0,a.jsx)("input",{placeholder:"Asset Price in ETH",className:"w-full border rounded p-2",onChange:function(e){return d(v(v({},c),{},{price:e.target.value}))}}),(0,a.jsx)("button",{className:"w-full bg-gold text-black font-bold py-2 px-12 rounded",onClick:function(){return function(e){return O.apply(this,arguments)}(e)},children:"Re-list for Sale"})]})]},t)}))})})]}):(0,a.jsx)("h1",{className:"py-10 px-20 text-3xl text-gold  text-center",children:"No assets purchased"})}},423:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/purchased-assets",function(){return r(3351)}])}},function(e){e.O(0,[277,87,669,230,774,888,179],(function(){return t=423,e(e.s=t);var t}));var t=e.O();_N_E=t}]);