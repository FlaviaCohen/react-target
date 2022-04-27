import endpoints from 'constants/endpoints';
import { api } from 'services/api';

const contactApi = api.injectEndpoints({
  endpoints: builder => ({
    contact: builder.mutation({
      query: body => ({
        url: endpoints.CONTACT,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useContactMutation,
  endpoints: {
    contact: { marchFulfilled: contactFulfilled },
  },
} = contactApi;
