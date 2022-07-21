import { NowRequest, NowResponse } from '@vercel/node'
import mailchimp from '@mailchimp/mailchimp_marketing'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, import/no-anonymous-default-export
export default async (req: NowRequest, res: NowResponse) => {
  const { firstname, lastname, email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX
    })

    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID || "0", {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname
      }
    })

    return res.status(201).send('You have been subscribed: ' + response.id)
  } catch (error) {
    return res
      .status(400)
      .send('An error has occurred. Please contact me at [learning.jamstack@hellotham.com].')
  }
}
