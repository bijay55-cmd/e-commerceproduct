var menubar = document.querySelector('.logobtn');

menubar.addEventListener('click', () => {
    document.querySelector('.listmenu').classList.toggle('show');
})

//slideshows for mobile version
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
} 

//lightbox for desktop version
var slideIndex = 1;
showSlides2(slideIndex);

function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");

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
}

var count = 0;

var removebutton = document.getElementsByClassName('remove');
for(var i=0; i<removebutton.length; i++){
  var button = removebutton[i];
  button.addEventListener('click', removeItem);
  }

document.querySelector('#submit').addEventListener('click', addToPlaylistClicked);


function removeItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  document.getElementById('number').innerHTML = --count;
  }
  
  
  function addToPlaylistClicked(){
  
  var title = document.querySelector('.pricetag');
  var imgSrc =document.querySelector('.img').src;
  var limited = document.querySelector('.limited').innerText;
  document.getElementById('number').innerHTML = ++count;
  addSong(title,imgSrc,limited);

  updateCartTotal();
  }
  
  
  function addSong(title,imgSrc, limited){
  var cartRow = document.createElement('div');
  var cartItems = document.getElementsByClassName('playlistscreen')[0];
  
  
  var cartItemName = cartItems.getElementsByClassName('limitedtitle');
  for(var i=0; i<cartItemName.length; i++){
    if(cartItemName[i]. innerText == limited){
      document.querySelector('#number').innerText = --count;
      alert("You've already added this item");
      return 
    }
  }
  
  
  var cartRowContent = `
  <img class="playimg" src="${imgSrc}">
  <p class="limitedtitle">${limited}</p>
  <p class="title">${title}</p>
  <div class="optionbtn">
  <button class="remove">Remove</button>
  </div>
<br>
  `
  
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
  
  cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeItem)
  }

  var cartshow = document.querySelector('.cartshow');

  cartshow.addEventListener('click', () => {
    document.querySelector('.homepage').style.display="none";
    document.querySelector('.cartitemshow').style.display="block";
  })

  var plusbtn = document.querySelector('.plusbtn');

  var minusbtn = document.querySelector('.minusbtn');

  var i = 0;

  plusbtn.addEventListener('click', () =>{

document.getElementById('input').value = ++i; 

  })

  minusbtn.addEventListener('click', () =>{
    if(i <= 0){
      i = 0;
    }else{
      i--
    }
    document.getElementById('input').value = i--;
  })

  function updateCartTotal(){
   
var total =0;

var priceElement = document.querySelector('.pricetag');

var input = document.querySelector('#input').value;

var price = parseFloat(priceElement.innerText.replace('£', ''));

total = total + (price * input);

total = Math.round(total * 100) / 100;

document.querySelector('.title').innerText = '£' + total;

    }
    

var purchase = document.querySelector('.purchase')


purchase.addEventListener('click', () => {

  alert('Thank you for your purchase');

  window.location = "index.html";
})
