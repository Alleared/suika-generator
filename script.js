

// SELECT THE ELEMENTS
// Image element
const generateImg = document.querySelector('.js-generate-img');

// Generate image button
const generateImgButton = document.querySelector('.js-generate-img-button');

// BODY AND PARAGRAPHS FOR DARK MODE
// body element
const body = document.querySelector('body');
// H1 element
const h1Element = document.querySelector('h1');
// Paragraph element
const paragraph = document.querySelectorAll('p');
// link element
const links = document.querySelectorAll('a');


// Dark Mode Toggle 
const darkModeToggle = document.querySelector('.js-toggle-darkMode-switch');

// Select checkbox input
const toggleSwitch = document.getElementById('toggle-switch');

let darkSwitch = toggleSwitch;


// Dark mode button listener
darkModeToggle.addEventListener('click', function() {
  if (darkSwitch.checked) {
    body.style.backgroundColor = 'black';
    h1Element.style.color = 'white';
    paragraph.forEach(p => {
      p.style.color = 'white';
    })
    links.forEach(link => {
      link.style.color = 'white';
    })
  } else {
    body.style.backgroundColor = 'white';
    h1Element.style.color = 'black';
    paragraph.forEach(p => {
      p.style.color = 'black';
    })
    links.forEach(link => {
      link.style.color = 'black';
    })
  }
})

const audio = document.querySelector('.js-audio');
audio.volume = 0.2;


// description paragraph
const aiGenerator = document.querySelector('.js-ai-generator');
const trumpetParagraph = document.querySelector('.trumpet-paragraph');

// List of suika images urls
const suikaImages = [
  'images/suika1.png', 
  'images/suika2.png', 
  'images/suika3.png', 
  'images/suika4.png', 
  'images/suika5.png', 
  'images/suika6.png', 
  'images/suika7.png', 
  'images/suika8.png', 
  'images/suika9.png', 
  'images/suika10.png', 
  'images/suika11.png', 
  'images/suika12.png', 
  'images/suika13.png', 
  'images/suika14.png', 
  'images/suika15.png', 
  'images/suika16.png', 
  'images/suika17.png', 
  'images/suika18.png', 
  'images/suika19.png', 
  'images/suika20.png', 
  'images/suika21.png', 
  'images/suika22.png', 
  'images/suika23.png', 
  'images/suika24.png', 
  'images/suika25.png', 
  'images/suika26.png', 
  'images/suika27.png', 
  'images/suika28.png', 
  'images/suika29.png', 
  'images/suika30.png', 
  'images/suika31.png', 
  'images/suika32.png', 
  'images/suika33.png', 
  'images/suika34.png', 
  'images/suika35.png', 
  'images/suika36.png', 
  'images/suika37.png', 
  'images/suika38.png', 
  'images/suika39.png', 
  'images/suika40.png', 
  'images/suika41.png', 
  'images/suika42.png', 
  'images/suika43.png', 
  'images/suika44.png', 
  'images/suika45.png', 
  'images/suika46.png', 
  'images/suika47.png', 
  'images/suika48.png', 
  'images/suika49.png', 
  'images/suika50.png', 
  'images/suika51.png', 
  'images/suika52.png', 
  'images/suika53.png', 
  'images/suika54.png', 
  'images/suika55.png', 
  'images/suika56.png', 
  'images/suika57.png', 
  'images/suika58.png', 
  'images/suika59.png', 
  'images/suika60.png', 
  'images/suika61.png', 
  'images/suika62.png', 
  'images/suika63.png', 
  'images/suika64.png', 
  'images/suika65.png', 
  'images/suika66.png', 
]

// get a random image from the array of urls
function randomImages (image) {
  return image[Math.floor(Math.random() * image.length)]
}

// add click listener to the button and show the random image
generateImgButton.addEventListener('click', function () {
  generateImg.src = randomImages(suikaImages);

})


// Trumpet paragraph show and disappear on mouse hover
aiGenerator.addEventListener('mouseover', function () {
  trumpetParagraph.innerText = "Not True, this is just to piss off Trumpet(He doesn't like AI Art)";
})
aiGenerator.addEventListener('mouseout', function () {
  trumpetParagraph.innerText = '';
})

