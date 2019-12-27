let userData = {
    email: 'user@gmail.com',
    pass: 'UserPass'
}

let adminData = {
    email: 'admin@gmail.com',
    pass: 'AdminPass'
};

let minLength = {
    emailLength: 5,
    passLength: 6
}


let email = prompt('Please, enter your Email', '');

if (email === userData.email || email === adminData.email) {

    let pass = prompt('Please, enter your password', '');

    if (pass === '' || pass === null) {
        alert('Canceled');
    } else if (email === userData.email && pass === userData.pass ||
        email === adminData.email && pass === adminData.pass) {

        let changePass = confirm('Do you want to change your password?');

        if (changePass) {

            let pastPass = prompt('Please, enter you current Password', '');

            if (pastPass === null || pastPass === '') {
                alert('Canceled');

            } else if (pastPass === pass) {

                let newPass = prompt('Please, enter you new Password');

                if (newPass.length < minLength.passLength) {
                    alert('It’s too short password. Sorry.');

                } else {

                    let newPassRepeat = prompt('Please, enter your new Password again', '');

                    if (newPassRepeat === newPass) {
                        alert('You have successfully changed your password');

                    } else if (newPassRepeat !== newPass) {
                        alert('You wrote the wrong password');

                    } else {
                        alert('Canceled');
                    }

                }

            } else {
                alert('Wrong password');
            }

        } else {
            alert('You have failed the change');
        }

    } else {
        alert('Wrong password');
    }

} else if (email === '' || email === null) {
    alert('Canceled');

} else if (email.length < minLength.emailLength) {
    alert("I don't know any emails having name length less than 5 symbols");

} else {
    alert('I don’t know you');
}