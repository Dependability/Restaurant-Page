export default function contactPage() {
    const wholeDiv = document.createElement("div");
    const estabInfo = document.createElement("div");
    const ownerInfo = document.createElement("div");
    const contactWrapper = document.createElement("div");

    //Establishment Info
    const estabHeader = document.createElement("h3");
    estabHeader.textContent = "Wonderful Restaurant"

    const estabAddress = document.createElement("p");
    estabAddress.textContent = "Address: 6969 YoMama ln, FL, CA ";
    
    const estabPhone = document.createElement("p");
    estabPhone.textContent = "Phone: 100-100-1000";

    //Owner Info
    const ownerHeader = document.createElement("h3");
    ownerHeader.textContent = "Seyi Bakare";

    const ownerAddress = document.createElement("p");
    ownerAddress.textContent = "Address: 6969 YoMama ln, FL, CA ";
    
    const ownerPhone = document.createElement("p");
    ownerPhone.textContent = "Phone: 100-100-1000";


    //Append
    estabInfo.appendChild(estabHeader);
    estabInfo.appendChild(estabAddress);
    estabInfo.appendChild(estabPhone);

    ownerInfo.appendChild(ownerHeader);
    ownerInfo.appendChild(ownerAddress);
    ownerInfo.appendChild(ownerPhone);

    contactWrapper.appendChild(estabInfo);
    contactWrapper.appendChild(ownerInfo);

    wholeDiv.appendChild(contactWrapper);
    wholeDiv.classList.add('body');
    contactWrapper.classList.add('wrapper')
    contactWrapper.classList.add('hide')
    const bodyContent = document.querySelector("#content");
    bodyContent.appendChild(wholeDiv);
    setTimeout(()=> {
        contactWrapper.classList.remove('hide')
    }, 0)
} 