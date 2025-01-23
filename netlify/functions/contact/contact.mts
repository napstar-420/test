import dotenv from 'dotenv';
import mongoose from 'mongoose';
import type { Config, Context } from '@netlify/functions';

dotenv.config();

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
    });
  }

  const data = await req.formData();
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: 'Please provide all fields' }),
      { status: 400 }
    );
  }

  try {
    await mongoose.connect(process.env.DB_CONN!);

    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    return new Response(
      JSON.stringify({ message: 'Thanks for contacting me, I will get back to you soon' }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    });
  }
};

export const config: Config = {
  path: '/api/contact',
};
