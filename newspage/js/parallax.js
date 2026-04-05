function addAdWindow(containerId, backgroundImage, adTitle, adText) {
  // Create the main ad container
  const adContainer = document.createElement('div');
  adContainer.classList.add('ad-container');

  // Create the parallax background
  const parallaxBg = document.createElement('div');
  parallaxBg.classList.add('parallax-bg');
  parallaxBg.style.backgroundImage = `url('${backgroundImage}')`;

  // Create the ad content
  const adContent = document.createElement('div');
  adContent.classList.add('ad-content');

  // Create the title element
  const title = document.createElement('h2');
  title.textContent = adTitle;

  // Create the text element
  const text = document.createElement('p');
  text.textContent = adText;

  // Append title and text to ad content
 

  // Append ad content to the parallax background
  parallaxBg.appendChild(adContent);

  // Append parallax background to the ad container
  adContainer.appendChild(parallaxBg);

  // Append the ad container to the specified container in the DOM
  const container = document.getElementById(containerId);
  if (container) {
      container.appendChild(adContainer);
  } else {
      document.body.appendChild(adContainer); // Append to body if no container found
  }
}

// Example usage:
addAdWindow('ad-container', 'pics/parallex.jpg',);
