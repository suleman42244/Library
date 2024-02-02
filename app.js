const btn = document.querySelector('.btn');
const form = document.querySelector('.form-container');
const formBtn = document.querySelector('.btn-add');
const bookDisplay = document.querySelector('.book-display');
const bookDisplayBtn = document.querySelector('.display');

btn.addEventListener('click', function(e){
  form.style.display = 'block';
})

formBtn.addEventListener('click', function(e){
    e.preventDefault();
    bookDisplayBtn.style.display = 'block';
});