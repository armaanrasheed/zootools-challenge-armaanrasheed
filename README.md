# 🌟 ZooTools Analytics Dashboard

## 📋 Project Overview
This project is a **React + Vite** web application that visualizes user engagement, signups, and referral data for ZooTools using interactive components. It displays insights, metrics, and leaderboards through intuitive charts and cards. The dashboard is designed for performance and scalability, leveraging the latest web technologies like Vite, React, and Chart.js for fast development and live reloading.

---

## 🚀 Live Demo
**Deployed Site:** [ZooTools Challenge Dashboard](https://zootools-challenge-armaanrasheed.vercel.app/)

---

## 🛠️ Tech Stack
- **React**: UI development with reusable components.
- **Vite**: Lightning-fast development environment.
- **Chart.js**: For visualizing user and signup data.
- **CSS**: Styling and responsiveness.
- **JavaScript (ES6+)**: Logic and interactivity.
- **SWC Compiler**: Fast compilation for React files.

---

## ⚙️ Features
1. **Navbar**: Allows users to toggle between different timeframes (1h, 24h, 30d, 60d).
2. **Metrics Section**: Displays total participants count and a bar chart for signups over time.
3. **Insights Section**: Provides actionable insights based on user activity data.
4. **Leaderboard Section**: Lists top-performing users, traffic sources, and signup locations.
5. **Responsive Design**: Adapts to various screen sizes.

---

## 📝 File Structure
```
/src
|-- components
|   |-- Navbar.jsx          # Timeframe filter for data
|   |-- Metrics.jsx         # Displays participant stats and bar chart
|   |-- Insights.jsx        # Displays key insights and recommendations
|   |-- Leaderboard.jsx     # Shows leaderboard with filters for traffic, signups, and behaviors
|   |-- chart.js            # Signup chart data
|   |-- data.js             # User leaderboard data
|   |-- signup.js           # Signup location data
|   |-- traffic.js          # Traffic source data
|-- App.jsx                 # Main App component
|-- main.jsx                # Entry point for React
|-- main.css                # Global styles
```

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/armaanrasheed/zootools-challenge.git
   cd zootools-challenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌟 Components Breakdown

### **Navbar**
- Displays a **timeframe selection** with buttons for 1h, 24h, 30d, and 60d.
- Updates the displayed data based on the selected timeframe.

### **Metrics Section**
- **Participants Count:** Shows the total number of participants.
- **Bar Chart:** Visualizes signups over the selected timeframe using **Chart.js**.
- Uses customizable tooltips for detailed signup data.

### **Insights Section**
- Provides an overview of key trends and actionable recommendations.
- Highlights include:
  - Signup growth trends (+/- %).
  - Member invitation impact.
  - Calls to action to improve engagement.

### **Leaderboard Section**
- Divided into multiple views for:
  - **User Leaderboard:** Lists users by email, invites, and country.
  - **Traffic Sources:** Shows user counts by referral sources (Google, Twitter, etc.).
  - **Signup Locations:** Displays signup counts by city and country with flag icons.
  - **Behavior:** Displays user behavior based on device/browser data.

---

## 📊 Data Sources
- **chart.js**: Mock signup data for each day (e.g., 10,000 signups on day 30).
- **data.js**: Mock leaderboard data for users.
- **signup.js**: Sample signup location data (cities and countries).
- **traffic.js**: Sample traffic source data (Google, Facebook, etc.).

---

## 🎨 Styles
- Global styles are defined in `globalComponents.css`.
- Individual components have dedicated CSS files for modular styling.
- Font used: **Karla** (loaded via Google Fonts).

---

## 🚧 Development Notes
- **Development Server:** Vite provides hot module replacement (HMR) for faster feedback during development.
- **Chart Animations:** The bar chart uses `easeInOutQuint` for smooth transitions.
- **Error Handling:** Basic error handling is added to prevent crashes if data is missing.

---

## 📝 Available Scripts
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.

---

## 📈 Sample Data Example
**Chart.js Signup Data:**
```javascript
export const data = [
    { day: 1, signups: 2500 },
    { day: 2, signups: 1500 },
    ...
    { day: 30, signups: 10000 }
];
```

**Traffic Sources:**
```javascript
export default [
    { source: "Google", users: "30,000", city: "San Francisco" },
    { source: "Facebook", users: "10,000", city: "Berlin" }
];
```

---

## 🌍 Deployment
The app is deployed on **Vercel** for fast and reliable hosting.

To deploy the app:
1. Push your changes to the main branch.
2. Connect the repo to Vercel for automatic deployment.

---

## 🛠️ Future Improvements
- Add real-time data fetching from an API.
- Implement advanced filters for leaderboard views.
- Integrate more animations for improved UX.
- Add mobile gestures for better navigation.

---

