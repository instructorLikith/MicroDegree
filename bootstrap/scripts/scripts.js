function add_phone(){
    const phone_list = document.getElementById("phone_list");

    // Create div section
    const phone_card = document.createElement("div");
    phone_card.classList.add("card");
    phone_card.style.width="18rem"

    //Create image section
    const image_d = document.createElement("img");
    image_d.classList.add("card-img-top");
    image_d.src="images/mobile_store.png";

    //create card body section
    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    //Title
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = "Sample Phone";

    //about Phone
    const card_text = document.createElement("p");
    card_text.classList.add("card-text")
    card_text.innerHTML = "Best Phone, very smooth to use. Nice battery backup and good camera quality"

    //Create a Link here
    const card_button = document.createElement("a");
    card_button.classList.add("btn");
    card_button.classList.add("btn-primary");
    card_button.innerHTML = "Go To";

    //Append child 
    phone_card.appendChild(image_d);

    card_body.appendChild(title);
    card_body.appendChild(card_text);
    card_body.appendChild(card_button);

    phone_card.appendChild(card_body);
    phone_list.appendChild(phone_card);
}
add_phone()