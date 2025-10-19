import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "edge";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullName, rooms, phoneNumber, hasOwnStuff, peopleNumber, message } =
      await request.json();

    const data = await resend.emails.send({
      from: "Contact Form <noreply@mopify.uz>",
      to: "mopifyuz@gmail.com", // Your email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Имя Фамилия:</strong> ${fullName}</p>
        <p><strong>Номер телефона:</strong> ${phoneNumber}</p>
        <p><strong>Количество комнат:</strong> ${rooms}</p>
        <p><strong>Чистящие средства:</strong> ${
          hasOwnStuff ? "<p>Да</p>" : "<p>Нет</p>"
        }</p>
         <p><strong>Человек:</strong> ${peopleNumber}</p>
         <p><strong>Дополнительная информация:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
