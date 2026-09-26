```javascript
const startMenu = document.getElementById("startMenu");
const appWindow = document.getElementById("appWindow");
const windowTitle = document.getElementById("windowTitle");
const windowContent = document.getElementById("windowContent");
const clock = document.getElementById("clock");

// Start menu
function toggleStartMenu() {
    if (startMenu.style.display === "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
}

// Open applications
function openApp(app) {

    startMenu.style.display = "none";
    appWindow.style.display = "block";

    if (app === "files") {
        windowTitle.textContent = "📁 Files";

        windowContent.innerHTML = `
            <h2>Files</h2>
            <br>
            <p>📁 Documents</p>
            <p>📁 Downloads</p>
            <p>📁 Pictures</p>
            <p>📁 Cloud Storage</p>
        `;
    }

    if (app === "browser") {
        windowTitle.textContent = "🌐 Browser";

        windowContent.innerHTML = `
            <h2>Cloud Browser</h2>
            <br>
            <p>Your browser will go here.</p>
        `;
    }

    if (app === "terminal") {
        windowTitle.textContent = "💻 Terminal";

        windowContent.innerHTML = `
            <h2>Cloud Terminal</h2>
            <br>
            <p>cloud-pc@server:~$</p>
        `;
    }

    if (app === "settings") {
        windowTitle.textContent = "⚙️ Settings";

        windowContent.innerHTML = `
            <h2>Settings</h2>
            <br>
            <p>☁️ Cloud PC Settings</p>
            <p>🖥️ Display</p>
            <p>🔊 Sound</p>
            <p>🌐 Network</p>
        `;
    }
}

// Close application
function closeApp() {
    appWindow.style.display = "none";
}

// Clock
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    clock.textContent = `${hours}:${minutes} ${period}`;
}

updateClock();

setInterval(updateClock, 1000);
```

Now your project has all three pieces:

```text
☁️ MY CLOUD PC
│
├── index.html    → 🖥️ Desktop
├── style.css     → 🎨 Appearance
└── script.js     → ⚙️ Behavior
```

Open your GitHub Pages site and you should be able to **click the desktop icons, open the Start menu, launch the fake apps, close windows, and see a live clock.** 🎉
