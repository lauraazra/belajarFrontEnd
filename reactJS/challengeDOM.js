const app = document.querySelector('#app');
app.innerHTML = `
    <h1>Belajar React bareng WPU 🔥</h1>
`

// atau (ini yang bener)
const app2 = document.getElementById('app2');
const header = document.createElement('h1')
const headerContent = document.createTextNode('Belajar React Bareng WPU 🔥')
header.appendChild(headerContent)
app2.appendChild(header)