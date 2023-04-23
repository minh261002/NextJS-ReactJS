/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Product } from "@/models/products";
import productApi from "../../api/product-api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ResponseApi, ResponseApiDetail } from "@/models/utils";
import Head from "next/head";
import Seo from "@/component/Seo";

type ProductDetailPage = {
  product: ResponseApiDetail<Product>;
};

export default function BlogPage({ product }: ProductDetailPage) {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;
  if (!product) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { slug } = router.query;
  if (!slug) return;
  const { data } = useQuery<any>({
    queryKey: ["product", slug],
    queryFn: () => {
      return productApi.getProductDetail(slug.toString());
    },
    initialData: product,
  });

  return (
    <>
      <Seo
        data={{
          title: product.data.attributes.name,
          description: "This is description of product",
          thumbnailUrl: product.data.attributes.image.data[0].attributes.url,
          url: product.data.attributes.slug,
        }}
      ></Seo>

      <p>{data.data.attributes.name}</p>
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await productApi.getProduct({
    populate: "*",
    "pagination[page]": 1,
    "pagination[pageSize]": 2,
  });

  const paths = data.map((product: Product) => ({
    params: { slug: product.attributes.slug },
  }));
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
};
export const getStaticProps: GetStaticProps<{
  product: ResponseApi<any>;
}> = async (context) => {
  try {
    const { data: productList } = await productApi.getProduct({
      populate: "*",
    });
    const slug = context.params?.slug;
    if (!slug) return { notFound: true };
    const product = await productApi.getProductDetail(slug.toString());
    return {
      props: {
        product,
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
};
