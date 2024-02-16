import emailjs from '@emailjs/browser';

export default async function handler(req, res) {
    if (req.method === 'POST') {

      const { senderEmail, message } = req.body;
  
      try {
        const emailParams = {
          user_id: process.env.EMAILJS_USER_ID,
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          template_params: {
            from_name: name,
            'message': message,
          },
        };
  
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailParams),
        });
  
        if (!response.ok) throw new Error('Email sending failed');
  
        res.status(200).json({ message: 'Email sent successfully!' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  