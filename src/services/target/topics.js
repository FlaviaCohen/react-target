import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const topicsApi = api.injectEndpoints({
  endpoints: builder => ({
    getTopics: builder.query({
      query: () => ({
        url: endpoints.TOPICS,
      }),
    }),
  }),
});

export const { useGetTopicsQuery } = topicsApi;
