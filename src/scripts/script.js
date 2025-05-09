// Make carousel not move by itself
$('.carousel').carousel({
    interval: false,
});
// Create objects for the closet (Tops, Bottoms, Shoes_
// Create default top
let defaultHead = {
    image: "images/heads/default-head.png",
    altText: "Selected Head"
}

let defaultTop = {
    itemName: "Default Top",
    category: "Shirts",
    subcategory: "T-shirts",
    color: "White",
    size: "Medium",
    image: "images/shirts/default-shirt.png",
    altText: "First Top in Closet",
    wears: 0
}

let blackTop = {
    itemName: "Black Top",
    category: "Shirts",
    subcategory: "T-shirts",
    color: "Black",
    size: "Medium",
    image: "images/shirts/Black-tshirt.png",
    altText: "Second Top in Closet",
    wears: 0
}

let orangeTop = {
    itemName: "Yellow Top",
    category: "Shirts",
    subcategory: "T-shirts",
    color: "Yellow",
    size: "Medium",
    image: "images/shirts/yellow-tshirt.png",
    altText: "Third Top in Closet",
    wears: 0
}

// Create default bottoms
let defaultBottoms = {
    itemName: "Default Bottoms",
    category: "Pants",
    subcategory: "Khakis",
    color: "Beige",
    size: "Medium",
    image: "images/pants/default-pants.png",
    altText: "First Pants in Closet",
    wears: 0
}

let jeanBottoms = {
    itemName: "Shorts",
    category: "Pants",
    subcategory: "Shorts",
    color: "Green",
    size: "Medium",
    image: "images/pants/shorts.png",
    altText: "Second Pants in Closet",
    wears: 0
}

let joggerBottoms = {
    itemName: "Jeans",
    category: "Pants",
    subcategory: "Jeans",
    color: "Blue",
    size: "Medium",
    image: "images/pants/jean-pants.png",
    altText: "Third Pants in Closet",
    wears: 0
}

// Create default shoes
let defaultShoes = {
    itemName: "Default Shoes",
    category: "Shoes",
    subcategory: "Sneakers",
    color: "Black",
    size: "11",
    image: "images/shoes/default-shoes.png",
    altText: "First Shoes in Closet",
    wears: 0
}

let redShoes = {
    itemName: "Athletic Shoes",
    category: "Shoes",
    subcategory: "Sneakers",
    color: "Grey",
    size: "11",
    image: "images/shoes/sport.png",
    altText: "Second Shoes in Closet",
    wears: 0
}

let whiteShoes = {
    itemName: "Dress Shoes",
    category: "Shoes",
    subcategory: "dress",
    color: "tan",
    size: "11",
    image: "images/shoes/dress.png",
    altText: "Third Shoes in Closet",
    wears: 0
}


let tops = [];
let bottoms = [];
let shoes = [];
let closet = [];
localStorage.setItem("tops", JSON.stringify(tops));
localStorage.setItem("bottoms", JSON.stringify(bottoms));
localStorage.setItem("shoes", JSON.stringify(shoes));
tops.push(defaultTop);
tops.push(orangeTop);
tops.push(blackTop);
bottoms.push(defaultBottoms);
bottoms.push(jeanBottoms);
bottoms.push(joggerBottoms);
shoes.push(whiteShoes);
shoes.push(redShoes);
shoes.push(whiteShoes);

// read all my outfit images from opfs
// const opfsRoot = await navigator.storage.getDirectory();
//   const directoryHandle = await opfsRoot.getDirectoryHandle("opfs-gallery", {
//     create: true,
//   });
//actually do this 3x one for each kind of clothing
//   for await (let [name, handle] of directoryHandle) {
    // const theOneFromOPFS = handle.name
//     console.log(await handle.getFile()); // eg logs
//   }
//  for each image, you will start by getting its name property
//  search in my 3 arrays for the object that has the fileNme that matches the current file's filename
// tops.findIndex((piece) => {
//     const pathToImage = piece.image.split("/")
//     const filename = pathToImage[pathToImage.length - 1]
//     return filename=== theOneFromOPFS
// })

// loop over each array (bootoms, shoes, etf)
// 

// Make item carousel slides
let topsCarousel = document.getElementById("carousel-inner-1");
let bottomsCarousel = document.getElementById("carousel-inner-2");
let shoesCarousel = document.getElementById("carousel-inner-3");

function addTopSlide(item) {
    let itemSlide = document.createElement("div");
    itemSlide.classList.add("carousel-item");
    if (item.itemName === "Default Top") itemSlide.classList.add("active");
    let itemImg = document.createElement("img");
    itemImg.classList.add("d-block", "w-100");
    itemImg.height = "100";
    itemImg.width = "100";
    itemImg.src = item.image;
    itemImg.alt = item.altText;
    itemSlide.appendChild(itemImg);
    topsCarousel.appendChild(itemSlide);
}

function addBottomsSlide(item) {
    let itemSlide = document.createElement("div");
    itemSlide.classList.add("carousel-item");
    if (item.itemName === "Default Bottoms") itemSlide.classList.add("active");
    let itemImg = document.createElement("img");
    itemImg.classList.add("d-block", "w-100");
    itemImg.height = "100";
    itemImg.width = "100";
    itemImg.src = item.image;
    itemImg.alt = item.altText;
    itemSlide.appendChild(itemImg);
    bottomsCarousel.appendChild(itemSlide);
}

function addShoesSlide(item) {
    let itemSlide = document.createElement("div");
    itemSlide.classList.add("carousel-item");
    if (item.itemName === "Default Shoes") itemSlide.classList.add("active");
    let itemImg = document.createElement("img");
    itemImg.classList.add("d-block", "w-100");
    itemImg.height = "100";
    itemImg.width = "100";
    itemImg.src = item.image;
    itemImg.alt = item.altText;
    itemSlide.appendChild(itemImg);
    shoesCarousel.appendChild(itemSlide);
}

// Make default item carousel slides
addTopSlide(defaultTop);
addTopSlide(blackTop);
addTopSlide(orangeTop);
addBottomsSlide(defaultBottoms);
addBottomsSlide(joggerBottoms);
addBottomsSlide(jeanBottoms);
addShoesSlide(defaultShoes);
addShoesSlide(redShoes);
addShoesSlide(whiteShoes);

// Make currently worn object
let currentlyWorn = {
    head: defaultHead,
    top: defaultTop,
    bottoms: defaultBottoms,
    shoes: defaultShoes
}

let div2 = document.getElementById("div2");
// Head
let currHead = document.createElement("img");
currHead.id = "curr-head";
currHead.height = "100";
currHead.width = "100";
currHead.src = currentlyWorn.head.image;
currHead.alt = currentlyWorn.head.altText;
div2.appendChild(currHead);
// Top
let currTop = document.createElement("img");
currTop.id = "curr-shirt";
currTop.height = "100";
currTop.width = "100";
currTop.src = currentlyWorn.top.image;
currTop.alt = currentlyWorn.top.altText;
div2.appendChild(currTop);
// Bottoms
let currBottoms = document.createElement("img");
currBottoms.id = "curr-pants";
currBottoms.height = "100";
currBottoms.width = "100";
currBottoms.src = currentlyWorn.bottoms.image;
currBottoms.alt = currentlyWorn.bottoms.altText;
div2.appendChild(currBottoms);
// Shoes
let currShoes = document.createElement("img");
currShoes.id = "curr-shoes";
currShoes.height = "100";
currShoes.width = "100";
currShoes.src = currentlyWorn.shoes.image;
currShoes.alt = currentlyWorn.shoes.altText;
div2.appendChild(currShoes);


// when going through the carousel, make the current slide the worn object
function updateCurrentOutfitFromCarousel() {
    // Top
    let activeTop = document.querySelector('#carousel-inner-1 .carousel-item.active img');
    currentlyWorn.top = {
        itemName: activeTop.itemName,
        category: activeTop.category,
        subcategory: activeTop.subcategory,
        color: activeTop.color,
        size: activeTop.size,
        image: activeTop.src,
        altText: activeTop.alt,
        wears: activeTop.wears
    };
    document.getElementById("curr-shirt").src = activeTop.src;
    document.getElementById("curr-shirt").alt = activeTop.alt;

    // Bottoms
    let activeBottom = document.querySelector('#carousel-inner-2 .carousel-item.active img');
    currentlyWorn.bottoms = {
        itemName: activeBottom.itemName,
        category: activeBottom.category,
        subcategory: activeBottom.subcategory,
        color: activeBottom.color,
        size: activeBottom.size,
        image: activeBottom.src,
        altText: activeBottom.alt,
        wears: activeBottom.wears
    };
    document.getElementById("curr-pants").src = activeBottom.src;
    document.getElementById("curr-pants").alt = activeBottom.alt;

    // Shoes
    let activeShoes = document.querySelector('#carousel-inner-3 .carousel-item.active img');
    currentlyWorn.shoes = {
        itemName: activeShoes.itemName,
        category: activeShoes.category,
        subcategory: activeShoes.subcategory,
        color: activeShoes.color,
        size: activeShoes.size,
        image: activeShoes.src,
        altText: activeShoes.alt,
        wears: activeShoes.wears
    };
    document.getElementById("curr-shoes").src = activeShoes.src;
    document.getElementById("curr-shoes").alt = activeShoes.alt;
}
$('#carouselDiv4').on('slid.bs.carousel', updateCurrentOutfitFromCarousel);
$('#carouselDiv5').on('slid.bs.carousel', updateCurrentOutfitFromCarousel);
$('#carouselDiv6').on('slid.bs.carousel', updateCurrentOutfitFromCarousel);

// Call to weather API
const weatherButton = document.getElementById("weatherButton");
let weatherP = document.getElementById("weatherP");
weatherButton.addEventListener('click', async function () {
    console.log("click worked");
    let resp = await fetch("https://api.weatherapi.com/v1/forecast.json?key=2f4f1c7a2eec4e77891215249251604&q=22807&days=1");
    let myjson = await resp.json();
    console.log(myjson);
    const forecast = myjson.forecast.forecastday[0];
    const maxTempF = forecast.day.maxtemp_f;
    const minTempF = forecast.day.mintemp_f;
    const chanceOfRain = forecast.day.daily_chance_of_rain;
    const weatherSummary = `Forecast for Today:\nHigh: ${maxTempF}°F\nLow: ${minTempF}°F\nChance of Rain: ${chanceOfRain}%. Click to close.`;
    weatherP.textContent = weatherSummary;
    weatherP.href = "#";
    weatherDiv.style.display = "inherit";
})

const weatherDiv = document.getElementById("weatherDiv");
weatherDiv.addEventListener('click', function () {
    weatherDiv.style.display = "none";
})

// Lower buttons functionality
const laundryButton = document.getElementById('laundry-button');
laundryButton.addEventListener('click', function () {
    window.location.href = 'laundry.html';
});

const favsButton = document.getElementById('favorites-button');
favsButton.addEventListener('click', function () {
    window.location.href = 'favorites.html';
    populateFavoritesHTML();
});


let favOutfits = JSON.parse(localStorage.getItem("favOutfits") || "[]");

const saveButton = document.getElementById("saveOutfitBtn");
saveButton.addEventListener('click', function () {
    let newFav = JSON.parse(JSON.stringify(currentlyWorn));
    favOutfits.push(newFav);
    localStorage.setItem("favOutfits", JSON.stringify(favOutfits));
    console.log("Saved outfit:", newFav);
})
console.log(favOutfits);

// Put all of the outfits in the favOutfits array onscreen
function populateFavoritesHTML() {
    const container = document.getElementById("favoritesContainer");
    container.innerHTML = "";
    let storedFavs = localStorage.getItem("favOutfits");
    if (storedFavs) {
        favOutfits = JSON.parse(storedFavs);
    }
    favOutfits.forEach((outfit, index) => {
        let outfitDiv = document.createElement("div");
        outfitDiv.classList.add("card");
        outfitDiv.style.width = "250px";
        let cardBody = `
            <div class="card-body">
                <h5 class="card-title">Outfit ${index + 1}</h5>
                <img src="${outfit.head.image}" alt="${outfit.head.altText}" width="75" height="75">
                <img src="${outfit.top.image}" alt="${outfit.top.altText}" width="75" height="75">
                <img src="${outfit.bottoms.image}" alt="${outfit.bottoms.altText}" width="75" height="75">
                <img src="${outfit.shoes.image}" alt="${outfit.shoes.altText}" width="75" height="75">
            </div>
        `;
        outfitDiv.innerHTML = cardBody;
        container.appendChild(outfitDiv);
    });
}




const wearButton = document.getElementById('wear-btn');
wearButton.addEventListener('click', function () {
    //get item from local storage
    let wornItems = localStorage.getItem('worn');
    //if theres no item create one
    if (wornItems == null) {
        wornItems = [];
    } else {
        wornItems = JSON.parse(wornItems);
    }


    let article = {
        top: {
            itemName: currentlyWorn.top.itemName,
            category: currentlyWorn.top.category,
            subcategory: currentlyWorn.top.subcategory,
            color: currentlyWorn.top.color,
            size: currentlyWorn.top.size,
            image: currentlyWorn.top.image,
            altText: currentlyWorn.top.altText,
            wears: currentlyWorn.top.wears + 1
        },
        bottoms: {
            itemName: currentlyWorn.bottoms.itemName,
            category: currentlyWorn.bottoms.category,
            subcategory: currentlyWorn.bottoms.subcategory,
            color: currentlyWorn.bottoms.color,
            size: currentlyWorn.bottoms.size,
            image: currentlyWorn.bottoms.image,
            altText: currentlyWorn.bottoms.altText,
            wears: currentlyWorn.bottoms.wears + 1
        },
        shoes: {
            itemName: currentlyWorn.shoes.itemName,
            category: currentlyWorn.shoes.category,
            subcategory: currentlyWorn.shoes.subcategory,
            color: currentlyWorn.shoes.color,
            size: currentlyWorn.shoes.size,
            image: currentlyWorn.shoes.image,
            altText: currentlyWorn.shoes.altText,
            wears: currentlyWorn.shoes.wears + 1
        }
    };

    currentlyWorn.top.wears++;
    currentlyWorn.bottoms.wears++;
    currentlyWorn.shoes.wears++;

    //put in local storage
    wornItems.push(article);
    localStorage.setItem('worn', JSON.stringify(wornItems));
})

const exporting = document.getElementById('export-btn');
exporting.addEventListener('click', function() {
    let storedClothes = localStorage.getItem('favOutfits');
    let parsedClothes = JSON.parse(storedClothes);
    let stringyClothes = JSON.stringify(parsedClothes);

    let encoded = encodeURIComponent(stringyClothes);

    let urlThing = `data:application/json;charset=utf-8,${encoded}`;

    let link = document.createElement('a');
    link.href = urlThing;
    link.download = 'favoriteOutfits';

    document.getElementById('downloads').appendChild(link);

    link.click();
});
