class l{constructor(i){const s=window.innerWidth<=768,n=i.attr("desktop-link"),e=i.attr("mobile-link"),t=s?e:n,o=i.find("video"),d=i.find("img");o.append(`<source src="${t}" type="video/mp4">`),o[0].load(),o[0].addEventListener("canplay",()=>{d.css("display","none"),o[0].play()})}}export{l as I};