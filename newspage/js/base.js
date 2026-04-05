// Initialize the image slider on page load
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    handleNewsAutoScroll();
  });
  
  // Initialize the image slider
  function initSlider() {
    const slider = document.querySelector('.image-slider');
    const images = slider.querySelectorAll('img');
    let index = 0;
  
    function showNextImage() {
      images[index].style.opacity = 0; // Fade out current image
      index = (index + 1) % images.length; // Move to next image
      images[index].style.opacity = 1; // Fade in next image
    }
  
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  }
  
  // Handle auto-scrolling of news sections
  function handleNewsAutoScroll() {
    const newsSections = document.querySelectorAll('.news-sections');
    
    newsSections.forEach(section => {
      const newsItems = section.querySelector('.news-items');
      const items = newsItems.children;
      let scrollIndex = 0;
  
      function scrollNews() {
        if (items.length > 0) {
          scrollIndex = (scrollIndex + 1) % items.length;
          newsItems.scrollTo({
            left: items[scrollIndex].offsetLeft,
            behavior: 'smooth'
          });
        }
      }
  
      setInterval(scrollNews, 3000); // Scroll every 3 seconds
    });
  }
  
  // Toggle news section expand/collapse
  function toggleExpand(sectionId) {
    const section = document.getElementById(sectionId);
    const newsItems = section.querySelector('.news-items');
  
    if (section.classList.contains('expanded')) {
      section.classList.remove('expanded');
      newsItems.style.maxWidth = 'calc(3 * 100%)'; // Only show 3 boxes
    } else {
      section.classList.add('expanded');
      newsItems.style.maxWidth = '100%'; // Show all boxes
    }
  }
  