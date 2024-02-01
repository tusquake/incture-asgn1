function submitForm() {
    const name = document.getElementById('name').value;
    document.getElementById('submitName').innerText = name;

    const email = document.getElementById('email').value;
    document.getElementById('submitEmail').innerText = email;

    const userid = document.getElementById('userid').value;
    document.getElementById('submitUserid').innerText = userid;

    const passwd = document.getElementById('password').value;
    document.getElementById('submitpassword').innerText = passwd;

    //to hide the form once user submits the form
    document.getElementById('regform').style.display = 'none';

    //to show the greeting message once the form is submitted
    document.getElementById('submitdetails').style.display = 'block';
}

function confirmForm() {
    //to show the laert once form is submitted
    alert("Success!");
    //to reload the page once details are confirmed
    location.reload();
}
