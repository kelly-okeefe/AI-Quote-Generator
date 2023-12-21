function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "I am to wait, though waiting be so hell... Time is very slow for those who wait...",
        autoStart: true,
        delay: 1,
        cursor: "",
        delay: 50,
      });






}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);