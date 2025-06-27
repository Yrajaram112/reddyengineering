// import { client } from '@/lib/sanity';
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
        return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
      }

    // // 1. Save to Sanity
    // await client.create({
    //   _type: 'contactForm',
    //   name,
    //   email,
    //   phone,
    //   message,
    //   createdAt: new Date().toISOString(),
    // });

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      // host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,        
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,  
      },
    });

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: `Thanks for reaching out, ${name}! 🏗️ Reedy Engineering has received your inquiry.`,
  html: `
    <span style="display:none;">
      Thank you for contacting Reedy Engineering. We've received your inquiry and will get back to you shortly!
    </span>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Thank You - Reedy Engineering</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
      <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <tr style="background-color: #004466;">
          <td style="padding: 20px; text-align: center;">
            <img src="https://www.reedyengineering.com/_next/image?url=%2Freedy_logo.png&w=384&q=75" alt="Reedy Engineering Logo" style="max-width: 180px;">
          </td>
        </tr>
        <tr>
          <td style="padding: 30px;">
            <h2 style="color: #004466;">Thanks for reaching out!</h2>
            <p style="font-size: 16px; color: #333;">
              Dear ${name},<br><br>
              We've received your inquiry and appreciate your interest in <strong>Reedy Engineering</strong>. One of our team members will review your project details and get back to you as soon as possible.
            </p>
            <p style="font-size: 16px; color: #333;">
              Whether it's a residential, roadway, or structural project — we're here to build it right, from the ground up.
            </p>

            <blockquote style="font-style: italic; color: #555; border-left: 4px solid #004466; padding-left: 15px; margin: 20px 0;">
              "Engineering Solutions for a Better Tomorrow."
            </blockquote>

            <p style="font-size: 16px; color: #333;">
              If you have more details to share, feel free to reply to this email. We're always happy to help!
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://reedyengineering.com" style="background-color: #004466; color: white; text-decoration: none; padding: 12px 24px; border-radius: 25px; font-weight: bold; font-size: 16px;">Visit Our Website</a>
            </div>

            <p style="font-size: 14px; color: #666;">
              Thank you again for choosing Reedy Engineering. We're excited to collaborate with you.
            </p>

            <p style="font-size: 14px; color: #666; margin-top: 40px;">
              Best regards,<br>
              <strong>The Reedy Engineering Team</strong><br>
              <em>Serving Upstate South Carolina and beyond</em>
            </p>
          </td>
        </tr>
        <tr style="background-color: #f0f0f0; text-align: center;">
          <td style="padding: 20px; font-size: 12px; color: #888;">
            © ${new Date().getFullYear()} Reedy Engineering, LLC. All rights reserved.<br>
            Greenville, South Carolina
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
});



const adminMessage = `
  <p><img src="https://www.reedyengineering.com/_next/image?url=%2Freedy_logo.png&w=384&q=75" alt="Reedy Engineering Logo" height="40"/></p>

  <p>Dear Reedy Engineering Team,</p>

  <p>A new project inquiry has been submitted through the website. Please review the details and get in touch with the client promptly.</p>

  <ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Phone:</strong> ${phone}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Company:</strong> ${company || 'N/A'}</li>
    <li><strong>Project Type:</strong> ${projectType}</li>
    <li><strong>Message:</strong> ${message}</li>
  </ul>

  <p>Let's build something strong together! 🏗️</p>

  <p>— Reedy Engineering Web Team</p>
`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "shah.prabhash@gmail.com",
      subject: "New Project Inquiry - Reedy Engineering Website",
      html: adminMessage
      });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error in contact API:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}


