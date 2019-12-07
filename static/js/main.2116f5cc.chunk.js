(this["webpackJsonppets-app"]=this["webpackJsonppets-app"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},38:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=(a(38),a(39),a(40),a(12));var s=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Pets"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"HomePage")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/favoriler"},"Favoriler")))))))},o=a(3),m=a(6),u=a(7),d=a(9),p=a(8),v=a(10),h=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).filterPets=function(e){a.setState({activeFilter:e})},a.search=function(e){a.setState({searchValue:e})},a.state={activeFilter:"",searchValue:""},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.title="Home Page"}},{key:"componentWillUnmount",value:function(){document.title="Pets App"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(j,{onFilterPets:this.filterPets,activeFilter:this.state.activeFilter,onSearch:this.search})),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(S,{activeFilter:this.state.activeFilter,searchValue:this.state.searchValue})))))}}]),t}(r.a.Component);var f,E,b,g,y,N=function(){return r.a.createElement("div",null,"FavoritesPage")},k=a(14),w=a.n(k),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={name:"",image:"",age:"",description:"",breed:""},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("http://5dd7af92505c590014d3b4ac.mockapi.io/pets/".concat(this.props.match.params.id)).then((function(e){return e.data})).then((function(e){var t;return E=(t=e).name,b=t.image,f=t.age,y=t.description,g=t.breed,t})).then((function(t){return e.setState({name:E,image:b,age:f,description:y,breed:g})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-6 col-md-4 mb-4",style:{marginLeft:"390px",marginTop:"30px"}},r.a.createElement("div",{className:"card h-100"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:"card-img-top",src:this.state.image,alt:"",style:{height:"292px"}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("a",{href:"#"},this.state.name),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-primary",style:{fontSize:"12px"}},this.state.breed)),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-warning",style:{fontSize:"12px"}},this.state.age))),r.a.createElement("p",{className:"card-text"},this.state.description)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"btn btn-success"},"Favorilere Ekle"),r.a.createElement("div",{className:"btn btn-secondary ml-3"},r.a.createElement(i.b,{className:"text-decoration-none text-white",to:"/"},"Geri D\xf6n")))))}}]),t}(r.a.Component);var F=function(e){return r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:h}),r.a.createElement(o.a,{exact:!0,path:"/favoriler",component:N}),r.a.createElement(o.a,{exact:!0,path:"/detay/:id",component:O})))};var j=function(e){return r.a.createElement("div",null,r.a.createElement(H,{onSearch:e.onSearch}),r.a.createElement(D,{onFilterPets:e.onFilterPets,activeFilter:e.activeFilter}))},x=["Cavalier King Charles Spaniel","Golden Retriever","Beagle","French Bulldog"],P=function(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>-1},S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).filterPets=function(){a.props.activeFilter?a.setState({pets:a.state._pets.filter((function(e){return e.breed===a.props.activeFilter})).filter((function(e){return P(e.name,a.props.searchValue)}))}):a.setState({pets:a.state._pets.filter((function(e){return P(e.name,a.props.searchValue)}))})},a.state={_pets:[],pets:[],yukleniyor:!0,loadPet:4},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.a.get("http://5dd7af92505c590014d3b4ac.mockapi.io/pets").then((function(e){return e.data})).then((function(t){e.setState({_pets:t,pets:t,yukleniyor:!1})})),window.onscroll=function(){window.innerHeight+window.scrollY>=document.body.scrollHeight-4&&e.setState({loadPet:e.state.loadPet+4})}}},{key:"componentDidUpdate",value:function(e){e.activeFilter!==this.props.activeFilter&&this.filterPets(),e.searchValue!==this.props.searchValue&&this.filterPets()}},{key:"render",value:function(){var e=r.a.createElement("div",null,"Yukleniyor"),t=r.a.createElement("div",null,"Bulunamad\u0131"),a=[r.a.createElement("h3",null,"G\xf6sterilen Pet Say\u0131s\u0131: ",this.state.pets.slice(0,this.state.loadPet).length),r.a.createElement("div",{className:"row"},this.state.pets.slice(0,this.state.loadPet).map((function(e){return r.a.createElement(C,Object.assign({key:Math.random()},e))})))];return this.state.yukleniyor?e:0===this.state.pets.length?t:a}}]),t}(r.a.Component),C=function(e){function t(e){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"addToFavorites",value:function(e){w.a.post("http://5dd7af92505c590014d3b4ac.mockapi.io/favorites",{pet:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.image,c=t.age,l=t.description,s=t.breed,o=t.id;return r.a.createElement("div",{className:"col-lg-6 col-md-4 mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:"card-img-top",src:n,alt:"",style:{height:"292px"}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("a",{href:"#"},a),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-primary",style:{fontSize:"12px"}},s)),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-warning",style:{fontSize:"12px"}},c))),r.a.createElement("p",{className:"card-text"},l)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"btn btn-success",onClick:function(){e.addToFavorites(e.props.pet)}},"Favorilere Ekle"),r.a.createElement("div",{className:"btn btn-secondary ml-3"},r.a.createElement(i.b,{className:"text-decoration-none text-white",to:"/detay/".concat(o)},"Detay")))))}}]),t}(r.a.Component),V=a(19),B=a.n(V);var D=function(e){return console.log(e.activeFilter),r.a.createElement("div",null,r.a.createElement("h4",{className:"my-4 text-left"},"Cins"),r.a.createElement("ul",null,r.a.createElement("li",{className:B()({"list-group-item":!0,active:!e.activeFilter}),onClick:function(){e.onFilterPets("")}},"Hepsi"),x.map((function(t){return r.a.createElement("li",{key:t,className:B()({"list-group-item":!0,active:t===e.activeFilter}),onClick:function(a){a.preventDefault(),e.onFilterPets(t)}},t)}))))},H=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).changeValue=function(e){var t=e.target.value;a.setState({value:t},(function(){a.props.onSearch(t)}))},a.state={value:""},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Arama"),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.changeValue}))}}]),t}(r.a.Component);var L=function(e){return window.addEventListener("scroll",(function(){window.pageYOffset>350?document.getElementById("back-to-top-btn").style.display="block":document.getElementById("back-to-top-btn").style.display="none"})),window.addEventListener("click",(function(){window.scrollTo(0,0)})),r.a.createElement("div",null,r.a.createElement("button",{id:"back-to-top-btn"},r.a.createElement("i",{className:"fas fa-chevron-up"})))};var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(F,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.2116f5cc.chunk.js.map