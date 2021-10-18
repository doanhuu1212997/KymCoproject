let height = document.querySelector('header').offsetHeight;
let btn_slider = document.querySelectorAll('.contact-btn');
btn_slider.forEach(function(contact, index) {
    contact.addEventListener('click', function(e) {
        e.preventDefault();
        let href = contact.getAttribute('href');
        let section = document.querySelector(href);
        let positisonSection = section.offsetTop;
        window.scrollTo({
            top: positisonSection - height,
            behavior: 'smooth'
        })
    })
})

function loading() {
    var num = 0;
    for (i = 0; i <= 100; i++) {
        setTimeout(function() {
            $('.loader .num').html(num + '%');
            if (num == 101) {
                loading();
            }
            num++;
        }, i * 5);
    };
}
loading()
$(document).ready(function() {
    setTimeout(function() {
        $('.loader').remove();
        $('body').removeClass('isHidden');
    }, 500);
    var tl = gsap.timeline();
    tl.to(".menuMobile", { x: 0, duration: 1 })
        .staggerFromTo(".menuMobile  li", 1, { opacity: 0 }, { opacity: 1 }, 0.2)
    tl.reverse()
    $('.hamburger').click(function(e) {
        e.preventDefault();
        if (!tl.isActive()) {
            $(this).toggleClass('isActive');
            tl.reversed() ? tl.restart() : tl.reverse();
        }
    });
    let heightHeadr = $('header').height();
    $(window).scroll(function() {
        let windowTop = $('html,body').scrollTop();
        if (windowTop > heightHeadr) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky')
        }
    });
    $('.form-group').click(function(e) {
        e.preventDefault();
        $('.form-group label').removeClass("active");
         $(this).find('label').addClass("active");
     

    });
    //custom mouse 
    // let cursorFl = $('.cursorFl')
    // $(window).mousemove(function(e) {
    //     // values: e.clientX, e.clientY, e.pageX, e.pageY
    //     gsap.to(cursorFl, {
    //         x: e.clientX - (cursorFl.width() / 2),
    //         y: e.clientY - (cursorFl.height() / 2),
    //         duration: 0.2
    //     })
    // });
    /// Loading 

    // objectFitImages();
    jarallax(document.querySelectorAll('.jarallax'));
    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
        keepImg: true,
    });
    $('.headline').click(function(e) {
        e.preventDefault();
        $('.headline').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(' .content ').not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });
    const currentTheme = localStorage.getItem("theme");
    // let theme = $(".dark__mode").hasClass("dark")
    // if (theme) {
    //     if (currentTheme == "dark") {
    //         $(".dark__mode").addClass("dark")
    //     }
    // }
    let theme = $(".dark__mode").hasClass("dark")
    if (theme) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
    $('.dark__mode').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        let theme = $(".dark__mode").hasClass("active")
        if (theme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    });
    $('.select-w .selected').click(function(e) {
        e.stopPropagation();
        $('.select-w .list-tab').removeClass('show');
        $(this).closest('.select-w').find('.list-tab').toggleClass('show');
    });
    $('.select-w .tab').click(function() {
        var text = $('span', this).text();
        $(this).closest('.select-w').find('.selected span').html(text);
        $(this).closest('.select-w').find('span').siblings('span').removeClass('active');
        $(this).closest('.select-w').find('.list-tab').toggleClass('show');
    });
    $('.tab').click(function(e) {
        e.preventDefault();
        $('.tab').removeClass("active");
        $(this).addClass('active');
        let data = $(this).attr('data-set');
        let section = $('.' + data);
        console.log(section)
        $('.content__tab').removeClass('active');
        $(section).addClass('active');
    });
    let homePage = $("main").hasClass("homepage")
    if (homePage) {
        let $carousel = $('.slider__item-wrap');
        $carousel.flickity({
                cellAlign: 'left',
                contain: true,
                wrapAround: true,
                prevNextButtons: false,
                draggable: true,
                pageDots: false,
                on: {
                    ready: function() {
                        let sumSlider = $('.slider__item').length;
                        let sum = $('.slider__bottom-paging .sum')
                        $('.slider__bottom-paging .sum').append(sumSlider);
                        sum.text(sumSlider.toString().padStart(2, 0));
                    },
                    change: function(index) {
                        let number = $('.slider__bottom-paging .number');
                        let indexPage = index + 1;
                        number.text(indexPage.toString().padStart(2, 0));
                    }
                }
            })
            /// Section Hero
        let $carousel1 = $(".hero .hero__image .list")
        $carousel1.flickity({
            cellAlign: 'left',
            speed: 900,
            arrows: true,
            pageDots: false,
            cssEase: 'cubic-bezier(.76,.22,.36,.99)',
            prevNextButtons: true,
            centerMode: true,
            on: {
                change: function(index) {
                    $('.hero__text .ct').removeClass('active');
                    $('.hero__text .ct-' + (index)).addClass('active');
                }
            }
        });
        let listNext = $('.list__bottom .next');
        let listPre = $('.list__bottom .prev');
        $(listNext).click(function(e) {
            e.preventDefault();
            $carousel1.flickity('next')
        });
        $(listPre).click(function(e) {
            e.preventDefault();
            $carousel1.flickity('previous')
        });
        var $slideproducthot = $('.slider__product');
        $slideproducthot.slick({
            autoplay: false,
            speed: 400,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            cssEase: 'cubic-bezier(.91,.11,.35,1)',
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '120px',
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '80px',
                        arrows: false
                    }
                }
            ]
        });
    }
    let productPage = $("main").hasClass("productpage")
    if (productPage) {
        let $carouselProduct = $('.products__slider-wrapper');
        $carouselProduct.flickity({
            cellAlign: 'left',
            wrapAround: false,
            prevNextButtons: true,
            draggable: true,
            pageDots: false,
            on: {
                ready: function() {
                    let leight = $('.product__item').length;
                    console.log(leight)
                },
            }
        });
        $('.engine .listing__item').click(function(e) {
            e.preventDefault();
            $('.engine .listing__item').removeClass('active');
            $(this).addClass('active');
        });
        $('.category .listing__item').click(function(e) {
            e.preventDefault();
            $('.category .listing__item').removeClass('active');
            $(this).addClass('active');
        });
        $('.choosing-sex .listing__item').click(function(e) {
            e.preventDefault();
            $('.choosing-sex .listing__item').removeClass('active');
            $(this).addClass('active');
        });
    }
    let DetailPage = $("main").hasClass("productDetail")
    if (DetailPage) {
        $('.color .color__item').click(function(e) {
            e.preventDefault();
            let i = $(this).index();
            let product = $('.product img')
            $('.color .color__item').removeClass('active');
            $(this).addClass('active');
            $('.product img').removeClass('active');
            $(product[i]).addClass('active');
        });
        /// Section Hero
        let $carouselHeroDetai = $(".heroDetail .heroDetail__slider .list")
        $carouselHeroDetai.flickity({
            cellAlign: 'left',
            speed: 900,
            arrows: true,
            pageDots: false,
            cssEase: 'cubic-bezier(.76,.22,.36,.99)',
            prevNextButtons: false,
            centerMode: true,
            on: {
                ready: function() {
                    let sumSliderHero = $('.heroDetail__slider .list .carousel-cell').length;
                    let sum = $('.heroDetail__pagging .sum')
                    $('.heroDetail__pagging .sum').append(sumSliderHero);
                    if (sumSliderHero < 10) {
                        sum.text(sumSliderHero.toString().padStart(2, 0));
                    }
                },
                change: function(index) {
                    let current = $('.heroDetail__pagging .current');
                    let indexDetai = index + 1;
                    let sumSliderHero = $('.heroDetail__slider .list .carousel-cell').length;
                    if (sumSliderHero < 10) {
                        current.text(indexDetai.toString().padStart(2, 0));
                    }
                    $('.heroDetail__content .ct').removeClass('active');
                    $('.heroDetail__content .ct-' + (index)).addClass('active');
                }
            }
        });
        let listNext = $('.list__bottom .next');
        let listPre = $('.list__bottom .prev');
        $(listNext).click(function(e) {
            e.preventDefault();
            $carouselHeroDetai.flickity('next')
        });
        $(listPre).click(function(e) {
            e.preventDefault();
            $carouselHeroDetai.flickity('previous')
        });
    }
    let service = $("main").hasClass("service")
    if (service) {
        $('.inner ul li').click(function(e) {
            e.preventDefault();
            var i = $(this).index()
            var item = $('.inner ul li')
            var tab = $('.service__right .ct-tab')
            $('.inner ul li').removeClass('active');
            $(this).addClass('active')
            $('.service__right .ct-tab').removeClass('active');
            $(tab[i]).addClass('active');
        });
        $('.headline').hover(function() {
            $('.headline').removeClass('dim');
            $(this).addClass('dim');
        }, function() {
            $('.headline').removeClass('dim');
        });
    }
    let store = $("main").hasClass("store")
    if (store) {
        $.ajax({
            method: "GET",
            url: "http://zuzo.xyz/api/v1/regions",
            success: function(res) {
                res.data.forEach(function(item) {
                    let option = `<option value="${item.id}">${item.name}</option>`;
                    $('select[name="regions"]').append(option);
                    $('.list').append(tab)
                })
            }
        })
        $('select[name="regions"]').change(function(e) {
            e.preventDefault();
            let region_id = $(this).val()
            $.ajax({
                method: "GET",
                url: 'http://zuzo.xyz/api/v1/regions/' + region_id + '/cities',
                success: function(response) {
                    $('select[name="cities"]').empty();
                    $('select[name="cities"]').append(`<option value="">Chọn Huyện</option>`);
                    response.data.forEach(function(item) {
                        let option = `<option value="${item.id}">${item.name}</option>`;
                        $('select[name="cities"]').append(option);
                    })
                }
            });
        });
    }
    let register = $('main').hasClass('register')
    if (register) {}
    let about = $('main').hasClass('about')
    if (about) {
        let $carouselAbout = $(".about__slider .slider__wapper")
        $carouselAbout.flickity({
            cellAlign: 'left',
            speed: 900,
            arrows: true,
            pageDots: false,
            cssEase: 'cubic-bezier(.76,.22,.36,.99)',
            prevNextButtons: true,
            contain: true,
        });
    }
    let noode = $('main').hasClass('noode')
    if (noode) {
        $(".ft-noodoe ul li").click(function(e) {
            e.preventDefault();
            let i = $(this).index();
            $('.ft-noodoe ul li').removeClass('current');
            $(this).addClass('current')
        });
    }
    var setPosImgSpec = function() {
        var w = $(window).width();
        var sizeScreenTablet = 768;
        var margin = parseInt($(' .container').css('margin-left').replace("px", ""));
        var padding = parseInt($(' .container').css('padding-left').replace("px", ""));
        var widthWrap = $('.img').width();
        var distanceLeft = margin + padding;
        if (w < 1583 && w > sizeScreenTablet) {
            $(' .img-w').css({ 'margin-left': -distanceLeft, 'width': (distanceLeft + widthWrap) })
        } else {
            $('.img-w').css({ 'margin-left': 'inherit', 'width': '100%' })
        }
    }
    setPosImgSpec();
    $(window).resize(function() {
        setPosImgSpec();
    });
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        overflow: true,
        orientation: 'up',
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
});