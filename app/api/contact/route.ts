import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if running in production (GitHub Pages)
    const isProduction = process.env.NODE_ENV === "production";
    
    if (isProduction) {
      // In production, we can't send emails directly from GitHub Pages
      // But we can trigger a GitHub Actions workflow to handle the email
      try {
        // Trigger the GitHub Actions workflow
        const workflowResponse = await fetch("https://api.github.com/repos/BlambrechtCodes/blambrechtcodes.github.io/actions/workflows/contact-form-handler.yml/dispatches", {
          method: "POST",
          headers: {
            "Authorization": `token ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
            "Accept": "application/vnd.github.v3+json"
          },
          body: JSON.stringify({
            ref: "main",
            inputs: {
              name: name,
              email: email,
              subject: subject,
              message: message
            }
          })
        });

        if (workflowResponse.ok) {
          console.log("GitHub Actions workflow triggered successfully for:", name);
          return NextResponse.json({
            success: true,
            message: "Message received! I'll get back to you soon.",
            note: "Email will be sent via GitHub Actions workflow"
          });
        } else {
          console.error("Failed to trigger GitHub Actions workflow:", workflowResponse.status);
          // Fall back to logging if workflow fails
          console.log("Contact form submitted (production mode - workflow failed):", {
            name,
            email,
            subject,
            message: message.substring(0, 100) + "..."
          });
          
          return NextResponse.json({
            success: true,
            message: "Message received! I'll get back to you soon.",
            note: "Email service temporarily unavailable - check Actions logs for submissions"
          });
        }
      } catch (error) {
        console.error("Error triggering GitHub Actions workflow:", error);
        // Fall back to logging if workflow fails
        console.log("Contact form submitted (production mode - workflow error):", {
          name,
          email,
          subject,
          message: message.substring(0, 100) + "..."
        });
        
        return NextResponse.json({
          success: true,
          message: "Message received! I'll get back to you soon.",
          note: "Email service temporarily unavailable - check Actions logs for submissions"
        });
      }
    }

    // Create transporter using Gmail SMTP (matching your Python script)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS, // Send to yourself
      replyTo: email, // So you can reply directly
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            This message was sent through your portfolio contact form at ${new Date().toLocaleString()}.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}