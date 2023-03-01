import axios from "axios";
import { applyAuthTokenInterceptor } from "axios-jwt";
import store from "@/store/index";

// Mock a store in the sense of axios-jwt with vuex
const getStore = () => {
  return {
    // eslint-disable-next-line no-unused-vars
    get(key) {
      return store.getters["auth/getTokens"];
    },
    set(key, value) {
      return store.commit("auth/setTokens", value);
    },
    // eslint-disable-next-line no-unused-vars
    remove(key) {
      return store.commit("auth/unsetTokens");
    }
  };
};

export class ApiService {
  constructor(baseUrl, language) {
    this.baseUrl = baseUrl;
    this.lang = language;
    this.axiosInstance = undefined;
    this.initAxios();
  }

  async initAxios() {
    this.axiosInstance = axios.create({ baseURL: this.baseUrl });
    applyAuthTokenInterceptor(this.axiosInstance, {
      requestRefresh: this.tokenRefreshRequest,
      getStorage: getStore
    });
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

  async tokenRefreshRequest(refreshToken) {
    const response = await axios.post(`${this.baseUrl}/auth/jwt/refresh`, {
      refresh: refreshToken
    });

    return {
      accessToken: response.data.access,
      refreshToken: response.data.refresh
    };
  }
}
