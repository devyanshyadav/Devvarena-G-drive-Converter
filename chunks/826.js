
function copyGdriveTransFunction() {
    // Get the text to copy
  
    let copyText = getGdriveCopiedCodeDiv.textContent;
  
    // Create a new textarea element
    let textarea = document.createElement("textarea");
    textarea.value = copyText;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
  
    // Select the textarea and copy its contents
    textarea.select();
    document.execCommand("copy");
  
    // Remove the textarea from the document
    document.body.removeChild(textarea);
  
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }