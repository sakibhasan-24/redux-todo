import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi", // Key
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bike-shop-server-weld.vercel.app/api/products",
  }),
  tagTypes: ["Products"], // cache invalidation
  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query({
      query: () => "",
      providesTags: ["Products"], // Cache tag
    }),

    // Fetch a single product by ID
    getProductById: builder.query({
      query: (id: string) => `products/${id}`,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),

    // Update an existing product

    // Delete a product
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
} = productsApi;
