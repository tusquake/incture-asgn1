function submitForm() {
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const city = document.getElementById('city').value;
    const college = document.getElementById('college').value;
    const fos = document.getElementById('fos').value;

    if (!name || !email || !phone || !gender || !age || !city || !college || !fos) {
      alert("All Fields are required");
      return;
  }
    document.getElementById('submitName').innerText = name;

    document.getElementById('submitEmail').innerText = email;

    document.getElementById('submitPhone').innerText = phone;

    document.getElementById('submitGender').innerText = gender;

    document.getElementById('submitAge').innerText = age;

    document.getElementById('submitCity').innerText = city;

    document.getElementById('submitCollege').innerText = college;

    document.getElementById('submitfos').innerText = fos;

    
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('submitdetails').style.display = 'block';
  }
  
function confirmForm() {
    //to hide the form once user submits the form
    document.getElementById('surveyForm').style.display = 'none';
    //to hide the confirmdetails section once the form is submitted
    document.getElementById('submitdetails').style.display = 'none';

    // Show a success message on the screen

    //to create a new heading tag to show on the screen for successful registration
    const success = document.createElement('h1');
    //add the text to be shown
    success.innerText = 'Details Saved!✔';
    //add the color of the text
    success.style.color = 'blue';
    //add it to the body
    document.body.appendChild(success);

    const myTimeout = setTimeout(function myGreeting() {
      location.reload();
    }, 2000);
    
}
