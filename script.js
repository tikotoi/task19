document.getElementById('registration').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let errors = {};
    let form = event.target;

    let title = document.getElementById('title').value;

    if (title.length < 4 || title == '') {
        errors.title = 'Title can not be empty, numbers and must be more then 4 characters';
    }

    let description = document.getElementById('description').value;

    if (description = '' || description.length < 10) {
        errors.description = 'Description can not be empty';
    }

    let password = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value; 

    if (password != password2 || password == '' || password.length < 8) {
        errors.password = 'Password can not be empty and must be more then 8 characters';
        errors.password2 = 'Passwords do not match';
    }

    let agree = document.getElementById('checkagree').checked;
    if (!agree){
        errors.agree = 'you must agree our terms and conditions';
    }

    let age = false;
    form.querySelectorAll('[name = "age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }
    });

    if (age == false){
        errors.age = 'Please select your age';
    }
    
    console.log(errors);

    
    form.querySelectorAll('.error-text').forEach(item =>{
        item.innerHTML = '';
    });

    for (let item in errors){
        console.log(item);
        let errorSpan = document.getElementById('error_' + item);

        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
})


let passwordShow = document.getElementById('password1');
let passwordShow2 = document.getElementById('password2');
let toggleIconEye = document.getElementById('toggleIcon');

showHidePassword = () => {
    if(passwordShow.type == "password"){
        passwordShow.setAttribute('type', 'text');
        toggleIconEye.classList.add('fa-eye-slash');
    }
    else {
        toggleIconEye.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');
    }

}
toggleIconEye.addEventListener('click', showHidePassword);


showHidePassword2 = () => {
    if(passwordShow2.type == "password"){
        passwordShow2.setAttribute('type', 'text');
        toggleIconEye.classList.add('fa-eye-slash');
    }
    else {
        toggleIconEye.classList.remove('fa-eye-slash');
        passwordShow2.setAttribute('type', 'password');
    }
}

toggleIconEye.addEventListener('click', showHidePassword2);