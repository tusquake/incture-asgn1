function submitForm() {
    //to show the name which user has submitted
    const name = document.getElementById('name').value;
    document.getElementById('submitName').innerText = name;

    //to show the email which user has submitted
    const email = document.getElementById('email').value;
    document.getElementById('submitEmail').innerText = email;

    //to show the userid which user has submitted
    const userid = document.getElementById('userid').value;
    document.getElementById('submitUserid').innerText = userid;

    //to show the password which user has submitted
    const passwd = document.getElementById('password').value;
    document.getElementById('submitpassword').innerText = passwd;

    //to hide the form once user submits the form
    document.getElementById('regform').style.display = 'none';
    
    //to show the greeting message once the form is submitted
    document.getElementById('submitdetails').style.display = 'block';
}

function confirmForm() {
    //to hide the form once user submits the form
    document.getElementById('regform').style.display = 'none';
    //to hide the confirmdetails section once the form is submitted
    document.getElementById('submitdetails').style.display = 'none';

    // Show a success message on the screen

    //to create a new heading tag to show on the screen for successful registration
    const success = document.createElement('h1');
    //add the text to be shown
    success.innerText = 'Registration successful!✅';
    //add the color of the text
    success.style.color = '#00ff00'; 
    //add it to the body
    document.body.appendChild(success);
}
