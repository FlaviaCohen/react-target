import endpoints from 'constants/endpoints';
import { api, tagTypes } from 'services/api';

const newTargetApi = api.injectEndpoints({
  endpoints: builder => ({
    newTarget: builder.mutation({
      query: body => ({
        url: endpoints.TARGETS,
        method: 'POST',
        body,
      }),
      invalidatesTags: tagTypes.TARGETS,
    }),
  }),
});

export const {
  useNewTargetMutation,
  endpoints: {
    newTarget: { matchFulfilled: newTargetFulfilled },
  },
} = newTargetApi;
