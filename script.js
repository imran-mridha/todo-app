
const getInputFieldValueById = (id)=>{
  const inputElement = document.getElementById(id);
  const inputValue = inputElement.value;
  inputElement.value = '';
  return inputValue;

}

const addToDo = () =>{
  const toDos = JSON.parse(localStorage.getItem('TODOS'))
  const toDoText  = getInputFieldValueById('todo-text');
  const id = Math.random().toString(36).slice(2);

  if(toDoText === ''){
    alert('Please Write Your TODOS !!!!')
  }else{
    if(!toDos){
      const toDoList = [
        {
          id,
          title: toDoText,
          completed: false
        }
      ];
    
      // console.log(toDoList)
    
      localStorage.setItem('TODOS', JSON.stringify(toDoList))
    }else{
      const toDoList = [
        ...toDos,
        {
          id,
          title: toDoText,
          completed: false
        }
      ];
      localStorage.setItem('TODOS', JSON.stringify(toDoList))
  
    }
  }

  
  render()
}

const render = () => {
  const tdos = JSON.parse(localStorage.getItem('TODOS'));
  const ul = document.getElementById('todo-list');
  ul.innerHTML = '';
  if(!tdos){
    ul.innerText = 'No Data Found';
  }
  tdos?.forEach(item => {
    console.log(item)
    const li = document.createElement('li');
    li.classList.add('py-2');
    li.classList.add('flex');
    li.classList.add('justify-between');
    // console.log(item)

    li.innerHTML = `${item.title} <button onclick="handleDelete('${item.id}')" title="Clear Todo" class="mr-4">
    <i class="fa-solid fa-square-minus text-[30px] text-red-400"></i>
  </button>`;
    ul.appendChild(li)
  });
}


const clearTodos = ()=>{
  localStorage.removeItem('TODOS');
  render()
}

const handleDelete = (id) => {
  console.log(id);
  const tdos = JSON.parse(localStorage.getItem('TODOS'));

  const remainingTodos = tdos.filter((item) => item.id != id);
  console.log(remainingTodos);

  if (remainingTodos.length) {
    localStorage.setItem("TODOS", JSON.stringify(remainingTodos));
  } else {
    localStorage.removeItem("TODOS");
  }

  render();
};

render();