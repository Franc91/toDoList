document.addEventListener('DOMContentLoaded', function () {

    var taskBtn = document.getElementById("addTaskButton")
    var finishTaskBtn = document.getElementById('removeFinishedTasksButton');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var counter = document.querySelector('span');
    var uncomplete = [];



    taskBtn.addEventListener('click', addTask);

    function addTask(event) {
        var buttonDiv = document.createElement('div');
        var taskElement = document.createElement('li');

        var taskValue = document.createElement('h2');

        var taskDelBtn = document.createElement('button');
        taskDelBtn.classList.add('delBtn', 'btn');
        taskDelBtn.innerText = 'Delete';

        var taskCompBtn = document.createElement('button');
        taskCompBtn.innerText = 'Complete';
        taskCompBtn.classList.add('completeBtn', 'btn');
        


        if (taskInput.value.length > 5 && taskInput.value.length < 100) {
            taskValue.innerText = taskInput.value;
            taskInput.value = "";

            taskList.appendChild(taskElement);
            taskElement.appendChild(taskValue);
            taskElement.appendChild(buttonDiv)
            buttonDiv.appendChild(taskDelBtn);
            buttonDiv.appendChild(taskCompBtn);

            taskDelBtn.addEventListener('click', removeTask);
            taskCompBtn.addEventListener('click', completeTask)
            uncomplete.push(taskElement);

            counter.innerText = uncomplete.length;

            function completeTask(event) {
                taskElement.classList.toggle('complete');
                if (taskElement.className === 'complete') {
                    uncomplete.pop(taskElement);
                    counter.innerText = uncomplete.length;
                } else {
                    uncomplete.push(taskElement);
                    counter.innerText = uncomplete.length;
                }
                counter.innerTextr = uncomplete.length;
            }


            function removeTask(event) {
                this.parentElement.parentElement.remove(taskElement);
                if (taskElement.className !== 'complete') {
                    uncomplete.pop(taskElement);
                }
                counter.innerText = uncomplete.length
                if (uncomplete.length === 0) {
                    counter.innerText = uncomplete.length;
                }
            }
        }
    }

    finishTaskBtn.addEventListener('click', removeFinishedTask)

    function removeFinishedTask(event) {
        var taskElementComplete = document.querySelectorAll('ul .complete');
        taskElementComplete.forEach(function (d) {
            d.parentElement.removeChild(d);
        })
    }

})
