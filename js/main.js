let val = document.getElementById('validation');
let firstName = document.getElementById('name');
let firstNameDiv = document.getElementById('dis-name');
let SecondName = document.getElementById('surname');
let telephone = document.getElementById('tel');
let emailInput = document.getElementById('email');
let password = document.getElementById('password');
let firstResult = document.getElementById('name-result');
let SecondResult = document.getElementById('surname-result');
let telephoneResult = document.getElementById('tel-result');
let emailResult = document.getElementById('email-result');
let passwordResult = document.getElementById('password-result');

let btn = document.getElementById('btn');

// -------------------------------name----------------------------
firstName.addEventListener('keyup', ()=>{
    let name = document.getElementById('name').value;

    try{
        
        if (!isNaN(name)){ 
            firstName.style.borderColor = 'red'
            firstResult.style.color = 'red'

            throw "Enter a valid name"
    }
        else{
            firstName.style.borderColor = 'green'
            firstResult.style.color = 'green'

            throw  "Success"
        }
        
    } catch (e) {   
        firstResult.innerHTML = e
    }
})
firstName.addEventListener('blur', () => {
    let name = document.getElementById('name').value;

    try {
        if (name == "") {
            firstName.style.borderColor = 'red'
            firstResult.style.color = 'red'
            SecondName.setAttribute('disabled','')
            telephone.setAttribute('disabled','')
            emailInput.setAttribute('disabled','')
            password.setAttribute('disabled','')
            throw "Oldin ismingizni kiriting"
            
        }
        else{
            SecondName.removeAttribute('disabled', '')
            telephone.removeAttribute('disabled', '')
            emailInput.removeAttribute('disabled', '')
            password.removeAttribute('disabled', '')
        }

    } catch (e) {
        firstResult.innerHTML = e

    }
})
// ------------------ surname -------------------------------------
SecondName.addEventListener('keyup', () => {
    let surname = document.getElementById('surname').value;

    try {

        if (!isNaN(surname)) {
            SecondName.style.borderColor = 'red'
            SecondResult.style.color = 'red'

            throw "Enter a valid surname"
        }
        else {
            SecondName.style.borderColor = 'green'
            SecondResult.style.color = 'green'

            throw "Success"
        }

    } catch (e) {
        SecondResult.innerHTML = e
    }
})
SecondName.addEventListener('blur', () => {
    let surname = document.getElementById('surname').value;

    try {
        if (surname == "") {
            SecondName.style.borderColor = 'red'
            SecondResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            telephone.setAttribute('disabled', '')
            emailInput.setAttribute('disabled', '')
            password.setAttribute('disabled', '')
            throw "Oldin familiyangizni kiriting"

        }
        else {
            firstName.removeAttribute('disabled', '')
            telephone.removeAttribute('disabled', '')
            emailInput.removeAttribute('disabled', '')
            password.removeAttribute('disabled', '')
        }

    } catch (e) {
        SecondResult.innerHTML = e

    }
})

// ------------------ PHONE -------------------------------------
telephone.addEventListener('keyup', () => {
    let tel = document.getElementById('tel').value;
    try {

        if (isNaN(tel)) {
            telephone.style.borderColor = 'red'
            telephoneResult.style.color = 'red'

            throw "Enter a valid tel"
        }
        
        else {
            telephone.style.borderColor = 'green'
            telephoneResult.style.color = 'green'

            throw "Success"
        }

    } catch (e) {
        telephoneResult.innerHTML = e
    }
})
telephone.addEventListener('blur', () => {
    let tel = document.getElementById('tel').value;
    let n = tel.includes('+998')
    console.log(n);

    try {
        if (tel == "") {
            telephone.style.borderColor = 'red'
            telephoneResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            SecondName.setAttribute('disabled', '')
            emailInput.setAttribute('disabled', '')
            password.setAttribute('disabled', '')
            throw "Oldin telefon nomeringizni kiriting"

        }
        if (tel.length <= 7) {
            telephone.style.borderColor = 'red'
            telephoneResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            SecondName.setAttribute('disabled', '')
            emailInput.setAttribute('disabled', '')
            password.setAttribute('disabled', '')
            throw "Telefon raqamingiz 7 sonda iborat bo'lishi kerak"
        }
        // if (!tel.includes('+998')) {
        //     telephone.style.borderColor = 'red'
        //     telephoneResult.style.color = 'red'
        //     firstName.setAttribute('disabled', '')
        //     SecondName.setAttribute('disabled', '')
        //     emailInput.setAttribute('disabled', '')
        //     password.setAttribute('disabled', '')
        //     throw "Telefon raqamingiz kodi bilan tering"
        // }
        else {
            firstName.removeAttribute('disabled', '')
            SecondName.removeAttribute('disabled', '')
            emailInput.removeAttribute('disabled', '')
            password.removeAttribute('disabled', '')
        }

    } catch (e) {
        telephoneResult.innerHTML = e
    }
})

// ------------------ email -------------------------------------
emailInput.addEventListener('keyup', () => {
    let email = document.getElementById('email').value;

    try {

        if (!isNaN(email)) {
            emailInput.style.borderColor = 'red'
            emailResult.style.color = 'red'

            throw "Enter a valid email"
        }
        else {
            emailInput.style.borderColor = 'green'
            emailResult.style.color = 'green'

            throw "Success"
        }

    } catch (e) {
        emailResult.innerHTML = e
    }
})
emailInput.addEventListener('blur', () => {
    let email = document.getElementById('email').value;

    try {
        if (email == "") {
            emailInput.style.borderColor = 'red'
            emailResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            telephone.setAttribute('disabled', '')
            SecondName.setAttribute('disabled', '')
            password.setAttribute('disabled', '')
            throw "Oldin emailingizni kiriting"

        }
        else {
            firstName.removeAttribute('disabled', '')
            telephone.removeAttribute('disabled', '')
            SecondName.removeAttribute('disabled', '')
            password.removeAttribute('disabled', '')
        }

    } catch (e) {
        emailResult.innerHTML = e

    }
})


// ------------------ password -------------------------------------
password.addEventListener('keyup', () => {
    let pass = document.getElementById('password').value;

    try {

        if (!isNaN(pass)) {
            password.style.borderColor = 'red'
            passwordResult.style.color = 'red'

            throw "Enter a valid pass"
        }
        else {
            password.style.borderColor = 'green'
            passwordResult.style.color = 'green'

            throw "Success"
        }

    } catch (e) {
        passwordResult.innerHTML = e
    }
})
password.addEventListener('blur', () => {
    let pass = document.getElementById('password').value;

    try {
        if (pass == "") {
            password.style.borderColor = 'red'
            passwordResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            telephone.setAttribute('disabled', '')
            emailInput.setAttribute('disabled', '')
            SecondName.setAttribute('disabled', '')
            throw "Oldin password kiriting"

        }
        if (pass.match(/[A-Z]/) == null || pass.match(/[0-9]/) == null || pass.match(/[!@#$%^&*]/) == null || pass.length <= 8) {
            password.style.borderColor = 'red'
            passwordResult.style.color = 'red'
            firstName.setAttribute('disabled', '')
            telephone.setAttribute('disabled', '')
            emailInput.setAttribute('disabled', '')
            SecondName.setAttribute('disabled', '')
            throw "Enter valid a password"
        }
        else {
            firstName.removeAttribute('disabled', '')
            telephone.removeAttribute('disabled', '')
            emailInput.removeAttribute('disabled', '')
            SecondName.removeAttribute('disabled', '')
        }

    } catch (e) {
        passwordResult.innerHTML = e

    }
})