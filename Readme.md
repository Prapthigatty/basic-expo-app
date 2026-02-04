# Basic Expo Mobile Application

This is a basic mobile application developed using **Expo** and **React Native**.
The app demonstrates multi-screen navigation, UI design, and integration of free public APIs using **Axios**.

---

## Features

- Splash Screen with app name and loading UI
- Login Screen (Email/Mobile & Password)
- Register Screen (Name, Email/Mobile, Password, Confirm Password)
- Home Screen with dashboard-style menu cards
- Profile Screen displaying dummy user details
- Integration of two free public APIs using Axios
- Clean and reusable UI components
- Navigation implemented using React Navigation

---

## App Flow

1. **Splash Screen**  
   Displays app name and loading indicator

2. **Login / Register**  
   User can choose to log in or register

3. **Home Screen**  
   Displays menu options such as Profile, API Data, Settings,About, Login and Logout

4. **Profile Screen**  
   Shows static (dummy) user information with an Edit button (UI only)

---

## APIs Used

The following free public APIs were integrated using **Axios** (without using fetch):

1. **Bored API**  
   - URL: https://bored-api.appbrewery.com/random  
   - Purpose: Fetches a random activity suggestion

2. **Dog CEO API**  
   - URL: https://dog.ceo/api/breeds/image/random  
   - Purpose: Fetches a random dog image

---

## Technologies Used

- Expo
- React Native
- React Navigation
- Axios
- JavaScript / TypeScript
- Android Emulator / Expo Go

---

## Installation & Setup

1. Clone the repository:
   
   https://github.com/Prapthigatty/basic-expo-app

2. Navigate to the project directory:

   cd <basic-expo-app>


3. Install dependencies:

   npm install


4. Start the Expo development server:

   npx expo start


5. Run the app:

   Press a to run on Android Emulator
   
   OR scan the QR code using Expo Go app on a physical device
