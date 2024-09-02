

function update_details() {
    // Update Mobile Name
    const card_name = document.querySelector("#mobile1 .mobile-name")
    card_name.textContent = "Mobile Name: Mi";

    // Update Mobile Model
    const mobile_model = document.querySelector("#mobile1 .mobile-model")
    mobile_model.textContent = "Mobile Model: A3"

    const price = document.querySelector("#mobile1 .mobile-price")
    price.textContent = "Price: 50000/-"
    console.log(card_name)
}

function add_phone(name, model, price){
    const phone_list = document.getElementById("mobile");

    const phone_card = document.createElement("div");
    phone_card.classList.add("phone");

    // Image Tag
    const image_p = document.createElement("img");
    image_p.src="images/mobile_store.png"
    // Name Tag
    const name = document.createElement("p");
    name.classList.add("phone-name");
    name.innerHTML = "Brand Name: " +name;

    //Model Tag
    const model = document.createElement("p");
    model.classList.add("model-name");
    model.innerHTML = "Model Name: " +model;
    //Price Tag
    const price = document.createElement("p");
    price.classList.add("mobile-price");
    price.innerHTML = "Price: " +price;

    phone_card.appendChild(image_p);
    phone_card.appendChild(name);
    phone_card.appendChild(model);
    phone_card.appendChild(price);

    phone_list.appendChild(phone_card);
    
    //console.log(phone_list);
}
// console.log(phone_card)

add_phone("New Phone", "M1", "10000/-")
add_phone("New Phone", "M2", "10000/-")
add_phone("New Phone", "M3", "10000/-")