
//background video

  jQuery(function(){
      jQuery(".player").YTPlayer();
    });

   

    //email validation

    var email = document.getElementById('email');
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    function sub(){
       if(email.value==''){
        alert('!!Please Enter Your Email');
        email.focus();
        return false;
    }
       else if(!regex.test(email.value)){
        alert('!! Please Enter Correct Email !!');
        email.focus();
        return false;
    }

    }

    

    //back-to-top

    var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
   
  //review slider

  $('.review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
   
    // fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });
  
    //pre-loader

    $(function(){
      $(window).on('load',function(){
            $('.pre-loader').delay(500).fadeOut(500);
        });
     
    });

    //fixed menu

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();

          
      if(scrolling > 250){
          $('.navbar').delay(1500).addClass('bg', 1500);
      }
      else{
          $('.navbar').delay(1500).removeClass('bg', 1500);
      }
    });



      //two slider

  $('.two1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
   
    fade: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });

   //service slider

   $('.service-card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
    centerMode:true,
    centerPadding:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });
   //savoir slider

   $('.sav-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 1500,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
    
  });