//Here is the Actual ALgorithm

let gdriveTransDimension = document.querySelector("#gdriveTransDimension");
let inputGdriveTrans = document.querySelector(".inputGdriveTrans");
let getGdriveCopiedCodeDiv = document.querySelector(".getGdriveCopiedCodeDiv");
let gdriveTransButton = document.querySelector(".GdriveTransButton");
let gdriveTransPreview = document.querySelector(".GdriveTransPreview img");

//Here is the DImension input
gdriveTransDimension.addEventListener("input", () => {
  gdriveTransPreview.style.width = `${gdriveTransDimension.value}%`;
  gdriveTransToConvert();
});
