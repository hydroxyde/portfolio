# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Installation
npm create vite@latest ./
Select React>Javascript

npm install
to install all dependencies

Run
npm run dev

Install tailwindcss with vite and initialise
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Install react router dom
npm install react-router-dom

Install react fiber for 3d animation (fiber is a renderer for three.js)
npm install @react-three/fiber

Install helpers for react fiber (hepl for cameras, shaders etc..)
npm install @react-three/drei
