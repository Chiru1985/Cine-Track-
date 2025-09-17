# Cine Track

Cine Track is a modern, responsive web application for film production management. It helps producers, directors, and crew members collaborate, track budgets, manage scripts, schedule shoots, and handle all aspects of a film project in one place.

## Features

- **Role-based Dashboard:** Custom navigation and access for Producers, Directors, and Crew Members.
- **Budget Management:** Track expenses, commitments, and budget scenarios with clear tables and breakdowns.
- **Crew & Cast Management:** Add, view, and organize crew and cast by department, with photo uploads and role selection.
- **Script & Story:** Manage scripts, breakdowns, and notes.
- **Schedule:** View production calendars, milestones, and call sheets.
- **Reports:** Access deliverables, user activity, notifications, and compliance reports.
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
- **Modern UI:** Built with React and Tailwind CSS for a clean, dark-themed interface.

## Technologies Used

- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **PostCSS**

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Chiru1985/Cine-Track-.git
   cd Cine-Track-
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

To create a production build:
```sh
npm run build
```
The output will be in the `dist` folder.

### Project Structure

- `src/` — Main source code
  - `App.tsx` — Main app shell and routing
  - `components/` — Reusable UI components
  - `pages/` — Main pages (Dashboard, Budget, Crew, etc.)
- `index.html` — App entry point
- `tailwind.config.cjs` — Tailwind CSS configuration
- `postcss.config.cjs` — PostCSS configuration

## Usage Notes

- **Role Selection:** On first load, select your role (Producer, Director, Crew Member) to see the relevant dashboard and navigation.
- **Adding Crew/Cast:** Go to the Crew tab and use the "Add Member" button to add new people, upload photos, and assign roles/departments.
- **Mobile Friendly:** The app is fully responsive—try it on your phone or tablet!

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is for educational and demonstration purposes.

---

**Cine Track** — All-in-one platform for film production teams.
