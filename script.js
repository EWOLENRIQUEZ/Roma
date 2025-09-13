const message = `There were days I wished—when I was with you—that time would trip on its toes, so that I can spend more hours with you and pace my walk slower. \n\nI just missed the way we wait for the jeeps of Divisoria, and sending you off in Isettan just to know your were safe. \n\n I don't know what future holds, but I know life was kind enough that she sent you. \n\n Happy Birthday Roma, I wish you all the sparks in the world `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}




