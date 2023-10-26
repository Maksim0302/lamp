//ACCORDION
let accordionButtons = document.getElementsByClassName('accordion__wrapper');  
for(let i = 0; i < accordionButtons.length; i++) {
  let plusActive = accordionButtons[i].classList.toggle('plus');
    accordionButtons[i].addEventListener('click',function(){  
      const $parent = this.parentElement
      if ($parent) {
        $parent.classList.toggle('accordion_active')
      }
      this.classList.toggle('less'); 
      this.classList.toggle('plus');   
      this.classList.toggle('hide');
      let accordionList = this.nextElementSibling;
        this.classList.remove('hide')
        if(accordionList.style.display ==='flex'){
          accordionList.style.display = 'none';    
        }else{
          accordionList.style.display='flex';    
        }  
    });
};

// BURGER MENU
document.addEventListener('click', documentClick);
function documentClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
  }
}

// CLEAR TEXT INPUT
$('#clear-btn').on('click', function(e){
  e.preventDefault();
  var val = $('#text1').val();
  if(val.length >= 1){
    $('#text1').val('');
  }
});

//SLICK-SLIDER
$('.center').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 4,
  infinite: true,
  responsive: [
  {
    breakpoint: 860,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 1320,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 820,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '45px',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 588,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '-10px',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 520,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '80px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 426,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 1
    }
  }
  ]
});
  

//SLICK SLIDER HEADER
$(document).ready(function() {
  var slickOpts = {
      slidesToShow: 1,
      slidesToScroll: 1,
      easing: 'swing', 
      speed: 700,
      arrows:true,
      appendArrows:'.slider-arrows',
      prevArrow:'<span class="slider-arrow_prev"></span>',
      nextArrow:'<span class="slider-arrow_next"></span>',
      dots: true,
    customPaging: function(slick,index) {
        return '<a>' + (index + 1) + '</a>';
    }
  };
  var bgs = [
    '#435476', 
    '#AB4E3D',   
  ];
  $('.single-item').on('afterChange', function(e, slick, index) {
    $('.header').css('background', bgs[index]);
  });
  $('.single-item').slick(slickOpts);
});

//ANIMATION
new WOW().init();
