const button = document.getElementById('TaskButton');
button.addEventListener('click',function(e){
    e.preventDefault();
    const taskText = document.getElementById('action').value;
    const newLi = document.createElement('li');
    newLi.textContent = taskText;
    
    const taskList=document.getElementById('taskList');
   taskList.appendChild(newLi); 
}); 