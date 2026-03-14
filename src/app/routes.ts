import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NursingPage } from "./pages/NursingPage";
import { StudentProgramsPage } from "./pages/StudentProgramsPage";
import { InnovationPage } from "./pages/InnovationPage";
import { PlacementPage } from "./pages/PlacementPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "nursing", Component: NursingPage },
      { path: "student-programs", Component: StudentProgramsPage },
      { path: "innovation", Component: InnovationPage },
      { path: "placement", Component: PlacementPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
