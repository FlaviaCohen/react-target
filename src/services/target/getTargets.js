import endpoints from 'constants/endpoints';
import { api, tagTypes } from 'services/api';

const targetsApi = api.injectEndpoints({
  endpoints: builder => ({
    targets: builder.query({
      query: () => ({
        url: endpoints.TARGETS,
        method: 'GET',
      }),
      providesTags: [tagTypes.TARGETS],
    }),
  }),
});

export const {
  useTargetsQuery,
  endpoints: {
    targets: { matchFulfilled: targetsFulfilled },
  },
} = targetsApi;
