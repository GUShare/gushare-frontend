import {mapApiResponse} from "@/helpers/objectModification";

export class Building {
    constructor(jsonResponse) {
        const mappedResponse = mapApiResponse(jsonResponse);
        this.id = mappedResponse.id;
        this.openingHours = mappedResponse.openingHours;
        this.address = mappedResponse.address;
        this.amenityFeatures = mappedResponse.amenityFeatures;
        this.geo = mappedResponse.geo;
        this.map = mappedResponse.map;
        this.maximumAttendeeCapacity = mappedResponse.maximumAttendeeCapacity;
        this.photo = mappedResponse.photo;
        this.telephone = mappedResponse.telephone;
        this.name = mappedResponse.name;
        this.alternateName = mappedResponse.alternateName;
        this.description = mappedResponse.description;
    }

    toPayload() {
        return {
            id: this.id,
            opening_hours: this.openingHours,
            address: this.address,
            amenity_features: this.amenityFeatures,
            geo: this.geo,
            map: this.map,
            maximum_attendee_capacity: this.maximumAttendeeCapacity,
            photo: this.photo,
            telephone: this.telephone,
            name: this.name,
            alternate_name: this.alternateName,
            description: this.description
        }
    }

    clone() {
        const data = this.toPayload()
        return new Building(data);
    }
}
