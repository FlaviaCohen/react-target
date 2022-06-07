import endpoints from 'constants/endpoints';
import { api, tagTypes } from 'services/api';

const targetApi = api.injectEndpoints({
  endpoints: builder => ({
    getTargets: builder.query({
      query: () => ({
        url: endpoints.TARGETS,
      }),
      providesTags: tagTypes.TARGETS,
    }),
    addTarget: builder.mutation({
      query: body => ({
        url: endpoints.TARGETS,
        method: 'POST',
        body,
      }),
      invalidatesTags: tagTypes.TARGETS,
    }),
    deleteTarget: builder.mutation({
      query: id => ({
        url: `${endpoints.TARGETS}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: tagTypes.TARGETS,
    }),
  }),
});

export const { useGetTargetsQuery, useAddTargetMutation, useDeleteTargetMutation } = targetApi;
