function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function displayInput(event){
    // Prevent form from submitting
    event.preventDefault();

    // Get input values
    let userName = document.getElementById("userName").value;
    let userRole = document.getElementById("userRole").value;
    let userAvail = document.getElementById("userAvail").value;
    let userAge = document.getElementById("userAge").value;
    let userLocation = document.getElementById("userLocation").value;
    let userExp = document.getElementById("userExp").value;
    let userEmail = document.getElementById("userEmail").value;

    // Display input values
    document.getElementById("name").innerHTML = userName;
    document.getElementById("role").innerHTML = userRole;
    document.getElementById("avail").innerHTML = userAvail;
    document.getElementById("age").innerHTML = userAge;
    document.getElementById("location").innerHTML = userLocation;
    document.getElementById("exp").innerHTML = userExp;
    document.getElementById("email").innerHTML = userEmail;

    // Scroll to top after submitting
    scrollToTop();

    const form = document.getElementById('myForm');
    form.reset();
}