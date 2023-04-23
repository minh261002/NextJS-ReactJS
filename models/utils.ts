export interface ResponseApi<Data> {
  [x: string]: any;
  data: Data[] | Data;
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
    date?: string;
  };
}

export interface ResponseApiDetail<Data> {
  [x: string]: any;
  data: Data;
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
    date?: string;
  };
}
