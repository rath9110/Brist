"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import OptionTile from "@/components/OptionTile";
import type { QuizAnswers } from "@/lib/types";
import { QUESTIONS } from "@/lib/questions";
import { computeScores } from "@/lib/scoring";

const TOTAL = QUESTIONS.length;

const EMPTY_ANSWERS: QuizAnswers = {
  q1_goal: "",
  q2_demographics: "",
  q3_energy_pattern: "",
  q4_sleep: "",
  q5_diet: [],
  q6_training: "",
  q6_frequency: "",
  q7_symptoms: [],
  q8_current_supplements: "",
};

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(EMPTY_ANSWERS);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");

  // Q2 composite state
  const [demoAge, setDemoAge] = useState("");
  const [demoSex, setDemoSex] = useState("");

  const question = QUESTIONS[step];
  const answerKey = question.id as keyof QuizAnswers;

  function canAdvance(): boolean {
    if (question.type === "composite") {
      return demoAge !== "" && demoSex !== "";
    }
    if (question.type === "multi_select") {
      if (question.id === "q5_diet") return answers.q5_diet.length > 0;
      return answers.q7_symptoms.length > 0;
    }
    return (answers[answerKey] as string) !== "";
  }

  function animateForward(updatedAnswers: QuizAnswers) {
    if (step + 1 >= TOTAL) {
      const result = computeScores(updatedAnswers);
      sessionStorage.setItem("brist_answers", JSON.stringify(updatedAnswers));
      sessionStorage.setItem("brist_results", JSON.stringify(result));
      router.push("/results");
      return;
    }
    setDirection("out");
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setDirection("in");
      setAnimating(false);
    }, 150);
  }

  function advance() {
    if (!canAdvance() || animating) return;
    animateForward(answers);
  }

  function goBack() {
    if (step === 0 || animating) return;
    setDirection("out");
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s - 1);
      setDirection("in");
      setAnimating(false);
    }, 150);
  }

  // Q2: sync composite selections into answers
  useEffect(() => {
    if (demoAge && demoSex) {
      setAnswers((prev) => ({
        ...prev,
        q2_demographics: `${demoSex}_${demoAge}`,
      }));
    }
  }, [demoAge, demoSex]);

  function toggleDiet(value: string) {
    setAnswers((prev) => {
      const current = prev.q5_diet;
      if (current.includes(value)) {
        return { ...prev, q5_diet: current.filter((v) => v !== value) };
      }
      return { ...prev, q5_diet: [...current, value] };
    });
  }

  function toggleSymptom(value: string) {
    setAnswers((prev) => {
      const current = prev.q7_symptoms;
      if (value === "none") {
        return { ...prev, q7_symptoms: ["none"] };
      }
      const without = current.filter((v) => v !== "none" && v !== value);
      if (current.includes(value)) {
        return { ...prev, q7_symptoms: without };
      }
      return { ...prev, q7_symptoms: [...without, value] };
    });
  }

  const animClass = animating
    ? direction === "out"
      ? "question-exit"
      : "question-enter"
    : "question-enter";

  return (
    <main className="min-h-screen flex flex-col">
      <ProgressBar current={step + 1} total={TOTAL} />

      {/* Back button */}
      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="absolute top-6 left-6 z-10 font-sans text-[14px] text-text-muted hover:text-text transition-colors"
        >
          ← Tillbaka
        </button>
      )}

      <div className={`flex-1 overflow-y-auto ${animClass}`}>
        <div className="min-h-full flex flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-content">
            {/* Question */}
            <h2 className="font-serif text-[24px] text-text mb-8 leading-snug">
              {question.question}
            </h2>

            {/* Single select — auto-advances on pick */}
            {question.type === "single_select" && (
              <div className="flex flex-col gap-3">
                {question.options!.map((opt) => (
                  <OptionTile
                    key={opt.key}
                    label={opt.label}
                    selected={(answers[answerKey] as string) === opt.key}
                    onClick={() => {
                      const updated = { ...answers, [answerKey]: opt.key };
                      setAnswers(updated);
                      setTimeout(() => animateForward(updated), 120);
                    }}
                  />
                ))}
              </div>
            )}

            {/* Composite (Q2 — age + sex) */}
            {question.type === "composite" && (
              <div className="flex flex-col gap-6">
                {question.rows!.map((row) => (
                  <div key={row.key}>
                    <p className="font-sans text-[14px] text-text-muted mb-3">
                      {row.label}
                    </p>
                    <div className="flex flex-col gap-2">
                      {row.options.map((opt) => {
                        const selected =
                          row.key === "age" ? demoAge === opt.key : demoSex === opt.key;
                        return (
                          <OptionTile
                            key={opt.key}
                            label={opt.label}
                            selected={selected}
                            onClick={() =>
                              row.key === "age"
                                ? setDemoAge(opt.key)
                                : setDemoSex(opt.key)
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={advance}
                  disabled={!canAdvance()}
                  className="btn-cta mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Fortsätt →
                </button>
              </div>
            )}

            {/* Multi-select (Q5 diet + Q7 symptoms) */}
            {question.type === "multi_select" && (
              <div className="flex flex-col gap-3">
                {question.options!.map((opt) => {
                  const selected =
                    question.id === "q5_diet"
                      ? answers.q5_diet.includes(opt.key)
                      : answers.q7_symptoms.includes(opt.key);
                  return (
                    <OptionTile
                      key={opt.key}
                      label={opt.label}
                      selected={selected}
                      onClick={() =>
                        question.id === "q5_diet"
                          ? toggleDiet(opt.key)
                          : toggleSymptom(opt.key)
                      }
                    />
                  );
                })}
                <button
                  type="button"
                  onClick={advance}
                  disabled={!canAdvance()}
                  className="btn-cta mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Fortsätt →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
