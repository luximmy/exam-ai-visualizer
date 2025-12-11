import { defineStore } from "pinia";
import { ref } from "vue";

export interface Question {
  id: string;
  text: string;
  options?: string[];
  answer?: string;
}

export const useQuestionsStore = defineStore("questions", () => {
  const questions = ref<Question[]>([]);
  const currentQuestion = ref<Question | null>(null);

  const setQuestions = (newQuestions: Question[]) => {
    questions.value = newQuestions;
  };

  const setCurrentQuestion = (question: Question | null) => {
    currentQuestion.value = question;
  };

  return {
    questions,
    currentQuestion,
    setQuestions,
    setCurrentQuestion,
  };
});
