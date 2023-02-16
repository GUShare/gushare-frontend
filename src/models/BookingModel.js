import {mapApiResponse} from "@/helpers/objectModification";
import {format} from "date-fns";

export class Booking {
    constructor(jsonResponse) {
        const mappedResponse = mapApiResponse(jsonResponse);
        this.id = mappedResponse.id;
        this.started = new Date(mappedResponse.started);
        this.stopped = new Date(mappedResponse.stopped);
        this.note = mappedResponse.note ;
        this.emailOthers = mappedResponse.emailOthers;
        this.confirmedAt = mappedResponse.confirmedAt ;
        this.workplaces = mappedResponse.workplaces ;
        this.users = mappedResponse.users;
    }
    toPayload() {
        return {
            id: this.id,
            started: format(this.started, "yyyy-MM-dd HH:mm:ssXXX"),
            stopped: format(this.stopped, "yyyy-MM-dd HH:mm:ssXXX"),
            note: this.note,
            email_others: this.emailOthers,
            confirmed_at: format(this.confirmedAt,"yyyy-MM-dd HH:mm:ssXXX"),
            workplaces: this.workplaces,
            users: this.users
        }
    }
    clone() {
        const data = this.toPayload()
        return new Booking(data);
    }
}