document.addEventListener('DOMContentLoaded', () => {

    // скролл от верха страницы
    const header = document.querySelector('.header');
    function handleScroll() {
        if (window.scrollY >= 50) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }
    window.addEventListener('scroll', handleScroll);


    const productsSlider = new Swiper('.products__slider', {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
            
        }
    })

    const totalCalc = document.querySelector('.calculator__number');

    $(".calculator__range").ionRangeSlider({
        min: 1,
        max: 120,
        from: 40,

        onChange: function (data) {
            // Called every time handle position is changed
            if (totalCalc){ 
                totalCalc.innerHTML = (data.from * 320).toLocaleString('ru-RU') + ' ₽';
            }
            
        },
    });


    const gallerySlider = new Swiper('.gallery__slider', {
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15, 
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20, 
            }
        }
    })

    const resonBtns = document.querySelectorAll('.reson__btn');

    if (resonBtns.length != 0) {
        resonBtns.forEach(function(item){
            item.addEventListener('click', (e)=>{
                const item = e.target.closest('.reson__item');
                if (item.classList.contains('active')) {
                    CloseReson(item);
                } else {
                    resonBtns.forEach(function(item){
                        item.closest('.reson__item').classList.remove('active');
                    })
                    OpenReson(item);
                }
            })
        })

        function CloseReson(item) {
            item.classList.remove('active')
            
        }

        function OpenReson(item) {
            item.classList.add('active')
        }
    }

    const feedbackSlider = new Swiper(".feedback__slider", {
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            }, 
            920: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 60,
            },

        }
    })


    const faqBtns = document.querySelectorAll('.faq__button');
    if (faqBtns.length != 0) {
        faqBtns.forEach(function(item){
            item.addEventListener('click', (e)=>{
                const button = e.target.closest('.faq__item');
                if (button.classList.contains('active')) {
                    CloseFaq(button); 
                } else {
                    faqBtns.forEach(function(item){
                        item.closest('.faq__item').classList.remove('active');
                    })
                    OpenFaq(button);
                }
            })
        })
        function OpenFaq(button) {
            const parent = button.closest('.faq__item');
            parent.classList.add("active");
        }
        function CloseFaq(button) {
            const parent = button.closest('.faq__item');
            parent.classList.remove("active");
        }
    }


    const calcBtns = document.querySelectorAll('.calculator__items button');

    if(calcBtns.length != 0) {
        calcBtns.forEach(function(item){
            item.addEventListener('click', (e)=>{
                if (e.target.classList.contains('active')) {
                    e.target.classList.remove('active');
                } else {
                    calcBtns.forEach(function(item){
                        item.classList.remove('active');
                    })
                    e.target.classList.add('active');
                }
            })
        })

        calcBtns[0].click();
    }

    const menuBtn = document.querySelectorAll('.burger-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', ()=>{
            CloseMenu();
        })
    }

    if (menuBtn.length != 0) {
       menuBtn.forEach((item)=>{
        item.addEventListener('click', ()=>{
            OpenMenu();
        });
       })

        function OpenMenu() {
            const mobileWindow = document.querySelector('.mobile-menu');
            mobileWindow.classList.add("active");
            document.addEventListener('click', (e)=>{
                if (e.target.classList.contains('mobile-menu') && !e.target.classList.contains('burger-btn')) {
                    CloseMenu();
                }
            })
        }
        function CloseMenu() {
            const mobileWindow = document.querySelector('.mobile-menu');
            mobileWindow.classList.remove("active");
        }
    }
   
})