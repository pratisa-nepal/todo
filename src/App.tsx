import { RouterProvider } from "react-router-dom";
import "./assets/global.css";
import { routes } from "./routes";
import { Toaster } from "react-hot-toast";
import { TaskProvider } from "./providers/task-provider";

function App() {
  return (
    <>
      <Toaster />
      <TaskProvider>
        <RouterProvider router={routes} />
      </TaskProvider>
    </>
  )
}

export default App
