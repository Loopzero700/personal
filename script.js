const formElements = document.querySelectorAll(".form-elements");
const buttonSub = document.getElementById("button-sub");
let params = {};

buttonSub.addEventListener("click", () => {
    params = {}; // Clear previous values
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].value === "") {
            alertNovalue(formElements[i]);
            return;
        }
        params[formElements[i].name] = formElements[i].value;
    }
    if (Object.keys(params).length === formElements.length) {
        submitEmail();
    }
});

function alertNovalue(element) {
    element.classList.add("border-danger");
    alert("Input field cannot be empty.");
}

function submitEmail() {
    emailjs.send("service_en6fqiv", "template_nmtmfli", params)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        });
}
