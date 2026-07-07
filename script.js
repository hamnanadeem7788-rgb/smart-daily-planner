const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function(){

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMsg = document.getElementById("successMsg");

    // Purane messages clear karo
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    if(email === ""){
        emailError.textContent = "Please enter your email.";
        isValid = false;
    }

    if(password === ""){
        passwordError.textContent = "Please enter your password.";
        isValid = false;
    }

    if (isValid) {

    successMsg.textContent = "✅ Login Successful!";

    setTimeout(function () {

        document.querySelector(".login-container").style.display = "none";

        document.getElementById("homePage").style.display = "block";

    }, 1500);

}
const myTaskBtn = document.getElementById("myTaskBtn");
const progressBtn = document.getElementById("progressBtn");
const completedBtn = document.getElementById("completedBtn");

// My Tasks
myTaskBtn.addEventListener("click", function () {

    myTaskBtn.classList.add("active");
    progressBtn.classList.remove("active");
    completedBtn.classList.remove("active");

});

// In Progress
progressBtn.addEventListener("click", function () {

    progressBtn.classList.add("active");
    myTaskBtn.classList.remove("active");
    completedBtn.classList.remove("active");

});

// Completed
completedBtn.addEventListener("click", function () {

    completedBtn.classList.add("active");
    myTaskBtn.classList.remove("active");
    progressBtn.classList.remove("active");

});
const taskList = document.getElementById("taskList");

const timeSlots = [
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM"
];

timeSlots.forEach(function(time){

    
taskList.innerHTML += `
<div class="task-row">

    <div class="task-time">${time}</div>

    <input
        type="text"
        class="task-input"
        placeholder="Enter your task">

    <button class="save-btn">
        <i class="fa-solid fa-floppy-disk"></i> Save
    </button>

    <button class="complete-btn">
        <i class="fa-solid fa-circle-check"></i> Complete
    </button>

    <button class="delete-btn">
        <i class="fa-solid fa-trash"></i> Delete
    </button>

</div>
`;

});
taskList.addEventListener("click", function(event){

    // Save Button
    if(event.target.closest(".save-btn")){

        let row = event.target.closest(".task-row");
        let input = row.querySelector(".task-input");

        if(input.value.trim() === ""){
            alert("Please enter a task first.");
            return;
        }

        input.disabled = true;

        alert("Task Saved Successfully!");
    }

    // Complete Button
    if(event.target.closest(".complete-btn")){

        let row = event.target.closest(".task-row");

        row.classList.toggle("completed");

    }

    // Delete Button
    if(event.target.closest(".delete-btn")){

        let row = event.target.closest(".task-row");

        row.remove();

    }

});
});