function sendMail(contactForm){
    emailjs.send("HPS", "HPS", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "new_quote": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS".response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        
        return false;

}