const form = document.querySelector(".feedback-form");
form.classList.add("container");
const storageKey= "feedback-form-state";


form.addEventListener("input", (event) => {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    function readFormData(form) {
        return { email, message };
    };
    const dataForm = readFormData(event.currentTarget);
    const jsonDataForm = JSON.stringify(dataForm);
    localStorage.setItem(storageKey, jsonDataForm)
    
});

const rowDataForm = localStorage.getItem(storageKey);
if (rowDataForm) {
    const dataForm = JSON.parse(rowDataForm);
    form.email.value = dataForm.email;
    form.message.value = dataForm.message;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.email.value.trim() !== "" && form.message.value.trim() !== "") {
        localStorage.removeItem(storageKey);
        form.reset();
    };
});