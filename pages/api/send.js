const sgMail = require('@sendgrid/mail')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // console.log(process.env.SENDGRID_API_KEY)

  const { name, email, message } = req.body

  const content = {
    to: 'chris.tham@hellotham.com',
    from: email,
    subject: `Learning NextJS Message From ${name} - ${email}`,
    text: message,
    html: `<p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    // console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
