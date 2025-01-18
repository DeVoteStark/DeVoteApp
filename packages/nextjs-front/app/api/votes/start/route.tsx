// app/api/vote/route.js

import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { generateResponse } from '@/lib/openai/openaiService';

interface Message {
  role: 'system' | 'assistant' | 'user';
  content: string;
}

interface Session {
  messages: Message[];
}

// Initialize userSessions globally
const userSessions: Record<string, Session> = {};

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { start, lng, sessionId, userMessage }: {
      start: boolean;
      lng?: string;
      sessionId?: string;
      userMessage?: string;
    } = body;

    if (start) {
      // Start Conversation Logic
      if (!lng) {
        return NextResponse.json({ error: "Missing 'lng' parameter" }, { status: 400 });
      }

      const additionalContent = "La implementación de una tarifa gratuita para el transporte público busca reducir la contaminación, mejorar la accesibilidad y fomentar la equidad social al eliminar las barreras económicas para acceder a servicios básicos. A través de la reducción del uso de vehículos particulares, se promueve una movilidad urbana más sostenible, disminuyendo la congestión y mejorando la calidad del aire. Sin embargo, para su éxito es crucial asegurar fuentes de financiación sostenibles, como impuestos locales o subsidios, y mejorar la infraestructura para evitar la sobrecarga del sistema. Ejemplos internacionales, como Tallin y Luxemburgo, muestran los beneficios de esta medida, aunque se requiere una planificación cuidadosa y la participación ciudadana para su implementación efectiva.";

      const newSessionId = uuidv4(); // Generate a unique session ID

      const messages: Record<string, Message[]> = {
        es: [
          {
            role: 'system',
            content: `
              Eres Civitus, un asistente especializado en votaciones municipales.
              Tu objetivo es proporcionar información clara y objetiva sobre los temas de votación municipal, ayudando al usuario a tomar decisiones informadas. Tienes acceso al contexto completo de la votación desde el inicio, el cual es: ${additionalContent}.

              Flujo de interacción: ...
            `,
          },
          {
            role: 'assistant',
            content: `
              {
                "hasContext": true,
                "hasVoted": false,
                "providingDetails": false,
                "textResponse": "¡Hola! Soy Civitus, tu asistente que te ayudará en este proceso de votación, ahora te contaré lo que necesitas saber: Hoy estamos votando sobre la implementación de un programa de transporte público gratuito en la ciudad. El objetivo es reducir la congestión vehicular y fomentar el uso del transporte colectivo. ¿Te gustaría que te explique los pros y contras antes de emitir tu voto?"
              }
            `,
          },
        ],
      };

      const selectedMessages = messages[lng] || messages['es'];

      userSessions[newSessionId] = {
        messages: selectedMessages,
      };

      console.log("New User Sessions:", userSessions);

      return NextResponse.json({ sessionId: newSessionId, message: selectedMessages[1].content });
    } else {
      // Continue Conversation Logic
      if (!sessionId || !userMessage) {
        return NextResponse.json({ error: "Missing 'sessionId' or 'userMessage' parameter" }, { status: 400 });
      }

      const session = userSessions[sessionId];

      if (!session) {
        return NextResponse.json({ error: "Invalid session ID." }, { status: 400 });
      }

      // Add user's message to the session
      session.messages.push({ role: 'user', content: userMessage });

      // Generate response
      const response = await generateResponse(session.messages);
      console.log('Generated Response:', response);

      // Add assistant's response to the session
      session.messages.push({ role: 'assistant', content: response });

      return NextResponse.json({ message: response });
    }
  } catch (error) {
    console.error("Error in vote handler API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
