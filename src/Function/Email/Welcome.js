import sgMail from '@sendgrid/mail'

export const WelcomeEmail = (email, username) => {
    const API_Email = process.env.Send_Email_Api_Key
    sgMail.setApiKey(API_Email)

    const message = {
        to: `${email}`,
        from: process.env.Admin_Email,
        subject: 'Hello from Wedding.cs74',
        html: `
                            <strong>
                                Welocme to the app, ${username}. Let me know how you get along with the app.
                            </strong>
                        `,
    }

    sgMail
        .send(message)
        .then(() => {
            console.log('Email Send ...')
        })
        .catch((err) => console.log(err))
}