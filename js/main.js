
let dropMenu = document.getElementById('drop-menu');
let windowmenu = document.getElementById('winmenu');
let exit = document.getElementById('winmenu-header__exit-btn');

dropMenu.addEventListener('click', function () {
    windowmenu.style.display = 'flex';
});   
exit.addEventListener('click', function () {
    windowmenu.style.display = 'none';
});   

// горизонтальный аккордеон


var heightChange = document.querySelectorAll('.company-acco__content');

for (i=0; i<heightChange.length; i++) {
    
  var anim =  heightChange[i].animate(
        [
            {maxHeight: '0px'},
            {maxHeight:'9999px'}
        ],300
    );
};



var item = document.querySelectorAll('.company-acco__item');

for (i=0; i<item.length; i++) { 
    item[i].addEventListener('click', function (e){
        e.preventDefault();
        var item = e.currentTarget;
        if (!(item.classList.contains('company-acco__item_active'))) {
            var itemActive = document.querySelectorAll('.company-acco__item_active');
            for (i=0; i<itemActive.length; i++){
                if(itemActive[i].classList.contains('company-acco__item_active')) {
                    itemActive[i].classList.remove('company-acco__item_active'); //закрытие контента, удаление активного класса
                }
            
            } 
            item.classList.add('company-acco__item_active'); //открытие контента, появление активного класса
             
        }
        else {
            item.classList.remove('company-acco__item_active'); //закрытие контента, удаление активного класса
            }
            
            
        }
    )};
// анимация

// let heightChange = document.querySelectorAll('.company-acco__content');

// for (i=0; i<heightChange.length; i++) {
//     let parentHC = heightChange[i].parentNode;
// if (parentHC.classList.contains('company-acco__item_active')) {
//   var anim =  heightChange[i].animate(
//         [
//             {maxHeight: '0'},
//             {maxHeight:'9999px'}
//         ],300
//     );
// }
// console.log(parentHC.classList.contains('company-acco__item_active'))
// } 



    // вертикальное меню

    let itemMenu = document.querySelectorAll('.menu-acco__item');
    
    for (i=0; i<itemMenu.length; i++) { 
        itemMenu[i].addEventListener('click', function (e){
            e.preventDefault();
            var itemMenu = e.currentTarget;
            if (!(itemMenu.classList.contains('menu-acco__item_activ'))) {
                let itemMenuActive = document.querySelectorAll('.menu-acco__item_activ');
                for (i=0; i<itemMenuActive.length; i++){
                    if(itemMenuActive[i].classList.contains('menu-acco__item_activ')) {
                        itemMenuActive[i].classList.remove('menu-acco__item_activ');
                    }
                
                } 
                itemMenu.classList.add('menu-acco__item_activ');   
            }
            else {
                itemMenu.classList.remove('menu-acco__item_activ');
                }
                
                
            }
        )};

// -------- Карта---------

ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("yandex-map", {
        center: [59.92,30.31],
        zoom: 12.3,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    var coords = [
        [59.94554327989287,30.38935262114668], [59.91142323563909,30.50024587065841], [59.88693161784606,30.319658102103713], [59.97033574821672,30.315194906302924]
    ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '../icon/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52],
           draggable: false 
        });
    
    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }
    
    myMap.geoObjects.add(myCollection);
}



//------- OPS---------

const display = $('.maincontent');
const sections = $('.section');
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
    $('.pagination-list__item').eq(sectionEq).addClass('pagination-list__item_active')
      .siblings().removeClass('pagination-list__item_active');
  }

const performTransition = sectionEq => {
    if (inScroll == false) {

    inScroll = true

    const position = (sectionEq * -100) + '%';

    display.css({
        'transform': `translateY(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
      })

    sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');

    setTimeout(() => {
        inScroll = false;
        switchMenuActiveClass(sectionEq);
    }, 500);
}
}

const defineSections = sections => {
    const activeSection = sections.filter('.active');
    return {
        activeSection: activeSection,
        nextSection:activeSection.next(),
        prevSection:activeSection.prev()
    }  
}

const scrollToSection = direction => {
    const section = defineSections(sections)
  
    if (inScroll) return;
  
    if (direction === 'up' && section.nextSection.length) { // вниз
      performTransition(section.nextSection.index())
    }
  
    if (direction === 'down' && section.prevSection.length) { // вверх
      performTransition(section.prevSection.index())
    }
  }

$('.wrapper').on({
    wheel: e => {
 console.log(e.originalEvent.deltaY);
 const deltaY = e.originalEvent.deltaY;
 let direction = (deltaY > 0) 
 ? 'up' 
 : 'down'

scrollToSection(direction);
},
 touchmove: e => (e.preventDefault())
});

$(document).on('keydown', e =>{
    const section = defineSections(sections);

    if (inScroll) return

    switch (e.keyCode){
        case 40: // вверх
        if (!section.nextSection.length) return;
        performTransition(section.nextSection.index());
        break;

        case 38: //вниз
        if (!section.prevSection.length) return;
        performTransition(section.prevSection.index());
        break;
    }
});

if (isMobile) {
    $(window).swipe({
      swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        console.log(direction);
        scrollToSection(direction);
      }
    })
  }

$('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to'));
  
    performTransition(sectionIndex);
  });