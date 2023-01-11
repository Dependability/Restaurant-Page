const items = [];


function addItem(name, desc, image) {
    const item = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemName = document.createElement("h2");
    const itemDesc = document.createElement("p");
    item.classList.add('item')

    itemImg.setAttribute("src", image);
    itemName.textContent = name;
    itemDesc.textContent = desc;

    item.appendChild(itemImg);
    item.appendChild(itemName);
    item.appendChild(itemDesc);

    items.push(item)

}
export default function createPage() {
    const wholeDiv = document.createElement("div");
    wholeDiv.classList.add('items')
    wholeDiv.classList.add('hide')
    addItem("Premium Steak", `Steak that can be selected to be any doneness you prefer. You can even order it
    still breathing if you wish!`, '');
    addItem("Ice Cream", "This can be any flavor out of our 52 flavors. You can say we have a whole deck!", "");
    addItem("Chicken Sandwich", "You can never go wrong with Chicken. We have options of spicy, mild, and original", "");
    addItem("Pizza", "Every one loves Pizza! You can customize this pizza with any topping you can think of!", "");
    addItem("Beans", "Need something healthy? Beans are always a good option.", "");    
    

    items.forEach(menuItem => {
        wholeDiv.append(menuItem);
    })
    
    items.splice(0, items.length)

    const bodyContent = document.querySelector("#content");
    bodyContent.appendChild(wholeDiv);
    setTimeout(()=> {
        wholeDiv.classList.remove('hide')
    }, 0)
}