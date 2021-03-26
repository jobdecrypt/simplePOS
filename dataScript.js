var newArray = [];

const resultsList = document.getElementById("data");

new URLSearchParams(window.location.search).forEach((value, name) => {
  resultsList.append(`${name}: ${value}`);
  resultsList.append(document.createElement("br"));
});
