// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form fields
  if (name && email && message) {
    // Prepare data to send via EmailJS
    const formData = {
      name: name,
      email: email,
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_tmrev0d', 'template_9sxy1g7', formData)
      .then(function(response) {
        console.log('SUCCESS!', response);
        alert('Message sent successfully!');
        document.getElementById("contact-form").reset(); // Reset form fields
      }, function(error) {
        console.log('FAILED...', error);
        alert('Sorry, something went wrong. Please try again later.');
      });
  } else {
    alert("Please fill out all fields.");
  }
});

