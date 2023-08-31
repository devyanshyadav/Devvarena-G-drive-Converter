//This is for px indicator
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = `${val}%`;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${18 - newVal * 0.35}px))`;
}




//Here is the Actual ALgorithm

let gdriveTransDimension = document.querySelector('#gdriveTransDimension');
let inputGdriveTrans = document.querySelector('.inputGdriveTrans');
let getGdriveCopiedCodeDiv = document.querySelector('.getGdriveCopiedCodeDiv')
let gdriveTransButton = document.querySelector('.GdriveTransButton')
let gdriveTransPreview = document.querySelector('.GdriveTransPreview img');

//Here is the DImension input
gdriveTransDimension.addEventListener('input', () => {
    gdriveTransPreview.style.width = `${gdriveTransDimension.value}%`;
    gdriveTransToConvert()
});



let regexLink;
function gdriveTransButtonFunction() {
    if (inputGdriveTrans.value == "") {
        alert('Please enter the URL of the image')
    }
    else {
        try {
            const regex = /(?<=\/d\/)[^\/]+(?=\/view)/;
            const link = inputGdriveTrans.value;
            const match = link.match(regex);
            console.log(match[0]); // Output: 13w3bAUjMzOehuKw9eK8xspl6Ws5_ixrn
            gdriveTransPreview.setAttribute('src', `https://drive.google.com/uc?id=${match[0]}`)

            regexLink = match[0]
            // gdriveTransToConvert(match[0])
        }
        catch {
            alert('Please enter appropiate URL of the image')
            inputGdriveTrans.value = ""
        }
    }

}


let clickedGdriveTrans = 'Img';
let lazyLoadGdriveImg = "";

//This is to get value of Radio Button
function handleRadioClick(event) {
    clickedGdriveTrans = event.target.value;
}


function gdriveTransToConvert(elem = 'Convert') {
    let lazyLoadGdriveTransCheck = document.querySelector('.lazyLoadGdriveTransCheck');
    gdriveTransButton.click()

    if (inputGdriveTrans.value == "") {
        //  alert(`Opps! You Can't Copied`)
    }
    else {
        if (clickedGdriveTrans === 'Img') {
            if (lazyLoadGdriveTransCheck.checked) {
                lazyLoadGdriveImg = `loading="lazy"`;

            }
            getGdriveCopiedCodeDiv.textContent = `<img src="https://drive.google.com/uc?id=${regexLink}" width="${gdriveTransDimension.value}%" ${lazyLoadGdriveImg} alt="Image Name">`


        }
        else if (clickedGdriveTrans === 'Url') {
            getGdriveCopiedCodeDiv.textContent = `          background-image: url('https://drive.google.com/uc?id=${regexLink}');
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;`


        }
        else if (clickedGdriveTrans === 'Direct') {
            getGdriveCopiedCodeDiv.textContent = `https://drive.google.com/uc?id=${regexLink}`

        }

        document.querySelector('.gdriveConvertButton').textContent = elem;

    }
}

function copyGdriveTransFunction() {
    // Get the text to copy

    let copyText = getGdriveCopiedCodeDiv.textContent;

    // Create a new textarea element
    let textarea = document.createElement('textarea');
    textarea.value = copyText;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Select the textarea and copy its contents
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Alert the copied text
    alert('Copied the text: ' + copyText);
}

// TO Toggle steps 
let howToUse = document.querySelector('.howToUse')
function showSteps() {
    howToUse.classList.toggle('active')
}
