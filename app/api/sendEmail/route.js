import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../config/nodemailer";

export async function POST(req, res) {
    if (req.method !== "POST") {
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    const data = await req.json();

    if (!data || !data.name || !data.email || !data.message) {
        return NextResponse.json({ message: "Bad request" }, { status: 400 });
    }

    try {
        const mail = {
            ...mailOptions,
            subject: "Personal Site Inquiry",
            html: `
                <li> email: ${data.email} </li>
                <li> title: ${data.name}</li>
                <li> message: ${data.message}</li> 
            `,
        };

        await transporter.sendMail(mail, (err, res) => {
            if (err) {
                console.log("[Nodemailer Transport Error]: ", err);

                return NextResponse.json(
                    { message: "Failed to Send Email" },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { message: "Email Sent Successfully" },
                { status: 200 }
            );
        });
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to Send Email" },
            { status: 500 }
        );
    }
}
