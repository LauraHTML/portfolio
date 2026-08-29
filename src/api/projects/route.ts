import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const projetos = await db
      .collection("projetos")
      .find({})
      .toArray();

    return NextResponse.json(projetos);
  } catch {
    return NextResponse.json(
      { error: "Falha ao buscar projetos" },
      { status: 500 }
    );
  }
}


