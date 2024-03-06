import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass: password,
    },
});

await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
        if (error) {
            console.log("[Nodemailer Verify Error]: ", error);
            reject(error);
        } else {
            resolve(success);
        }
    });
});

export const mailOptions = {
    from: email,
    to: email,
};
