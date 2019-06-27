const form = document.getElementById('form');
form.addEventListener('submit',(event) => 
{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value
    console.log(`Your name is ${name} and your password is ${password}`);
})




