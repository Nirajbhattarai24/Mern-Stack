import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApiSlice = createApi({
  reducerPath: "authApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/auth" }),
  endpoints: (build) => ({
    Login: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    getAuthUser: build.query({
      query: () => ({
        url: "/auth-user",
        method: "GET",
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetAuthUserQuery } = authApiSlice;

//we do mutation for create update delete, and for read only we do build.query then query
