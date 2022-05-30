import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const topicsApi = api.injectEndpoints({
  endpoints: builder => ({
    topics: builder.query({
      query: () => ({
        url: endpoints.TOPICS,
      }),
    }),
  }),
});

export const {
  useTopicsQuery,
  endpoints: {
    topics: { matchFulfilled: topicsFulfilled },
  },
} = topicsApi;
