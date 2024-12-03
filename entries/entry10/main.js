function showImage(imageIndex) {
  const fullImage = document.getElementById("fullImage");
  const imageDescription = document.getElementById("imageDescription");
  const imageDisplay = document.getElementById("imageDisplay");


  let imageSrc = "";
  let description = "";


  switch (imageIndex) {
      case 1:
          imageSrc = "imgs10/labo.png";
          description = "le labo santal. the smell brings me back to home.";
          break;
      case 2:
          imageSrc = "imgs10/smiski.png";
          description = "my smiskis that i collected overtime remind me of korea where i would buy these.";
          break;
      case 3:
          imageSrc = "imgs10/smoothie.png";
          description = "the f'real shakes bring me back to my freshman year of college.";
          break;
      case 4:
          imageSrc = "imgs10/flower.png";
          description = "this is my moms favorite flower. it reminds me of her whenever i see it.";
          break;
      case 5:
          imageSrc = "imgs10/soup.png";
          description = "soybean soup. reminds me of home.";
          break;
  }


  fullImage.src = imageSrc;
  imageDescription.textContent = description;


  imageDisplay.style.display = "flex";
}


