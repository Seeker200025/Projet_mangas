
let i = 0;
let images= []
images = [
              'images/image0.png',
              'images/image1.png',
              'images/image2.png',
              'images/image3.png',
              'images/image4.png',
              'images/image5.png',
              'images/image6.png'
            ] ;
let time = 2000;


function changeImg(){

  // document.querySelector('.imgSlide').innerHTML = `<img src="${images[i]}" alt="image" >`
document.slide.src = images[i];

if (i < images.length ) {
i++;
} else {
i = 1;
}
setTimeout(() => {
  changeImg()
}, time);

}


// console.log(cc)



changeImg();