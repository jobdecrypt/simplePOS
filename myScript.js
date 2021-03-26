// i added a comma on the array bellow so that it will start on itemArray[1]
var itemArray = [,];
var newArray = [];

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
  //this will name the button with the price

  if (getButton.style.display === "none") {
    //   this will show all the hidden button
    getButton.style.display = "block";
    getButton.innerText = getName;
    getButton.name = getPrice;
  } else {
    getButton.style.display === "none";
  }

  // Callback function
  printToReceipt();

  //   //   keyValue test

  //   keyValue.name = getName;
  //   keyValue.price = getPrice;
  //   itemArray.push(keyValue);

  //   clear Values
  setTimeout(() => $("#form1").find("input").val("")), 3;
}

function printToReceipt() {
  // Get Name Value
  let getName = document.getElementById("posName").value;
  let nameString = document.createTextNode(getName);
  // Get Price Value
  let getPrice = document.getElementById("posPrice").value;
  let priceString = document.createTextNode(getPrice);

  let addList = document.createElement("li");

  let dollarSign = document.createTextNode(
    " ...............................   $"
  );

  addList.appendChild(nameString);
  addList.appendChild(dollarSign);
  addList.appendChild(priceString);

  // Add this next line if you want to add zero's if the value is int and not boolean
  let addZeros = document.createTextNode(".00");
  if (getPrice % 1 == 0) {
    addList.appendChild(addZeros);
  } else {
  }

  document.getElementById("inputs").appendChild(addList);
}

function buttonAction() {
  let x = document.getElementById("but2");
  x.name.value;

  //   for (i = 1; i <= 12; i++) {
  //     let x = document.getElementById("but" + i);
  //     x.name.value;
  //     console.log(x);
  //   }
}

// below is a function to generate some buttons
// function generateButton() {
//     let getName = document.getElementById("posName").value;
//     let makeButton = document.createElement("button");

//     makeButton.className = "btn btn-outline-secondary";

//     makeButton.innerText = getName;

//     document.getElementById("receipt").appendChild(makeButton);
//   }
