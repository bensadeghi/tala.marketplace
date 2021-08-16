(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[779],{491:function(e){"use strict";e.exports=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract TalaNFT","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchItemsCreated","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct TalaMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct TalaMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMyNFTs","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"}],"internalType":"struct TalaMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"updateMarketItem","outputs":[],"stateMutability":"payable","type":"function"}]}')},2025:function(e,t,n){"use strict";n.d(t,{k:function(){return a},A:function(){return r}});var a="0xe941fa8abd4eB58637599C3f5430eD97a07D3a80",r="0x7e0692511545efdD17860A87ca1947F032575139"},2605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(7757),r=n.n(a),i=n(5893),s=n(6156),p=n(2137),u=n(7294),o=n(241),c=n(387),l=n(7616),d=n(5241),y=n(1163),f=n(2484),m=n.n(f),b=n(2025),T=n(491);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,d.create)("https://ipfs.infura.io:5001/api/v0");function v(){var e=(0,u.useState)(null),t=e[0],n=e[1],a=(0,u.useState)({price:"",name:"",description:""}),s=a[0],d=a[1],f=(0,y.useRouter)();function h(){return(h=(0,p.Z)(r().mark((function e(t){var a,i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],e.prev=1,e.next=4,g.add(a,{progress:function(e){return console.log("received: ".concat(e))}});case 4:i=e.sent,s="https://ipfs.infura.io/ipfs/".concat(i.path),n(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error uploading file: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(){return(v=(0,p.Z)(r().mark((function e(){var n,a,i,p,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.name,a=s.description,i=s.price,n&&a&&Number(i)==i&&t){e.next=3;break}return e.abrupt("return");case 3:return p=JSON.stringify({name:n,description:a,image:t}),e.prev=4,e.next=7,g.add(p);case 7:u=e.sent,w("https://ipfs.infura.io/ipfs/".concat(u.path)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error uploading file: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,p.Z)(r().mark((function e(t){var n,a,i,p,u,d,y,h;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(m()),e.next=3,n.connect();case 3:return a=e.sent,i=new o.Q(a),p=i.getSigner(),u=new c.CH(b.A,T.Mt,p),d=l.vz(s.price,"ether"),e.next=10,u.listingPrice();case 10:return y=(y=e.sent).toString(),e.next=14,u.createMarketItem(t,d,{value:y});case 14:return h=e.sent,e.next=17,h.wait();case 17:f.push("/");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsxs)("div",{className:"w-1/2 flex flex-col pb-12",children:[(0,i.jsx)("h2",{className:"text-2xl py-2 text-gold text-center",children:"Create an NFT"}),(0,i.jsx)("input",{placeholder:"Asset Name",className:"mt-8 border rounded p-4",onChange:function(e){return d(x(x({},s),{},{name:e.target.value}))}}),(0,i.jsx)("textarea",{placeholder:"Asset Description",className:"mt-2 border rounded p-4",onChange:function(e){return d(x(x({},s),{},{description:e.target.value}))}}),(0,i.jsx)("input",{placeholder:"Asset Price in ETH",className:"mt-2 border rounded p-4",onChange:function(e){return d(x(x({},s),{},{price:e.target.value}))}}),(0,i.jsx)("input",{type:"file",name:"Asset",className:"my-4 text-gold",onChange:function(e){return h.apply(this,arguments)}}),t&&(0,i.jsx)("img",{className:"rounded mt-4",width:"350",src:t}),(0,i.jsx)("button",{onClick:function(){return v.apply(this,arguments)},className:"font-bold mt-4 bg-gold text-black rounded p-4 shadow-lg",children:"Create NFT and List on Marketplace"})]})})}},1932:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-item",function(){return n(2605)}])},8677:function(){},2808:function(){},7005:function(){},6937:function(){},6784:function(){},8795:function(){}},function(e){e.O(0,[277,87,977,774,888,179],(function(){return t=1932,e(e.s=t);var t}));var t=e.O();_N_E=t}]);