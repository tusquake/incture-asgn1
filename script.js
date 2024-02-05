function submitForm() {
    //to show the name which user has submitted
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userid = document.getElementById('userid').value;
    const passwd = document.getElementById('password').value;
    const conpasswd = document.getElementById('conpassword').value;

    
    if (!name || !email || !userid || !passwd || !conpasswd) {
        return;
    }
    document.getElementById('submitpassword').innerText = passwd;
    document.getElementById('submitName').innerText = name;
    document.getElementById('submitEmail').innerText = email;
    document.getElementById('submitUserid').innerText = userid;
    
    //to hide the form once user submits the form
    
    if(passwd==conpasswd){
        document.getElementById('regform').style.display = 'none';
        document.getElementById('submitdetails').style.display = 'block';
    }
    else{
        alert("Incorrect pasword");
        document.getElementById('regform').style.display = 'block';
        document.getElementById('submitdetails').style.display = 'none';
        
    }
    //to show the greeting message once the form is submitted
}

function confirmForm() {
    alert("Registration Successful!✅")
    location.reload();
}
