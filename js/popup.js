
        const popup = document.querySelector('.popup');
        const x = document.querySelector('.popup-content h1')

        window.addEventListener('load', () => {
            popup.classList.add('showPopup');
            popup.childNodes[1].classList.add('showPopup');
        })
        x.addEventListener('click', () => {
            popup.classList.remove('showPopup');
            popup.childNodes[1].classList.remove('showPopup');
        })
   




   $(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});

$("video").click(function(){
  var v = $("video > source");
  var t = v.attr("src");
  $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
  $("#myModal").modal();  
});
});//EOF Document.ready

   const gridImages = document.querySelectorAll(".grid > img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// to open lightbox
gridImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    // set the image clicked as the image of the lightbox
    lightboxImg.src = img.src;
  });
});

// To close lightbox
lightbox.addEventListener("click", (e) => {
  // if the clicked element is not the dark overlay don't close it
  if (e.target !== e.currentTarget) return;
  // if it was the dark overlay it will close it
  lightbox.classList.remove("active");
});







function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

const lightboxModal = document.getElementById('lightbox');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const imageList = gallery.querySelectorAll('.col');
const imageLength = imageList.length;
const controls = document.querySelector('.controls');
const control_prev = controls.querySelector('.control-prev');
const control_next = controls.querySelector('.control-next');
window.currentImage = 0;

imageList.forEach(function(image,index){
    image.querySelector('a').setAttribute('data-bs-index',index);
});

imagesLoaded( gallery, function(){
    gallery.classList.remove('d-none');
    gallery.classList.add('animate__animated','animate__fadeIn');
    loader.classList.add('d-none');
});

lightboxModal.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget;
    const index = button.getAttribute('data-bs-index');
    const image = button.getAttribute('href');
    const modalBody = lightboxModal.querySelector('.modal-body');
    modalBody.innerHTML = '';
    modalBody.innerHTML = '<div class="spinner-border my-5" role="status"><span class="visually-hidden">Loading...</span></div><img class="img-fluid d-none" src="'+image+'">';
    
    imagesLoaded( modalBody, function(){
        modalBody.querySelector('.img-fluid').classList.remove('d-none');
        modalBody.querySelector('.img-fluid').classList.add('animate__animated','animate__fadeIn');
        modalBody.querySelector('.spinner-border').classList.add('d-none','animate__animated','animate__fadeOut');
        window.currentImage = index;
    });
});

function loadImage(){
    const imageColumn = imageList[window.currentImage];
    const imageUrl = imageColumn.querySelector('a').href;
    const imageTag = lightboxModal.querySelector('.modal-body > img');
    imageTag.classList.remove('animate__fadeIn');
    imageTag.classList.add('animate__fadeOut');
    imageTag.src = imageUrl;
    imagesLoaded( imageTag, function(){
        imageTag.classList.remove('animate__fadeOut');
        imageTag.classList.add('animate__animated','animate__fadeIn');
    });
}

control_next.addEventListener('click',function(){
    if(window.currentImage < (imageLength-1)){
        window.currentImage++;
        loadImage();
    }
});

control_prev.addEventListener('click',function(){
    if(window.currentImage > 0){
        window.currentImage--;
        loadImage();
    }
});

lightboxModal.addEventListener('hide.bs.modal', event => {
    const modalBody = lightboxModal.querySelector('.modal-body');
    modalBody.innerHTML = '';
    window.currentImage = 0;
    console.log(window.currentImage);
});