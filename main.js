data = {
  products: [
    {
      id: 1,
      name: "Adult Male Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      product_type: "bike"
    },
    {
      id: 2,
      name: "Adult Female Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      product_type: "bike"
    },
    {
      id: 3,
      name: "Kids Unisex Bike",
      price: 12.75,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      product_type: "bike"
    },
    {
      id: 4,
      name: "Adult Unisex Helmet",
      price: 4.0,
      image: "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 5,
      name: "Kids Unisex Helmet",
      price: 3.5,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 6,
      name: "Insurance",
      price: 9.99,
      image: "http://via.placeholder.com/250x250?text=Insurance",
      product_type: "addon"
    }
  ]
};

let cardList = document.getElementById("card-list");

let dropdown = document.getElementById("select-bike");
dropdown.required = true;
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Select One Option";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

var mydata = data.products.reverse();

for (let i = 0; i < mydata.length; i++) {
  let card = `<div class="card-container" id="card">
     <img src="${mydata[i].image}" alt="" id="img">
    <h3 id="name">${mydata[i].name}</h3>
    <h4 id="price">Price: $ ${mydata[i].price}</h4>
    <a href="#submit" class="card_link">BOOK NOW</a>
  </div>`;
  cardList.insertAdjacentHTML("afterbegin", card);
}

for (let i = 0; i < mydata.length; i++) {
  var option = document.createElement("option");
  option.text = mydata[i].name;
  option.value = mydata[i].name;

  dropdown.add(option);
}

let myForm = document.getElementById("submit");
var error = document.getElementById("error-message");
var content = document.createTextNode("Select One Option");

myForm.addEventListener("click", function() {
  if (dropdown.value == "Select One Option") {
    alert("Please select one bike");
    error.appendChild(content);
    dropdown.style.borderColor = "red";
  }
});
