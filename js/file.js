//SIDEBAR

// Set the width of the side navigation
var toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) {
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
        toggleStatus = 0;
    } else if (toggleStatus == 0) {
        document.getElementById("sidebar").style.width = "150px";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        toggleStatus = 1;
    }
}

//BUTTON

$(document).ready(function(){
    $('#sidebar-btn').click(function(){
        $('#sidebar').toggleClass('visible');
    });
});

//HAMBURGER

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// on click
hamburger.addEventListener("click", function() {
    // Toggle "is-active"
    hamburger.classList.toggle("is-active");
});

//POPUP SKILLS

var modalSkills = document.getElementById('simpleModalSkills');
// Get open modal button
var modalBtnSkills = document.getElementById('modalBtnSkills');
// Get close button
var closeBtnSkills = document.getElementsByClassName('closeBtnSkills')[0];

// Listen for open click
modalBtnSkills.addEventListener('click', openModalSkills);
// Listen for close click
closeBtnSkills.addEventListener('click', closeModalSkills);
// Listen for outside click
window.addEventListener('click', outsideClickSkills);

// Function to open modal
function openModalSkills(){
    modalSkills.style.display = 'block';
}

// Function to close modal
function closeModalSkills(){
    modalSkills.style.display = 'none';
}

// Function to close modal if outside click
function outsideClickSkills(e){
    if(e.target == modalSkills){
        modalSkills.style.display = 'none';
    }
}

//POPUP CONTACT

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal - outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

//SLIDER

