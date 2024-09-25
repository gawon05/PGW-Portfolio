$(function () {
    $(window).scroll(function () {
        $('.mobile-list').slideUp()
    })
    $('.hamburger').click(function () {
        $('.mobile-list').slideToggle()
    })
    $('header nav ul li').click(function () {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')

        let idx = $(this).index()
        console.log(idx)
        let section = $('main > section').eq(idx)
        let sectionDistance = section.offset().top

        $('html, body').animate({
            scrollTop: sectionDistance
        })
    })
    

    // $('.mobile-list li').click(function () {
    //     $('.mobile-list li').slideUp()
    // })



    $('.tab-nav li').click(function (e) {
        e.preventDefault()
        $('.tab-nav li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.tabitem').hide()
        $('.tabitem').eq(idx).show()
    })
    $('.tab-nav li').eq(0).trigger('click')

    $('.phnav li').click(function (e) {
        e.preventDefault()
        $('.phnav li a').removeClass('on')
        $(this).find('a').addClass('on')

        let idx = $(this).index()
        $('.tabph').removeClass('on')
        $('.tabph').eq(idx).addClass('on')

    })
    $('.phnav li').eq(0).trigger('click')

    $('.plus').click(function () {
        $('.mobile-list2').slideToggle()
    })
    $('.mobile-list2 nav ul li').click(function () {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')

        let idx = $(this).index()
        console.log(idx)
        let section = $('main > section').eq(idx)
        let sectionDistance = section.offset().top

        $('html, body').animate({
            scrollTop: sectionDistance
        })
    })

    $('.mobile-list2 li').click(function (e) {
        e.preventDefault()
        $('.mobile-list2 li a').removeClass('on')
        $(this).find('a').addClass('on')

        let idx = $(this).index()
        $('.tabitem').hide()
        $('.tabitem').eq(idx).show()
    })
    $('.mobile-list2 li').eq(0).trigger('click')

    $(window).resize(function () {
        $('.mobile-list2').css({
            'display': 'none'
        })
    })

    $('.mobile2 .plus').click(function () {
        $('.mobile2 .plus').toggleClass('on')
        $('.mobile2 .plus i').toggleClass('fa-circle-plus')
    })


})
$(function () {
        let pageOT = $('main').offset().top

        $(window).scroll(function () {
            let scrolled = $(window).scrollTop() >= pageOT
            $('.mobile1, .mobile-list').toggleClass('down', scrolled)
        })

        $(window).scroll(function(){
            if($(window).scrollTop() >=200){

                
                $('.gotop').fadeIn()
            }else{
                $('.gotop').fadeOut()
            }
            
        })
        $('.gotop').click(function(e){
            e.preventDefault() 
            $('html, body').stop().animate({
                scrollTop : 0
            }, 500)
        })
    })
// $(function () {
//     let bg = ['../img/두브.jpg', '../img/런던.png', '../img/오로라.jpg', '../img/파리.jpg', '../img/프라하.jpg']

//     $('.tab-nav li').click(function () {
//         let idx = $(this).index()

//         $('#video').css({
//             'background-image': `url(${bg[idx]})`
//         })
//     })
//     $('.tab-nav li').eq(0).trigger('click')
// })