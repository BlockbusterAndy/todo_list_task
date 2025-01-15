# Todo List App

This is a feature-rich Todo List application built with the following technologies:

- **Vite**: A fast frontend build tool.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework.
- **Redux Toolkit**: For state management.

## Features

1. **User Authentication**
   - Register, login, and logout functionality.
   - User data is stored in local storage.

2. **Task Management**
   - Add, update, delete, and toggle task completion.
   - Tasks are sorted by priority (high, medium, low) and completion status.
   - Tasks are saved locally for persistence.

3. **Interface Management**
   - Sidebar toggle for a responsive design.
   - Tab management for filtering tasks (e.g., view completed tasks).

4. **Weather Integration**
   - A `WeatherCard` component (placeholder for weather integration).

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: v16 or higher
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BlockbusterAndy/todo_list_task
cd todo_list_task
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start the Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

This will start the development server, and you can access the app at `http://localhost:5173`.

### 4. Build for Production

To build the project for production:

```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

The build files will be generated in the `dist` directory.

## Project Structure

- **authSlice.jsx**: Manages user authentication state (login, logout, registration).
- **todoSlice.jsx**: Handles tasks state (add, update, delete, toggle completion).
- **interfaceSlice.jsx**: Manages UI state (sidebar toggle, tab selection, location settings).
- **Dashboard.jsx**: Main component that renders tasks, the sidebar, and the weather card.
- **AddTask.jsx**: Form for adding new tasks.

## How to Use the App

1. **User Authentication**:
   - Register a new account using a username and password.
   - Login with your credentials to access your tasks.

2. **Task Management**:
   - Add a new task by entering the task details and selecting a priority.
   - View tasks sorted by priority and completion status.
   - Mark tasks as completed or delete them.

3. **Interface Management**:
   - Toggle the sidebar for better navigation.
   - Filter tasks by selecting tabs (e.g., view only completed tasks).