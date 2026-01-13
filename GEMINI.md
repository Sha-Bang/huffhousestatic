# Project Context for Gemini

## Project Overview
This project is a web application built with **React** and **Vite**, styled using **Tailwind CSS**. It includes a **Google Apps Script (GAS)** backend for handling form submissions (e.g., contact forms) by appending data to a Google Sheet.

## Key Technologies
- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend/Integration**: Google Apps Script (in `gas/` directory)

## Directory Structure
- `src/`: Contains the React source code (components, pages, services).
- `gas/`: Contains the Google Apps Script code (`Code.gs`) for the backend handler.
- `public/`: Static assets.
- `index.html`: Entry point for the React app.

## Development Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start the local development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.

## Configuration Files
- `vite.config.js`: Vite configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration for Tailwind.

## Notes
- The `gas/Code.gs` file contains instructions for deploying the Google Apps Script as a Web App to handle POST requests from the frontend.
