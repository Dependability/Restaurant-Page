import loadPage from './modules/pageLoad.js';
import {default as menu} from './modules/menu.js';
import {default as contact} from './modules/contact.js';

loadPage();


function refresh() {
    const content = document.querySelector("#content");
    content.style="";
    while(content.children.length > 1){
        content.children[1].remove();
    }

}


const homeBut = document.querySelector("button.home");
const menuBut = document.querySelector("button.menu");
const contactBut = document.querySelector("button.contact");

homeBut.addEventListener("click", () => {
    refresh();
    loadPage();
})
menuBut.addEventListener("click", () => {
    refresh();
    menu();
})

contactBut.addEventListener("click", () => {
    refresh();
    contact();
})

console.log("Testing.");