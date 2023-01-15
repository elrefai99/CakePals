import sgMail from '@sendgrid/mail'

export const WelcomNewUser = (email: string, username: string) => {
    const Send_Email_Api_Key = process.env.Send_Email_Api_Key as string
    sgMail.setApiKey(Send_Email_Api_Key)
    const message = {
        to: `${email}`,
        from: 'mohamed.mostafa0699@gmail.com',
        subject: 'Hello from CakePals',
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