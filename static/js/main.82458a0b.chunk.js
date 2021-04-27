(this["webpackJsonptest-day-boilerplate"]=this["webpackJsonptest-day-boilerplate"]||[]).push([[0],{438:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(42),i=n.n(o),s=n(16),l=n(226),d=n(33);!function(e){e.GET_COVID_DATA="FETCH_COVID_DATA_BY_COUNTRY",e.GET_COVID_DATA_SUCCESS="COVID_DATA_SUCCESS",e.GET_CHART_DATA="FETCH_CHART_DATA",e.GET_CHART_DATA_SUCCESS="CHART_DATA_SUCCESS",e.LOADING_FALSE="LOADING_FALSE",e.LOADING_TRUE="LOADING_TRUE",e.ERROR_TRUE="ERROR_TRUE",e.ERROR_FALSE="ERROR_FALSE",e.SET_COUNTRY="SET_COUNTRY",e.SET_GLOBAL_CASES="SET_GLOBAL_CASES",e.TOGGLE_MODAL="TOGGLE_MODAL",e.CONTROL_CHART_PERIOD="CONTROL_CHART_PERIOD"}(r||(r={}));var u,j,b=n(21),O=n.n(b),h=n(50),p=n(18),f=n(10),x=n(11),m="#3E363F";!function(e){e.lightMarker="%23fd5c63",e.mediumMarker="%23E32636",e.mediumStrongMarker="%23D2122E",e.strongMarker="%23AA0000"}(u||(u={}));var g,v,y,w,C,T,A,_,E,S,k,R,D,L,I,G,P,U,N,F,H,M,z,K,B,V,Y,q,W,Q=x.c.button(j||(j=Object(f.a)(["\n  cursor: pointer;\n  border: none;\n  outline: none;\n  padding: 0.5rem 1rem;\n  color: #fff;\n  background: ",";\n  min-width: 5rem;\n"])),m),X=x.c.div(g||(g=Object(f.a)(["\n  width: fit-content;\n  display: flex;\n  gap: 1rem;\n  &:not(:last-child) {\n    margin-right: 1rem;\n  }\n"]))),J=x.c.button(v||(v=Object(f.a)(["\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 0.2rem;\n  outline: none;\n  &:active {\n    transform: scale(1.1);\n  }\n"]))),Z=(Object(x.c)(Q)(y||(y=Object(f.a)(["\n  padding: 0.3rem;\n  font-size: 11px;\n  width: 100%;\n"]))),x.c.button(w||(w=Object(f.a)(["\n  background: none;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 10px;\n  &:hover {\n    color: #ddd;\n  }\n"])),(function(e){var t=e.color;return t||"#000"}))),$=n(145),ee=(n(241),$.a.initializeApp({apiKey:"AIzaSyAlnEQqtB1Fz_KkK3RFziKarBy2qyNUUGs",authDomain:"covidinho-892bd.firebaseapp.com",projectId:"covidinho-892bd",storageBucket:"covidinho-892bd.appspot.com",messagingSenderId:"422531087376",appId:"1:422531087376:web:515f31eecfad907c959e95",measurementId:"G-SVB6HMD83T"})),te=(new $.a.auth.GoogleAuthProvider,ee.auth()),ne=ee,re=(n(439),ne.firestore().collection("locations")),ce=n(117),ae=n.n(ce),oe=n(2),ie=a.a.createContext(null),se=function(){return Object(c.useContext)(ie)},le=function(e){var t=e.children,n=Object(c.useState)(),a=Object(p.a)(n,2),o=a[0],i=a[1],s=Object(c.useState)(!0),l=Object(p.a)(s,2),u=l[0],j=l[1],b=Object(d.b)();Object(c.useEffect)((function(){return te.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]),Object(c.useEffect)((function(){o&&"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,c=t.longitude;ae.a.fromLatLng(n.toString(),c.toString()).then((function(e){var t=function(e){for(var t={country:"",countryCode:""},n=0;n<e.results[0].address_components.length;n++)for(var r=0;r<e.results[0].address_components[n].types.length;r++)switch(e.results[0].address_components[n].types[r]){case"country":t={country:e.results[0].address_components[n].long_name,countryCode:e.results[0].address_components[n].short_name}}return t}(e);b({type:r.SET_COUNTRY,payload:t.countryCode}),b({type:r.GET_CHART_DATA}),function(e,t,n,r,c){var a={country:e,iso2:t,latitude:n,longitude:r};re.doc(c).set(a)}(t.country,t.countryCode,n,c,o.uid)}),(function(e){console.error(e)}))})),b({type:r.SET_COUNTRY,payload:"LT"}),b({type:r.GET_CHART_DATA})}),[o]);var O={currentUser:o,login:function(e,t){return te.signInWithEmailAndPassword(e,t)},signup:function(e,t){return te.createUserWithEmailAndPassword(e,t)},logout:function(){return te.signOut()},resetPassword:function(e){return te.sendPasswordResetEmail(e)}};return Object(oe.jsx)(ie.Provider,{value:O,children:!u&&t})},de=n(39),ue=n.n(de),je=n(224),be=n(31),Oe=x.c.div(C||(C=Object(f.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  min-height: 100px;\n  min-width: 140px;\n  padding: 0.5rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background: #ffff;\n  border-radius: 0.2rem;\n  color: #000;\n  transform: translateY(35%);\n  transition: 0.3s ease-in-out;\n  opacity: 0;\n  z-index: -1;\n  font-size: 16px;\n  ","\n"])),(function(e){return e.driveIn&&Object(x.b)(T||(T=Object(f.a)(["\n      opacity: 1;\n      z-index: 50;\n    "])))})),he=x.c.div(A||(A=Object(f.a)(["\n  position: relative;\n  display: inline-block;\n"]))),pe=d.c,fe=n(45),xe=n.n(fe),me=n(146),ge=n.n(me),ve=x.c.header(_||(_=Object(f.a)(["\n  display: flex;\n  padding: 0.5rem;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(246, 245, 240, 0.6);\n"]))),ye=x.c.div(E||(E=Object(f.a)(["\n  color: #fff;\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n"]))),we=x.c.div(S||(S=Object(f.a)(["\n  padding: 0.5rem;\n"]))),Ce=x.c.div(k||(k=Object(f.a)(["\n  display: flex;\n  background: ",";\n"])),m),Te=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],o=se(),i=o.logout,s=o.currentUser,l=pe((function(e){return e.chartData.globalCases})),u=l.cases,j=l.deaths,b=Object(d.b)(),f=Object(c.useState)(!1),x=Object(p.a)(f,2),m=x[0],g=x[1],v=Object(be.f)(),y=Object(c.useCallback)((function(){g(!0)}),[]),w=Object(c.useCallback)((function(){g(!1)}),[]),C=function(){var e=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,i();case 4:v.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),T=Object(oe.jsx)(ge.a,{animateToNumber:j,includeComma:!0,delay:1e3,config:{tension:89,friction:40},animationType:"calm"}),A=Object(oe.jsx)(ge.a,{animateToNumber:u,includeComma:!0,delay:1e3,config:{tension:89,friction:40},animationType:"calm"}),_=Object(c.useCallback)((function(){b({type:r.TOGGLE_MODAL})}),[]);return Object(oe.jsxs)(ve,{children:[Object(oe.jsx)("h1",{children:"C19"}),Object(oe.jsxs)(ye,{children:[Object(oe.jsxs)(Ce,{children:[Object(oe.jsxs)(we,{children:[Object(oe.jsx)(ue.a,{variant:"p",align:"center",children:"Global cases"}),Object(oe.jsx)(ue.a,{variant:"h4",children:u?A:Object(oe.jsx)(xe.a,{type:"Puff",width:10,height:10,color:"#fff"})})]}),Object(oe.jsxs)(we,{children:[Object(oe.jsx)(ue.a,{variant:"p",align:"center",children:"Deaths"}),Object(oe.jsx)(ue.a,{variant:"h4",children:j?T:Object(oe.jsx)(xe.a,{type:"Puff",width:10,height:10,color:"#fff"})})]})]}),Object(oe.jsx)(Z,{onClick:_,children:"Show all countries"})]}),Object(oe.jsxs)(he,{onMouseEnter:y,onMouseLeave:w,onClick:y,children:[Object(oe.jsx)(J,{children:Object(oe.jsx)(je.a,{size:30})}),Object(oe.jsxs)(Oe,{driveIn:m,children:[Object(oe.jsxs)(ue.a,{variant:"h6",children:["User: ",s.email," "]}),Object(oe.jsx)(Z,{onClick:C,children:"Log out"}),n&&Object(oe.jsx)(ue.a,{variant:"h6",children:n})]})]})]})},Ae=n(440),_e=n(441),Ee=n(445),Se=n(219),ke=n(220),Re=n(104),De=n(446),Le=n(227),Ie=function(){var e=pe((function(e){return e.chartData.vaccinated})),t=Object(c.useState)(),n=Object(p.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){!function(){var t=[];e.timeline&&Object.entries(e.timeline).map((function(e){t.push({date:new Date(e[0]).toLocaleDateString(),Vaccinated:e[1]})})),a(t)}()}),[e]),Object(oe.jsx)(Ae.a,{className:"custom-chart vaccine-chart",minHeight:175,minWidth:300,children:Object(oe.jsxs)(_e.a,{data:r,children:[Object(oe.jsx)("defs",{children:Object(oe.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(oe.jsx)("stop",{offset:"0%",stopColor:"#2451b7",strokeOpacity:.4}),Object(oe.jsx)("stop",{offset:"75%",stopColor:"#2451b7",stopOpacity:.05})]})}),Object(oe.jsx)(Ee.a,{dataKey:"",stroke:"#2451b7",fill:"url(#color)"}),Object(oe.jsx)(Se.a,{dataKey:"date",axisLine:!1,tickLine:!1,stroke:"#000"}),Object(oe.jsx)(ke.a,{dataKey:"Vaccinated",axisLine:!1,tickLine:!1,tickCount:10,stroke:"#000"}),Object(oe.jsx)(Re.a,{}),Object(oe.jsx)(De.a,{opacity:.1,vertical:!1}),Object(oe.jsx)(Le.a,{type:"monotone",dataKey:"Vaccinated",stroke:"#2451b7",fill:"url(#color)"})," "]})})},Ge=x.c.input(R||(R=Object(f.a)(["\n  padding: 0.7rem 0.3rem;\n  border: 1px solid #f5f5f5;\n  width: 100%;\n  font-size: 20px;\n"]))),Pe=x.c.select(D||(D=Object(f.a)(["\n  width: 100%;\n  height: 35px;\n  background: white;\n  color: gray;\n  padding-left: 5px;\n  font-size: 14px;\n  border: none;\n\n  option {\n    color: black;\n    background: white;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 0px 2px 1px;\n  }\n"]))),Ue=x.c.div(L||(L=Object(f.a)(["\n  height: 100vh;\n  display: flex;\n"]))),Ne=x.c.div(I||(I=Object(f.a)(["\n  padding-top: ",";\n  padding-right: ",";\n  padding-bottom: ",";\n  padding-left: ",";\n\n  margin-top: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  margin-left: ",";\n  width: ",";\n"])),(function(e){var t=e.pt;return"".concat(t)}),(function(e){var t=e.pr;return"".concat(t)}),(function(e){var t=e.pb;return"".concat(t)}),(function(e){var t=e.pl;return"".concat(t)}),(function(e){var t=e.mt;return"".concat(t)}),(function(e){var t=e.mr;return"".concat(t)}),(function(e){var t=e.mb;return"".concat(t)}),(function(e){var t=e.ml;return"".concat(t)}),(function(e){var t=e.width;return"".concat(t)})),Fe=x.c.div(G||(G=Object(f.a)(["\n  display: flex;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),He=(x.c.div(P||(P=Object(f.a)(["\n  height: inherit;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),x.c.div(U||(U=Object(f.a)(["\n  width: 100vw;\n  min-height: 5vh;\n  position: absolute;\n  bottom: 0 !important;\n  background: rgb(246, 245, 240);\n  background: linear-gradient(\n    180deg,\n    rgba(246, 245, 240, 0.3617822128851541) 0%,\n    rgba(21, 21, 21, 0.7035189075630253) 0%,\n    rgba(21, 21, 21, 1) 100%\n  );\n  padding: 2rem;\n  box-shadow: 0rem 0rem 15em 0.2em #fff;\n  color: #fff;\n"])))),Me=x.c.div(N||(N=Object(f.a)(["\n  width: 80vw;\n  color: #fff;\n  padding: 0.5rem;\n  border: 1px solid #fff;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media only screen and (max-width: 975px) {\n    width: 100vw;\n    height: 85vh;\n  }\n"]))),ze=x.c.div(F||(F=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Ke=x.c.footer(H||(H=Object(f.a)(["\n  width: 100vw;\n  min-height: 10vh;\n  position: absolute;\n  bottom: 0 !important;\n  background: rgb(246, 245, 240, 0.98);\n  padding: 1rem 2rem 0.2rem 1rem;\n"]))),Be=x.c.div(M||(M=Object(f.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 1rem;\n  color: #ddd;\n  @media only screen and (max-width: 600px) {\n    display: block;\n  }\n"]))),Ve=x.c.div(z||(z=Object(f.a)(["\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n"]))),Ye=function(){var e=pe((function(e){return e.chartData})).countriesInfo,t=Object(d.b)();return pe((function(e){return e.loadingAndError})).error||!e.length?Object(oe.jsx)(He,{children:"No data available on this destination, unfortunately."}):Object(oe.jsxs)(Ke,{children:[Object(oe.jsx)(ue.a,{variant:"h1",color:"#000",marginB:"15",align:"right",children:e.length&&e[0].country}),Object(oe.jsxs)(Be,{children:[Object(oe.jsx)(ue.a,{variant:"h4",marginB:"10",color:"#000",children:"Total cases/deaths/recovered"}),Object(oe.jsx)(Ne,{width:"300px",children:Object(oe.jsxs)(Pe,{placeholder:"Control chart",onChange:function(e){t({type:r.CONTROL_CHART_PERIOD,payload:e.target.value}),t({type:r.GET_CHART_DATA})},children:[Object(oe.jsx)("option",{value:"360",children:"Control chart"})," ",Object(oe.jsx)("option",{value:"7",children:"7 days"}),Object(oe.jsx)("option",{value:"30",children:"30 days"}),Object(oe.jsx)("option",{value:"60",children:"60 days"})]})}),Object(oe.jsx)(Ve,{children:Object(oe.jsx)(ue.a,{variant:"h4",marginB:"10",color:"#000",children:"Total vaccinated"})})]}),Object(oe.jsxs)(Fe,{children:[" ",Object(oe.jsx)(Ae.a,{className:"custom-chart covid-chart",minWidth:300,height:175,children:Object(oe.jsxs)(_e.a,{data:e&&e,children:[Object(oe.jsx)(Ee.a,{dataKey:"Cases"}),Object(oe.jsx)(Se.a,{dataKey:"Date",axisLine:!1,tickLine:!1,stroke:"#000"}),Object(oe.jsx)(ke.a,{dataKey:"Cases",axisLine:!1,tickLine:!1,tickCount:10,stroke:"#000"}),Object(oe.jsx)(Re.a,{}),Object(oe.jsx)(De.a,{opacity:.1,vertical:!1}),Object(oe.jsx)(Le.a,{type:"monotone",dataKey:"Cases",stroke:"#2451b7",fill:"url(#color)"}),Object(oe.jsx)(Le.a,{type:"monotone",dataKey:"Recovered",stroke:"green"}),Object(oe.jsx)(Le.a,{type:"monotone",dataKey:"Deaths",stroke:"#d12b28"})]})}),Object(oe.jsx)(Ie,{})]})]})},qe=n(81),We=function(e){return e<1e3?10:e>1e3&&e<3e3?15:e>3e3&&e<1e4?25:e<100?5:e>1e4&&e<1e5?35:50},Qe=n.p+"static/media/oval.9a66bd4d.svg",Xe=n.p+"static/media/greenOval.5e6890df.svg",Je=function(e){var t=e.countryInfo,n=e.cases,r=e.onMouseOver,c=e.onMouseOut,a=e.onClick,o=pe((function(e){return e.chartData})).countryCode;return Object(oe.jsx)(qe.c,{options:{optimized:!0},onMouseOut:c,onMouseOver:r,position:{lat:t.lat,lng:t.long},clickable:!0,onClick:a,icon:{url:o===t.iso2?Xe:Qe,anchor:new google.maps.Point(17,46),origin:new window.google.maps.Point(0,0),scaledSize:new google.maps.Size(We(n),We(n))}})},Ze=(n(418),x.c.div(K||(K=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 10rem;\n"])))),$e=function(e){var t=e.selected,n=pe((function(e){return e.loadingAndError})).loading;return Object(oe.jsx)(qe.b,{position:{lat:t.countryInfo.lat,lng:t.countryInfo.long},children:Object(oe.jsxs)("div",{children:[Object(oe.jsx)(Ne,{mb:"0.3rem",children:Object(oe.jsxs)(Ze,{children:[Object(oe.jsx)("h5",{children:t.country}),Object(oe.jsx)("img",{srcSet:t.countryInfo.flag,style:{height:"15px"}})]})}),Object(oe.jsxs)(ue.a,{variant:"h6",marginT:"10",children:["Population: ",t.population]}),Object(oe.jsxs)(ue.a,{variant:"h6",marginT:"5",marginB:"10",children:["Total cases: ",t.cases]}),n?Object(oe.jsx)(xe.a,{type:"Puff",width:10,height:10,color:"#000"}):""]})})},et=n(123),tt=n(91),nt=function(e){var t=e.panTo,n=Object(et.a)(),r=n.ready,c=n.value,a=n.suggestions,o=a.status,i=a.data,s=n.setValue,l=n.clearSuggestions,d=function(){var e=Object(h.a)(O.a.mark((function e(n){var r,c,a,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(n,!1),l(),e.prev=2,e.next=5,Object(et.b)({address:n});case 5:return r=e.sent,e.next=8,Object(et.c)(r[0]);case 8:c=e.sent,a=c.lat,o=c.lng,t({lat:a,lng:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("\ud83d\ude31 Error: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(oe.jsx)("div",{className:"search",children:Object(oe.jsxs)(tt.a,{onSelect:d,children:[Object(oe.jsx)(tt.b,{value:c,onChange:function(e){s(e.target.value)},disabled:!r,placeholder:"Search your location"}),Object(oe.jsx)(tt.e,{children:Object(oe.jsx)(tt.c,{children:"OK"===o&&i.map((function(e){var t=e.id,n=e.description;return Object(oe.jsx)(tt.d,{value:n},t)}))})})]})})},rt=["places"],ct={height:"93vh",width:"100%"},at={disableDefaultUI:!1,zoomControl:!0,zoomControlOptions:{position:5}},ot={lat:43.6532,lng:-79.3832},it=function(e){var t=e.children,n=pe((function(e){return e.chartData.covidData})),o=a.a.useState(null),i=Object(p.a)(o,2),s=i[0],l=i[1],u=a.a.useRef(null),j=Object(d.b)(),b=Object(qe.d)({googleMapsApiKey:"AIzaSyDUSy6au1UtftlSlYoHm3xz3y4QS1K6Kwk",libraries:rt}),O=b.isLoaded,h=b.loadError,f=Object(c.useCallback)((function(e){u.current=e}),[]),x=Object(c.useCallback)((function(e){l(e)}),[]),m=Object(c.useCallback)((function(e){var t,n,r=e.lat,c=e.lng;null===(t=u.current)||void 0===t||t.panTo({lat:r,lng:c}),null===(n=u.current)||void 0===n||n.setZoom(8)}),[]),g=Object(c.useCallback)((function(e){j({type:r.SET_COUNTRY,payload:e.iso2}),j({type:r.GET_CHART_DATA,payload:e.iso2})}),[]),v=Object(c.useMemo)((function(){return n?n.map((function(e){var t=e.countryInfo,n=e.casesPerOneMillion;return Object(oe.jsx)(Je,{cases:n,countryInfo:t,onClick:function(){return g(t)},onMouseOver:function(){return x(e)},onMouseOut:function(){return l(null)}},t._id+10*Math.random())})):[]}),[n]);return h?Object(oe.jsx)(ue.a,{variant:"h3",color:"#000",children:"Something went wrong. Please try reloading page."}):O?Object(oe.jsxs)(qe.a,{mapContainerStyle:ct,zoom:4,center:ot,options:at,onLoad:f,children:[Object(oe.jsx)(nt,{panTo:m}),v,s&&Object(oe.jsx)($e,{selected:s,setSelected:l}),t]}):Object(oe.jsx)(xe.a,{type:"Puff",height:25,width:25,color:"#00BFFF"})},st=n(44),lt=x.c.p(B||(B=Object(f.a)(["\n  color: #ff0000;\n  font-size: 12px;\n  padding-bottom: 0.2rem;\n"]))),dt=x.c.div(V||(V=Object(f.a)(["\n  width: 30rem;\n  padding: 2rem 1rem;\n  border: 1px solid #ddd;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  @media only screen and (max-width: 600px) {\n    border: none;\n    width: 100vw;\n  }\n"]))),ut=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(p.a)(a,2),i=o[0],s=o[1],l=se().login,d=Object(be.f)(),u=Object(c.useCallback)(function(){var e=Object(h.a)(O.a.mark((function e(t){var n,c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.currentTarget,c=n.email.value,a=n.password.value,e.prev=2,r(""),s(!0),e.next=7,l(c,a);case 7:d.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r(e.t0.message);case 13:s(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(oe.jsx)(dt,{style:{margin:"auto"},children:Object(oe.jsxs)("form",{onSubmit:u,children:[Object(oe.jsx)(Ne,{mb:"2rem",children:Object(oe.jsx)("h1",{children:"Sign in"})}),Object(oe.jsxs)(Ne,{mb:"1rem",children:[Object(oe.jsx)("label",{htmlFor:"email",children:"Email"}),Object(oe.jsx)(Ge,{type:"email",name:"email",required:!0})]}),Object(oe.jsxs)(Ne,{mb:"0.5rem",children:[Object(oe.jsx)("label",{htmlFor:"password",children:"Password"}),Object(oe.jsx)(Ge,{type:"password",name:"password",required:!0})]}),Object(oe.jsx)(Ne,{children:Object(oe.jsx)(lt,{children:n})}),Object(oe.jsx)(Ne,{mb:"0.2rem",children:Object(oe.jsxs)("p",{children:["Don`t have account? Sign up ",Object(oe.jsx)(st.b,{to:"/signup",children:"here."})]})}),Object(oe.jsx)(Ne,{mb:"0.2rem",children:Object(oe.jsxs)("p",{children:["Forgot your password? Reset ",Object(oe.jsx)(st.b,{to:"/reset_password",children:"here."})]})}),Object(oe.jsx)(X,{children:Object(oe.jsx)(Q,{type:"submit",disabled:i,children:i?Object(oe.jsx)(xe.a,{type:"Puff",height:15,width:15,color:"#fff"}):"Sign in"})})]})})},jt=n(102),bt=n(103),Ot=n.n(bt),ht=[{Header:"Country",accessor:"country"},{Header:"Cases",accessor:"cases"},{Header:"Recovered",accessor:"recovered"},{Header:"Deaths",accessor:"deaths"},{Header:"Tests",accessor:"tests"},{Header:"Population",accessor:"population"}],pt=Intl.NumberFormat(),ft=function(){var e=pe((function(e){return e.chartData})).covidData,t=Object(c.useState)(""),n=Object(p.a)(t,2),a=n[0],o=n[1],i=Object(c.useCallback)((function(e){var t=e.target.value||void 0;m("country",t),o(t)}),[]),l=Object(c.useMemo)((function(){return e.map((function(e){var t=e.country,n=e.cases,r=e.recovered,c=e.deaths,a=e.tests,o=e.population;return{country:t,cases:pt.format(n),recovered:pt.format(r),deaths:pt.format(c),tests:pt.format(a),population:pt.format(o)}}))}),[e]),u=Object(c.useMemo)((function(){return ht}),[]),j=Object(jt.useTable)({columns:u,data:l},jt.useFilters,jt.useSortBy,jt.usePagination),b=j.getTableProps,O=j.getTableBodyProps,h=j.headerGroups,f=j.page,x=j.prepareRow,m=j.setFilter,g=j.nextPage,v=j.previousPage,y=j.canPreviousPage,w=j.canNextPage,C=j.pageOptions,T=j.state,A=j.gotoPage,_=j.pageCount,E=T.pageIndex,S=Object(d.b)();return Object(c.useEffect)((function(){S({type:r.GET_COVID_DATA})}),[]),Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsxs)(Ne,{width:"300px",mb:"1rem",children:[Object(oe.jsx)(Ge,{type:"text",value:a,onChange:i,placeholder:"Search by country"})," "]}),Object(oe.jsxs)("table",Object(s.a)(Object(s.a)({},b()),{},{children:[Object(oe.jsx)("thead",{children:h.map((function(e){return Object(c.createElement)("tr",Object(s.a)(Object(s.a)({},e.getHeaderGroupProps()),{},{key:Ot()()}),e.headers.map((function(e){return Object(c.createElement)("th",Object(s.a)(Object(s.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:Ot()()}),e.render("Header"))})))}))}),Object(oe.jsx)("tbody",Object(s.a)(Object(s.a)({},O()),{},{children:f.map((function(e){return x(e),Object(c.createElement)("tr",Object(s.a)(Object(s.a)({},e.getRowProps()),{},{key:Ot()()}),e.cells.map((function(e){return Object(c.createElement)("td",Object(s.a)(Object(s.a)({},e.getCellProps()),{},{key:Ot()()}),e.render("Cell"))})))}))}))]})),Object(oe.jsxs)("div",{children:[Object(oe.jsxs)(Ne,{mt:"0.5rem",children:[Object(oe.jsxs)("span",{children:["Page"," ",Object(oe.jsxs)("strong",{children:[E+1," of ",C.length]})]}),Object(oe.jsx)("span",{children:Object(oe.jsx)("input",{style:{width:"50px",marginLeft:"10px"},type:"number",defaultValue:E+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;A(t)}})})]}),Object(oe.jsx)(Ne,{mt:"0.5rem",children:Object(oe.jsxs)(X,{children:[Object(oe.jsx)(Z,{color:"#fff",onClick:function(){return A(0)},disabled:!y,children:"<<"}),Object(oe.jsx)(Q,{onClick:v,disabled:!y,children:"Previous"}),Object(oe.jsx)(Q,{onClick:g,disabled:!w,children:"Next"}),Object(oe.jsx)(Z,{color:"#fff",onClick:function(){return A(_-1)},disabled:!w,children:">>"})]})})]})]})},xt=x.c.div(Y||(Y=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: -10;\n  opacity: 0;\n  transform: translateX(100vw);\n  transition: all 0.3s ease-in-out;\n  ","\n"])),(function(e){return e.modalAnimation&&Object(x.b)(q||(q=Object(f.a)(["\n      opacity: 1;\n      z-index: 50;\n      transform: translateX(0);\n    "])))})),mt=x.c.button(W||(W=Object(f.a)(["\n  position: fixed;\n  top: 0.5rem;\n  right: 2rem;\n  color: #fff;\n  font-size: 2rem;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: color 0.2s ease;\n  &:hover {\n    color: #ddd;\n  }\n"]))),gt=function(){var e=pe((function(e){return e.modals.covidModal})),t=Object(d.b)(),n=Object(c.useCallback)((function(){t({type:r.TOGGLE_MODAL})}),[]),a=Object(c.useMemo)((function(){return Object(oe.jsxs)(xt,{modalAnimation:e,children:[Object(oe.jsx)(mt,{onClick:n,children:"X"}),Object(oe.jsx)(Me,{children:Object(oe.jsx)(ft,{})})]})}),[e]);return Object(oe.jsx)(oe.Fragment,{children:a})};ae.a.setApiKey("AIzaSyDUSy6au1UtftlSlYoHm3xz3y4QS1K6Kwk");var vt,yt,wt,Ct=function(){var e=pe((function(e){return e.chartData})).countriesInfo,t=Object(d.b)(),n=Object(c.useMemo)((function(){return Object(oe.jsx)(Ye,{})}),[e]);return Object(c.useEffect)((function(){t({type:r.GET_COVID_DATA})}),[]),Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(Te,{}),Object(oe.jsx)(gt,{}),Object(oe.jsx)(it,{children:n})]})},Tt=x.c.div(vt||(vt=Object(f.a)(["\n  padding: 2rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background: ",";\n  width: 50%;\n  @media only screen and (max-width: 1000px) {\n    display: none;\n  }\n"])),"#fffce8"),At=function(){var e=se().currentUser,t=Object(be.f)();return Object(c.useEffect)((function(){e?t.push("/covidmap"):t.push("/")}),[e]),Object(oe.jsxs)(Ue,{children:[Object(oe.jsxs)(Tt,{children:[Object(oe.jsx)("h1",{children:"Hello there!"}),Object(oe.jsxs)("h3",{style:{textAlign:"center"},children:["Get live data about ",Object(oe.jsx)("br",{})," Covid-19 with no worries"]}),Object(oe.jsx)("div",{})]}),Object(oe.jsx)(ut,{})]})},_t=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(p.a)(a,2),i=o[0],s=o[1],l=Object(c.useState)(!1),d=Object(p.a)(l,2),u=d[0],j=d[1],b=se().resetPassword,f=Object(c.useCallback)(function(){var e=Object(h.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.currentTarget.email.value,e.prev=2,r(""),s("Please check your email for further action."),j(!0),e.next=8,b(n);case 8:e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),r(e.t0.message),s("");case 14:j(!1);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(oe.jsx)(ze,{children:Object(oe.jsx)(dt,{children:Object(oe.jsxs)("form",{onSubmit:f,children:[Object(oe.jsx)(Ne,{mb:"2rem",children:Object(oe.jsx)("h1",{children:"Reset password"})}),Object(oe.jsxs)(Ne,{pb:"0.5rem",children:[Object(oe.jsx)("label",{htmlFor:"email",children:"Email"}),Object(oe.jsx)(Ge,{type:"email",name:"email",required:!0})]}),Object(oe.jsx)(Ne,{children:Object(oe.jsx)(lt,{children:n})}),Object(oe.jsxs)(Ne,{mb:"1rem",children:[i&&Object(oe.jsx)("p",{style:{color:"green"},children:i}),Object(oe.jsxs)("p",{children:["Go to ",Object(oe.jsx)(st.b,{to:"/",children:"log in."})]})]}),Object(oe.jsx)(Q,{type:"submit",disabled:u,children:u?Object(oe.jsx)(xe.a,{type:"Puff",height:15,width:15,color:"#fff"}):"Reset"})]})})})},Et=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(p.a)(a,2),i=o[0],s=o[1],l=se().signup,d=Object(be.f)(),u=Object(c.useCallback)(function(){var e=Object(h.a)(O.a.mark((function e(t){var n,c,a,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=t.currentTarget,c=n.email.value,a=n.password.value,o=n.password2.value,a===o){e.next=5;break}return r("Ooops, looks like your passwords does not match."),e.abrupt("return");case 5:return e.prev=5,r(""),s(!0),e.next=10,l(c,a);case 10:d.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),r(e.t0.message);case 16:s(!1);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(oe.jsx)(ze,{children:Object(oe.jsx)(dt,{children:Object(oe.jsxs)("form",{onSubmit:u,children:[Object(oe.jsx)(Ne,{mb:"2rem",children:Object(oe.jsx)("h1",{children:"Sign up"})}),Object(oe.jsxs)(Ne,{pb:"1rem",children:[Object(oe.jsx)("label",{htmlFor:"email",children:"Email"}),Object(oe.jsx)(Ge,{type:"email",name:"email",required:!0})]}),Object(oe.jsxs)(Ne,{mb:"1rem",children:[Object(oe.jsx)("label",{htmlFor:"password",children:"Password"}),Object(oe.jsx)(Ge,{type:"password",name:"password",required:!0})]}),Object(oe.jsxs)(Ne,{mb:"0.5rem",children:[Object(oe.jsx)("label",{htmlFor:"password2",children:"Confirm password"}),Object(oe.jsx)(Ge,{type:"password",name:"password2",required:!0})]}),Object(oe.jsx)(Ne,{children:Object(oe.jsx)(lt,{children:n})}),Object(oe.jsx)(Ne,{mb:"1rem",children:Object(oe.jsxs)("p",{children:["Already have an account? Sign in ",Object(oe.jsx)(st.b,{to:"/",children:"here."})]})}),Object(oe.jsx)(Q,{type:"submit",disabled:i,children:i?Object(oe.jsx)(xe.a,{type:"Puff",height:15,width:15,color:"#fff"}):"Sign up"})]})})})},St=Object(x.a)(yt||(yt=Object(f.a)(["\n* {\n    box-sizing: border-box;\n    padding: 0 ;\n    margin: 0 ;\n    font-family: 'Open Sans', sans-serif;\n\n}\nbody {\n    font-size: 13px;\n    overflow-x: hidden;\n}\nh1, h2, h3, h4, h5, h6 {\n    font-family: 'Raleway', sans-serif;\n}\n\n.search {\n  position: absolute;\n  max-width: 400px;\n  right: 4rem;\n  top: 0.75em;\n  @media only screen and (max-width: 600px) {\n    right: 0.65rem;\n    top: 3.5rem;\n\n}\n}\n\n.search input {\n  padding: 0.85rem 0.5rem;\n  font-size: 0.9rem;\nwidth: 100%;\nborder: none;\nborder-radius: 0.15rem;\n\n}\n\nh3 {\n    line-height: 34px;\n}\n\n.gm-style .gm-style-iw-c {\n  transform: translate(-50%, -140%)\n}\n\n.gm-style .gm-style-iw-t::after {\n  display: none;\n}\n\n.gm-ui-hover-effect {\n  display: none !important;\n}\n\n::placeholder {\n  font-size: 12px;\n}\n\n.vaccine-chart {\n  padding-left: 1rem !important;\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n  font-size: 16px;\n}\n\nth, td {\n  text-align: left;\n  padding: 8px;\n}\n\ntr:nth-child(odd){background-color: \"\"}\n\ntr:nth-child(even){background-color: #ddd; color: #000}\n\nth {\n  background-color: #000;\n  color: white;\n}\n\n.recharts-text, .recharts-cartesian-axis-tick-value {\n  font-weight: 800 ;\n}\n"]))),kt=(n(420),function(e){var t=e.children,n=Object(l.a)(e,["children"]);return se().currentUser?Object(oe.jsx)(be.b,Object(s.a)(Object(s.a)({},n),{},{children:t})):Object(oe.jsx)(be.a,{to:"/"})}),Rt=function(){return Object(oe.jsxs)(st.a,{basename:"/Kilo-PR",children:[Object(oe.jsx)(St,{}),Object(oe.jsx)(be.b,{path:"/",component:At,exact:!0}),Object(oe.jsx)(kt,{path:"/covidmap",component:Ct,exact:!0}),Object(oe.jsx)(be.b,{path:"/signup",component:Et,exact:!0}),Object(oe.jsx)(be.b,{path:"/table",component:ft,exact:!0}),Object(oe.jsx)(be.b,{path:"/reset_password",component:_t,exact:!0})]})},Dt=n(70),Lt=n(225),It=n(30),Gt=n(222),Pt=n.n(Gt);!function(e){e.PRIMARY_API="https://disease.sh/v3/covid-19"}(wt||(wt={}));var Ut=function(){var e=Object(h.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pt()({method:"GET",url:"".concat(wt.PRIMARY_API,"/").concat(t)});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Nt=O.a.mark(Mt),Ft=O.a.mark(zt),Ht=function(e){return Object.entries(e.timeline.cases).map((function(e){return{Date:e[0],Cases:e[1]}})).map((function(t,n){return Object(s.a)(Object(s.a)({},t),{},{Recovered:Object.values(e.timeline.recovered)[n],Deaths:Object.values(e.timeline.deaths)[n],country:e.country})}))};function Mt(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.e)(r.GET_CHART_DATA,zt);case 2:case"end":return e.stop()}}),Nt)}function zt(){var e,t,n,c,a,o,i;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(It.d)((function(e){return e.chartData.period}));case 3:return e=s.sent,s.next=6,Object(It.d)((function(e){return e.chartData.countryCode}));case 6:return t=s.sent,s.next=9,Object(It.c)({type:r.LOADING_TRUE});case 9:return s.next=11,Object(It.a)([Object(It.b)(Ut,"vaccine/coverage/countries/".concat(t,"?lastdays=").concat(e)),Object(It.b)(Ut,"historical/".concat(t,"?lastdays=").concat(e))]);case 11:return n=s.sent,c=Object(p.a)(n,2),a=c[0],o=c[1],i=Ht(o),s.next=18,Object(It.c)({type:r.GET_CHART_DATA_SUCCESS,payload:{modifiedChartData:i,vaccinesData:a}});case 18:return s.next=20,Object(It.c)({type:r.ERROR_FALSE});case 20:s.next=28;break;case 22:return s.prev=22,s.t0=s.catch(0),s.next=26,Object(It.c)({type:r.CONTROL_CHART_PERIOD,payload:"360"});case 26:return s.next=28,Object(It.c)({type:r.ERROR_TRUE});case 28:return s.prev=28,s.next=31,Object(It.c)({type:r.LOADING_FALSE});case 31:return s.finish(28);case 32:case"end":return s.stop()}}),Ft,null,[[0,22,28,32]])}var Kt=O.a.mark(Yt),Bt=O.a.mark(qt),Vt=O.a.mark(Wt);function Yt(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.e)(r.GET_COVID_DATA,qt);case 2:case"end":return e.stop()}}),Kt)}function qt(){var e,t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(It.c)({type:r.LOADING_TRUE});case 2:return n.prev=2,n.next=5,Object(It.b)(Ut,"countries");case 5:return e=n.sent,n.next=8,Object(It.b)(Ut,"all");case 8:return t=n.sent,n.next=11,Object(It.c)({type:r.SET_GLOBAL_CASES,payload:t});case 11:return n.next=13,Object(It.c)({type:r.GET_COVID_DATA_SUCCESS,payload:e});case 13:return n.next=15,Object(It.c)({type:r.LOADING_FALSE});case 15:return n.next=17,Object(It.c)({type:r.ERROR_FALSE});case 17:n.next=23;break;case 19:return n.prev=19,n.t0=n.catch(2),n.next=23,Object(It.c)({type:r.ERROR_TRUE});case 23:case"end":return n.stop()}}),Bt,null,[[2,19]])}function Wt(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(It.a)([Yt(),Mt()]);case 2:case"end":return e.stop()}}),Vt)}var Qt={vaccinated:{country:"",timeline:""},countriesInfo:[],covidData:[],countryCode:"",globalCases:"",period:"360"},Xt={loading:!1,error:null},Jt={covidModal:!1},Zt=Object(Dt.c)({chartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.CONTROL_CHART_PERIOD:return Object(s.a)(Object(s.a)({},e),{},{period:t.payload});case r.SET_GLOBAL_CASES:return Object(s.a)(Object(s.a)({},e),{},{globalCases:t.payload});case r.SET_COUNTRY:return Object(s.a)(Object(s.a)({},e),{},{countryCode:t.payload});case r.GET_CHART_DATA_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{countriesInfo:t.payload.modifiedChartData,vaccinated:t.payload.vaccinesData});case r.GET_COVID_DATA_SUCCESS:return Object(s.a)(Object(s.a)({},e),{},{covidData:t.payload});default:return e}},loadingAndError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.LOADING_TRUE:return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case r.LOADING_FALSE:return Object(s.a)(Object(s.a)({},e),{},{loading:!1});case r.ERROR_TRUE:return Object(s.a)(Object(s.a)({},e),{},{error:!0});case r.ERROR_FALSE:return Object(s.a)(Object(s.a)({},e),{},{error:!1});default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.TOGGLE_MODAL:return Object(s.a)(Object(s.a)({},e),{},{covidModal:!e.covidModal});default:return e}}}),$t=Object(Lt.a)(),en=Object(Dt.e)(Zt,Object(Dt.a)($t));$t.run(Wt),i.a.render(Object(oe.jsx)(d.a,{store:en,children:Object(oe.jsx)(le,{children:Object(oe.jsx)(Rt,{})})}),document.getElementById("root"))}},[[438,1,2]]]);
//# sourceMappingURL=main.82458a0b.chunk.js.map