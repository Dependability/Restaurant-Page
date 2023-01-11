import loadPage from './modules/pageLoad.js';
import {default as menu} from './modules/menu.js';
import {default as contact} from './modules/contact.js';

loadPage();


function refresh() {
    const content = document.querySelector("#content");
    content.style="";
    console.log(content.children)
    while(content.children.length > 1){
        content.children[1].remove();
    }

}




const homeBut = document.querySelector("button.home");
homeBut.classList.add('selected')
const menuBut = document.querySelector("button.menu");
const contactBut = document.querySelector("button.contact");
let selected = homeBut;
const deselect = function () {
    selected.classList.toggle('selected');
}

homeBut.addEventListener("click", (e) => {
    refresh();
    loadPage();
    deselect();
    selected = homeBut;
    e.target.classList.add('selected');

})
menuBut.addEventListener("click", (e) => {
    refresh();
    menu();
    deselect();
    selected = menuBut;
    e.target.classList.add('selected');
})

contactBut.addEventListener("click", (e) => {
    refresh();
    contact();
    deselect();
    selected = contactBut;
    e.target.classList.add('selected');
})

console.log("Testing.");