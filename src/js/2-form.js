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
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (email === "" || message === "") {
        alert("Заповніть усі поля форми!");
    } else {
        console.log({email, message});
        localStorage.removeItem(storageKey);
        form.reset();
    };
});