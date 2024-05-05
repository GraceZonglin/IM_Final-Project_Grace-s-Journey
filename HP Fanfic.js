// Preface - click ————————————————————————————————————————————————————//
document.addEventListener("DOMContentLoaded", function () {
  const wand = document.getElementById("Wand-doodle");
  const prefaceText = document.getElementById("Preface-text");

  wand.addEventListener("click", function () {
    prefaceText.style.opacity = 1;
  });
});

// Excerpt - mouse hover ————————————————————————————————————————————————————//
const illustration1 = document.getElementById("HP-illustration1");
const illustration2 = document.getElementById("HP-illustration2");
const illustration3 = document.getElementById("HP-illustration3");
const illustration4 = document.getElementById("HP-illustration4");

const images = {
  stage1: {
    hover: "image/HP image/HP Illustration1-2.png",
    normal: "image/HP image/HP Illustration1-1.png",
  },
  stage2: {
    hover: "image/HP image/HP Illustration2-2.png",
    normal: "image/HP image/HP Illustration2-1.png",
  },
  stage3: {
    hover: "image/HP image/HP Illustration3-2.png",
    normal: "image/HP image/HP Illustration3-1.png",
  },
  stage4: {
    hover: "image/HP image/HP Illustration4-2.png",
    normal: "image/HP image/HP Illustration4-1.png",
  },
};

function onMouseEnter(imageElement, imageName) {
  imageElement.src = images[imageName].hover;
}

function onMouseLeave(imageElement, imageName) {
  imageElement.src = images[imageName].normal;
}

illustration1.addEventListener("mouseenter", () =>
  onMouseEnter(illustration1, "stage1")
);
illustration1.addEventListener("mouseleave", () =>
  onMouseLeave(illustration1, "stage1")
);

illustration2.addEventListener("mouseenter", () =>
  onMouseEnter(illustration2, "stage2")
);
illustration2.addEventListener("mouseleave", () =>
  onMouseLeave(illustration2, "stage2")
);

illustration3.addEventListener("mouseenter", () =>
  onMouseEnter(illustration3, "stage3")
);
illustration3.addEventListener("mouseleave", () =>
  onMouseLeave(illustration3, "stage3")
);

illustration4.addEventListener("mouseenter", () =>
  onMouseEnter(illustration4, "stage4")
);
illustration4.addEventListener("mouseleave", () =>
  onMouseLeave(illustration4, "stage4")
);

// Typewriter ————————————————————————————————————————————————————//
// Sentence1
function typeWriterEffect(text, element, delay, index = 0) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    if (index === 0) {
      element.style.opacity = 1; // When you start typing, set transparency to 1
    }
    setTimeout(() => typeWriterEffect(text, element, delay, index + 1), delay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const part1 = document.getElementById("part1");
  const part2 = document.getElementById("part2");
  const illustration = document.getElementById("HP-illustration1");

  function handleClick() {
    part1.textContent = "";
    part2.textContent = "";
    typeWriterEffect("Together,", part1, 70, 0);
    setTimeout(() => {
      typeWriterEffect("each becomes the savior of the other.", part2, 70, 0);
    }, "Together,".length * 70 + 100);
    illustration.removeEventListener("click", handleClick);
  }
  illustration.addEventListener("click", handleClick);
});

// Sentence2
function typeWriterEffect(text, element, delay, index = 0) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    if (index === 0) {
      element.style.opacity = 1;
    }
    setTimeout(() => typeWriterEffect(text, element, delay, index + 1), delay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const part3 = document.getElementById("part3");
  const part4 = document.getElementById("part4");
  const part5 = document.getElementById("part5");
  const illustration2 = document.getElementById("HP-illustration2");

  function handleClick2() {
    part3.textContent = "";
    part4.textContent = "";
    part5.textContent = "";
    typeWriterEffect("Stupefy.", part3, 70, 0);
    setTimeout(() => {
      typeWriterEffect("Expelliarmus.", part4, 70, 0);
    }, "Stupefy.".length * 70 + 100);
    setTimeout(() => {
      typeWriterEffect("Protego.", part5, 70, 0);
    }, ("Stupefy.".length + "Expelliarmus.".length) * 70 + 100);
    illustration2.removeEventListener("click", handleClick2);
  }
  illustration2.addEventListener("click", handleClick2);
});

// Sentence3
function typeWriterEffect(text, element, delay, index = 0) {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    if (index === 0) {
      element.style.opacity = 1;
    }
    setTimeout(() => typeWriterEffect(text, element, delay, index + 1), delay);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const sentence3 = document.getElementById("sentence3");
  const illustration3 = document.getElementById("HP-illustration3");
  const illustration4 = document.getElementById("HP-illustration4");

  function handleClick3() {
    sentence3.textContent = "";
    typeWriterEffect("''...Expecto Patronum.''", sentence3, 70, 0);
    illustration3.removeEventListener("click", handleClick3);
    illustration4.removeEventListener("click", handleClick3);
  }
  illustration3.addEventListener("click", handleClick3);
  illustration4.addEventListener("click", handleClick3);
});
