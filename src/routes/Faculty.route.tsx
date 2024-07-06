import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferCourse from "../pages/Faculty/OfferCourse";

export const FacultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferCourse />,
  },
];
