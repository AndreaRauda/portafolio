
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Información inválida." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 80 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanEmail.length > 120 ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 1000
    ) {
      return NextResponse.json(
        { success: false, message: "Revisa los datos del formulario." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, message: "Falta configurar la clave de correo." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: ["raudaandrea055@gmail.com"],
      replyTo: cleanEmail,
      subject: `Nuevo mensaje de ${cleanName}`,
      text: `Nombre: ${cleanName}\nCorreo: ${cleanEmail}\n\nMensaje:\n${cleanMessage}`,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Error del servidor:", error);
    return NextResponse.json(
      { success: false, message: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
