import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaComments, FaTimes } from "react-icons/fa";
import { sendChatMessage } from "../GeminiModel";
import { useI18n } from "../hooks/useI18n";
import { motion, AnimatePresence } from "framer-motion";

const getQuestions = (t) => [
  t("AI.questions.tech") || "What technologies do you use?",
  t("AI.questions.project") || "Tell me about your HOLCIM internship",
  t("AI.questions.microservices") || "What do you know about microservices?",
  t("AI.questions.study") || "Where did you study?",
  t("AI.questions.internships") || "Tell me about your professional experience",
  t("AI.questions.devops") || "What DevOps tools do you use?",
  t("AI.questions.insurance") || "How did you build the Insurance Platform?",
  t("AI.questions.frontend") || "Which frontend frameworks do you prefer?",
];

const AIChat = () => {
  const { t, i18n } = useI18n();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [exampleQuestions, setExampleQuestions] = useState([]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);


  useEffect(() => {
    setMessages([{ role: "assistant", content: t("AIssistant.content") }]);
  }, [i18n.language, t]);

  useEffect(() => {
    if (isOpen) {
      const questions = getQuestions(t);
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      setExampleQuestions(shuffled.slice(0, 4));
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = useCallback(async (customInput) => {
    const question = customInput || input;
    if (!question.trim()) return;

    const newMessages = [...messages, { role: "user", content: question }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

   try {
  const aiResponse = await sendChatMessage(
    question,
    messages,
    t("AIssistant.description")
  );
  setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
} catch (error) {
  console.error("AI Chat Error:", error);
  setMessages([...newMessages, {
    role: "assistant",
    content: t("AI.errorGeneric")
  }]);
} finally {
  setIsTyping(false);
}

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: t("AIssistant.description") }],
          },
          ...messages.map((msg) => ({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }],
          })),
        ],
      });

      const result = await chat.sendMessage(question);
      const aiResponse = result.response.text();

      setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages([...newMessages, { 
        role: "assistant", 
        content: t("AI.errorGeneric")
      }]);
    } finally {
      setIsTyping(false);
    }
  }, [input, messages, t]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-stone-900 text-white p-4 rounded-2xl shadow-2xl shadow-stone-900/30 hover:bg-stone-800 transition-colors"
            aria-label="Open chat"
          >
            <div className="relative">
              <FaComments size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 sm:inset-auto sm:bottom-0 sm:right-0 sm:w-[420px] sm:h-[600px] bg-white shadow-2xl flex flex-col overflow-hidden sm:rounded-3xl sm:m-6"
          >
            {/* Header */}
            <div className="bg-stone-900 px-5 py-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <FaRobot size={18} />
                </div>
                <div>
                  <div className="font-bold text-sm">Chaymae AI</div>
                  <div className="text-xs text-stone-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    {t("AI.online")}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-stone-800 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaRobot className="text-orange-600 text-sm" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-stone-900 text-white rounded-br-md"
                        : "bg-white text-stone-700 rounded-bl-md shadow-sm border border-stone-100"
                    }`}
                  >
                    <span className="whitespace-pre-wrap">{msg.content}</span>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FaUser className="text-stone-600 text-sm" />
                    </div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FaRobot className="text-orange-600 text-sm" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-stone-100">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              {!isTyping && messages.length === 1 && exampleQuestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <p className="text-stone-400 text-xs mb-3 font-medium uppercase tracking-wider">
                    {t("AI.suggestions")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-2 rounded-xl hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-all duration-200 text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-4 bg-white border-t border-stone-100">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t("AI.placeholder")}
                className="flex-1 px-4 py-3 bg-stone-100 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all"
              />
              <motion.button
                onClick={() => sendMessage()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!input.trim()}
                className="w-11 h-11 bg-stone-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <FaPaperPlane size={14} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChat;