// slider//
let ceoList = document.querySelectorAll('.fa-chevron-right');
let ceoOne =  document.getElementById('one');
let ceoTwo =  document.getElementById('two');
let ceoList2 = document.querySelectorAll('.fa-chevron-left');

for( var i=0; i<ceoList.length; i++)
{
    ceoList[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-flex' , 'd-none');
        ceoTwo.classList.replace('d-none' , 'd-flex');

    })
    ceoList2[i].addEventListener('click' , function () {
        ceoOne.classList.replace('d-none' , 'd-flex');
        ceoTwo.classList.replace('d-flex' , 'd-none');
        
    })
    
}
// subscribe//


//navbar//
let shopOffset = $('#shop').offset().top;
$(window).scroll(function () { 
    let wscroll = $(window).scrollTop();
    if (wscroll > shopOffset) {
        $('#mainNav').css('backgroundColor' , '#3b5d50de'); 
        $('#btnUp').fadeIn(500);
    }
    else{
        $('#mainNav').css('backgroundColor' , 'transparent');   
        $('#btnUp').fadeOut(500);
    }
});

    $('#btnUp').click(function () {
        $(window).scrollTop(0);
      })
//loading screen//
$(document).ready(function () {
    $('#loading .spinner').fadeOut(2000 , function () {
        $('#loading').fadeOut(1000 , function () {
            $('#loading').remove();
            $('body').css('overflow' , 'scroll')
          });
    });
   
    

});
