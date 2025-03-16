
<img width="1440" alt="Screenshot 2025-01-18 at 12 46 15 AM" src="https://github.com/user-attachments/assets/470cf94c-60b4-4bd6-bd35-815f3e85d788" />
<img width="1440" alt="Screenshot 2025-01-18 at 12 47 28 AM" src="https://github.com/user-attachments/assets/0b0b85b3-4d80-4c25-ab63-3f0de576b815" />
<img width="1440" alt="Screenshot 2025-01-18 at 12 44 01 AM" src="https://github.com/user-attachments/assets/f95a8c45-dad0-4a5f-86a7-4fcb239108ce" />
<img width="1440" alt="Screenshot 2025-01-18 at 12 46 45 AM" src="https://github.com/user-attachments/assets/bbbd1786-2a99-4da9-99f2-9fb9d25cf6b5" />


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Pathfinding_Visualiser_React-Typescript
