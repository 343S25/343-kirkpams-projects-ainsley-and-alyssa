document.addEventListener("DOMContentLoaded", (e) => {
    // Make carousel not move by itself
    $('.carousel').carousel({
        interval: false,
    });
    //get item from local storage
    let wornItems = localStorage.getItem('worn');
    //if theres no item create one
    if (wornItems == null) {
        wornItems = [];
    } else {
        wornItems = JSON.parse(wornItems);
    }
    let wornCarousel = document.getElementById("carousel-inner-laundry");
    wornItems.forEach((outfit, index) => {
        let itemSlide = document.createElement("div");
        itemSlide.classList.add("carousel-item");
        if (index == 0) itemSlide.classList.add("active");
        let container = document.createElement("div");
        container.classList.add("d-flex", "flex-column", "align-items-center", "gap-2");

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
        wornCarousel.appendChild(itemSlide);
    });
    localStorage.setItem("worn", JSON.stringify(wornItems));

    // When wash button pressed
    let washButton = document.getElementById("wash-btn");
    washButton.addEventListener('click', function() {
        localStorage.removeItem("worn");
        location.reload();
    });
});

