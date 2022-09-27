
function loadPage() {
    const bodyContent = document.querySelector("#content");

    const restaurantImage = document.createElement("img");
    restaurantImage.setAttribute("src", "images/restaurantimage.jpg");

    const restaurantHeader = document.createElement("h1");
    restaurantHeader.textContent = "Wonderful Restaurant!";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent = `This restaurant is sure to satisfy your taste buds. You will not leave disappointed. Starting
                                    with our premium steaks to our sweet homemade icecream, we have anything that you desire!`;
    const buttonDiv = document.createElement("div");
    const homeBut = document.createElement("button");
    const menuBut = document.createElement("button");
    const contactBut = document.createElement("button");

    homeBut.textContent = "Home";
    homeBut.classList.add("home");
    menuBut.textContent = "Menu";
    menuBut.classList.add("menu");
    contactBut.textContent = "Contact Us";
    contactBut.classList.add("contact");

    buttonDiv.appendChild(homeBut);
    buttonDiv.appendChild(menuBut);
    buttonDiv.appendChild(contactBut);
    buttonDiv.classList.add("buttons");

    if (!(document.querySelector(".buttons"))) {
        bodyContent.appendChild(buttonDiv)
    }
    
    bodyContent.appendChild(restaurantImage);
    bodyContent.appendChild(restaurantHeader);
    bodyContent.appendChild(restaurantInfo);
}


export default loadPage;