const message = `There were days I wished—when I was with you—that time would trip on its toes.\nSo that I can spend more hours with you and pace my walk slower\nI just missed the way we wait for the jeeps of divisoria, and sending you off in isettan just to know your were safe. \n\n I don't know what future holds, but I know life was kind enough that she sent you.`;

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



