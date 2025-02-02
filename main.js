document.addEventListener('DOMContentLoaded', () => {
  // Get all buttons
  const buttons = document.querySelectorAll('button[data-section]');

  // Add an event listener to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the section ID from the button's data-section attribute
      const sectionId = button.getAttribute('data-section');
      // Get the section element
      const section = document.getElementById(sectionId);
      // Scroll to the section
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelector('.homie').addEventListener('click', () => {
   window.scrollTo(
     {
       top: 0,
       behavior: 'smooth'
     }
   )
  });
let toggle = false;
document.querySelector('.togie').addEventListener('click', () => {
 toggle = !toggle;
 if(toggle){
  document.querySelector('nav').classList.remove('hidden');
  document.querySelector('nav').classList.add('flex');
  document.querySelector('nav').classList.add('bg');
 }else{
  document.querySelector('nav').classList.remove('flex');
  document.querySelector('nav').classList.add('hidden');
 }



});


})