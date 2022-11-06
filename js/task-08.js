

const form = document.querySelector('form.login-form');

form.addEventListener('submit', submitForm);

function submitForm (event){
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;


    const formData = {
        mail, password,
    };

    if ( mail === "" || password === "" ){
        alert("Всі поля мають бути заповнені") 
    } else {
        console.log(formData); 
        form.reset();
    }

}