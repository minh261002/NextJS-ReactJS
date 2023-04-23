import { ResponseApi, ResponseApiDetail } from "@/models/utils";
import { Product, ProductListConfig, ProductRespone } from "../models";
import http from "../utils/http";

const URL = "api/products";
const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get<ResponseApi<Product>>(URL, { params });
  },
  getProductDetail(slug: string) {
    return http.get<ResponseApiDetail<Product>>(`${URL}/${slug}`);
  },
  addProduct(body: any) {
    return http.post<ResponseApiDetail<Product>>(URL, body);
  },
};

export default productApi;
