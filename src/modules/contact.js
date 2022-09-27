export default function contactPage() {
    const wholeDiv = document.createElement("div");
    const estabInfo = document.createElement("div");
    const ownerInfo = document.createElement("div");

    //Establishment Info
    const estabHeader = document.createElement("h3");
    estabHeader.textContent = "Wonderful Restaurant"

    const estabAddress = document.createElement("p");
    estabAddress.textContent = "Address: 6969 YoMama ln, FL, CA ";
    
    const estabPhone = document.createElement("p");
    estabPhone.textContent = "Phone: 100-100-1000";

    //Owner Info
    const ownerHeader = document.createElement("h3");
    ownerHeader.textContent = "Dependability";

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

    wholeDiv.appendChild(estabInfo);
    wholeDiv.appendChild(ownerInfo);

    const bodyContent = document.querySelector("#content");
    bodyContent.appendChild(wholeDiv);
} 