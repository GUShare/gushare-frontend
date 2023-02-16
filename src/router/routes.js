
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import BuildingView from "@/views/BuildingView";
import RoomView from "@/views/RoomView";
import BookingView from "@/views/BookingView";

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
        path: "/building",
        name: "Building",
        component: BuildingView
    },
    {
        path: "/room",
        name: "Room",
        component: RoomView
    },
    {
        path: "/bookings",
        name: "Bookings",
        component: BookingView
    }
]

export default routes;