document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const formButton = document.getElementById('form-button');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');
    const birthDayInput = document.getElementById('birth-day');

    function validateFirstName() {
        const nameRegex = /^[a-zA-Z]{2,20}$/;
        const isValid = nameRegex.test(firstNameInput.value);
        const errorMessage = document.getElementById('first-name-error');

        if (isValid) {
            firstNameInput.classList.remove('invalid');
            firstNameInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            firstNameInput.classList.remove('valid');
            firstNameInput.classList.add('invalid');
            errorMessage.textContent = 'Please enter a valid first name (2-20 letters)';
            return false;
        }
    }

    function validateLastName() {
        const nameRegex = /^[a-zA-Z]{2,20}$/;
        const isValid = nameRegex.test(lastNameInput.value);
        const errorMessage = document.getElementById('last-name-error');

        if (isValid) {
            lastNameInput.classList.remove('invalid');
            lastNameInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            lastNameInput.classList.remove('valid');
            lastNameInput.classList.add('invalid');
            errorMessage.textContent = 'Please enter a valid last name (2-20 letters)';
            return false;
        }
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput.value);
        const errorMessage = document.getElementById('email-error');

        if (isValid) {
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            emailInput.classList.remove('valid');
            emailInput.classList.add('invalid');
            errorMessage.textContent = 'Please enter a valid email address';
            return false;
        }
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValid = passwordRegex.test(passwordInput.value);
        const errorMessage = document.getElementById('password-error');

        if (isValid) {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
            errorMessage.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
            return false;
        }
    }

    function validatePasswordConfirm() {
        const isValid = passwordInput.value === passwordConfirmInput.value;
        const errorMessage = document.getElementById('password-confirm-error');

        if (isValid) {
            passwordConfirmInput.classList.remove('invalid');
            passwordConfirmInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            passwordConfirmInput.classList.remove('valid');
            passwordConfirmInput.classList.add('invalid');
            errorMessage.textContent = 'Passwords do not match';
            return false;
        }
    }

    function validateBirthDay() {
        const birthDay = new Date(birthDayInput.value);
        const today = new Date();
        const minAge = 18;
        const isValid = today.getFullYear() - birthDay.getFullYear() >= minAge;
        const errorMessage = document.getElementById('birth-day-error');

        if (isValid) {
            birthDayInput.classList.remove('invalid');
            birthDayInput.classList.add('valid');
            errorMessage.textContent = '';
            return true;
        } else {
            birthDayInput.classList.remove('valid');
            birthDayInput.classList.add('invalid');
            errorMessage.textContent = 'You must be at least 18 years old to register';
            return false;
        }
    }

    function validateForm() {
        const isFirstNameValid = validateFirstName();
        const isLastNameValid = validateLastName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPasswordConfirmValid = validatePasswordConfirm();
        const isBirthDayValid = validateBirthDay();

        const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid && isBirthDayValid;

        if (isFormValid) {
            formButton.disabled = false;
        } else {
            formButton.disabled = true;
        }
    }

    form.addEventListener('input', validateForm);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission
    });
});