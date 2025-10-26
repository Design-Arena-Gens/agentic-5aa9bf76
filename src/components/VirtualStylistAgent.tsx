"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: string;
  role: "client" | "agent";
  content: string;
  timestamp: Date;
};

const suggestions = [
  "I’m attending a royal wedding in Abu Dhabi",
  "Suggest breathable fabrics for summer",
  "I need embroidery inspired by desert roses",
  "What accessories pair with midnight velvet?"
];

const agentPersona = {
  name: "Al Thuraya Virtual Stylist",
  greeting:
    "Marhaba. I’m here to compose an abaya that feels like the evening desert breeze. Share your occasion, inspiration, or mood." 
};

const createId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

function craftAgentReply(input: string) {
  const text = input.toLowerCase();

  const responses = [] as string[];

  if (/(wedding|nikah|ceremony|majlis)/.test(text)) {
    responses.push(
      "For ceremonies, we can explore our Luminous Dunes and Midnight Majlis edits. Do you favor cascading embroidery or sculpted silhouettes?"
    );
  }

  if (/(summer|heat|hot|breathable|day)/.test(text)) {
    responses.push(
      "For warmer climates, I recommend pearl dust chiffon or breathable desert suede crepe with satin lining for comfort."
    );
  }

  if (/(embroidery|calligraphy|art|motif|roses|floral)/.test(text)) {
    responses.push(
      "Our artisans can translate your motif into hand-stitched metallic threads with Swarovski accents. Would you like the placement along sleeves, hem, or hijab edge?"
    );
  }

  if (/(accessor|jewelry|belt|handbag|shoes)/.test(text)) {
    responses.push(
      "Accessorizing with mother-of-pearl clutches and tonal stilettos keeps the look refined. I can also arrange complementary oud blends."
    );
  }

  if (/(black|velvet|midnight|navy|dark)/.test(text)) {
    responses.push(
      "Midnight palettes pair beautifully with ombré crystal veils or muted gold piping. Shall I prepare both options for review?"
    );
  }

  if (!responses.length) {
    responses.push(
      "I have noted your vision. Could you share the date, venue, and how you wish the abaya to move as you enter the space?"
    );
  }

  responses.push(
    "Once I gather these notes, I’ll present a mood board, fabric swatches, and an atelier timeline within the hour."
  );

  return responses.join(" ");
}

export function VirtualStylistAgent() {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: createId(),
      role: "agent",
      content: agentPersona.greeting,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const agentTone = useMemo(
    () => ({
      signature: "Truth lies in the drape.",
      responseTime: "Average response: 1m 40s"
    }),
    []
  );

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const clientMessage: Message = {
      id: createId(),
      role: "client",
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, clientMessage]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      const agentMessage: Message = {
        id: createId(),
        role: "agent",
        content: craftAgentReply(content),
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, agentMessage]);
      setIsThinking(false);
    }, 900);
  };

  return (
    <section id="virtual-agent" className="bg-gradient-to-b from-white via-sand-50 to-sand-100 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sand-600">Virtual stylist agent</p>
          <h2 className="mt-4 font-display text-3xl text-ebony sm:text-4xl">
            A conversational couture experience
          </h2>
          <p className="mt-4 text-base text-ebony/70">
            The agent remembers your archives, coordinates ateliers, and can schedule fittings across continents. It harmonizes your inspirations with craftsmanship.
          </p>
          <div className="mt-8 grid gap-3">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => sendMessage(suggestion)}
                className="rounded-full border border-sand-400/70 bg-white/70 px-5 py-3 text-left text-sm text-sand-600 transition hover:border-sand-400 hover:bg-white"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-sand-200/80 bg-white/80 p-6 shadow-[0_26px_60px_-40px_rgba(49,31,21,0.5)] backdrop-blur">
          <div className="flex items-center justify-between rounded-2xl border border-sand-200/70 bg-sand-50/80 px-5 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sand-500">{agentPersona.name}</p>
              <p className="text-sm text-ebony/70">{agentTone.responseTime}</p>
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-sand-500">{agentTone.signature}</span>
          </div>
          <div
            ref={listRef}
            className="mt-5 h-[360px] overflow-y-auto pr-2"
            aria-live="polite"
            role="log"
          >
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-sand-500">
                    {message.role === "agent" ? "Stylist" : "You"} · {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                  <p
                    className={`rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-sm ${
                      message.role === "agent"
                        ? "bg-ebony text-sand-100"
                        : "bg-sand-100 text-ebony"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
              {isThinking && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-sand-500">Stylist · typing</span>
                  <div className="inline-flex items-center gap-2 rounded-3xl bg-ebony px-5 py-4 text-sand-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sand-300 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sand-500" />
                    </span>
                    Weaving your couture story...
                  </div>
                </div>
              )}
            </div>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
            className="mt-5 flex items-center gap-3 rounded-2xl border border-sand-200 bg-white px-4 py-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="flex-1 border-none bg-transparent text-sm text-ebony outline-none placeholder:text-sand-500"
              placeholder="Describe your occasion, color palette, or inspirations..."
            />
            <button
              type="submit"
              className="rounded-full bg-sand-400 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-ebony transition hover:bg-sand-300 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
