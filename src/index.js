
function displayPoem(response) {
  let mainImage = document.querySelector("img");
  mainImage.classList.add("hidden");

    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
        delay: 50,
      });
}


function generatePoem(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e7f44dtf8936b0ao9a003f375cfb3403";
    let context = "You are a Shakespeare expert, who loves to write poetry. Your mission is to generate a poem, no more than six lines, in basic HTML and separate each line with a </br>. The poem should sound like it was written by William Shakespeare. Make sure to follow the user instructions. Do not include a title to the poem.";
    let prompt = `User instructions: Please generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement=document.querySelector("#poem");
    poemElement.innerHTML=`<div class="generating">Thy poem about ${instructionsInput.value} is being gen'rat'd...</div>`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);