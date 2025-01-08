function loaderSkill(mode) {
    if (mode == 1) {
        document.getElementById('Django').style.width = '70%';
        document.getElementById('Django').textContent = '70%';
        document.getElementById('Django').setAttribute('aria-valuenow', '70');
    }
    else if (mode == 2) {
        document.getElementById('php').style.width = '88%';
        document.getElementById('php').textContent = '88%';
        document.getElementById('php').setAttribute('aria-valuenow', '88');
    }
    else if (mode == 3) {
        document.getElementById('javascript').style.width = '90%';
        document.getElementById('javascript').textContent = '90%';
        document.getElementById('javascript').setAttribute('aria-valuenow', '90');
    }
    else if (mode == 4) {
        document.getElementById('bootstrap').style.width = '100%';
        document.getElementById('bootstrap').textContent = '100%';
        document.getElementById('bootstrap').setAttribute('aria-valuenow', '100');
    }
    else if (mode == 5) {
        document.getElementById('sql').style.width = '85%';
        document.getElementById('sql').textContent = '85%';
        document.getElementById('sql').setAttribute('aria-valuenow', '85');
    }
    else if (mode == 6) {
        document.getElementById('html').style.width = '100%';
        document.getElementById('html').textContent = '100%';
        document.getElementById('html').setAttribute('aria-valuenow', '100');
    }
    else if (mode == 7) {
        document.getElementById('css').style.width = '100%';
        document.getElementById('css').textContent = '100%';
        document.getElementById('css').setAttribute('aria-valuenow', '100');
    }
    else if (mode == 8) {
        document.getElementById('sbs').style.width = '85%';
        document.getElementById('sbs').textContent = '85%';
        document.getElementById('sbs').setAttribute('aria-valuenow', '85');
    }
}

function reloaderSkill(mode) {
    if (mode == 1) {
        document.getElementById('Django').style.width = '0%';
        document.getElementById('Django').textContent = '0%';
        document.getElementById('Django').setAttribute('aria-valuenow', '0');
    } else if (mode == 2) {
        document.getElementById('php').style.width = '0%';
        document.getElementById('php').textContent = '0%';
        document.getElementById('php').setAttribute('aria-valuenow', '0');
    } else if (mode == 3) {
        document.getElementById('javascript').style.width = '0%';
        document.getElementById('javascript').textContent = '0%';
        document.getElementById('javascript').setAttribute('aria-valuenow', '0');
    } else if (mode == 4) {
        document.getElementById('bootstrap').style.width = '0%';
        document.getElementById('bootstrap').textContent = '0%';
        document.getElementById('bootstrap').setAttribute('aria-valuenow', '0');
    } else if (mode == 5) {
        document.getElementById('sql').style.width = '0%';
        document.getElementById('sql').textContent = '0%';
        document.getElementById('sql').setAttribute('aria-valuenow', '0');
    } else if (mode == 6) {
        document.getElementById('html').style.width = '0%';
        document.getElementById('html').textContent = '0%';
        document.getElementById('html').setAttribute('aria-valuenow', '0');
    } else if (mode == 7) {
        document.getElementById('css').style.width = '0%';
        document.getElementById('css').textContent = '0%';
        document.getElementById('css').setAttribute('aria-valuenow', '0');
    } else if (mode == 8) {
        document.getElementById('sbs').style.width = '0%';
        document.getElementById('sbs').textContent = '0%';
        document.getElementById('sbs').setAttribute('aria-valuenow', '0');
    }
}
(function () {
    emailjs.init("1tF3a3td3FB78IwjR"); // Replace with your EmailJS user ID
})();

function sendEmail() {

    var from_name = document.getElementById('name').value;
    var from_email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate the form fields
    if (from_name === "") {
        alert("Please enter your name.");
        return;
    }

    if (from_email === "") {
        alert("Please enter your email.");
        return;
    }

    // Check if email is valid using a regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(from_email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // Prepare the template params
    var templateParams = {
        from_name: from_name,
        from_email: from_email,
        message: message
    };
    alert("Email Sent")
    // Your email sending logic here (e.g., using EmailJS)




    emailjs.send('service_5cxmd9v', 'template_nqm6wgi', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response);
            alert("Email sent successfully!");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
}