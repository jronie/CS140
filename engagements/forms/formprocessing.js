 document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");

    const personname = document.getElementById('personname').value;
    const email = document.getElementById ('email').value;
    const password = document.getElementById ('password').value;
    const paragraph = document.getElementById('paragraph').value

    if (!personname || !email) {
        alert("You need a name and email.");
        return;
    }
           
    const formData = {
        name: personname,
        email: email,
        password: password,
        age: paragraph,

    };
        console.log(formData);

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "submit.json", true);
        xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('Form submitted successfully.');
                const message = document.getElementById ('message');
                const response = JSON.parse(xhr.responseText);
                message.textContent = response.message;
                const form = document.getElementById('myform');
                form.reset();
            } else if (xhr. readyState === 4) {
                alert('Error submitting form.');
            }
        };
        xhr.send(JSON.stringify(formData));
});
