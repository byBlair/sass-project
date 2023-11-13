import $ from 'jquery';

$(function(){
  btn01();
  btn02(); 
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
