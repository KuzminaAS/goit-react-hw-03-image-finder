(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1x1h-",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__2plss"}},12:function(e,t,a){e.exports={container:"Button_container__BEnbP",Button:"Button_Button__3ru2P"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1HHiq",Modal:"Modal_Modal__2_3aN"}},23:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1ww6m"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3EN-G"}},26:function(e,t,a){e.exports={loader:"Loader_loader__3j4nZ"}},33:function(e,t,a){},34:function(e,t,a){},4:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__3mA0Z",SearchForm_button:"SearchForm_SearchForm_button__3MYWC",SearchForm_button_label:"SearchForm_SearchForm_button_label__121Dp",SearchForm_input:"SearchForm_SearchForm_input__1s4xy"}},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(5),c=a.n(o),i=(a(33),a(34),a(14)),s=a(6),l=a(7),u=a(9),h=a(8),m=a(23),d=a.n(m),p=a(4),b=a.n(p),j=a(0),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.handleSubmit;return Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:t,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(j.jsx)("span",{className:b.a.SearchForm_button_label,children:"Search"})}),Object(j.jsx)("input",{onChange:e,name:"query",value:this.state.query,className:b.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}}]),a}(n.Component),g=function(e){var t=e.onSubmit;return Object(j.jsx)("header",{className:d.a.Searchbar,children:Object(j.jsx)(f,{onSubmit:t})})},_=a(28),y=a(11),O=a.n(y),v=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.openModal;return Object(j.jsx)("li",{className:O.a.ImageGalleryItem,onClick:function(){return n(a)},children:Object(j.jsx)("img",{src:t,alt:"",className:O.a.ImageGalleryItem_image})})},S=a(24),x=a.n(S),w=function(e){var t=e.list,a=e.openModal,n=e.children,r=t.map((function(e){return Object(j.jsx)(v,Object(_.a)({openModal:a},e),e.id)}));return Object(j.jsxs)("ul",{className:x.a.ImageGallery,children:[r,n]})},I=a(12),M=a.n(I),F=function(e){var t=e.onClick;return Object(j.jsxs)("div",{className:M.a.container,children:["  ",Object(j.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load more"})," "]})},L=a(13),k=a.n(L),N=document.querySelector("#modal-root"),C=function(e){var t=e.children,a=e.closeModal;return Object(o.createPortal)(Object(j.jsx)("div",{onClick:a,className:k.a.Overlay,children:Object(j.jsx)("div",{className:k.a.Modal,children:t})}),N)},q=(a(36),a(25)),G=a.n(q),P=a(26),B=a.n(P),R=function(){return Object(j.jsx)(G.a,{className:B.a.loader,type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:500})},D=a(27),U=a.n(D).a.create({baseURL:"https://pixabay.com/api",params:{key:"20944860-c17ba5e7d5700a2a7880c4ee2",image_type:"photo",orientation:"horizontal"}}),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={pictures:[],page:1,limit:12,isLoading:!1,query:"",more:!1,error:null,showModal:!1,largeImageURL:""},e.listRef=Object(n.createRef)(),e.searchPictures=function(t){e.setState({pictures:[],isLoading:!0,query:t})},e.loadMore=function(t){t.preventDefault(),e.setState((function(e){return{isLoading:!0,page:e.page+1,more:!0}}))},e.openModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:t}}))},e.closeModal=function(){e.setState({showModal:!1})},e.handleKeyDown=function(t){"Escape"===t.code&&e.closeModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchPictures(),window.addEventListener("keydown",this.handleKeyDown)}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.pictures.length<this.state.pictures.length?this.listRef.current.scrollHeight:null}},{key:"componentDidUpdate",value:function(e,t,a){this.state.isLoading&&this.fetchPictures(),null!==a&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"fetchPictures",value:function(){var e=this,t=this.state,a=t.page,n=t.limit,r=t.query,o=t.more;(function(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=e.limit;return U.get("/",{params:{q:a,page:n,limit:r}})})({page:a,limit:n,query:r}).then((function(t){var a=t.data;return e.setState((function(e){var t=e.pictures;return{pictures:o?[].concat(Object(i.a)(t),Object(i.a)(a.hits)):a.hits,isLoading:!1}}))})).catch((function(t){return e.setState({error:t,isLoading:!1})})).finally((function(){return e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.isLoading,n=e.error,r=e.showModal,o=e.largeImageURL,c=this.listRef,i=this.searchPictures,s=this.loadMore,l=this.openModal,u=this.closeModal;return Object(j.jsxs)("div",{className:"Photos",children:[r&&Object(j.jsxs)(C,{closeModal:u,children:[" ",Object(j.jsx)("img",{src:o,alt:""})]}),Object(j.jsx)(g,{onSubmit:i}),Object(j.jsxs)("div",{ref:c,children:[Object(j.jsx)(w,{openModal:l,list:t,children:Object(j.jsx)(R,{})})," "]}),n&&Object(j.jsx)("p",{children:"Something was wrong ..."}),a&&!n&&Object(j.jsx)(R,{}),Object(j.jsx)(F,{onClick:s})]})}}]),a}(n.Component),A=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(E,{})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,76)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),T()}},[[75,1,2]]]);
//# sourceMappingURL=main.82bb23db.chunk.js.map