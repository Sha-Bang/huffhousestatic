# React + Vite + Tailwind CSS Project

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

## Running Locally

To start the development server and render the project in a browser locally:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Building and Testing the Build

To test the production build locally:

1. Build the project:
   ```bash
   npm run build
   ```
   This will create a `dist/` folder with the compiled assets.

2. Preview the build:
   ```bash
   npm run preview
   ```
   This will start a local server serving the built application. Navigate to the URL provided to see how the app behaves in production mode.

## Backend Setup (Firebase)

This project uses **Firebase Cloud Firestore** to handle form submissions securely without a dedicated backend server.

### Configuration
The Firebase configuration is located in `src/firebase.js`.
The contact form service is located in `src/services/contactService.js`.

### Accessing Messages
Form submissions are stored in the `messages` collection in Firestore.
You can view them in the [Firebase Console](https://console.firebase.google.com/).

### Deployment
The Firestore database and security rules are managed via the Firebase CLI.
- **Deploy Rules:** `firebase deploy --only firestore:rules`
- **Deploy Indexes:** `firebase deploy --only firestore:indexes`

---

## Official Vite Documentation

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
