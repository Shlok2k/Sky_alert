# 🌤️ Sky Alert

**Sky Alert** is a modern, responsive weather web application that allows users to get real-time weather information for any city in the world. Whether you're planning your day, checking conditions for a trip, or just curious about the weather elsewhere, Sky Alert helps you stay informed with clear and accurate data using a weather API.

---

## 🖼️ Project Screenshots



| ![Screenshot 1](images/Screenshot%202025-06-03%20132818.png) | ![Screenshot 2](images/Screenshot%202025-06-03%20132846.png) |
|--------------------------------------------------------------|--------------------------------------------------------------|

| ![Screenshot 3](images/Screenshot%202025-06-03%20132906.png) | ![Screenshot 4](images/Screenshot%202025-06-03%20132928.png) |
|--------------------------------------------------------------|--------------------------------------------------------------|

---

## 🛠️ Tech Stack

| Layer        | Technology Used                           |
| ------------ | ----------------------------------------- |
| **Frontend** | HTML, CSS, React.js                       |
| **Logic**    | JavaScript                                |
| **API**      | OpenWeatherMap (or similar weather API)   |
| **Design**   | Responsive Layout using CSS Media Queries |

---

## 📋 Key Features – What the App Can Do

### 🔍 Search by City Name

Users can enter the name of any city to get the latest weather report for that location.

### 🌡️ Temperature Display

The app fetches and shows the current temperature (in Celsius or Fahrenheit, depending on the API settings).

### ☁️ Sky Condition

Displays conditions like “Clear”, “Cloudy”, “Rainy”, “Thunderstorm”, etc., based on real-time API data.

### 📸 Weather Icons

Icons representing current weather status (sunny, cloudy, etc.) are displayed visually for better understanding.

### 📱 Fully Responsive Design

Looks great on all devices — phones, tablets, and desktops — thanks to clean CSS layout and media queries.

### 🔄 Dynamic UI with React

All updates happen instantly on the page without reloading, providing a seamless user experience.

---

## 🚀 How to Run the App Locally

> You can run this project on your machine in 4 simple steps:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shlok2k/Sky_alert.git
```

### 2️⃣ Move into the Project Folder

```bash
cd Sky_alert
```

### 3️⃣ Install Required Packages

```bash
npm install
```

### 4️⃣ Start the Development Server

```bash
npm start
```

The app will open in your browser at:
📍 `http://localhost:3000`

---

## 🌐 Weather API Integration

* **API Source:** [OpenWeatherMap](https://openweathermap.org/)
* **Endpoint Example:**

  ```
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
  ```
* **Data Provided:**

  * Temperature
  * Weather condition
  * Humidity
  * Wind speed
  * Location name
  * Icons for visual representation

### 🔑 Note:

Remember to create a free account on OpenWeatherMap and generate an API key. Store the API key in a `.env` file:

```env
REACT_APP_API_KEY=your_api_key_here
```

---

## 📁 Folder Structure

```
sky-alert/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherCard.js
│   │   └── Header.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── .env (your API key here)
├── screenshots/
│   ├── search-city.png
│   └── weather-details.png
├── package.json
└── README.md
```

---

## 🧠 Learning Outcomes

From this project, I learned how to:

* Use React to create dynamic and interactive UIs
* Manage component state using React Hooks
* Fetch and use external API data in real time
* Build a fully responsive layout using CSS
* Work with `.env` files and secure API keys

---

## 🙋‍♂️ About Me

* **Developer:** *Shloke Sonker*
* **GitHub:** [@Shlok2k](https://github.com/Shlok2k)

---
## 💡 Future Enhancements (Optional Ideas)

* 🗓️ 5-day forecast using a different API endpoint
* 📍 Get weather by current location (geolocation API)
* 💾 Save search history using localStorage
* 🌙 Dark mode toggle
* 🔔 Severe weather alerts

---


