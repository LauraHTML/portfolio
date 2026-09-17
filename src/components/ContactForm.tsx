"use client";

import { useState, type FormEventHandler } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MailX, Mail } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("name"),
          message: formData.get("message"),
          email: formData.get("email"),
        }),
      });
      if (!response.ok) {
        setStatus("error");
        setErrorMessage(response.statusText);
      }

      setLoading(false);
    } catch (error: any) {
      setStatus("error");
      setLoading(false);
      throw new Error("Ocorreu um erro no servidor: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-border/50 bg-card p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Nome
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome"
            required
            className="rounded-xl border-border/50 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            required
            className="rounded-xl border-border/50 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground">
          Mensagem
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Escreva aqui a sua mensagem..."
          rows={5}
          required
          className="rounded-xl border-border/50 bg-background text-foreground placeholder:text-muted-foreground h-auto"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={loading}
      >
        <Send className="mr-2 h-4 w-4" />
        {loading ? "Enviando..." : "Enviar mensagem"}
      </Button>

      {status === "success" && (
        <div className="bg-muted p-2 rounded-md border border-secondary flex gap-3">
          <Mail /> <p>Email enviado com sucesso!</p>
        </div>
      )}

      {status === "error" && (
        <div className="bg-muted p-2 rounded-md border border-secondary flex gap-3">
          <MailX />{" "}
          <p>Erro ao enviar email, tente novamente: {errorMessage}.</p>
        </div>
      )}
    </form>
  );
}
