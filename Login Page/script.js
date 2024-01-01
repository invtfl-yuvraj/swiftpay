document.addEventListener("DOMContentLoaded", function () {
    // Get the email, password, and error message elements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const emailTyping = document.getElementById("typing-box");
    const clickAnywhere = document.body;

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Function to enable/disable the password input based on email validity
    function togglePasswordInput() {
        const emailValue = emailInput.value;
        if (emailValue === "") {
            emailError.style.display = "none";
        } else if (validateEmail(emailValue) && isNaN(emailValue.charAt(0))) {
            emailError.style.display = "none";
            passwordInput.removeAttribute("disabled");
        } else {
            // emailError.style.display = "block";
            passwordInput.setAttribute("disabled", true);
            emailTyping.classList.add("being-typed")
            passwordInput.value = "";
        }

        clickAnywhere.addEventListener('click', () => {
            if (emailValue !== "") { // Use if statement to show/hide the "being-typed" element
                emailTyping.classList.add("being-typed");
            }
            else {
                emailTyping.classList.remove("being-typed");
            }
        });

    }

    // Add event listener to the email input for real-time validation
    emailInput.addEventListener("input", togglePasswordInput);

    // Function to check show error message if email is incorrect and click anywhere on body except email input box

    clickAnywhere.addEventListener("click", function (event) {

        if (event.target !== emailInput && passwordInput.hasAttribute("disabled")) {
                emailError.style.display = "block";
                emailError.style.animation = "none"; // Reset animation
                setTimeout(() => {
                    emailError.style.animation = "jitter 0.2s ease-in-out"; // Apply jitter animation
                }, 0);
        }
    });

    // Login Button process
    const validLogin = document.getElementById("valid-login");
    validLogin.addEventListener('click', function () {
        if (passwordInput.value !== "" && !passwordInput.disabled) {
            emailInput.value = "";
            passwordInput.value = "";
            alert("Logged in Successfully!!!");
            window.location.href = "../index.html";
        }
    });

    // Initial call to set the initial state of the password input
    togglePasswordInput();
});