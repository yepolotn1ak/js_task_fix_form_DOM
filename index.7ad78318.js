function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var e,r=function(t){switch(t.toLowerCase()){case"firstname":case"lastname":return t.split("Name").join("")+" Name";default:return t}};((function(e){if(Array.isArray(e))return t(e)})(e=document.querySelectorAll("input"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach(function(t){t.placeholder=r(t.name.charAt(0).toUpperCase()+t.name.slice(1));var e=document.createElement("label");e.classList.add("field-label"),e.textContent=r(t.getAttribute("name")),e.htmlFor=t.getAttribute("id"),t.insertAdjacentElement("beforebegin",e)});
//# sourceMappingURL=index.7ad78318.js.map
