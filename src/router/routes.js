import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import RoomsView from "@/views/RoomsView";
import BookingsView from "@/views/BookingsView";
import LandingView from "@/views/LandingView";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingView,
    children: [
      {
        path: "/",
        name: "home",
        title: "Home",
        component: HomeView
      },
      {
        path: "/room",
        name: "rooms",
        title: "Rooms",
        component: RoomsView
      },
      {
        path: "/bookings",
        name: "bookings",
        title: "Bookings",
        component: BookingsView
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { public: true, onlyWhenLoggedOut: true }
  }
];

export const routesToNavigate = routes[0].children;

export default routes;
