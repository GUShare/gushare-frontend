import is from "ramda/src/is";
import { API } from "@/main";

class retrieveMixin {
  constructor() {}
  static async retrieve(id) {
    const response = await API.axiosInstance.get(`${this.BASE_URL}/${id}`);
    if (response.status === 200) {
      return new this.MODEL_CLASS(response.data);
    } else {
      // TODO: Appwide errorhandling
      throw Error(response.data);
    }
  }
}

class listMixin {
  constructor() {}
  static async list() {
    const response = await API.axiosInstance.get(this.BASE_URL);
    return response.data.map((item) => new this.MODEL_CLASS(item));
  }
}

class createMixin {
  constructor() {}
  static async create(payload) {
    const response = await API.axiosInstance.post(this.BASE_URL, payload);
    if (response.status === 201) {
      return new this.MODEL_CLASS(response.data);
    } else {
      // TODO: Appwide errorhandling
      throw Error(response.data);
    }
  }
}

class updateMixin {
  constructor() {}
  static async update(payload, id) {
    const response = await API.axiosInstance.patch(
      `${this.BASE_URL}${id}/`,
      payload
    );
    if (response.status === 200) {
      return new this.MODEL_CLASS(response.data);
    } else {
      // TODO: Appwide errorhandling
      throw Error(response.data);
    }
  }
}

class destroyMixin {
  constructor() {}
  static async delete(id) {
    const response = await API.axiosInstance.delete(this.BASE_URL + `${id}`);
    if (response.status === 204) {
      return undefined;
    } else {
      // TODO: Appwide errorhandling
      throw Error(response.data);
    }
  }
}

class bulkCreateMixin {
  constructor() {}
  static async bulkCreate(payloadArray) {
    let promises = [];
    if (!is(Array, payloadArray)) {
      // TODO: Appwide errorhandling
      throw Error("Provided payload is NOT an Array");
    }
    try {
      for (let obj of payloadArray) {
        promises.push(this.create(obj));
      }
      return Promise.all(promises).then((values) => {
        return values;
      });
    } catch (e) {
      // TODO: Appwide errorhandling
      throw Error(e.message);
    }
  }
}

class bulkDestroyMixin {
  constructor() {}
  static async bulkDelete(payloadArray) {
    let promises = [];
    if (!is(Array, payloadArray)) {
      // TODO: Appwide errorhandling
      throw Error("Provided payload is NOT an Array");
    }
    try {
      for (const obj of payloadArray) {
        promises.push(this.delete(obj.id));
      }
      await Promise.all(promises);
      return undefined;
    } catch (e) {
      // TODO: Appwide errorhandling
      throw Error(e.message);
    }
  }
}

class bulkUpdateMixin {
  constructor() {}
  static async bulkUpdate(payloadArray) {
    let promises = [];
    if (!is(Array, payloadArray)) {
      // TODO: Appwide errorhandling
      throw Error("Provided payload is NOT an Array");
    }
    try {
      for (const obj of payloadArray) {
        promises.push(this.update(obj, obj.id));
      }
      return Promise.allSettled(promises).then((values) => {
        return values;
      });
    } catch (e) {
      // TODO: Appwide errorhandling
      throw Error(e);
    }
  }
}

class baseEndpointService {
  static BASE_URL = "";
  static MODEL_CLASS = undefined;
  constructor() {}
}

export const readOnlyEndpoint = Object.assign(
  baseEndpointService,
  retrieveMixin,
  listMixin
);

export const crudEndpoint = Object.assign(
  baseEndpointService,
  retrieveMixin,
  listMixin,
  createMixin,
  updateMixin,
  destroyMixin,
  bulkCreateMixin,
  bulkUpdateMixin,
  bulkDestroyMixin
);
