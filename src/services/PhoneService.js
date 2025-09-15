import { $AdminApi } from "../http/index.js";
import config from "../configs/config.js";
import axios from "axios";

const BLOG_API_URL = config.SERVER_API + "/Phone";

export default class PhoneService {
    constructor($api = $AdminApi) {
        this.setPhones = async (value) => {
            if (this.CancelToken) this.CancelToken.abort();
            const controller = new AbortController();
            this.CancelToken = controller;
            const res = await $api.post(BLOG_API_URL + "/", value, {
                signal: controller.signal,
            });
            return res;
        };
        this.getPhones = async () => {
            const res = await axios.get(BLOG_API_URL + "/");
            return res;
        };
    }
}
