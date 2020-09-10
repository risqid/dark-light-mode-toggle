// store the local storage value
let theme = localStorage.getItem('theme');

const enableDarkMode = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute('data-theme', "dark");
};

const disableDarkMode = () => {
    localStorage.setItem("theme", null);
    document.documentElement.setAttribute('data-theme', null);
};

// enable darkmode when toggle is on(checked) and disable it when toggle is off(inchecked)
var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('click', function() {
    if(this.checked) {
        trans()
        enableDarkMode()
    }else{
        trans()
        disableDarkMode()
    }
});

// important to load theme with previous setting after pade reloaded
if (theme === "dark") {
    enableDarkMode();
    checkbox.checked = true;
}

// for color transition when changing theme
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}