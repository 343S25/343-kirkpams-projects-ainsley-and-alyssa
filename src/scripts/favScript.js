document.addEventListener("DOMContentLoaded", (e) => {
    // Make carousel not move by itself
    $('.carousel').carousel({
        interval: false,
    });
    let favOutfits = JSON.parse(localStorage.getItem("favOutfits") || "[]");

    // Make item carousel slides
    let outfitsCarousel = document.getElementById("carousel-inner-fav");


    favOutfits.forEach((outfit, index) => {
        let itemSlide = document.createElement("div");
        itemSlide.classList.add("carousel-item");
        if (index == 0) itemSlide.classList.add("active");
        let container = document.createElement("div");
        container.classList.add("d-flex", "justify-content-around", "align-items-center");

        // top
        let topImg = document.createElement("img");
        topImg.classList.add("d-block");
        topImg.classList.add("w-100");
        topImg.src = outfit.top.image;
        topImg.alt = outfit.top.altText;
        topImg.width = 100;
        topImg.height = 100;
        
        // bottom
        let btmImg = document.createElement("img");
        btmImg.classList.add("d-block");
        btmImg.classList.add("w-100");
        btmImg.src = outfit.bottoms.image;
        btmImg.alt = outfit.bottoms.altText;
        btmImg.width = 100;
        btmImg.height = 100;


        // shoes
        let shoesImg = document.createElement("img");
        shoesImg.classList.add("d-block");
        shoesImg.classList.add("w-100");
        shoesImg.src = outfit.shoes.image;
        shoesImg.alt = outfit.shoes.altText;
        shoesImg.width = 100;
        shoesImg.height = 100;

        container.appendChild(topImg);
        container.appendChild(btmImg);
        container.appendChild(shoesImg);
        itemSlide.appendChild(container);
        outfitsCarousel.appendChild(itemSlide);
    });
    localStorage.setItem("favOutfits", JSON.stringify(favOutfits));

    let removeBtn = document.getElementById('remove-btn');
    removeBtn.addEventListener('click', function() {
        localStorage.removeItem("favOutfits");
        location.reload();
    });
  });