let $navMain = document.querySelector('#nav-main');
let $closeBtnMenu = document.querySelectorAll('.close-menu-btn, #show-docs');
let $sidebar = document.querySelector('#menu-principal');
let $snippet = document.querySelectorAll('snippet pre');
let $menu = document.querySelectorAll('[data-link]');
let $menuContent = document.querySelectorAll('.menu_content');

let $toggleTabsDemo = document.querySelectorAll('#toggle-size-tabs button');
let $tab5 = document.querySelector('#tabs5');

let $toggleTabsA = document.querySelectorAll('#toggle-align-tabs button');
let $tab6 = document.querySelector('#tabs6');

let $demoBDivider = document.querySelector('#demo-breadcrumb-toggle-divider');
let $toggleButtonDivider = document.querySelectorAll('#demo-breadcrumb-divider > button');
let $printDBread = document.getElementById('demo-breadcrumb-doc');
let $demoABread = document.querySelector('#breadcrumb-Align-demo');
let $toggleBread = document.querySelectorAll('#bread-align-buttons > button');
let $spanABread = document.querySelector('#demo-align-bread');
let $menuItems = document.querySelectorAll('menu-item[data-link]');
let $searchComponent = document.querySelector('#search-component');
let $searchInput = $searchComponent.querySelector('.input');
let $searchList = $searchComponent.querySelector('#searchList');
let $stickyBtn = document.querySelector('#demo-sticky-btn');
/* Serach component list */

$stickyBtn.addEventListener('click', function() {
    document.querySelector('#demo-sticky').remove();
}, false);

$searchInput.addEventListener('keyup', function(e) {
    $searchList.innerHTML = '';
    e.stopPropagation();
    let search = this.value;
    for (let i = 0; i < $menuItems.length; i++) {
        let text = $menuItems[i].querySelector('span').outerText;
        let cadena = ~text.toLowerCase().indexOf(search);
        if (cadena != 0) {
            let attr = $menuItems[i].getAttribute('data-link');
            updateList(attr, text);
        }
    }
    if (!$searchList.classList.contains('is-visible')) {
        $searchList.classList.add('is-visible');
    }
}, false);


function updateList(attr, text) {
    console.log($searchList);
    $searchList.innerHTML += `<list-item data-link="${attr}"><span>${text}</span><icon><i class="fa fa-cube"></i></icon></list-item>`;
    let item = $searchList.querySelectorAll('list-item');
    for (let a = 0; a < item.length; a++) {
        item[a].addEventListener('click', function() {
            $searchInput.value = text;
            let activeItem = this.getAttribute('data-link');
            for (let i = 0; i < $menuContent.length; i++) {
                if ($menuContent[i].classList.contains('is-visible')) {
                    $menuContent[i].classList.remove('is-visible');
                }
                $menu[i].classList.remove("is-active");
            }
            document.getElementById(activeItem).classList.add('is-visible');
            $searchList.classList.remove('is-visible');
        }, false);
    }
}

/* $sidebar visibility */

if ($navMain) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            $navMain.classList.add('is-fixed')
        } else {
            $navMain.classList.remove('is-fixed')
        }
    }, false);
}

$snippet.forEach(el => {
    el.addEventListener('click', function() {
        el.classList.add('is-expand');
        console.log(el);
    }, false);
});

$menuContent[0].classList.add('is-visible');
$menu[0].classList.add('is-active');

if ($menu.length > 0) {
    for (let i = 0; i < $menu.length; i++) {
        if ($menu[i].classList.contains('is-title') || $menu[i].classList.contains('ignore')) {} else {
            $menu[i].addEventListener('click', function() {
                let activeItem = this.getAttribute('data-link');
                for (let i = 0; i < $menuContent.length; i++) {
                    if ($menuContent[i].classList.contains('is-visible')) {
                        $menuContent[i].classList.remove('is-visible');
                    }
                    $menu[i].classList.remove("is-active");
                }
                this.classList.add("is-active");
                document.getElementById(activeItem).classList.add('is-visible');
                $sidebar.classList.remove('is-visible');
            }, false);
        }
    }
}

if ($closeBtnMenu) {
    $closeBtnMenu.forEach(btn => {
        if (btn.classList.contains('floating')) {
            btn.classList.add('animation-onda');

            setTimeout(function() {
                btn.classList.remove('animation-onda');
            }, 60000);
        }
        btn.addEventListener('click', function() {
            $sidebar.classList.toggle('is-visible');
        }, false);
    });
}

for (let i = 0; i < $toggleTabsDemo.length; i++) {
    $toggleTabsDemo[i].addEventListener('click', function() {
        demoTabs($tab5, 'is-small', 'is-medium', 'is-large', this.innerText);
    }, false);
}
for (let j = 0; j < $toggleTabsA.length; j++) {
    $toggleTabsA[j].addEventListener('click', function() {
        demoTabs($tab6, 'is-right', 'is-center', 'is-fluid', this.innerText);
    }, false);
}

function demoTabs(el, cls1, cls2, cls3, element) {
    console.log(element);
    if (element == 'default') {
        remove(el, cls1 + ' ' + cls2 + ' ' + cls3);
    } else if (element == cls1) {
        el.classList.add(cls1);
        remove(el, cls2 + ' ' + cls3);
    } else if (element == cls2) {
        el.classList.add(cls2);
        remove(el, cls1 + ' ' + cls3);
    } else if (element == cls3) {
        el.classList.add(cls3);
        remove($tab6, cls2 + ' ' + cls1);
    }
}


function remove(el, array) {
    array = array.split(' ');
    for (let i = 0; i < array.length; i++) {
        el.classList.remove(array[i]);
    }
}

for (let i = 0; i < $toggleButtonDivider.length; i++) {
    $toggleButtonDivider[i].addEventListener('click', function() {
        toggleDemo($demoBDivider, $printDBread, 'is-dotted', 'is-arrowed', this.innerText);
    }, false);
}

for (let i = 0; i < $toggleBread.length; i++) {
    $toggleBread[i].addEventListener('click', function() {
        toggleDemo($demoABread, $spanABread, 'is-center', 'is-right', this.innerText);
    }, false);
}

let SBread = document.querySelector('#size-bread');
let TSBread = document.querySelectorAll('#toggle-size-bread > button');
let SSBread = document.querySelector('#demo-size-bread');

for (let i = 0; i < TSBread.length; i++) {
    TSBread[i].addEventListener('click', function() {
        toggleDemo(SBread, SSBread, 'is-small', 'is-large', this.innerText);
    }, false);
}

function toggleDemo(el, tag, cls1, cls2, element) {
    if (element == 'default') {
        remove(el, cls1 + ' ' + cls2);
        tag.innerHTML = '';
    }
    if (element == cls1) {
        el.classList.remove(cls2);
        el.classList.add(cls1);
        tag.innerHTML = cls1;
    }
    if (element == cls2) {
        el.classList.add(cls2);
        el.classList.remove(cls1);
        tag.innerHTML = cls2;
    }
}
(function(d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

let demoSelect = new Listbox({
    el: '#demoSelect1',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let demo0 = new Listbox({
    el: '#demo0',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});
let demo1 = new Listbox({
    el: '#demo1',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let demo2 = new Listbox({
    el: '#demo2',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let demo3 = new Listbox({
    el: '#demo3',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let demo4 = new Listbox({
    el: '#demo4',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let demoIcons = new Listbox({
    el: '#demoIcons',
    hasTwoIcons: true,
    iconToggleClass: 'fa fa-angle-down',
    iconLabelClass: 'fa fa-user-circle'
});

let demoA = new Listbox({
    el: '#demoA',
    hasTwoIcons: true,
    iconToggleClass: 'fa fa-angle-down',
    iconLabelClass: 'fa fa-users'
});

let demoAtributes = new Listbox({
    el: '#demoAtributes',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

let cal2 = new Calendar({
    el: '#calendar2', // the Id container with class calendar-picker
    languaje: 'es',
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left' // icon toggle position
});

let cald1 = new Calendar({
    el: '#CalendarDemo1', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'dark'
});

let cald2 = new Calendar({
    el: '#CalendarDemo2', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'info'
});
let cald3 = new Calendar({
    el: '#CalendarDemo3', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'success'
});
let cald4 = new Calendar({
    el: '#CalendarDemo4', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'warning'
});
let cald5 = new Calendar({
    el: '#CalendarDemo5', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'danger'
});

let cald6 = new Calendar({
    el: '#CalendarDemo6', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-caret-up', // the classes for the icon previus control
    classIconNext: 'fa fa-caret-down', // the classess for the icon next control
    classIconInput: 'fa fa-angellist', // classes for de icon toggle calendar
    iconPosition: 'left' // icon toggle position
});

let cald7 = new Calendar({
    el: '#CalendarDemo7', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'right' // icon toggle position
});

let demoF = new Listbox({
    el: '#demoField',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});