(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[433],{1051:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7757),s=n.n(r),c=n(5893),a=n(2137),i=n(241),d=n(387),l=n(7616),o=n(7294),u=n(9669),x=n.n(u),h=n(2484),p=n.n(h),m=n(2025),f=n(6102),g=n(491);function w(){var e=(0,o.useState)([]),t=e[0],n=e[1],r=(0,o.useState)([]),u=r[0],h=r[1],w=(0,o.useState)("not-loaded"),v=w[0],N=w[1];function j(){return(j=(0,a.Z)(s().mark((function e(){var t,r,c,o,u,w,v,j,_;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new(p())({network:"mainnet",cacheProvider:!0}),e.next=3,t.connect();case 3:return r=e.sent,c=new i.Q(r),o=c.getSigner(),u=new d.CH(m.A,g.Mt,o),w=new d.CH(m.k,f.Mt,c),e.next=10,u.fetchItemsCreated();case 10:return v=e.sent,e.next=13,Promise.all(v.map(function(){var e=(0,a.Z)(s().mark((function e(t){var n,r,c,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.tokenURI(t.itemId);case 2:return n=e.sent,e.next=5,x().get(n);case 5:return r=e.sent,c=l.bM(t.price.toString(),"ether"),a={price:c,itemId:t.itemId.toNumber(),seller:t.seller,owner:t.owner,sold:t.sold,image:r.data.image},e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 13:j=e.sent,_=j.filter((function(e){return e.sold})),h(_),n(j),N("loaded");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),"loaded"!==v||t.length?(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:"text-2xl py-2 text-gold text-center",children:"Items Created"}),(0,c.jsx)("div",{className:"p-4",children:(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:t.map((function(e,t){return(0,c.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,c.jsx)("img",{src:e.image,className:"rounded"}),(0,c.jsx)("div",{className:"p-4 bg-black",children:(0,c.jsxs)("p",{className:"text-2xl text-white",children:["Price - ",e.price," ETH"]})})]},t)}))})}),(0,c.jsx)("div",{className:"px-4",children:Boolean(u.length)&&(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:"text-2xl py-2 text-gold text-center",children:"Items Sold"}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:u.map((function(e,t){return(0,c.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,c.jsx)("img",{src:e.image,className:"rounded"}),(0,c.jsx)("div",{className:"p-4 bg-black",children:(0,c.jsxs)("p",{className:"text-2xl text-white",children:["Price - ",e.price," ETH"]})})]},t)}))})]})})]}):(0,c.jsx)("h1",{className:"py-10 px-20 text-3xl text-gold text-center",children:"No assets created"})}},4753:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/created-assets",function(){return n(1051)}])}},function(e){e.O(0,[277,87,669,230,774,888,179],(function(){return t=4753,e(e.s=t);var t}));var t=e.O();_N_E=t}]);