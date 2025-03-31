const btn = document.getElementById("addTask");
const popup= document.getElementById("popup-modal");
const addTask= document.getElementById("add");
const closeTask = document.getElementById("close");
const icon = document.getElementById("addTask");
btn.addEventListener("click",displayPopup);
closeTask.addEventListener("click",closePopup);
addTask.addEventListener("click",createTask);

let checkBox= document.getElementById("checkBox")


const tasks=[];

// display a popup


function displayPopup(){
    popup.classList.remove("hidden");
}


// closong a popup


function closePopup(){
    popup.classList.add("hidden");
}


// displaying a task 



function displaytasks(){
    const container= document.getElementById("taskContainer");
    
    tasks.forEach(task => {
        
        
        if(!document.getElementById(task.taskid)){
            const taskdiv = document.createElement('div');
            taskdiv.id=task.taskid;
            taskdiv.classList.add("m-4"
                ,"p-2",
                "min-h-60" ,
                "h-auto",
                "max-w-50"  ,
                "rounded",
                "hover:bg-white-200",
                "cursor-pointer",
                "bg-white","flex",
                "flex-col",
                "flex-wrap",
            );

            taskdiv.innerHTML=`
                <div id="taskNo" class="flex justify-evenly">
                    <h2 id="taskNo-head" class="text-xl font-semibold  ">Task ${task.taskid + 1 } </h2>
                    <input  type="checkbox" id="taskNo-checkBox" class="border rounded " onclick="taskCompleted(${task.taskid})">    
                </div>
                <h2 id="TaskHeading" class="text-2xl font-semibold max-w-full h-auto flex-grow  p-1 mb-1 bg-red-400 opacity-[0.5] overflow-y-auto border rounded border-none">${task.heading}</h2>
                <p id="taskDescription" class="flex-grow p-1 max-w-full h-auto bg-red-400 opacity-[0.5] overflow-y-auto border rounded border-none">${task.description}</p>
            `;
            container.appendChild(taskdiv);
        }
        
    });
   
}

//completed a task
let taskCompleted=(id)=>{
    let task= document.getElementById(id);
    
    let taskCheck= task.querySelector("#taskNo-checkBox")
    if(taskCheck.checked){
        //heading 
        let taskHead = task.querySelector("#TaskHeading")
        taskHead.classList.remove("bg-red-400")
        taskHead.classList.add("bg-green-400")


        //description
        let taskDes= task.querySelector("#taskDescription")
        taskDes.classList.remove("bg-red-400")
        taskDes.classList.add("bg-green-400")

        //task number
        let taskNo= task.querySelector("#taskNo-head")
        taskNo.classList.add("line-through")
    }else{
        //heading
        let taskHead = task.querySelector("#TaskHeading")
        taskHead.classList.add("bg-red-400")
        taskHead.classList.remove("bg-green-400")

        //description
        let taskDes= task.querySelector("#taskDescription")
        taskDes.classList.add("bg-red-400")
        taskDes.classList.remove("bg-green-400")

        //task number
        let taskNo= task.querySelector("#taskNo-head")
        taskNo.classList.remove("line-through")

    }
    
} 

// creating a task 


function createTask(){
    let ip = document.getElementById("heading");
    let text = document.getElementById("description");

    let taskid= tasks.length;
    let heading = ip.value;
    let description = text.value;
    if(heading && description){
        tasks.push({taskid,heading,description});
        displaytasks();
        
        ip.value='';
        text.value='';
        closePopup();
    }else{
        if(!document.getElementById("error")){
            let error= document.createElement("p")
            error.id="error"
            error.classList.add("text-red-400")
            error.innerText="PLease fill both the fields"
            popup.appendChild(error)
        }
        
    }
   
}