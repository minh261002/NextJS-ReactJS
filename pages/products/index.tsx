import LayoutMain from "@/component/Layout/LayoutMain";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import productApi from "../../api/product-api";
import { Product, ProductListConfig } from "@/models/products";
import { Pagination, PaginationProps, Select } from "antd";
import Link from "next/link";
import { GetStaticProps } from "next";
import { ResponseApi } from "@/models/utils";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { increment } from "../../features/counter/counterSlice";
interface IProductListPage {
  productListResponse: ResponseApi<Product>;
}
export default function ProductListPage({
  productListResponse,
}: IProductListPage) {
  const router = useRouter();
  const { page: pageIndex, pageSize, sort } = router.query;
  const page = Number(pageIndex) || 1;
  const editQuery = {
    populate: "*",
    "pagination[page]": router.query.page || 1,
    "pagination[pageSize]": router.query.pageSize || 3,
    sort,
  };
  const { data } = useQuery<any>({
    queryKey: ["products", editQuery],
    queryFn: () => {
      return productApi.getProduct(editQuery as ProductListConfig);
    },
    initialData: productListResponse,
  });
  const { total } = data.meta.pagination;
  const totalPage = Math.ceil(total / (Number(pageSize) || 3));
  const handleNextPage = () => {
    router.push({
      query: {
        ...router.query,
        page: page + 1,
      },
    });
  };
  const handlePrePage = () => {
    if (page === 1) {
      return;
    } else {
      router.push({
        query: {
          ...router.query,
          page: page - 1,
        },
      });
    }
  };
  const handlePageChange = (value: string) => {
    router.push({
      query: {
        ...router.query,
        sort: value,
      },
    });
  };
  const handlePageSizeChange = (value: string) => {
    router.push({
      query: {
        ...router.query,
        pageSize: value,
      },
    });
  };
  const productListRedux = useAppSelector((state) => state.counter);
  const handleDispatch = () => {
    dispatch(increment(productListResponse.data));
  };
  const dispatch = useAppDispatch();
  return (
    <>
      <p>{JSON.stringify(productListRedux)}</p>
      <button onClick={handleDispatch}>Dispatch</button>
      Sắp xếp theo
      <Select
        placeholder="Sắp xếp theo"
        style={{ width: 200 }}
        onChange={handlePageChange}
        options={[
          { value: "createdAt:desc", label: "Mới nhất" },
          { value: "createdAt:asc", label: "Cũ nhất" },
          { value: "price:asc", label: "Giá tăng dần" },
          { value: "price:desc", label: "Giá giảm dần" },
        ]}
      />
      {data?.data.map((product: Product) => (
        <Link href={`/products/${product.attributes.slug}`} key={product.id}>
          <p>{product.attributes.name}</p>
        </Link>
      ))}
      <button
        className="p-2 m-2 bg-blue-300 rounded-lg"
        onClick={handlePrePage}
      >
        Previous
      </button>
      <span>1</span>
      <button
        className="p-2 m-2 bg-blue-300 rounded-lg"
        onClick={handleNextPage}
      >
        Next
      </button>
      <p>Page Size</p>
      <Select
        placeholder="Hiển thị"
        style={{ width: 200 }}
        onChange={handlePageSizeChange}
        options={[
          { value: "2", label: "2 sản phẩm/trang" },
          { value: "3", label: "3 sản phẩm/trang" },
          { value: "4", label: "4 sản phẩm/trang" },
        ]}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  productListResponse: ResponseApi<any>;
}> = async (context) => {
  const res = await productApi.getProduct({
    populate: "*",
    "pagination[page]": 1,
    "pagination[pageSize]": 3,
  });
  const productListResponse = await res;
  return {
    props: {
      productListResponse,
    },
  };
};
