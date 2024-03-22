var nameCheck = 0;
var emailCheck = 0;
var numCheck = 0;
var totalCheck = nameCheck + emailCheck + numCheck;
var btn = document.getElementById('register');

function nameCheck(input){

    window.alert(totalCheck);
    
    var nameCode = /^[a-zA-Z\s]+$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]

    if (input.value.match(nameCode)){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        nameCheck = 1;
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please enter your name';
            input.style.outline = '0.1rem solid #DD2E44';
            nameCheck = 0;
        } else{
            txt.innerHTML = 'Invalid name';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
            nameCheck = 0;
        }
    };

    window.alert(totalCheck);

    if (totalCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function emailCheck(input){
    var emailCode = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]
    
    if (input.value.match(emailCode) && /@alleyne.edu.bb\s*$/.test(input.value.toLowerCase())){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        emailCheck = 1;
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please enter your email';
            input.style.outline = '0.1rem solid #DD2E44';
            emailCheck = 0;
        } else{
            txt.innerHTML = 'Invalid email';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
            emailCheck = 0;
        }
    };

    alert(totalCheck);

    if (totalCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function numberCheck(input){
    var numCode = /^[0-9\s+()\-]+$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]

    if (input.value.match(numCode)){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        numCheck = 1;
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please a phone number';
            input.style.outline = '0.1rem solid #DD2E44';
            numCheck = 0;
        } else{
            txt.innerHTML = 'Invalid number';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
            numCheck = 0;
        }
    };

    alert(totalCheck);

    if (totalCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function btnClick(input){
    if (totalCheck === 3){
        window.location.href = '../index.html';
    }
};
