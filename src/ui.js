// UI Class: Handles UI Tasks

import Store from './store';
import Task from './task';
import taskCompleted from './checkboxes';
import removeTask from './removeTask';
import updateTask from './updateTask';
import clearCompleted from './clearCompleted';

export default class UI {
  static addApp() {
    const todos = Store.getTasks();
    this.addTasksUI(todos);
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'd-flex justify-content-center align-items-center border-bottom border-2 px-2 appItem';

    const p = document.createElement('p');
    p.className = 'm-0 p-0 noToDos';
    p.innerHTML = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static addTasksUI(tasks) {
    // Sorts array by index
    tasks.sort((a, b) => a.index - b.index);
    // Iterates over array tasks to populate HTML list
    document.querySelector('#task-list').innerHTML = '';
    if (tasks.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      tasks.forEach((task) => this.addTaskToList(task));
    }
  }

  static addTaskToList(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'd-flex justify-content-around align-items-center border-bottom border-2 px-2 appItem';

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'd-flex align-items-center normalView';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    checkbox.className = 'form-check-label p-2';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 p-2';
    if (task.completed === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    // Create div for edit view
    const divEdit = document.createElement('div');
    divEdit.className = 'd-none flex-fill align-items-center editView';

    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'form-control border-0 p-0';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    // Creates div for icons
    const div4Icons = document.createElement('div');
    div4Icons.className = 'ms-auto';

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    div4Icons.appendChild(aEdit); // appends achor to item

    const aAccept = document.createElement('a');
    aAccept.className = 'd-none acceptIcn';
    const iconAccept = document.createElement('i'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle p-2';
    aAccept.appendChild(iconAccept); // appends accept icon to anchor
    div4Icons.appendChild(aAccept); // appends accpet anchor to item

    const aRemove = document.createElement('a');
    aRemove.className = 'd-none removeIcn';
    const iconRemove = document.createElement('i'); // creates remove icon
    iconRemove.className = 'fas fa-trash p-2';
    aRemove.appendChild(iconRemove); // appends remove icon to anchor
    div4Icons.appendChild(aRemove); // appends remove anchor to item

    item.appendChild(divNormal);
    item.appendChild(divEdit);
    item.appendChild(div4Icons);

    list.appendChild(item); // appends item to list
  }

  static addTask(description) {
    // gets index from storage
    const index = Store.getIndexTotal();
    // instantiates a new task
    const task = new Task(description, false, index);
    // adds task to store
    this.addTaskStore(task);
    this.addApp();
  }

  static addTaskStore(task) {
    // Add task to local storage
    Store.addTask(task);
    Store.setsIndexTotalPlusOne();
  }

  static taskCompleted(index, value) {
    taskCompleted(index, value);
  }

  static changeLiToEditMode(li) {
    let classesLi = li.className;
    classesLi = classesLi.replace('appItem', 'appItemEdit');
    li.className = classesLi;
    const childrenLi = li.children;

    // change clases of divs
    const normalView = childrenLi[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-flex', 'd-none');
    normalView.className = classesNV;

    const editView = childrenLi[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-none', 'd-flex');
    editView.className = classesE;

    // show appropriate icons in edit view
    const aIcons = childrenLi[2].querySelectorAll('a');
    aIcons[0].classList.add('d-none');
    this.changeClassToElement(aIcons[1], 'd-none', '');
    this.changeClassToElement(aIcons[2], 'd-none', '');

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.id = 'inputEdit';
    inputEdit.focus();
  }

  static changeClassToElement(item, oldClass, newClass) {
    let classesItem = item.className;
    classesItem = classesItem.replace(oldClass, newClass);
    item.className = classesItem;
  }

  static removeTask(index) {
    removeTask(index);
    this.updateIndexes();
    this.addApp();
  }

  static updateTask(index, newDesc) {
    updateTask(index, newDesc);
  }

  static clearCompleted() {
    clearCompleted();
    this.updateIndexes();
  }

  static updateIndexes() {
    const todos = Store.getTasks();
    for (let i = 1; i <= todos.length; i += 1) {
      const element = todos[i - 1];
      element.index = i;
    }
    Store.setTasks(todos);
    Store.setIndex(todos.length + 1);
  }
}