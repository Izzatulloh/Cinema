import{r as m,o as a,c as _,w as d,a as l,u as n,i as p,t as v,k as f,l as g,p as y,m as x,n as u,q as k,f as o,s as S,v as $,x as A,F as B,g as w,j as C,y as F}from"./index-189bc97f.js";const V=["src"],N={class:"search__content-title"},U={__name:"SearchContent",props:{movie:Object},setup(e){return(t,r)=>{const s=m("router-link");return a(),_(s,{to:e.movie.media_type+"/"+e.movie.id,class:"search__content"},{default:d(()=>[l("img",{src:n(p)+e.movie.poster_path,alt:"",class:"search__content-img"},null,8,V),l("h3",N,v(e.movie.title??e.movie.name),1)]),_:1},8,["to"])}}},b=f("search",{state:()=>({searchArr:null,search:""}),actions:{async getSearch(){if(this.search)try{const r=(await g(`${y}search/multi?api_key=${x}&language=ru-RU&query=${this.search}&page=1&include_adult=false`)).data.results.filter(s=>s.poster_path!=null);this.searchArr=r}catch(e){console.error(e)}else this.searchArr=null}},getters:{}}),j={class:"container"},q={class:"search"},D={key:0,class:"search__box"},R={__name:"SearchInput",setup(e){const t=b(),r=u(()=>t.searchArr),s=u({get:()=>t.search,set:i=>{t.search=i,t.getSearch()}});return k(()=>t.search=""),(i,h)=>(a(),o("div",j,[l("div",q,[S(l("input",{type:"text",class:"search__input",placeholder:"Найти фильм, сериал...","onUpdate:modelValue":h[0]||(h[0]=c=>A(s)?s.value=c:null)},null,512),[[$,n(s)]]),n(t).search?(a(),o("div",D,[(a(!0),o(B,null,w(n(r),c=>(a(),_(U,{key:c.id,movie:c},null,8,["movie"]))),128))])):C("",!0)])]))}},I={__name:"Search",setup(e){return(t,r)=>(a(),o("div",null,[F(R)]))}};export{I as default};
