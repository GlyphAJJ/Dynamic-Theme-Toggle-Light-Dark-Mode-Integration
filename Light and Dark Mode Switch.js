<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark Mode Toggle</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: white;
      color: black;
      transition: background-color 0.3s, color 0.3s;
    }

    .dark-mode {
      background-color: #121212;
      color: white;
    }

    #darkModeToggle {
      position: absolute;
      top: 20px;
      right: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
    }

    #darkModeToggle:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

  <button id="darkModeToggle">Toggle Dark Mode</button>

  <script>
    function toggleDarkMode() {
      const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
      document.body.classList.toggle('dark-mode');
      if (currentMode === 'light') {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    function applySavedTheme() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
      }
    }

    window.onload = applySavedTheme;
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  </script>

</body>
</html>
