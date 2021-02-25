const my_app = new Vue({
   el: '#root',
   data:{
    animateSection: {
         restaurants: false,
         events: false,
         jobs: false,
      },
      imagesList: ['assets/img/testimonials/slide-1.jpg','assets/img/testimonials/slide-2.jpg','assets/img/testimonials/slide-3.jpg','assets/img/testimonials/slide-4.jpg'],
      imagesIndex: 0,
      keyCode: '',
   },
   methods: {
      animation_visibility(isVisible, entry, section) {
         this.animateSection[section] = isVisible;
      },
      sliderPrev: function(){
         if (this.imagesIndex === 0){
           this.imagesIndex = this.imagesList.length - 1;
         } else {
           this.imagesIndex--;
         }
       },
       sliderNext: function(){
         if (this.imagesIndex === this.imagesList.length -1){
           this.imagesIndex = 0;
         } else {
           this.imagesIndex++;
         }
       },
       keyDown: function(){
         if (this.keyCode === 'ArrowLeft'){
           this.sliderPrev()
         } else if (this.keyCode === 'ArrowRight'){
           this.sliderNext()
         }
       }
   }
});

window.addEventListener('keydown', function(e) {
   slider.keyCode = e.key
   slider.keyDown()
 });