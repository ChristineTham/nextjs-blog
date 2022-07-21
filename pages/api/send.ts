import { NowRequest, NowResponse } from '@vercel/node'
import sgMail from '@sendgrid/mail'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, import/no-anonymous-default-export
export default async (req: NowRequest, res: NowResponse) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "0")

  const { email, subject, message } = req.body

  const content = {
    to: 'learning.jamstack@hellotham.com',
    from: email,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    res.status(400).send('Message not sent.')
  }
}
