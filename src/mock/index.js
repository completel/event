import Mock from "mockjs";
import reg from "./reg.json";

// mock 数据，第一个参数：请求地址，第二个参数：请求数据
// 返回注册信息的值
Mock.mock("/mock/reg", { code: 200, data: reg });