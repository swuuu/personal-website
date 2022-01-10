// scrolling smoothly when clicking the href in the home page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



// art section mouse hover information displaying
const imgContent = document.querySelectorAll(".img-content-hover");

function showContent(event) {
  for (let i=0; i<imgContent.length; i++) {
    x = event.pageX;
    y = event.pageY;
    imgContent[i].style.transform = `translate3d(${x}px,${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showContent);

// translation for the home page

function translate() {
  if (document.getElementById("translation").checked) {
    document.getElementById("translation-paragraph").innerHTML = "J'ai passé mes deux dernières année de lycée dans cette école à Montréal (2017-2019). J'ai poursuivi la filière scientifique, et j'ai obtenu la mention très bien au baccalauréat."
  } else {
    document.getElementById("translation-paragraph").innerHTML = "I spent my last two years of high school here, located in Montreal. I specialized in the scientific program of the french system, where I obtained the 'mention très bien' (highest honors in the french system)."
  }
}

document.getElementById("translation").addEventListener("click", translate);
