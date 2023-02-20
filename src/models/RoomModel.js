import {mapApiResponse} from "@/helpers/objectModification";

export class Room {
    constructor(jsonResponse) {
        const mappedResponse = mapApiResponse(jsonResponse);
        this.id = mappedResponse.id;
        this.photo = mappedResponse.photo;
        this.roomLocation = mappedResponse.roomLocation;
        this.roomType = mappedResponse.roomType ;
        this.maintenanceStatus = mappedResponse.maintenanceStatus;
        this.maintenanceAvailability = mappedResponse.maintenanceAvailability ;
        this.name = mappedResponse.name ;
        this.alternateName = mappedResponse.alternateName;
        this.description = mappedResponse.description;
        this.building = mappedResponse.building;
        this.permissions = mappedResponse.permissions;
    }
    #toPayload() {
        // Method is considered private since
        // No useage planned for now, but in later releases.
        return {
            id: this.id,
            photo: this.photo,
            room_location: this.roomLocation,
            room_type: this.roomType ,
            maintenance_status: this.maintenanceStatus,
            maintenance_availability: this.maintenanceAvailability ,
            name: this.name ,
            alternate_name: this.alternateName,
            description: this.description,
            building: this.building,
            permissions: this.permissions,
        }
    }
    #clone() {
        // Method is considered private since
        // No useage planned for now, but in later releases.
        const data = this.#toPayload()
        return new Room(data);
    }
}