// Signup Form Submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const firstname = document.getElementById('firstname').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstname, lastname, email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
});



// Login Form Submission
const loginForm = document.getElementById('loginform');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();

    if (response.ok) {
      // Assuming the backend sends a token
      localStorage.setItem('token', result.token);
      window.location.href = '/protected';
    } else {
      alert(result.message || 'Invalid username or password');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error logging in');
  }
});
