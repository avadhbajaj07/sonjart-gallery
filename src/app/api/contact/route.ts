import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, artwork } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Configure the Hostinger SMTP transporter safely using environment variables
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_EMAIL,     // e.g., info@sonjart.ch / info@shalonasart.ch
        pass: process.env.SMTP_PASSWORD,  // Email password
      },
    });

    const destinationEmail = process.env.RECEIVER_EMAIL || process.env.SMTP_EMAIL;

    // Email Subject based on whether it's an artwork inquiry or a general contact form
    const subject = artwork 
      ? `Artwork Inquiry: ${artwork} - from ${name}` 
      : `New Website Message from ${name}`;

    // Email body content
    const htmlContent = `
      <h3>New Message from SONJ ART Website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${artwork ? `<p><strong>Inquiring About:</strong> ${artwork}</p>` : ''}
      <br />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    // Send the email to the destination (client's Gmail)
    const info = await transporter.sendMail({
      from: `"SONJ ART Website" <${process.env.SMTP_EMAIL}>`, // Sender address must match the authenticated user
      to: destinationEmail, // The client's Gmail address where they want to receive emails
      replyTo: email,       // Doing this allows the client to click 'Reply' and reply directly to the customer
      subject: subject,
      html: htmlContent,
    });

    // Generate a sleek, stylish auto-reply email for the customer
    const customerSubject = artwork 
      ? `Thank you for your interest in ${artwork} — SONJ ART` 
      : `Thank you for your message — SONJ ART`;

    const customerHtmlContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333333; background-color: #ffffff; line-height: 1.6;">
        
        <!-- Header / Logo Area -->
        <div style="text-align: center; border-bottom: 1px solid #eeeeee; padding-bottom: 30px; margin-bottom: 30px;">
          <h1 style="font-weight: 300; letter-spacing: 0.2em; font-size: 24px; color: #000000; margin: 0;">SONJ ART</h1>
          <p style="font-size: 12px; letter-spacing: 0.1em; color: #888888; text-transform: uppercase; margin-top: 10px;">Contemporary Art Gallery</p>
        </div>

        <!-- Main Content -->
        <p style="font-size: 16px;">Dear ${name},</p>
        
        <p style="font-size: 16px;">
          ${artwork 
            ? `Thank you so much for your interest in acquiring <strong>${artwork}</strong>. We have successfully received your inquiry.` 
            : `Thank you for reaching out to us. We have successfully received your message.`}
        </p>

        <p style="font-size: 16px;">
          Our curation team will review your message and get back to you shortly with more details and next steps. We deeply appreciate your interest in our artists' collection.
        </p>

        <p style="font-size: 16px; margin-top: 40px; margin-bottom: 60px;">
          Warm regards,<br />
          <strong>Sonja Schlagel & The SONJ ART Team</strong>
        </p>

        <!-- Footer -->
        <div style="border-top: 1px solid #eeeeee; padding-top: 30px; text-align: center; font-size: 12px; color: #888888;">
          <p style="margin: 0;"><strong>Kunstraum 15</strong><br />Zeltweg 15, 8032 Zürich, Switzerland</p>
          <p style="margin-top: 10px;">
            <a href="https://sonjart.ch" style="color: #888888; text-decoration: none;">www.sonjart.ch</a> | 
            <a href="mailto:info@sonjart.ch" style="color: #888888; text-decoration: none;">info@sonjart.ch</a>
          </p>
        </div>
      </div>
    `;

    // Send the auto-reply to the user who filled the form
    await transporter.sendMail({
      from: `"SONJ ART Gallery" <${process.env.SMTP_EMAIL}>`,
      to: email, // The customer's email
      subject: customerSubject,
      html: customerHtmlContent,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send the message. Please try again later.' }, { status: 500 });
  }
}
