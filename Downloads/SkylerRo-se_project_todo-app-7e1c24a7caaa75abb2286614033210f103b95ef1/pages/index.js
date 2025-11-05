import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (data) => {
    const todoElement = generateTodo(data); 
    section.addItem(todoElement);            

    
    if (data.completed) {
      todoCounter.updateCompleted(1);
    }

    todoCounter.updateTotal(1); 
    addTodoPopup.close();       
  },
});
addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};


const section = new Section({
  items: initialTodos,
  renderer: (data) => {
    return generateTodo(data);
  },
  containterSelector: ".todos__list",
});
section.renderItems();
// how to call section instance's render items method

// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

// const closeModal = (modal) => {
//   modal.classList.remove("popup_visible");
// };

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(increment) {
  todoCounter.updateTotal(increment);
}

function handleEsacpeClose(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector("popup_visible");
  } //find the open modal and close it
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

// addTodoCloseBtn.addEventListener("click", () => {
//  addTodoPopup.close()
// });

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   newTodoValidator.resetValidation();

//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   renderTodo(values);
//   closeModal(addTodoPopupEl);
// });

// const renderTodo = (item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo);
// };

// initialTodos.forEach((item) => {
//   renderTodo(item);
//   ;
// });  //use add item method instead of this

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
