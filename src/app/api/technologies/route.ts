import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("repositorio");
    const competencias = await db
      .collection("competencias")
      .find({})
      .toArray();

    return NextResponse.json(competencias);
  } catch(err) {
    console.error(`Erro ao buscar projetos: ${err}`)
    return NextResponse.json(
      { error: "Falha ao buscar projetos" },
      { status: 500 }
    );
  }
}


