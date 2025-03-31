import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import Analytics from "./pages/analytics";
import TaskPage from "./pages/task";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/analytics',
        Component: Analytics
    },
    {
        path: '/task',
        Component: TaskPage
    }
])