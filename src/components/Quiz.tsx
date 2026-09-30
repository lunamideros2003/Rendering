"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/quiz";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentQuestion];
  const answered = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  function choose(index: number) {
    if (answered) return;
    setSelected(index);
    if (index === question.correctAnswer) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (currentQuestion + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setCurrentQuestion((i) => i + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const message =
      score === quizQuestions.length
        ? "¡Increíble! Eres un verdadero paleontólogo 🏆"
        : score >= quizQuestions.length / 2
          ? "¡Bien hecho! Sigue explorando el museo 🦕"
          : "Buen intento. Visita las salas y vuelve a intentarlo 📚";
    return (
      <div className="rounded-2xl bg-white p-8 shadow-md border border-arena-200 text-center">
        <p className="text-6xl">🎉</p>
        <h2 className="mt-4 text-2xl font-bold text-selva-900">
          {score} / {quizQuestions.length} aciertos
        </h2>
        <p className="mt-2 text-tierra-700">{message}</p>
        <button
          onClick={restart}
          className="mt-6 rounded-full bg-selva-700 px-6 py-2.5 font-semibold text-white hover:bg-selva-600 transition-colors"
        >
          Reiniciar quiz
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-arena-200">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-selva-700">
          Pregunta {currentQuestion + 1} de {quizQuestions.length}
        </span>
        <span className="rounded-full bg-selva-100 px-3 py-1 font-semibold text-selva-800">
          ⭐ {score} puntos
        </span>
      </div>

      <div className="mt-3 h-2 rounded-full bg-crema-100 overflow-hidden">
        <div
          className="h-full bg-selva-600 transition-all"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <h2 className="mt-5 text-xl md:text-2xl font-bold text-selva-900">
        {question.question}
      </h2>

      <ul className="mt-5 space-y-3">
        {question.options.map((option, i) => {
          let style =
            "border-arena-200 hover:border-selva-600 hover:bg-selva-50";
          if (answered) {
            if (i === question.correctAnswer) style = "border-green-600 bg-green-50";
            else if (i === selected) style = "border-red-500 bg-red-50";
            else style = "border-arena-200 opacity-60";
          }
          return (
            <li key={option}>
              <button
                onClick={() => choose(i)}
                disabled={answered}
                className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium transition-colors ${style}`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>

      {answered && (
        <div
          className={`mt-5 rounded-xl p-4 text-sm ${
            isCorrect ? "bg-green-50 text-green-900" : "bg-red-50 text-red-900"
          }`}
        >
          <p className="font-bold">{isCorrect ? "✅ ¡Correcto!" : "❌ Casi..."}</p>
          <p className="mt-1">{question.explanation}</p>
          <button
            onClick={next}
            className="mt-3 rounded-full bg-selva-700 px-5 py-2 font-semibold text-white hover:bg-selva-600 transition-colors"
          >
            {currentQuestion + 1 >= quizQuestions.length
              ? "Ver resultado"
              : "Siguiente pregunta →"}
          </button>
        </div>
      )}
    </div>
  );
}
