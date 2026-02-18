# CodeKage's Frontend Portfolio: Production-Ready Web Solutions

## Overview
This is a sophisticated, highly performant frontend portfolio crafted to showcase production-ready web applications. Built with **React 19**, **TypeScript**, and **Vite**, it features a modern UI powered by **Tailwind CSS** and **Shadcn/ui**, dynamic routing with **React Router DOM**, and enhanced user experience through **Motion** animations.

## Features
- **Responsive Design**: Adapts seamlessly across all devices, from mobile to desktop, ensuring a consistent user experience.
- **Dynamic Routing**: Utilizes React Router DOM for smooth, single-page application navigation across various sections (Home, About, Projects, Contact).
- **SEO Optimization**: Integrates sitemap generation and structured data (`personSchema`) to improve search engine visibility and accessibility.
- **Performance Focused**: Built with Vite for rapid development and optimized for fast loading times and smooth interactions.
- **Modern UI/UX**: Leverages Tailwind CSS and Shadcn/ui for a clean, visually appealing, and highly customizable user interface with dark mode support.
- **Interactive Animations**: Incorporates Motion (a lightweight animation library) for engaging transitions and micro-interactions, enhancing user engagement.
- **Project Showcase**: Detailed presentation of personal projects, including problem statements, solutions, tech stacks, and results.
- **Contact Form Integration**: Seamlessly integrates with Formspree for efficient inquiry handling, ensuring prompt communication.
- **Modular Component Architecture**: Organized into reusable React components for maintainability, scalability, and developer experience.
- **Comprehensive Tooling**: Includes ESLint for code quality, Lighthouse for performance/SEO auditing, and Webpack Bundle Analyzer for build optimization.

## Usage

To view the portfolio locally or explore its codebase, follow these steps:

### Development Setup
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AbdulrahmanLuqman/my-portfolio.git
    cd my-portfolio
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    This will start the Vite development server, typically at `http://localhost:5173`. The application will automatically reload as you make changes.

### Building for Production
1.  **Generate Sitemap and Build**:
    Before building, it's recommended to generate the sitemap. This project includes a convenient script for that.
    ```bash
    npm run build-with-sitemap
    # or
    yarn build-with-sitemap
    # or
    pnpm build-with-sitemap
    ```
    This command first runs `generateSitemap.js` to create `sitemap.xml` and `robots.txt` in the `public` directory, then performs a production build using Vite. The optimized build output will be placed in the `dist/` directory.

2.  **Preview the production build**:
    ```bash
    npm run preview
    # or
    yarn preview
    # or
    pnpm preview
    ```
    This command serves the `dist/` folder, allowing you to see the production-optimized version of the portfolio locally.

### Screenshots
Below are examples of the clean and modern UI:

**Home Page Layout**
![Home Page Layout](/assets/my-projects/anyday.png)
_A glimpse of the structured layout on the homepage, showcasing recent projects._

**Project Detail View**
![Project Detail View](/assets/my-projects/openview.png)
_An example of a project card, providing quick access to live demos._

## Technologies Used

| Technology             | Description                                          | Link                                                                      |
| :--------------------- | :--------------------------------------------------- | :------------------------------------------------------------------------ |
| **React**              | Frontend JavaScript library for building user interfaces. | [https://react.dev/](https://react.dev/)                                  |
| **TypeScript**         | Superset of JavaScript that adds static typing.        | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)        |
| **Vite**               | Next-generation frontend tooling for fast development. | [https://vitejs.dev/](https://vitejs.dev/)                                |
| **Tailwind CSS**       | Utility-first CSS framework for rapid UI development. | [https://tailwindcss.com/](https://tailwindcss.com/)                      |
| **Shadcn/ui**          | Reusable UI components built with Radix UI and Tailwind CSS. | [https://ui.shadcn.com/](https://ui.shadcn.com/)                          |
| **React Router DOM**   | Declarative routing for React applications.            | [https://reactrouter.com/](https://reactrouter.com/)                      |
| **Motion**             | A production-ready animation library for React.      | [https://www.framer.com/motion/](https://www.framer.com/motion/)          |
| **Lucide React**       | A beautiful icon library for React projects.         | [https://lucide.dev/](https://lucide.dev/)                                |
| **Formspree**          | Simple, reliable HTML form backend.                  | [https://formspree.io/](https://formspree.io/)                            |
| **Supabase**           | Open source Firebase alternative for databases and auth. | [https://supabase.com/](https://supabase.com/)                            |
| **ESLint**             | Pluggable JavaScript linter.                         | [https://eslint.org/](https://eslint.org/)                                |
| **Lighthouse**         | Open-source tool for improving web page quality.     | [https://developer.chrome.com/docs/lighthouse/](https://developer.chrome.com/docs/lighthouse/) |
| **Webpack Bundle Analyzer** | Visualize size of webpack output files with an interactive zoomable treemap. | [https://github.com/webpack-contrib/webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) |

## License
This project is currently unlicensed. Please contact the author for details regarding usage and distribution.

## Author
**Abdulrahman Luqman (CodeKage)**
A self-taught Frontend Engineer and university student passionate about building production-ready applications with a focus on clean architecture, performance, and delivering tangible business results.

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbdulrahmanLuqman/)
[![X (formerly Twitter)](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/codekagefx)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/codekage-fx-80243a23a/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luqmanola60@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/2349167596491)

---

[![Vite](https://img.shields.io/badge/Build_with-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Code Quality](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-High_Score-F44B2C?style=for-the-badge&logo=lighthouse&logoColor=white)](https://developer.chrome.com/docs/lighthouse/)
[![Contact Form-Formspree](https://img.shields.io/badge/Contact_Form-Formspree-blueviolet?style=for-the-badge&logo=formspree&logoColor=white)](https://formspree.io/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)