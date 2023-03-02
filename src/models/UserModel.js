import { mapApiResponse } from "@/helpers/objectModification";
import { format } from "date-fns";

export class User {
  constructor(jsonResponse) {
    const mappedResponse = mapApiResponse(jsonResponse);
    this.id = mappedResponse.id;
    this.username = mappedResponse.username;
    this.firstName = mappedResponse.firstName;
    this.lastName = mappedResponse.lastName;
    this.language = mappedResponse.language;
    this.dsgvoAccepted = mappedResponse.dsgvoAccepted;
    this.dateJoined = new Date(mappedResponse.dateJoined);
    this.modifiedAt = new Date(mappedResponse.modifiedAt);
    this.lastLogin = new Date(mappedResponse.lastLogin);
    this.isSuperuser = mappedResponse.isSuperuser;
    this.onboardingPassed = mappedResponse.onboardingPassed;
    this.favoriteWorkplaces = mappedResponse.favoriteWorkplaces;
  }
  #toPayload() {
    // Method is considered private since
    // No usage planned for now, but in later releases.
    return {
      id: this.id,
      username: this.username,
      first_name: this.firstName,
      last_name: this.lastName,
      language: this.language,
      dsgvo_accepted: this.dsgvoAccepted,
      date_joined: format(this.dateJoined, "yyyy-MM-dd HH:mm:ssXXX"),
      modified_at: format(this.modifiedAt, "yyyy-MM-dd HH:mm:ssXXX"),
      last_login: format(this.lastLogin, "yyyy-MM-dd HH:mm:ssXXX"),
      is_superuser: this.isSuperuser,
      onboarding_passed: this.onboardingPassed
    };
  }

  #clone() {
    // Method is considered private since
    // No usage planned for now, but in later releases.
    const data = this.#toPayload();
    return new User(data);
  }
}
