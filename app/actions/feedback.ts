"use server";

import nodemailer from "nodemailer";

export async function submitFeedback(ratingLabel: string, ratingEmoji: string, comment: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const to = process.env.SMTP_TO;

  if (!user || !pass || !to) {
    console.error("Missing SMTP credentials");
    return { success: false, error: "Configuration error" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: user,
    to: to,
    subject: `New Community Feedback: ${ratingLabel} ${ratingEmoji}`,
    text: `
      You have received a new feedback submission:
      
      Rating: ${ratingLabel} ${ratingEmoji}
      Comment: ${comment || "No comment provided"}
      
      ---
      Sent from Yarl Table Toppers Hub
    `,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #F2A900;">New Community Feedback</h2>
        <p><strong>Rating:</strong> ${ratingLabel} ${ratingEmoji}</p>
        <p><strong>Comment:</strong></p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #F2A900;">
          ${comment ? comment.replace(/\n/g, '<br>') : "<i>No comment provided</i>"}
        </div>
        <hr style="margin-top: 20px; border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #888;">Sent from Yarl Table Toppers Hub</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
