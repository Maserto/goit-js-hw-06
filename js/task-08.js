

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

    
   const isInputValueCorrect = mail === "" || password === "" ? alert("Доброго вечора, ми з України. Залужний каже, що всі поля мають бути заповнені") : console.log(formData);
   form.reset();
}