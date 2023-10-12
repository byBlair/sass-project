import $ from 'jquery';

$(function(){
  btn01();
  btn02(); 
  btn03();
  btn04();
})
let section01 = false;

function btn01(){
  let Width = $('.box02').width();

  $('.next').on('click',function(){
    if (section01) return;
      $('.box02>div').animate({ marginLeft:'-='+ Width+'px'},function(){
      $('box02>div').css('margin-left','-'+ Width+'px');
      })
      section01 = !section01
  });
}
function btn02(){
  let Width = $('.box02').width();

  $('.prev').on('click',function(){
    if(!section01) return;
    $('.box02>div').animate({ marginLeft: '+='+Width+'px'},function(){
    $('box02').css('margin-left','+'+Width+'px');
    })
    section01 = !section01
  })
}

function btn03(){
  let Width02 = $('.box04').width();

  $('.prevv').on('click',function(){
    if(!section01) return;
    $('.box04>div').animate({marginLeft : '+=' + Width02 + 'px'},function(){
    $('box04').css('margin-left','+'+Width02+'px');
    })
    section01 = !section01
  })
}
function btn04(){
  let Width02 = $('.box04').width();

  $('.nextt').on('click',function(){
    if (section01) return;
      $('.box04>div').animate({ marginLeft:'-='+ Width02+'px'},function(){
      $('box04>div').css('margin-left','-'+ Width02+'px');
      })
      section01 = !section01
  });
}
