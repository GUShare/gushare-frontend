import {mapApiResponse} from "@/helpers/objectModification";

export class Workplace {
    constructor(jsonResponse) {
        const mappedResponse = mapApiResponse(jsonResponse);
        this.id = mappedResponse.id;
        this.inRoomId = mappedResponse.inRoomId;
        this.equipment = mappedResponse.equipment;
        this.maintenanceStatus = mappedResponse.maintenanceStatus;
        this.maintenanceAvailability = mappedResponse.maintenanceAvailability ;
        this.notification = mappedResponse.notification;
        this.room = mappedResponse.room;
    }
    #toPayload() {
        // Method is considered private since
        // No useage planned for now, but in later releases.
        return {
            id: this.id,
            in_room_id: this.inRoomId,
            equipment: this.equipment,
            maintenance_status: this.maintenanceStatus,
            maintenance_availability: this.maintenanceAvailability ,
            notification: this.notification ,
            room: this.room,
        }
    }
    #clone() {
        // Method is considered private since
        // No useage planned for now, but in later releases.
        const data = this.#toPayload()
        return new Workplace(data);
    }
}