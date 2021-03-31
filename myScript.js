//This is Job Villanca's original javascript code
//feel free to change the JS code whatever you want
//check my github page on https://jobdecrypt.github.io
//check my github account on https://github.com/jobvillanca

// i added a comma on the array bellow so that it will start on itemArray[1]
let itemArray = [,];
//array of pushed price values after clicking the button
let pushedPrice = [];
let buttonCount = 0;
let keyValue = new Object();

function showButton() {
  // This is the button counter
  buttonCount++;
  // this will the the number value of the counter and add it to the string element "but"
  let getButton = document.getElementById("but" + buttonCount);
  // this will get the value inside the Name input's value
  let getName = document.getElementById("posName").value;
  // this will get the value inside the Price input's value
  let getPrice = document.getElementById("posPrice").value;

  getButton.name = getName;
  getButton.value = getPrice;

  if (getButton.style.display === "none") {
    //   this will show all the hidden button
    getButton.style.display = "block";
    getButton.innerText = getName;
  } else {
    getButton.style.display === "none";
  }

  //this will create an object for the name and price values
  let userInputs = {
    name: getButton.name,
    price: getButton.value,
  };
  //this will push the objects to the array or (the server if there is)
  itemArray.push(userInputs);

  // Callback function to print to Item Values
  printInputValues();
}

// BUTTON ACTION part

function buttonAction(number) {
  // this will create a text node from the object from the item array's name
  let invoiceName = document.createTextNode(itemArray[number].name);
  // this will create a text node from the object from the item array's price
  let invoicePrice = document.createTextNode(itemArray[number].price);
  //this will get the content of the invoicePrice but not in Strings
  let priceValue = invoicePrice.textContent;
  //this will create a dotted line and the dollar sign
  let dollarSign = document.createTextNode(
    "...................................... $"
  );

  let addZeros = document.createTextNode(".00");

  let addToList = document.createElement("li");

  addToList.appendChild(invoiceName);
  addToList.appendChild(dollarSign);
  addToList.appendChild(invoicePrice);
  // addToList.appendChild(addZeros);

  //addToList.appendChild(addZeros);
  // Add this next line if you want to add zero's if the value is int and not boolean

  if (priceValue % 1 == 0) {
    addToList.appendChild(addZeros);
  }

  document.getElementById("receipt").appendChild(addToList);
  // console.log(invoicePrice.textContent);

  pushedPrice.push(priceValue);

  console.log(pushedPrice);
  // to get the sum of the price values when button is clicked
  // getSum();
}

// function getSum() {
//   let len = pushedPrice.length;
//   let sum = 0;
//   for (i = 0; i < len; i++) {
//     sum += pushedPrice[i];
//   }
//   console.log(sum);
// }

// INPUT VALUES part

function printInputValues() {
  // Get Name Value
  let getName = document.getElementById("posName").value;
  let nameString = document.createTextNode(getName);
  // Get Price Value
  let getPrice = document.getElementById("posPrice").value;
  let priceString = document.createTextNode(getPrice);

  let addList = document.createElement("li");

  let dollarSign = document.createTextNode("  =   $");

  addList.appendChild(nameString);
  addList.appendChild(dollarSign);
  addList.appendChild(priceString);

  // Add this next line if you want to add zero's if the value is int and not boolean
  let addZeros = document.createTextNode(".00");
  if (getPrice % 1 == 0) {
    addList.appendChild(addZeros);
  }

  document.getElementById("inputs").appendChild(addList);
}

//   for (i = 1; i <= 12; i++) {
//     let x = document.getElementById("but" + i);
//     x.name.value;
//     console.log(x);
//   }

// below is a function to generate some buttons
// function generateButton() {
//     let getName = document.getElementById("posName").value;
//     let makeButton = document.createElement("button");

//     makeButton.className = "btn btn-outline-secondary";

//     makeButton.innerText = getName;

//     document.getElementById("receipt").appendChild(makeButton);
//   }
