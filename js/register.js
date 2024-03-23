var firstNameCheck = 0;
var lastNameCheck = 0;
var emailCheck = 0;
var numCheck = 0;
var btn = document.getElementById('register');

window.addEventListener('load', (event) => {
    // hello
});

function nameCheckFunction(input){
    var nameCode = /^[a-zA-Z\s]+$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]
    var firstName = document.getElementById('firstName');

    if (input.value.match(nameCode)){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        if (input === firstName){
            firstNameCheck = 1;
        } else{
            lastNameCheck = 1;
        }
        input.value = input.value.charAt(0).toUpperCase() + input.value.substring(1).toLowerCase();
    } else{
        if (input.value == null || input.value == ''){
            if (input === firstName){
                txt.innerHTML = 'Please enter your first name';
                firstNameCheck = 0;
            } else{
                txt.innerHTML = 'Please enter your last name';
                lastNameCheck = 0;
            }
            input.style.outline = '0.1rem solid #DD2E44';
        } else{
            txt.innerHTML = 'Invalid name';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
            if (input === firstName){
                firstNameCheck = 0;
            } else{
                lastNameCheck = 0;
            }
        }
    }

    if (firstNameCheck + lastNameCheck + emailCheck + numCheck === 4){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
        btn.style.opacity = '0.4';
    }
};

function emailCheckFunction(input){
    input.value = input.value.toLowerCase();
    var emailCode = /^[a-z.-]{3,}[0-9]{4}@alleyne.edu.bb$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]
    
    if (input.value.match(emailCode)){
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
    }

    if (firstNameCheck + lastNameCheck + emailCheck + numCheck === 4){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
        btn.style.opacity = '0.4';
    }
};

function numCheckFunction(input){
    var num2 = document.getElementById('num2');
    var numCode = /^[0-9-]+$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]

    if (input.value.match(numCode)){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        var size = input.value.length;
        
        if (size === 4) {input.value = input.value.slice(0, 3) + '-' + input.value.slice(3, 10)}
        if (size === 9) {input.value = input.value.slice(0, 9) + '-'  + input.value.slice(9)}

        if (input.value.length === 8){
            if (input === num2){
                return;
            }
            numCheck = 1;
        } else{
            numCheck = 0;
        }
    }

    if (input.value.length === 0 && input === num2){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
    }
    
    if (input.value == null || input.value == ''){
        if (input === num2){
            return;
        }

        txt.innerHTML = 'Please enter their cell number';
        input.style.outline = '0.1rem solid #DD2E44';
        numCheck = 0;
    } if (!input.value.match(numCode)){
        txt.innerHTML = 'Invalid number';
        input.style.outline = '0.1rem solid #DD2E44';
        input.style.color = '#DD2E44';
        numCheck = 0;
    }

    if (firstNameCheck + lastNameCheck + emailCheck + numCheck === 4){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
        btn.style.opacity = '0.4';
    }
};

function btnClickFunction(){
    if (firstNameCheck + lastNameCheck + emailCheck + numCheck === 4){
        window.location.href = '../index.html';
    }
};
