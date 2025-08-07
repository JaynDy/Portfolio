export const projectData = {
  timerApp: {
    id: "timerApp",
    title: "Timer App (React, Node.js)",
    description:
      "This is a full-stack timer application that allows users to create a main countdown timer and multiple linked subtimers, making it ideal for managing recurring tasks like work-rest cycles. Features include customizable timers, sound alerts (with mute option), animated visual cues, and full control over creating, editing, deleting, and selecting timers. The Timer App is available in two formats: a web application (available online) and a desktop application (installable locally).",
    technologies:
      "React + Vite, JavaScript, CSS Modules, Node.js, Express, File system (fs) for data storage, JSON-based REST API, electron.js (for desktop app)",
    website: "https://timer-app-nine-neon.vercel.app",
    github: [
      "https://github.com/JaynDy/Timer_App.git",
      "https://github.com/JaynDy/Timer_App_Server.git",
    ],
  },
  calendar: {
    id: "calendar",
    title: "Calendar (React, Node.js)",
    description:
      "This is a full-stack application helps to plan time by accounting for different types of events. It allows users to log in through Google authentication. It offers 'Week' and 'Day' views. In the Calendar section, a default calendar is used, with options to change its color or create a new one. To add an event, a form with validation is filled out, including fields for start time, end time, and recurrence. Recurring events are saved as a group that can be edited or deleted. All events are displayed in a table, occupying cells based on their time.",
    technologies:
      "React + Vite, JavaScript, module.CSS, Redux, axios, Firebase authentication, Node.js, ExpressJS, MongoDB, vercel, render",
    website: "https://calendar-ivory-eight.vercel.app",
    github: [
      "https://github.com/JaynDy/Calendar.git",
      "https://github.com/JaynDy/Calendar_Server.git",
    ],
  },
  onlineShopReact: {
    id: "onlineShopReact",
    title: "Online Shop (React)",
    description:
      "The application is a single-page application with routing. It is designed for managing a shopping cart and placing orders. The user fills out two validated forms (formik), where each step is available only after completing the required fields. Data is saved when returning to previous steps. After completing the order process, a summary card is displayed, and the cart and form data are cleared.",
    technologies: "React + Vite, JavaScript, module.CSS, Redux, formik, vercel",
    website: "https://online-shop-react-2xua.vercel.app",
    github: ["https://github.com/JaynDy/Online-shop-react.git"],
  },
  ticTacToe: {
    id: "ticTacToe",
    title: "Tic Tac Toe (React)",
    description:
      "State management is handled using Redux Toolkit. Each game round is accompanied by messages displaying the game results. The right to move is granted to the winner. If the game ends in a draw, the right to move remains with the previous winner. Players can exchange messages. The chat updates after clicking the Reset button.",
    technologies:
      "React + Vite, module.CSS, JavaScript, Redux, flexible design, vercel",
    website: "https://tic-tac-toe-one-xi-86.vercel.app",
    github: ["https://github.com/JaynDy/tic_tac_toe.git"],
  },
  onlineShop: {
    id: "onlineShop",
    title: "Online Shop (Vanilla js)",
    description:
      "This is a multi-page app with a responsive design. For the convenience of the user, filters have been created to search for the required products, along with a price scale for the products. The user can add, edit, and remove products from the cart. The cart data is stored in the local storage.",
    technologies:
      " HTML, CSS, Grid, Flexbox, JavaScript, local storage, vercel",
    website: "https://online-shop-app-nine.vercel.app/mainPage.html",
    github: ["https://github.com/JaynDy/OnlineShop_App.git"],
  },
  countriesApp: {
    id: "countriesApp",
    title: "Countries App (Vanilla js)",
    description:
      "The app has a responsive layout with media queries and uses Flexbox to arrange country cards flexibly. JavaScript (ES6+) is used for searching countries, filtering by region, and switching between light and dark themes.",
    technologies: "HTML, CSS, Flexbox, JavaScript, using API, vercel",
    website: "https://countries-app-zeta-two.vercel.app",
    github: ["https://github.com/JaynDy/Countries_App.git"],
  },
  weatherWidget: {
    id: "weatherWidget",
    title: "Weather Widget (Vanilla js)",
    description:
      "This is a simple weather widget that displays the current weather for a given location. It fetches data from a weather API and displays the temperature, humidity, and weather conditions.",
    technologies: "HTML, CSS, JavaScript, using API, vercel",
    website: "https://weather-widget-pink-five.vercel.app",
    github: ["https://github.com/JaynDy/WeatherWidget.git"],
  },
};
