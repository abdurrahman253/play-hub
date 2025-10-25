# 🎮 PlayHub - Ultimate Gaming Platform

<div align="center">

![PlayHub Logo](https://gameplexnext.softivuslab.com/_next/static/media/favicon.395cfa38.png)

**The Biggest Gaming Platform for True Gamers**

[![Live Demo](https://img.shields.io/badge/Live-Demo-orange?style=for-the-badge&logo=netlify)](https://play-hub-games.netlify.app)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.4.0-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.15-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [About PlayHub](#-about-playhub)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [NPM Packages](#-npm-packages-used)
- [Installation Guide](#-installation-guide)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Usage](#-usage)
- [Contact & Support](#-contact--support)

---

## 🎯 About PlayHub

**PlayHub** is the ultimate gaming platform designed for gamers who crave **style, speed, and glory**. Whether you're searching for your favorite games, exploring new titles, or connecting with a vibrant gaming community, PlayHub delivers an unmatched experience.

### 🚀 Mission
To create the biggest and most accessible gaming platform where players can discover, download, and enjoy premium games with a seamless, user-friendly experience.

### 🎮 Target Audience
- **Casual Gamers** looking for quick entertainment
- **Hardcore Gamers** seeking top-rated titles
- **Game Enthusiasts** who want to stay updated with trending games
- **Community Members** who love connecting with fellow gamers

---

## 🌐 Live Demo

**🔗 Visit PlayHub:** [play-hub-games.netlify.app](https://play-hub-games.netlify.app)

---

## ✨ Key Features

### 🔐 **User Authentication & Security**
- ✅ **Email/Password Registration & Login** with Firebase Authentication
- ✅ **Google Sign-In** for quick access
- ✅ **Password Reset** functionality via email
- ✅ **Private Routes** to protect user data
- ✅ **User Profile Management** - Update name and photo

### 🎮 **Gaming Experience**
- ✅ **100+ Premium Games** with ratings and categories
- ✅ **Game Details Page** with comprehensive information
- ✅ **Top Rated Games Section** - Sorted by ratings
- ✅ **Direct Download Links** to play instantly
- ✅ **Live Winners Feed** - Real-time gaming achievements
- ✅ **Image Slider** with smooth GSAP animations

### 🎨 **Premium UI/UX**
- ✅ **Glassmorphism Design** with modern aesthetics
- ✅ **GSAP Text Animations** - Scramble text effects
- ✅ **Framer Motion** - Smooth page transitions
- ✅ **Responsive Design** - Perfect on mobile, tablet & desktop
- ✅ **Dark Theme** optimized for gaming
- ✅ **Custom Loading Screens** with premium animations

### 📧 **Community & Support**
- ✅ **Newsletter Subscription** - Stay updated with latest games
- ✅ **24/7 Customer Support** section
- ✅ **Social Media Integration** - Connect on all platforms
- ✅ **Footer with Quick Links** - Easy navigation

### 🔒 **Additional Features**
- ✅ **404 Error Page** with gaming theme
- ✅ **Password Validation** - Uppercase, lowercase, 6+ characters
- ✅ **Auto-scroll to Sections** via hash navigation
- ✅ **Stats Dashboard** - 50K+ players, 100+ games, 24/7 support

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.1** - Modern UI library
- **React Router DOM 7.9.4** - Client-side routing
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **GSAP 3.13.0** - Professional-grade animations
- **React Icons 5.5.0** - Icon library

### **Backend & Database**
- **Firebase 12.4.0** - Authentication & Backend services
- **Firebase Authentication** - Secure user management
- **Firebase Hosting** (Ready for deployment)

### **Build Tools**
- **Vite 7.1.7** - Next-generation frontend tooling
- **ESLint** - Code quality enforcement

---

## 📦 NPM Packages Used

```json
{
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@tailwindcss/vite": "^4.1.15",
    "daisyui": "^5.3.7",
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "gsap": "^3.13.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "tailwindcss": "^4.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}
```

---

## 🚀 Installation Guide

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/playhub.git
cd playhub
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** in root directory
```bash
touch .env
```

4. **Add Firebase Configuration** (see [Environment Variables](#-environment-variables))

5. **Start development server**
```bash
npm run dev
```

6. **Open browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project_id.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project_id.appspot.com
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
```

### How to Get Firebase Credentials:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to **Project Settings** → **General**
4. Scroll to **Your apps** → Select **Web app**
5. Copy the config values to your `.env` file

⚠️ **Important:** Never commit `.env` file to GitHub!

---

## 📁 Project Structure

```
PlayHub/
├── public/
│   ├── games.json           # Game data
│   ├── slide-1.png          # Slider images
│   ├── slide-2.png
│   └── slide-3.png
├── src/
│   ├── Components/
│   │   ├── HomeLayout/
│   │   │   ├── Banner.jsx
│   │   │   ├── PopularGames.jsx
│   │   │   ├── NewsLetter.jsx
│   │   │   └── ImageSlider.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── Firebase/
│   │   └── Firebase.config.js
│   ├── Layouts/
│   │   ├── HomeLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── ErrorPage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── GameDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgetPassword.jsx
│   │   ├── Profile.jsx
│   │   ├── UpdateProfile.jsx
│   │   ├── Loading.jsx
│   │   └── NotFound.jsx
│   ├── Provider/
│   │   ├── AuthProvider.jsx
│   │   └── PrivateRoute.jsx
│   ├── Routes/
│   │   └── Router.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x400/0a0a0a/ff6600?text=PlayHub+Home+Page)
*Ultimate gaming experience with animated hero section*

### 🎮 Popular Games Section
![Games Section](https://via.placeholder.com/800x400/0a0a0a/ff6600?text=Top+Rated+Games)
*Browse 100+ premium games with ratings*

### 🔐 Login/Register
![Authentication](https://via.placeholder.com/800x400/0a0a0a/ff6600?text=Secure+Authentication)
*Secure authentication with Google sign-in*

### 📱 Responsive Design
![Mobile View](https://via.placeholder.com/400x600/0a0a0a/ff6600?text=Mobile+Responsive)
*Perfect experience on all devices*

---

## 🎯 Usage

### For Users

1. **Browse Games**
   - Visit homepage to see trending games
   - Click "Games" in navbar to jump to games section

2. **Register/Login**
   - Click "Register" to create account
   - Or use "Login with Google" for quick access

3. **View Game Details**
   - Login required to view full details
   - Click "View Details" on any game card

4. **Download Games**
   - Click "Play" button to download
   - Direct download links available

5. **Profile Management**
   - Click profile icon in navbar
   - Update name and photo URL

6. **Newsletter Subscription**
   - Scroll to newsletter section
   - Enter email to get updates

### For Developers

**Local Development:**
```bash
npm run dev
```

**Code Linting:**
```bash
npm run lint
```

**Production Build:**
```bash
npm run build
npm run preview
```

---

## 🤝 Contact & Support

### 📧 Get in Touch
- **Email:** support@playhub.com
- **Website:** [play-hub-games.netlify.app](https://play-hub-games.netlify.app)

### 🌐 Connect With Us
- [Facebook](https://facebook.com)
- [Twitter](https://twitter.com)
- [Instagram](https://instagram.com)
- [YouTube](https://youtube.com)

### 💬 Support
Need help? We're here 24/7!
- Check our [Help Center](#)
- Read [Privacy Policy](#)
- View [Terms of Service](#)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Firebase** for authentication services
- **Tailwind CSS** for the utility-first CSS
- **GSAP** for smooth animations
- **Framer Motion** for page transitions
- All open-source contributors

---

## 🚀 Future Updates

- [ ] Add game reviews and ratings system
- [ ] Implement real-time multiplayer chat
- [ ] Add user leaderboards
- [ ] Integrate payment gateway for premium games
- [ ] Add game trailers and videos
- [ ] Mobile app (React Native)

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful!

**Made with ❤️ by the PlayHub Team**

[⬆ Back to Top](#-playhub---ultimate-gaming-platform)

</div>
