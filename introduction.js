// Gallery - mouse hover ————————————————————————————————————————————————————//
// Collum1
const stage111 = document.getElementById("stage1-1-1");
const stage412 = document.getElementById("stage4-1-2");
const stage113 = document.getElementById("stage1-1-3");
const stage414 = document.getElementById("stage4-1-4");

// Collum2
const stage221 = document.getElementById("stage2-2-1");
const stage322 = document.getElementById("stage3-2-2");
const stage223 = document.getElementById("stage2-2-3");
const stage324 = document.getElementById("stage3-2-4");

// Collum3
const stage131 = document.getElementById("stage1-3-1");
const stage432 = document.getElementById("stage4-3-2");
const stage133 = document.getElementById("stage1-3-3");
const stage434 = document.getElementById("stage4-3-4");

// Collum4
const stage241 = document.getElementById("stage2-4-1");
const stage342 = document.getElementById("stage3-4-2");
const stage243 = document.getElementById("stage2-4-3");
const stage344 = document.getElementById("stage3-4-4");

// Collum5
const stage151 = document.getElementById("stage1-5-1");
const stage452 = document.getElementById("stage4-5-2");
const stage153 = document.getElementById("stage1-5-3");
const stage454 = document.getElementById("stage4-5-4");

// Collum6
const stage261 = document.getElementById("stage2-6-1");
const stage362 = document.getElementById("stage3-6-2");
const stage263 = document.getElementById("stage2-6-3");
const stage364 = document.getElementById("stage3-6-4");

const images = {
  stage11: {
    hover: "image/Gallery image/Stage1_Dark.png",
    normal: "image/Gallery image/Stage1_Light.png",
  },
  stage12: {
    hover: "image/Gallery image/Stage1_Light.png",
    normal: "image/Gallery image/Stage1_Dark.png",
  },
  stage21: {
    hover: "image/Gallery image/Stage2_Dark.png",
    normal: "image/Gallery image/Stage2_Light.png",
  },
  stage22: {
    hover: "image/Gallery image/Stage2_Light.png",
    normal: "image/Gallery image/Stage2_Dark.png",
  },
  stage31: {
    hover: "image/Gallery image/Stage3_Dark.png",
    normal: "image/Gallery image/Stage3_Light.png",
  },
  stage32: {
    hover: "image/Gallery image/Stage3_Light.png",
    normal: "image/Gallery image/Stage3_Dark.png",
  },
  stage41: {
    hover: "image/Gallery image/Stage4_Dark.png",
    normal: "image/Gallery image/Stage4_Light.png",
  },
  stage42: {
    hover: "image/Gallery image/Stage4_Light.png",
    normal: "image/Gallery image/Stage4_Dark.png",
  },
};

function onMouseEnter(imageElement, imageName) {
  imageElement.src = images[imageName].hover;
}

function onMouseLeave(imageElement, imageName) {
  imageElement.src = images[imageName].normal;
}

//Column1
stage111.addEventListener("mouseenter", () =>
  onMouseEnter(stage111, "stage11")
);
stage111.addEventListener("mouseleave", () =>
  onMouseLeave(stage111, "stage11")
);

stage412.addEventListener("mouseenter", () =>
  onMouseEnter(stage412, "stage41")
);
stage412.addEventListener("mouseleave", () =>
  onMouseLeave(stage412, "stage41")
);

stage113.addEventListener("mouseenter", () =>
  onMouseEnter(stage113, "stage11")
);
stage113.addEventListener("mouseleave", () =>
  onMouseLeave(stage113, "stage11")
);

stage414.addEventListener("mouseenter", () =>
  onMouseEnter(stage414, "stage41")
);
stage414.addEventListener("mouseleave", () =>
  onMouseLeave(stage414, "stage41")
);

//Column2
stage221.addEventListener("mouseenter", () =>
  onMouseEnter(stage221, "stage22")
);
stage221.addEventListener("mouseleave", () =>
  onMouseLeave(stage221, "stage22")
);

stage322.addEventListener("mouseenter", () =>
  onMouseEnter(stage322, "stage31")
);
stage322.addEventListener("mouseleave", () =>
  onMouseLeave(stage322, "stage31")
);

stage223.addEventListener("mouseenter", () =>
  onMouseEnter(stage223, "stage21")
);
stage223.addEventListener("mouseleave", () =>
  onMouseLeave(stage223, "stage21")
);

stage324.addEventListener("mouseenter", () =>
  onMouseEnter(stage324, "stage31")
);
stage324.addEventListener("mouseleave", () =>
  onMouseLeave(stage324, "stage31")
);

//Column3
stage131.addEventListener("mouseenter", () =>
  onMouseEnter(stage131, "stage11")
);
stage131.addEventListener("mouseleave", () =>
  onMouseLeave(stage131, "stage11")
);

stage432.addEventListener("mouseenter", () =>
  onMouseEnter(stage432, "stage42")
);
stage432.addEventListener("mouseleave", () =>
  onMouseLeave(stage432, "stage42")
);

stage133.addEventListener("mouseenter", () =>
  onMouseEnter(stage133, "stage11")
);
stage133.addEventListener("mouseleave", () =>
  onMouseLeave(stage133, "stage11")
);

stage434.addEventListener("mouseenter", () =>
  onMouseEnter(stage434, "stage41")
);
stage434.addEventListener("mouseleave", () =>
  onMouseLeave(stage434, "stage41")
);

//Column4
stage241.addEventListener("mouseenter", () =>
  onMouseEnter(stage241, "stage21")
);
stage241.addEventListener("mouseleave", () =>
  onMouseLeave(stage241, "stage21")
);

stage342.addEventListener("mouseenter", () =>
  onMouseEnter(stage342, "stage32")
);
stage342.addEventListener("mouseleave", () =>
  onMouseLeave(stage342, "stage32")
);

stage243.addEventListener("mouseenter", () =>
  onMouseEnter(stage243, "stage21")
);
stage243.addEventListener("mouseleave", () =>
  onMouseLeave(stage243, "stage21")
);

stage344.addEventListener("mouseenter", () =>
  onMouseEnter(stage344, "stage31")
);
stage344.addEventListener("mouseleave", () =>
  onMouseLeave(stage344, "stage31")
);

//Column5
stage151.addEventListener("mouseenter", () =>
  onMouseEnter(stage151, "stage11")
);
stage151.addEventListener("mouseleave", () =>
  onMouseLeave(stage151, "stage11")
);

stage452.addEventListener("mouseenter", () =>
  onMouseEnter(stage452, "stage41")
);
stage452.addEventListener("mouseleave", () =>
  onMouseLeave(stage452, "stage41")
);

stage153.addEventListener("mouseenter", () =>
  onMouseEnter(stage153, "stage12")
);
stage153.addEventListener("mouseleave", () =>
  onMouseLeave(stage153, "stage12")
);

stage454.addEventListener("mouseenter", () =>
  onMouseEnter(stage454, "stage41")
);
stage454.addEventListener("mouseleave", () =>
  onMouseLeave(stage454, "stage41")
);

//Column6
stage261.addEventListener("mouseenter", () =>
  onMouseEnter(stage261, "stage21")
);
stage261.addEventListener("mouseleave", () =>
  onMouseLeave(stage261, "stage21")
);

stage362.addEventListener("mouseenter", () =>
  onMouseEnter(stage362, "stage31")
);
stage362.addEventListener("mouseleave", () =>
  onMouseLeave(stage362, "stage31")
);

stage263.addEventListener("mouseenter", () =>
  onMouseEnter(stage263, "stage21")
);
stage263.addEventListener("mouseleave", () =>
  onMouseLeave(stage263, "stage21")
);

stage364.addEventListener("mouseenter", () =>
  onMouseEnter(stage364, "stage31")
);
stage364.addEventListener("mouseleave", () =>
  onMouseLeave(stage364, "stage31")
);

// Self-intro - Click, show and delay ————————————————————————————————————————————————————//
document.addEventListener("DOMContentLoaded", function () {
  function hideInitially(ids) {
    ids.forEach((id) => {
      document.getElementById(id).style.display = "none";
    });
  }

  hideInitially([
    "Grace",
    "here",
    "start",
    "year",
    "A",
    "imagine",
    "and",
    "story",
    "still",
    "utopia",
  ]);

  document.getElementById("Hi").addEventListener("click", function () {
    const idsToShow = [
      "Grace",
      "here",
      "start",
      "year",
      "A",
      "imagine",
      "and",
      "story",
      "still",
      "utopia",
    ];
    const delay = 377; // delay time

    idsToShow.forEach((id, index) => {
      setTimeout(() => {
        document.getElementById(id).style.display = "block";
      }, index * delay);
    });
  });
});

// My Trace - Scroll ————————————————————————————————————————————————————//
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden"); // Select all initially hidden elements

  function revealOnScroll() {
    const windowHeight = window.innerHeight; // Gets the height of the window

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top; // Gets the distance from the top of the element to the top of the window
      const elementVisible = 70; // Set a threshold at which the distance from the top of the element to the top of the window becomes visible at 70px

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
});
