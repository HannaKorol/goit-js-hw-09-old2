const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

populateTextArea (); // викликаєсо функцію для отримання значення зі сховища

textarea.addEventListener("input", handleTextAreaInput)

const formData = {
    email: "", 
    message: "",
};

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function handleFormSubmit(event){
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}



/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function handleTextAreaInput(event){
const value = event.target.value;
localStorage.setItem(STORAGE_KEY, value)
};


/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextArea () {
 const savedMassage = localStorage.getItem(STORAGE_KEY);

if(savedMassage){
    textarea.value = savedMassage;
}
} 