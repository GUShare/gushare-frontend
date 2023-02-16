
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import RoomsView from "@/views/RoomsView";
import BookingsView from "@/views/BookingsView";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView
    },
    {
        path: "/room",
        name: "Rooms",
        component: RoomsView
    },
    {
        path: "/bookings",
        name: "Bookings",
        component: BookingsView
    }
]

export const routesToNavigate = routes.filter((item) => item.name !== "Login");

export default routes;