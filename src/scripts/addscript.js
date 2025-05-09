// get stuff from localstorage from script.js
let tops = JSON.parse(localStorage.getItem("tops")) || [];
let bottoms = JSON.parse(localStorage.getItem("bottoms")) || [];
let shoes = JSON.parse(localStorage.getItem("shoes")) || [];

// Create an object out of add form submission
let clothesForm = document.getElementById("add-form");
let imageForm = document.getElementById("dropbox");
clothesForm.addEventListener('submit', function(e) {
    console.log("gets to eventLister");
    const validCategories = ['Tops', 'Bottoms', 'Shoes'];
    e.preventDefault();
    let itemName = document.getElementById("inputItemName").value;
    let itemCategory = document.getElementById("inputCategory").value;
    if (!validCategories.includes(itemCategory)) {
        alert('Please enter "Tops", "Bottoms", or "Shoes"');
        return;

      }
    let itemSubcategory = document.getElementById("inputSubcategory").value;
    let itemColor = document.getElementById("inputColor").value;
    let itemSize =  document.getElementById("inputSize").value;

    // trying image stuff?
    let itemImage = document.getElementById("uploadInput").value;

    // actual object creation
    let clothingItem = {
        name: itemName,
        category: itemCategory,
        subcategory: itemSubcategory,
        color: itemColor,
        size: itemSize,
        image: itemImage, 
        altText: "Image of Clothing", 
        wears: 0
    }

    if (itemCategory === "Tops") {
        tops.push(clothingItem);
        console.log(tops);
    } else if (itemCategory === "Bottoms") {
        bottoms.push(clothingItem);
        console.log(bottoms);
    } else if (itemCategory === "Shoes") {
        shoes.push(clothingItem);
        console.log(shoes);
    }
});
