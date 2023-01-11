
function loadPage() {
    const bodyContent = document.querySelector("#content");

    // const restaurantImage = document.createElement("img");
    // restaurantImage.setAttribute("src", "images/restaurantimage.jpg");
    const contentBody = document.createElement('div');
    contentBody.classList.add('body');

    const bodyWrapper = document.createElement('div');
    bodyWrapper.classList.add('wrapper');
    bodyWrapper.classList.add('hide');

    const restaurantHeader = document.createElement("h1");
    restaurantHeader.textContent = "Wonderful Restaurant!";

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.textContent = "Wonderful Restaurant!";

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

    const navBar = document.createElement('nav');
    const navWrapper = document.createElement('div')
    navWrapper.classList.add('nav-wrapper');

    navBar.appendChild(navWrapper)
    navWrapper.appendChild(restaurantTitle);
    navWrapper.appendChild(buttonDiv);

    buttonDiv.appendChild(homeBut);
    buttonDiv.appendChild(menuBut);
    buttonDiv.appendChild(contactBut);
    buttonDiv.classList.add("buttons");
    bodyWrapper.appendChild(restaurantHeader);
    bodyWrapper.appendChild(restaurantInfo);
    contentBody.appendChild(bodyWrapper);

    if (!(document.querySelector("nav"))) {
        bodyContent.appendChild(navBar)
    }
    
    // bodyContent.appendChild(restaurantImage);
    bodyContent.appendChild(contentBody);
    setTimeout(()=> {
        bodyWrapper.classList.remove('hide')
    }, 0)
    
    
    
}


export default loadPage;