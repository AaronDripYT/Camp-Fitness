var menu_clicked = false;
var width = window.innerWidth;

window.addEventListener('load', (event) => {
    var menu = document.getElementById('menu');
    var footerTxt = document.getElementById('footerTxt');

    if (width >= 850){
        menu.style.transform = 'scale(0.97)';
        menu.style.display = 'none';
        menu_clicked = false;
        footerTxt.innerHTML = `Open school hours | <span onclick="navigator.clipboard.writeText(''); navigator.clipboard.writeText(this.innerHTML); alert('Phone number copied.')">+1 (246) 367-8180</span> | <a target="_blank" href="mailto:campfitness246@gmail.com">campfitness246@gmail.com</a>`;
    } else{
        footerTxt.innerHTML = `Open school hours | <span onclick="navigator.clipboard.writeText(''); navigator.clipboard.writeText(this.innerHTML); alert('Phone number copied.')">+1 (246) 367-8180</span>  <a target="_blank" href="mailto:campfitness246@gmail.com">campfitness246@gmail.com</a>`;
    }
});

function menu(btn){
    var menu = document.getElementById('menu');

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

window.addEventListener('resize', function (){
    if (window.innerWidth >= 850) {
        var menu = document.getElementById('menu');
        var footerTxt = document.getElementById('footerTxt');

        menu.style.transform = 'scale(0.97)';
        menu.style.display = 'none';
        menu_clicked = false;
        footerTxt.innerHTML = `Open school hours | <span onclick="navigator.clipboard.writeText(''); navigator.clipboard.writeText(this.innerHTML); alert('Phone number copied.')">+1 (246) 367-8180</span> | <a target="_blank" href="mailto:campfitness246@gmail.com">campfitness246@gmail.com</a>`;
    } else{
        var footerTxt = document.getElementById('footerTxt');
        footerTxt.innerHTML = `Open school hours | <span onclick="navigator.clipboard.writeText(''); navigator.clipboard.writeText(this.innerHTML); alert('Phone number copied.')">+1 (246) 367-8180</span>  <a target="_blank" href="mailto:campfitness246@gmail.com">campfitness246@gmail.com</a>`;
    }
});
