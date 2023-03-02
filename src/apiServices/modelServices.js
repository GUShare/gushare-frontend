import {
  crudEndpoint,
  readOnlyEndpoint
} from "@/apiServices/baseEndpointService";
import { Booking } from "@/models/BookingModel";
import { Building } from "@/models/BuildingModel";
import { Room } from "@/models/RoomModel";
import { Workplace } from "@/models/WorkplaceModel";
import { User } from "@/models/UserModel";

export const bookingEndpointService = Object.assign(crudEndpoint, {
  BASE_URL: "/users/",
  MODEL_CLASS: User
});

export const userEndpointService = Object.assign(crudEndpoint, {
  BASE_URL: "/bookings/",
  MODEL_CLASS: Booking
});

export const buildingEndpointService = Object.assign(readOnlyEndpoint, {
  BASE_URL: "/buildings/",
  MODEL_CLASS: Building
});

export const roomEndpointService = Object.assign(readOnlyEndpoint, {
  BASE_URL: "/rooms/",
  MODEL_CLASS: Room
});

export const workplaceEndpointService = Object.assign(readOnlyEndpoint, {
  BASE_URL: "/workplaces/",
  MODEL_CLASS: Workplace
});
