document.addEventListener("DOMContentLoaded", () => {
  function distributeImages(sectionId, images) {
    const section = document.getElementById(sectionId);
    const groups = section.querySelectorAll(".image-group");
    const groupCount = groups.length;

    images.forEach((image, index) => {
      const groupIndex = index % groupCount;
      const imgElement = document.createElement("img");
      imgElement.src = image;
      imgElement.alt = `Image ${index + 1}`;
      imgElement.loading = "lazy";

      imgElement.addEventListener("click", () => openModal(index, images));

      groups[groupIndex].appendChild(imgElement);
    });
  }
  document.addEventListener("keydown", function (event) {
    if (document.getElementById("imageModal").style.display === "flex") {
      if (event.key === "ArrowLeft") {
        document.querySelector(".prev").click();
      } else if (event.key === "ArrowRight") {
        document.querySelector(".next").click();
      } else if (event.key === "Escape") {
        document.querySelector(".close").click();
      }
    }
  });

  function openModal(index, images) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const downloadBtn = document.getElementById("downloadButton");

    let currentIndex = index;

    function updateModalImage() {
      const currentImageSrc = images[currentIndex];
      modalImg.src = currentImageSrc;
      modalImg.alt = `Image ${currentIndex + 1}`;

      downloadBtn.href = currentImageSrc;
      downloadBtn.download = `Image_${currentIndex + 1}.jpg`;
    }

    modal.style.display = "flex";
    updateModalImage();

    document.querySelector(".close").onclick = function () {
      modal.style.display = "none";
    };

    modal.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };

    document.querySelector(".prev").onclick = function () {
      currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      updateModalImage();
    };

    document.querySelector(".next").onclick = function () {
      currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      updateModalImage();
    };
  }

  // Images for section 1
  const section1Images = [
    "images/ig16.jpg",
    "images/ig12.jpg",
    "images/ig9.jpg",
    "images/ig8.jpg",
    "images/ig1.jpg",
    "images/ig2.jpg",
    "images/ig10.jpg",
    "images/ig5.jpg",
    "images/ig6.jpg",
    "images/ig14.jpg",
    "images/ig7.jpg",
    "images/ig11.jpg",
  ];

  // Images for section 2
  const section2Images = [
    "images/dg1.jpg",
    "images/dg2.jpg",
    "images/dg3.jpg",
    "images/dg4.jpg",
    "images/dg5.jpg",
    "images/dg8.jpg",
    "images/dg9.jpg",
    "images/dg11.jpg",
  ];
  const section3Images = [
    "images/td1.jpg",
    "images/td3.jpg",
    "images/td4.jpg",
    "images/td2.jpg",
    "images/td5.jpg",
    "images/td8.jpg",
    "images/td9.jpg",
    "images/td10.jpg",
    "images/td11.jpg",
    "images/td6.jpg",
  ];

  // DISTRIBUTE IMAGES
  distributeImages("IG'24", section1Images);
  distributeImages("DG'23", section2Images);
  distributeImages("Teachers' Day'23", section3Images);

  // DARK THEME
  const icon = document.getElementById("icon");
  icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    icon.src = document.body.classList.contains("dark-theme")
      ? "images/lightmode.png"
      : "images/darkmode.png";
  };
});
