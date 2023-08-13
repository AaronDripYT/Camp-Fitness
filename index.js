var menu_clicked = false

function menu(btn){
    var menu = document.getElementById('menu')

    if (menu_clicked == false){
        menu.style.display = 'block';
        menu_clicked = true;
        setTimeout(function(){
            menu.style.transform = 'scale(1)';
        }, 1);
    } else{
        menu.style.transform = 'scale(0.97)';
        setTimeout(function(){
            menu.style.display = 'none';
            menu_clicked = false;
        }, 100);
    }
};

window.addEventListener('resize', function () {
    console.log(window.innerWidth)

    if (window.innerWidth >= 850) {
        var menu = document.getElementById('menu')

        menu.style.transform = 'scale(0.97)';
        menu.style.display = 'none';
        menu_clicked = false;
    }
});