// // pages/api/sendEmail.js
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     // Setup transporter with your email credentials
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "instagramyhoga@gmail.com",
//         pass: "YHOGA12345",
//       },
//     });

//     // Setup email options
//     const mailOptions = {
//       from: "instagramyhoga@gmail.com",
//       to: "dimasfiebry@gmail.com",
//       subject: `Collaboration Request from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Error sending email", error });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
