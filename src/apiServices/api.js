import axios from "axios";
import store from "@/store";

import { log } from "@/utils/log";

class ApiService {
  constructor(baseUrl, language) {
    this.baseUrl = baseUrl;
    this.lang = language;
    this.axiosInstance = undefined;
    this.initAxios();
  }

  async initAxios() {
    this.axiosInstance = axios.create({ baseURL: this.baseUrl });
    await this.setHeader("Accept-Language", this.lang);
  }

  async setHeader(header, value) {
    return new Promise((resolve) => {
      this.axiosInstance.defaults.headers.common[header] = value;
      resolve();
    });
  }
  async unsetHeader(header) {
    return new Promise((resolve) => {
      delete this.axiosInstance.defaults.headers.common[header];
      resolve();
    });
  }
}
