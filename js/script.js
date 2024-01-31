$(function(){

    // wow
    new WOW().init();

    let img1 = $('.sec .img1'),
    img2 = $('.sec .img-list .img2'),
    img3 = $('.sec .img3'),
    img4 = $('.sec .img4');

    img1.hover(function(){
        $(this).stop().animate({'top' : '63px'}, 300, 'swing');;
    } , function(){
        $(this).stop().animate({'top' : '83px'}, 300, 'swing');
    })

    img2.hover(function(){
        $(this).stop().animate({'bottom' : '15px'}, 200, 'swing');
    }, function(){
        $(this).stop().animate({'bottom' : '0px'}, 200, 'swing');
    })

    img3.hover(function(){
        $(this).stop().animate({'top' : '35px'}, 200, 'swing');
    }, function(){
        $(this).stop().animate({'top' : '50px'}, 200, 'swing');
    })

    img4.hover(function(){
        $(this).stop().animate({'top' : '65px'}, 200, 'swing');
    }, function(){
        $(this).stop().animate({'top' : '80px'}, 200, 'swing');
    })

    let btnMenu = $('#header .btn-menu'),
    sideMenu = $('#header .side-menu');

    btnMenu.click(function(){

        if($(this).hasClass('on')){
            sideMenu.stop().animate({'right' :  '-390px'}, 300, 'swing');
            $(this).removeClass('on');
        }else{
            sideMenu.stop().animate({'right' : '0'}, 300, 'swing');
            $(this).addClass('on');
        }
    })
})

