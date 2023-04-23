export interface Product {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    cpu: string;
    ram: string;
    oldPrice: string;
    quantityAvailable: number;
    price: string;
    slug: string;
    image: {
      data: Image[];
    };
    idBrand: {
      data: Brand[];
    };
    idCategories: {
      data: Category;
    };
  };
}

export interface Image {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

export interface ProductRespone {
  data: Product[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    icon: null;
    slug: string;
  };
}
export interface Brand {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ProductListConfig {
  populate?: string;
  "pagination[page]"?: number;
  "pagination[pageSize]"?: number;
  sort?: "price:desc" | "price:asc" | "createdAt:desc" | "createdAt:asc";
}
