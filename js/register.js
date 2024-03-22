var nameCheck = 0;
var emailCheck = 0;
var numCheck = 0;
var btn = document.getElementById('register');

function nameCheckFunction(input){
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
    console.log(nameCheck + emailCheck + numCheck);

    if (nameCheck + emailCheck + numCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function emailCheckFunction(input){
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

    console.log(nameCheck + emailCheck + numCheck);

    if (nameCheck + emailCheck + numCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function numCheckFunction(input){
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

    console.log(nameCheck + emailCheck + numCheck);

    if (nameCheck + emailCheck + numCheck === 3){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function btnClickFunction(input){
    if (nameCheck + emailCheck + numCheck === 3){
        window.location.href = '../index.html';
    }
};
