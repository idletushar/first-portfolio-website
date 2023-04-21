window.onscroll = function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition < 500) {
      document.getElementById('intro_box').style.transform = 'translateY(' + (scrollPosition/2) + 'px)';
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      document.getElementById('about').style.transform = 'translateY(' + ((scrollPosition-500)/2) + 'px)';
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      document.getElementById('skills').style.transform = 'translateY(' + ((scrollPosition-500)/2) + 'px)';
    } else {
      document.getElementById('contact').style.transform = 'translateY(' + ((scrollPosition-1000)/2) + 'px)';
    }
  }
  