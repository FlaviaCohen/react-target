import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const newTargetApi = api.injectEndpoints({
  endpoints: builder => ({
    newTarget: builder.mutation({
      query: body => ({
        url: endpoints.NEW_TARGET,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useNewTargetMutation,
  endpoints: {
    newTarget: { matchFulfilled: newTargetFulfilled },
  },
} = newTargetApi;
