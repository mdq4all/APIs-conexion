import { HttpReq } from "./HttpRequest.js"
import { fetchFunction } from "./fetch.js";
import { fetchAsyncFunction } from "./fetch_async.js";
import { axiosConnection } from "./axios.js";
import { axiosConnectionAsync } from "./axios_async.js";

HttpReq();
fetchFunction();
fetchAsyncFunction();
axiosConnection();
axiosConnectionAsync();

