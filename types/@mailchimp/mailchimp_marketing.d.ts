


declare module '@mailchimp/mailchimp_marketing' {
  type Config = {
    apiKey?: string
    accessToken?: string
    server?: string
  }

  type SetListMemberOptions = {
    skipMergeValidation: boolean
  }

  export type SetListMemberBody = {
    email_address: string
    status_if_new: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional'
    merge_fields?: { [key: string]: any }
  }

  export type AddListMemberBody = {
    email_address: string
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional'
    merge_fields?: { [key: string]: any }
  }

  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    setConfig: (config: Config) => {},
    ping: {
      get: () => {
        return { health_status: '' }
      }
    },
    lists: {
      setListMember: (
        listId: string,
        subscriberHash: string,
        body: SetListMemberBody,
        opts?: SetListMemberOptions
      ): Promise<void> => {},
      addListMember: (
        listId: string,
        body: AddListMemberBody,
        opts?: SetListMemberOptions
      ): Promise<{ id: string; status: number }> => {
        return { id: '', status: 201 }
      }
    }
  }
}
