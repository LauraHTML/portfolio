import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    //Pegar os dados enviados
    const body = await request.json();

    const { firstName, email, message } = body;

    //Validar dados
    if (!firstName || !email || !message) {
      console.log("Dados inválidos");
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 },
      );
    }

    console.log("Enviando email:");
    const { data, error } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: "sampaiolaura55@gmail.com",
      subject: "Nova mensagem de contato",
      react: EmailTemplate({ firstName, message, email }),
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Email enviado com sucesso!");
    return NextResponse.json({ data });
  } catch (error: any) {
    console.error("Erro capturado:", error);
    return NextResponse.json(
      { error: error.message || "Erro desconhecido" },
      { status: 500 },
    );
  }
}
