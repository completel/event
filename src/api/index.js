import request from "./axios";
import mock from "./mockAjax";

export const reqdemo = (data) => request({ url: '/demo', method: "GET", data });

// mock登录信息
export const mockRegister = () => mock({ url: '/reg', method: "get" });