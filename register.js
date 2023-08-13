var checks = []
var btn = document.getElementById('register')

function nameCheck(input){
    var nameCode = /^[a-zA-Z\s]+$/;
    var txt = input.parentElement.getElementsByTagName('h2')[0]

    if (input.value.match(nameCode)){
        txt.innerHTML = '';
        input.style.color = 'var(--color1)';
        input.style.outline = null;
        checks.push('name');
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please enter your name';
            input.style.outline = '0.1rem solid #DD2E44';
            if (checks.indexOf(input.id) > -1) {
                checks.splice(checks.indexOf(input.id), 1);
            };
        } else{
            txt.innerHTML = 'Invalid name';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
        }
    };

    if (checks.length === 4){
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
        checks.push('email');
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please enter your email';
            input.style.outline = '0.1rem solid #DD2E44';
            if (checks.indexOf(input.id) > -1) {
                checks.splice(checks.indexOf(input.id), 1);
            };
        } else{
            txt.innerHTML = 'Invalid email';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
        }
    };

    if (checks.length === 4){
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
        checks.push(input.id);
    } else{
        if (input.value == null || input.value == ''){
            txt.innerHTML = 'Please a phone number';
            input.style.outline = '0.1rem solid #DD2E44';
            if (checks.indexOf(input.id) > -1) {
                checks.splice(checks.indexOf(input.id), 1);
            };
        } else{
            txt.innerHTML = 'Invalid number';
            input.style.outline = '0.1rem solid #DD2E44';
            input.style.color = '#DD2E44';
        }
    }; 

    if (checks.length === 4){
        btn.style.cursor = 'pointer';
        btn.style.opacity = '1';
    } else{
        btn.style.cursor = 'not-allowed';
    };
};

function btnClick(input){
    if (checks.length === 4){
        window.location.href = '../index.html';
    }
};