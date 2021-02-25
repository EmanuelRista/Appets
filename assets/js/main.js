const my_app = new Vue({
   el: '#root',
   data:{
    animateSection: {
         restaurants: false,
         events: false,
         jobs: false,
      },
   },
   methods: {
      animation_visibility(isVisible, entry, section) {
         this.animateSection[section] = isVisible;
      },
   }
});