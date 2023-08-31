
function gdriveTransToConvert(elem = "Convert") {
    let lazyLoadGdriveTransCheck = document.querySelector(
      ".lazyLoadGdriveTransCheck"
    );
    gdriveTransButton.click();
  
    if (inputGdriveTrans.value == "") {
      //  alert(`Opps! You Can't Copied`)
    } else {
      if (clickedGdriveTrans === "Img") {
        if (lazyLoadGdriveTransCheck.checked) {
          lazyLoadGdriveImg = `loading="lazy"`;
        }
        getGdriveCopiedCodeDiv.textContent = `<img src="https://drive.google.com/uc?id=${regexLink}" width="${gdriveTransDimension.value}%" ${lazyLoadGdriveImg} alt="Image Name">`;
      } else if (clickedGdriveTrans === "Url") {
        getGdriveCopiedCodeDiv.textContent = `          background-image: url('https://drive.google.com/uc?id=${regexLink}');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;`;
      } else if (clickedGdriveTrans === "Direct") {
        getGdriveCopiedCodeDiv.textContent = `https://drive.google.com/uc?id=${regexLink}`;
      }
  
      document.querySelector(".gdriveConvertButton").textContent = elem;
    }
  }
  