  // ----- Form Validation -----
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      nameError.classList.add('hidden');
      emailError.classList.add('hidden');
      messageError.classList.add('hidden');

      if (name.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!email.value.match(emailPattern)) {
        emailError.classList.remove('hidden');
        isValid = false;
      }

      if (message.value.trim() === '') {
        messageError.classList.remove('hidden');
        isValid = false;
      }

      if (isValid) {
        alert("✅ Thank you for your feedback!!");
        document.getElementById('contactForm').reset();
      }
    });

    
    const testimonials = [
      {
        text: `"Knowledge Barter made learning so easy! The interface is smooth and I actually enjoyed every second."`,
        author: "— Aisha Verma"
      },
      {
        text: `"Absolutely love the mentorship sessions. I got my first project through them!"`,
        author: "— Rohan Mehta"
      },
      {
        text: `"Great platform for both learners and experts. Highly recommend for anyone wanting to grow."`,
        author: "— Sneha Kapoor"
      }
    ];

    let index = 0;
    const testimonialElement = document.getElementById('testimonial');

    setInterval(() => {
      testimonialElement.classList.add('opacity-0');
      setTimeout(() => {
        index = (index + 1) % testimonials.length;
        testimonialElement.innerHTML = `
          <p class="text-lg italic text-gray-700 mb-4">${testimonials[index].text}</p>
          <h3 class="text-xl font-semibold text-purple-600">${testimonials[index].author}</h3>
        `;
        testimonialElement.classList.remove('opacity-0');
      }, 700);
    }, 4000);