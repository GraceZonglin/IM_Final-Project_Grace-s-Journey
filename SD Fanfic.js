// Excerpt+Outline - mouse hover ————————————————————————————————————————————————————//
const illustration1 = document.getElementById("SD-illustration");
const outline = document.getElementById("SD-outline");

const images = {
  stage1: {
    hover: "image/SD image/SD Illustration1-2.png",
    normal: "image/SD image/SD Illustration1-1.png",
  },
  stage2: {
    hover: "image/SD image/SD Outline2.png",
    normal: "image/SD image/SD Outline.png",
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

outline.addEventListener("mouseenter", () => onMouseEnter(outline, "stage2"));
outline.addEventListener("mouseleave", () => onMouseLeave(outline, "stage2"));

// Sentence - click ————————————————————————————————————————————————————//
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
  const sentence1 = document.getElementById("sentence1");
  const illustration = document.getElementById("SD-illustration");

  function handleClick() {
    sentence1.textContent = "";
    typeWriterEffect(
      "''Then let's cross it,'' a voice said. ",
      sentence1,
      70,
      0
    );
    illustration.removeEventListener("click", handleClick);
  }
  illustration.addEventListener("click", handleClick);
});

// Cute doodle - click and keyboard ————————————————————————————————————————————————————//
document.addEventListener("DOMContentLoaded", function () {
  const cute = document.getElementById("SD-cute");
  const surprise = document.getElementById("hidden-surprise");
  let isOriginal = true;

  cute.addEventListener("click", function () {
    surprise.style.opacity = 1;

    if (isOriginal) {
      cute.src = "image/SD image/SD Cute2.png";
      isOriginal = false;
    } else {
      cute.src = "image/SD image/SD Cute.png";
      isOriginal = true;
    }
  });
});

document.addEventListener("keydown", function (event) {
  const img = document.getElementById("SD-cute");
  let topValue = parseInt(img.style.top || 0);
  let leftValue = parseInt(img.style.left || 0);

  switch (event.key.toLowerCase()) {
    case "w":
      if (topValue > -70) {
        topValue -= 10;
        img.style.top = topValue + "px";
      }
      break;
    case "s":
      if (topValue < 70) {
        topValue += 10;
        img.style.top = topValue + "px";
      }
      break;
    case "a":
      if (leftValue > -70) {
        leftValue -= 10;
        img.style.left = leftValue + "px";
      }
      break;
    case "d":
      if (leftValue < 40) {
        leftValue += 10;
        img.style.left = leftValue + "px";
      }
      break;
  }
});
