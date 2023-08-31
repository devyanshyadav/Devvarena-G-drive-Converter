let regexLink;
function gdriveTransButtonFunction() {
  if (inputGdriveTrans.value == "") {
    alert("Please enter the URL of the image");
  } else {
    try {
      const regex = /(?<=\/d\/)[^\/]+(?=\/view)/;
      const link = inputGdriveTrans.value;
      const match = link.match(regex);
      console.log(match[0]); // Output: 13w3bAUjMzOehuKw9eK8xspl6Ws5_ixrn
      gdriveTransPreview.setAttribute(
        "src",
        `https://drive.google.com/uc?id=${match[0]}`
      );

      regexLink = match[0];
      // gdriveTransToConvert(match[0])
    } catch {
      alert("Please enter appropiate URL of the image");
      inputGdriveTrans.value = "";
    }
  }
}
