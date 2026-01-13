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

## Google Apps Script Setup

This project uses Google Apps Script to handle form submissions. The backend code is located in `gas/Code.gs`.

To set it up:
1. Open `gas/Code.gs` and follow the instructions in the file header to create and deploy the script as a Web App.
2. Update the frontend configuration (likely in `src/services/` or an environment variable) with the deployed Web App URL.

---

## Official Vite Documentation

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
