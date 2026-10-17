import { Route, Routes, BrowserRouter } from "react-router-dom";
import Showcase from "./showcase/main"
import Projects from "./project_view/main"
import ProjectPage from "./project_view/ProjectPage"
import { useTheme } from "./shared/hooks/useTheme";


export default function App() {
  const { currentTheme, changeTheme } = useTheme()


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Showcase theme={currentTheme} changeTheme={changeTheme} />
          } />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}





