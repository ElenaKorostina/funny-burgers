
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
// let item = document.querySelector('.company-acco__item');

// item.addEventListener('click', function () {
//     item.classList.add('company-acco__item_active');
// }); 

// let item = document.querySelectorAll('.company-acco__item');
// for (i=0; i<item.length; i++) { 
// item[i].addEventListener('click', function (e){
//     e.preventDefault();
//     var item = e.currentTarget;
//     if (item.classList.contains('company-acco__item_active')) {
//         item.classList.remove('company-acco__item_active');
//     }
//     else {
//         item.classList.add('company-acco__item_active');
//     }


// })
// };

// let item = document.querySelectorAll('.company-acco__item');
// let list = document.querySelector('.company-acco');
// for (i=0; i<item.length; i++) { 
// item[i].addEventListener('click', function (e){
//     e.preventDefault();
//     var item = e.currentTarget;
//     if (item.classList.contains('company-acco__item_active')) {
//         item.classList.remove('company-acco__item_active');
//     }
//     else {
//         item.classList.add('company-acco__item_active');
//     }


// })
// };

// let item = document.querySelectorAll('.company-acco__item');

// for (i=0; i<item.length; i++) { 
// item[i].addEventListener('click', function (e){
//     e.preventDefault();
//     var item = e.currentTarget;
//     let itemActive = document.querySelectorAll('.company-acco__item_active');
//     for (i=0; i<itemActive.length; i++){
//         if(itemActive[i].classList.contains('company-acco__item_active')) {
//             itemActive[i].classList.remove('company-acco__item_active');
//         }
//     }
//     if (item.classList.contains('company-acco__item_active')) {
//         item.classList.remove('company-acco__item_active');
//     }
//     else {
//         item.classList.add('company-acco__item_active');
//     }


// })
// };

// let item = document.querySelectorAll('.company-acco__item');

// for (i=0; i<item.length; i++) { 
// item[i].addEventListener('click', function (e){
//     e.preventDefault();
//     var item = e.currentTarget;
//     let itemActive = document.querySelectorAll('.company-acco__item_active');
//     for (i=0; i<itemActive.length; i++){
//         if(itemActive[i].classList.contains('company-acco__item_active')) {
//             itemActive[i].classList.remove('company-acco__item_active');

//             if (item.classList.contains('company-acco__item_active')) {
//                 item.classList.remove('company-acco__item_active');
//              }
//             else {
//             item.classList.add('company-acco__item_active');
//              }

//         }
//         else {
//             item.classList.add('company-acco__item_active');
//             }
//     }



// })
// };

let item = document.querySelectorAll('.company-acco__item');

for (i=0; i<item.length; i++) { 
    item[i].addEventListener('click', function (e){
        e.preventDefault();
        let item = e.currentTarget;
        if (!(item.classList.contains('company-acco__item_active'))) {
            let itemActive = document.querySelectorAll('.company-acco__item_active');
            for (i=0; i<itemActive.length; i++){
                if(itemActive[i].classList.contains('company-acco__item_active')) {
                    itemActive[i].classList.remove('company-acco__item_active');
                }
            
            } 
            item.classList.add('company-acco__item_active');   
        }
        else {
            item.classList.remove('company-acco__item_active');
            }
            
            
        }
    )};

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

        function init() {
            var name = "Mozilla"; // name - локальная переменная, созданная в init
            function displayName() { // displayName() - внутренняя функция, замыкание
                alert (name); // displayName() использует переменную, объявленную в родительской функции    
            }
            displayName();    
        }
        init();
