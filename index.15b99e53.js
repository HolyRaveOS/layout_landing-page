document.addEventListener("DOMContentLoaded",function(){var e,t,n,o;e=document.querySelector(".header__burger-button"),t=document.querySelector(".header"),e&&e.addEventListener("click",function(){document.documentElement.classList.toggle("menu-open")}),t&&t.addEventListener("click",function(e){"A"===e.target.tagName&&document.documentElement.classList.remove("menu-open")}),window.scrollY,n=document.querySelector("header.header"),window.addEventListener("scroll",function(){window.scrollY>0?n.classList.add("header-scroll"):n.classList.remove("header-scroll")}),o=document.querySelector(".header").offsetHeight,document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href"),n=document.querySelector(t);if(n){var r=n.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:r,behavior:"smooth"})}})})});//# sourceMappingURL=index.15b99e53.js.map

//# sourceMappingURL=index.15b99e53.js.map
