# 🌤️ Weather CLI

A Node.js command-line tool that fetches real-time weather data for any city and saves it to a file. Built as a learning project to revise **callbacks, promises, and async/await** in JavaScript.

---

## 🚀 What it does

1. Reads a city name from `config.txt`
2. Fetches coordinates using the Open-Meteo Geocoding API
3. Fetches current weather using the Open-Meteo Weather API
4. Saves the result to `output.txt`

---

## 📦 Installation

```bash
git clone https://github.com/karixhma12/js-weather_cli.git
cd js-weather_cli
npm install
```

---

## 🛠️ Usage

1. Open `config.txt` and write a city name:
```
London
```

2. Run the app:
```bash
node index.js
```

3. Check `output.txt` for the result:
```
📍 City: London
🌡️  Temperature: 19.2°C
💨 Windspeed: 19.1 km/h
🕐 Time: 2026-05-21T14:00
```

---

## 🧠 Concepts covered

This project was built in steps to revise core async JavaScript concepts:

| Step | Concept |
|------|---------|
| Step 2 | `fs.readFile` with err-first callbacks |
| Step 3 | Manually promisifying a callback function |
| Step 4 | Promise chaining with `.then()` |
| Step 5 | Error handling with `throw` and `.catch()` |
| Step 6 | Rewriting promise chains with `async/await` |
| Step 7 | Defining your own async functions (`writeFilePromisified`) |

---

## 🌐 APIs used

- [Open-Meteo Geocoding API](https://geocoding-api.open-meteo.com) — converts city name to coordinates
- [Open-Meteo Weather API](https://api.open-meteo.com) — fetches current weather data

Both are free and require no API key.

---

## 📁 Project structure

```
weather-cli/
├── index.js        # Main application logic
├── config.txt      # Input: city name
├── output.txt      # Output: weather result (gitignored)
├── package.json
└── .gitignore
```

---

## 🔧 Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch) — for making HTTP requests in Node.js
