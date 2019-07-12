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

let dropdown = document.getElementById("select-bike");
dropdown.required = true;
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Select One Bike";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

var mydata = data.products;

for (let i = 0; i < mydata.length; i++) {
  var option = document.createElement("option");
  var image = document.createElement("img");
  image.src = mydata[i].image;
  option.text = mydata[i].name;
  option.value = mydata[i].name;
  if (mydata[i].product_type === "bike") {
    dropdown.add(option);
  }
}

let myForm = document.getElementById("submit");
var error = document.getElementById("error-message");
var content = document.createTextNode("Please select one option");

myForm.addEventListener("click", function() {
  if (dropdown.value == "Select One Bike") {
    alert("Please select one bike");
    error.appendChild(content);
    dropdown.style.borderColor = "red";
  }
});
