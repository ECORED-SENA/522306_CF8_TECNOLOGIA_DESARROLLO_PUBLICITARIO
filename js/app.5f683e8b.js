(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,s||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"dc89700e","chunk-04b93936":"86776633","chunk-0cfca828":"72bff856","chunk-13303073":"26d5a4a0","chunk-13a6037e":"7abd2d7b","chunk-1479a341":"581c4fa3","chunk-1fb07a61":"ccc5210e","chunk-2c06842c":"e53c11d0","chunk-2d208d90":"bc356c5d","chunk-2d21d0e2":"8eb04161","chunk-2d22c123":"9f76ca65","chunk-2e80bb9a":"062ec62b","chunk-3c94cd2f":"28fba674","chunk-4cdd78c0":"ac878357","chunk-515a8379":"7a79dbc4","chunk-522cec8c":"d3edfd84","chunk-53ccb27e":"6cd5c2f5","chunk-59974754":"efeeef7c","chunk-7432e4d4":"1fff70b7","chunk-766a929b":"9f3cb722","chunk-839300a6":"a5a3cefc","chunk-c796899c":"117a2ec2",comple:"7a09df7f",creditos:"713a56eb",glosario:"0cecc19b",referencias:"5f57e68c",tema1:"25825206",tema2:"f2021e85"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"cbba7cdc","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"554896e8","chunk-7432e4d4":"99a35118","chunk-766a929b":"4fa115f0","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"181e4f56",creditos:"e7d22cb8",glosario:"df028d4e",referencias:"729f54b4",tema1:"31d6cfe0",tema2:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,l=(n("cf25"),n("2877")),s=Object(l["a"])(c,i,r,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),m=n("ae58"),f=n("7e58");o["a"].use(d["a"]);var p=new d["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}}]},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=p,b=n("1c2c"),h=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Plan de Marketing digital",descripcionCurso:"El marketing digital permite que la marca cree una comunidad propia a través de una red social, llegando de forma exclusiva al target específico, porque es ahora el usuario quien decide seguir la marca con su consentimiento, generando una interacción de conveniencia para ambos. Por ejemplo, en el marketing digital el padre que tal vez vio el anuncio publicitario en TV tiene la opción de obtener más y mejor información en la cuenta de Facebook o Instagram de la marca de cuchillas de su preferencia, comprar a través de su sitio web y aprender allí la técnica más adecuada para tener el afeitado perfecto.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("88ec")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Marketing",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"¿Qué es el marketing?",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Variables del marketing",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Proceso de marketing",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Creación de valor para el cliente",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"El mercado",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Plan de marketing",hash:"t_1_6"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Marketing digital",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Conceptos básicos del marketing digital",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Analítica digital",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Herramientas de medición",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"CRM (Customer Relationship Management)",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Plataformas de gestión de marketing digital",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"SEO en el marketing digital",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"Promoción en la web",hash:"t_2_7"},{icono:"far fa-file-alt",numero:"2.8",titulo:"Inbound marketing",hash:"t_2_8"},{icono:"far fa-file-alt",numero:"2.9",titulo:"Plan de marketing digital",hash:"t_2_9"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Benítez, M. (2019, mayo 27). Diccionario de Marketing Digital. MKT2U.Com. ",link:"https://communitymanager2u.com/blog-diccionario-de-marketing-digital/ "},{referencia:"Cibrián, B. I. (2018). Marketing digital. Mide, analiza y mejora. ESIC Editorial."},{referencia:"Coll, P. y Micó, J. L. (2018). Marketing y Comunicación en la Nueva Economía. Editorial UOC."},{referencia:"Cruz, J. (2009, abril 10). Cómo aplicar el Marketing. Estrategia de Marketing para Distribución. ",link:"http://estrategias-negocio.blogspot.com/2009/04/estrategia-marketing-distribucion.html "},{referencia:"Davara, A. M. (1992). Estrategias de Comunicación en Marketing. Edit. DOSSAT S.A."},{referencia:"Estrella, A. M. y Segovia, C. (2016). Comunicación Integrada de Marketing. ESIC EDITORIAL."},{referencia:"La Botica Creativa. (2015). Community Manager. ICB, SL. Interconsulting Bureau S.L."},{referencia:"Monserrat, J. y Sabater, F. (2017). Planificación Estratégica de Comunicación en Redes Sociales. Editorial UOC. "},{referencia:"Roldán, Z. S. (2016). Community Management 2.0: Gestión de Comunidades Virtuales. ECOE Ediciones."},{referencia:"Sainz de Vicuña, J. M. (2018). El Plan de Marketing Digital en la Práctica. ESIC Editorial."},{referencia:"Serrano, J. (2015). SEO, Introducción a la Disciplina del Posicionamiento en Buscadores. Editorial UOC."},{referencia:"Silva, H., González, J., Martínez, D., Giraldo, M., Juliao, D. y Ortiz, M. (2014). Marketing, Conceptos y Aplicaciones. Ediciones de la U."},{referencia:"Thompson, I. (2005, agosto). La Mezcla de Mercadotecnia. PromonegocioS.net.",link:"https://www.promonegocios.net/mercadotecnia/mezcla-mercadotecnia-mix.htm"},{referencia:"Vila, F. (2013). Comunicación Estratégica. Barcelona. Editorial UOC. Madrid. ESIC Editorial."},{referencia:"Xunta de Galicia. (s.f.). Manuales prácticos de la Mipyme: Como Elaborar el Plan de Comunicación.",link:"http://biblioteca.udgvirtual.udg.mx/jspui/bitstream/123456789/1919/1/Como%20elaborar%20el%20plan%20de%20comunicaci%c3%b3n.pdf"}],glosario:[{termino:"Alcance viral",significado:"Es una unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos. Mide la evolución y la repercusión de una publicación en cualquier tipo de formato. Redes sociales como Facebook, Twitter o Google Plus, por ejemplo, muestran el alcance viral de una publicación indicando cómo y qué personas han compartido un contenido."},{termino:"Analítica web",significado:"Es la forma de medir y analizar los datos de tráfico de un sitio web, a través del cual nos va a permitir tomar las mejores decisiones y optimizar los objetivos del negocio."},{termino:"Blog post",significado:"Es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un blog."},{termino:"Comunidad online",significado:"Conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática."},{termino:"Cookies",significado:"Son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios."},{termino:"Crowdsourcing",significado:"Acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, fans o usuarios de internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en redes sociales."},{termino:"Engagement",significado:"Es la sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales a través de basar la estrategia en marketing de contenidos y generar en cada una de las redes la mayor participación posible."},{termino:"Fanpage",significado:"También llamada “página de fans”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de fans y es posible tener acceso a la información estadística de la página."},{termino:"Geolocalización",significado:"Término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permite situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones y comercial a través del mobile marketing."},{termino:"Hashtag",significado:"Es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus."},{termino:"Influenciador",significado:"En social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas."},{termino:"KPI",significado:"Son las siglas de Key Performance Indicator; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media marketing."},{termino:"Marketing de contenidos",significado:"Son estrategias de marketing enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del blog y del social media marketing."},{termino:"Reputación online",significado:"Es el conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales."},{termino:"ROI",significado:"Son las siglas en inglés de Return On Investment, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de social media marketing en función de los objetivos y las metas logrados."},{termino:"Segmentar",significado:"En redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo."},{termino:"Viral",significado:"Un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de marketing es “viralizar” sus contenidos."},{termino:"Webinar",significado:"También llamados webinar, son eventos o conferencias que tienen lugar en el medio online. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales."}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional  Santander"},{nombre:"Manuel Augusto Arias López",cargo:"Instructor - Experto temático",centro:"Centro de Comercio y Servicios - Regional Quindío"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Vilma Lucía Perilla Méndez",cargo:"Evaluadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Correctora de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Martha Isabel Martínez Vargas",cargo:"Productora audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Marcela Gonzáles Gómez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jorge Leonardo Camacho Pardo",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"John Jairo Arciniegas González",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=h;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new o["a"]({router:g,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},"88ec":function(e,a,n){e.exports=n.p+"img/fondo-banner-bg.9a87e3d1.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.c99bdd5b.svg"},cf25:function(e,a,n){"use strict";n("fea6")},fea6:function(e,a,n){}});
//# sourceMappingURL=app.5f683e8b.js.map