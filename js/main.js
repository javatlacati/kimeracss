document.querySelector('main').onscroll = function() {
    var scroll = this.scrollTop || document.body.scrollTop;
    if (scroll > 100) {
        document.querySelector('#bottom-nav').classList.add('show');
    } else {
        document.querySelector('#bottom-nav').classList.remove('show');
    }
};

var snippet = document.querySelectorAll('snippet pre')

for (var i = 0; i < snippet.length; i++) {
    snippet[i].addEventListener('click', function() {
        this.style.maxHeight = '100%';
        this.style.overflowY = 'hidden';
    }, false);
}

var menu = document.querySelectorAll('#m1 menu-item:not(.is-label)');
var menuContent = document.querySelectorAll('.menu_content');

for (var i = 1; i < menuContent.length; i++) {
    menuContent[i].style.display = "none";
}
for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function() {
        var activeItem = this.getAttribute('data-link');
        for (var i = 0; i < menuContent.length; i++) {
            menu[i].classList.remove("is-active");
            menuContent[i].style.display = "none";
        }
        this.classList.add("is-active");
        document.getElementById(activeItem).style.display = "block";
    }, false);
}

document.querySelector('#show-password').addEventListener('click', function() {
    var input = this.previousElementSibling.getAttribute('type');
    var e = this.previousElementSibling;
    if (input == 'text') {
        e.setAttribute('type', 'password');
    } else if (input == 'password') {
        e.setAttribute('type', 'text');
    }
}, false);

var sidebar = document.querySelector('#menu-principal');
var sidebarClose = sidebar.querySelector('#menu-close');

document.querySelector('#mostrar-side-menu').addEventListener('click', function() {
    sidebar.style.left = 0;
    sidebar.style.backgroundColor = 'rgba(0,0,0, .8)';
    sidebarClose.style.left = 0;
    sidebarClose.style.width = '100%';

}, false);

sidebarClose.addEventListener('click', function() {
    sidebar.style.left = '-150%';
    this.style.left = '-150%';
    this.style.width = 0;
}, false);

var toggleTabsDemo = document.querySelectorAll('#toggle-size-tabs button');
var tab5 = document.querySelector('#tabs5');

var toggleTabsA = document.querySelectorAll('#toggle-align-tabs button');
var tab6 = document.querySelector('#tabs6');

for (var i = 0; i < toggleTabsDemo.length; i++) {
    toggleTabsDemo[i].addEventListener('click', function() {
        demoTabs(tab5, 'is-small', 'is-medium', 'is-large', this.innerText);
    }, false);
}
for (var j = 0; j < toggleTabsA.length; j++) {
    toggleTabsA[j].addEventListener('click', function() {
        demoTabs(tab6, 'is-right', 'is-center', 'is-fluid', this.innerText);
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
        remove(tab6, cls2 + ' ' + cls1);
    }
}


function remove(el, array) {
    array = array.split(' ');
    for (var i = 0; i < array.length; i++) {
        el.classList.remove(array[i]);
    }
}

var demoBDivider = document.querySelector('#demo-breadcrumb-toggle-divider');
var toggleButtonDivider = document.querySelectorAll('#demo-breadcrumb-divider > button');
var printDBread = document.getElementById('demo-breadcrumb-doc');

for (let i = 0; i < toggleButtonDivider.length; i++) {
    toggleButtonDivider[i].addEventListener('click', function() {
        toggleDemo(demoBDivider, printDBread, 'is-dotted', 'is-arrowed', this.innerText);
    }, false);
}

var demoABread = document.querySelector('#breadcrumb-Align-demo');
var toggleBread = document.querySelectorAll('#bread-align-buttons > button');
var spanABread = document.querySelector('#demo-align-bread');

for (let i = 0; i < toggleBread.length; i++) {
    toggleBread[i].addEventListener('click', function() {
        toggleDemo(demoABread, spanABread, 'is-center', 'is-right', this.innerText);
    }, false);
}

var SBread = document.querySelector('#size-bread');
var TSBread = document.querySelectorAll('#toggle-size-bread > button');
var SSBread = document.querySelector('#demo-size-bread');

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
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var webhost = document.querySelector('body > div');
if (webhost != undefined) {
    for (var i = 0; i < webhost.length; i++) {
        webhost[i].remove();
    }
}

var demoSelect = new Listbox({
    el: '#demoSelect1',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var demo0 = new Listbox({
    el: '#demo0',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});
var demo1 = new Listbox({
    el: '#demo1',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var demo2 = new Listbox({
    el: '#demo2',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var demo3 = new Listbox({
    el: '#demo3',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var demo4 = new Listbox({
    el: '#demo4',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var demoIcons = new Listbox({
    el: '#demoIcons',
    hasTwoIcons: true,
    iconToggleClass: 'fa fa-angle-down',
    iconLabelClass: 'fa fa-user-circle'
});

var demoA = new Listbox({
    el: '#demoA',
    hasTwoIcons: true,
    iconToggleClass: 'fa fa-angle-down',
    iconLabelClass: 'fa fa-users'
});

var demoAtributes = new Listbox({
    el: '#demoAtributes',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});

var cal2 = new Calendar({
    el: '#calendar2', // the Id container with class calendar-picker
    languaje: 'es',
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left' // icon toggle position
});

var cald1 = new Calendar({
    el: '#CalendarDemo1', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'dark'
});

var cald2 = new Calendar({
    el: '#CalendarDemo2', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'info'
});
var cald3 = new Calendar({
    el: '#CalendarDemo3', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'success'
});
var cald4 = new Calendar({
    el: '#CalendarDemo4', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'warning'
});
var cald5 = new Calendar({
    el: '#CalendarDemo5', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'left', // icon toggle position
    style: 'danger'
});

var cald6 = new Calendar({
    el: '#CalendarDemo6', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-caret-up', // the classes for the icon previus control
    classIconNext: 'fa fa-caret-down', // the classess for the icon next control
    classIconInput: 'fa fa-angellist', // classes for de icon toggle calendar
    iconPosition: 'left' // icon toggle position
});

var cald7 = new Calendar({
    el: '#CalendarDemo7', // the Id container with class calendar-picker
    classIconPrev: 'fa fa-angle-up', // the classes for the icon previus control
    classIconNext: 'fa fa-angle-down', // the classess for the icon next control
    classIconInput: 'fa fa-calendar', // classes for de icon toggle calendar
    iconPosition: 'right' // icon toggle position
});



var demoF = new Listbox({
    el: '#demoField',
    hasTwoIcons: false,
    iconToggleClass: 'fa fa-angle-down'
});