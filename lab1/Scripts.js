document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // 1. Stop the form from trying to submit and reload the page
    event.preventDefault();

    // 2. Gather data from form fields
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // 3. Simple Validation Check (ensures all fields are filled)
    if (!name || !regNo || !age || !email || !course) {
        alert('Please fill in all the required fields.');
        return;
    }

    // 4. Construct the beautiful, dynamic content for the "Thank You" page
    const nextPageContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Registration Successful!</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #e9ecef;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    color: #333;
                }
                .success-box {
                    background-color: #ffffff;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 600px;
                    width: 90%;
                    border-top: 5px solid #28a745; 
                }
                h2 { color: #28a745; font-size: 32px; margin-bottom: 15px; }
                p { font-size: 18px; margin-bottom: 25px; }
                .data-table {
                    text-align: left; margin: 20px auto; border-collapse: collapse; width: 80%;
                }
                .data-table th, .data-table td { padding: 10px; border-bottom: 1px dashed #ccc; }
                .data-table th { background-color: #f8f9fa; width: 40%; font-weight: bold; color: #007bff; }
                .back-btn {
                    display: inline-block; padding: 10px 20px; background-color: #007bff;
                    color: white; text-decoration: none; border-radius: 6px; margin-top: 20px;
                    transition: background-color 0.3s;
                }
                .back-btn:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <div class="success-box">
                <h2>🎉 Registration Successful!</h2>
                <p>Thank you, **${name}**, for registering. We have received your details.</p>
                <table class="data-table">
                    <tr><th>Name</th><td>${name}</td></tr>
                    <tr><th>Registration No.</th><td>${regNo}</td></tr>
                    <tr><th>Age</th><td>${age}</td></tr>
                    <tr><th>Email</th><td>${email}</td></tr>
                    <tr><th>Course</th><td>${course}</td></tr>
                </table>
                <p>You can go back to the starting page below.</p>
                <a href="index.html" class="back-btn">Go Back to Home</a>
            </div>
        </body>
        </html>
    `;

    // 5. Open a new window/tab and write the content
    const newWindow = window.open();
    newWindow.document.write(nextPageContent);
    newWindow.document.close();
});