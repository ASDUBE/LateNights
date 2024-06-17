const nextButton = document.querySelector('.btn-nxt');
const prevButton = document.querySelector('.btn-prv');
//const subButton = document.querySelector('.btn-sub');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');

let active = 1;

nextButton.addEventListener('click', () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

prevButton.addEventListener('click', () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});

const updateProgress = () => {
  console.log('steps.length => ' + steps.length);
  console.log('active => ' + active);

  // Add active class to all steps up to the current step
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  // Remove active class from all form steps
  form_steps.forEach((form_step) => form_step.classList.remove('active'));

  // Add active class to the current form step
  form_steps[active - 1].classList.add('active');

  if (active === 1) {
    prevButton.disabled = true;
  } else if (active === steps.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

// Initialize the progress
updateProgress();
