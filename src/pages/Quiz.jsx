import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { quizData } from "../data/quizData";
import QuizCountdown from "../components/QuizCountdown";

export default function Quiz() {

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [countdown, setCountdown] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showQuitModal, setShowQuitModal] =
  useState(false);
  useEffect(() => {

  if (countdown === null) return;

  if (countdown > 0) {

    const beep = new Audio("/Audio/countdown.mp3");

    beep.volume = 0.4;

    beep.play().catch(() => {});

    const timer = setTimeout(() => {

      setCountdown(prev => prev - 1);

    }, 1000);

    return () => clearTimeout(timer);
  }

  if (countdown === 0) {

    const startSound = new Audio(
      "/Audio/success-sound.mp3"
    );

    startSound.volume = 0.6;

    startSound.play().catch(() => {});

    setQuizStarted(true);

    setTimeout(() => {

      setCountdown(null);

    }, 300);
  }

}, [countdown]);

  useEffect(() => {

  if (questions.length === 0) return;

 const quizProgress = {

  currentQuestion,
  score,
  userAnswers,
  correctAnswers,
  timeLeft,
  questions,
  showResult,
  quizStarted

};

  localStorage.setItem(
    "proteksiTrafoQuiz",
    JSON.stringify(quizProgress)
  );

}, [
  currentQuestion,
  score,
  userAnswers,
  correctAnswers,
  timeLeft,
  questions
]);

useEffect(() => {

  const savedQuiz =
    localStorage.getItem("proteksiTrafoQuiz");

  if (savedQuiz) {

    const data = JSON.parse(savedQuiz);
    console.log(data);

   if (data.questions && data.questions.length > 0) {

  setQuestions(data.questions);

} else {

  setQuestions(shuffleArray(quizData));

}

    setCurrentQuestion(
      data.currentQuestion || 0
    );

    setScore(
      data.score || 0
    );

    setUserAnswers(
      data.userAnswers || []
    );

    setCorrectAnswers(
      data.correctAnswers || 0
    );

    setTimeLeft(
      data.timeLeft || 30
    );
    setShowResult(
      data.showResult || false
    );
    setQuizStarted(
      data.quizStarted || false
   );

  } else {

    setQuestions(
      shuffleArray(quizData)
    );

  }

}, []);

  const handleNext = (auto = false) => {

  if (currentQuestion + 1 < questions.length) {

    setCurrentQuestion(prev => prev + 1);

    setSelectedAnswer(null);

    setTimeLeft(30);

  } else {

  setShowResult(true);

  const quizProgress = {
    currentQuestion,
    score,
    userAnswers,
    correctAnswers,
    timeLeft,
    questions,
    showResult: true
  };

  localStorage.setItem(
    "proteksiTrafoQuiz",
    JSON.stringify(quizProgress)
  );

}
};
useEffect(() => {

  if (showResult) return;

  if (timeLeft === 0) {

    handleNext(true);

    return;
  }

  const timer = setTimeout(() => {

    setTimeLeft(prev => prev - 1);

  }, 1000);

  return () => clearTimeout(timer);

}, [timeLeft, showResult]);
  if (questions.length === 0) {
  
  return (

    <div className="min-h-screen bg-[#0e265a] text-white flex items-center justify-center">

      <h2 className="text-3xl font-bold text-cyan-400">
        Loading Quiz...
      </h2>

    </div>

  );

}
if (!quizStarted && !showResult) {

  return (

    <>
      {countdown !== null && (
        <QuizCountdown count={countdown} />
      )}

      <div className="min-h-screen bg-[#020F2B] text-white">

      <Navbar />

      <section className="max-w-[1200px] mx-auto px-8 pt-32">

        <div className="
          bg-[#071734]
          rounded-3xl
          border border-white/10
          p-16
          text-center
        ">

          <h1 className="text-6xl font-black mb-6">
            Quiz
            <span className="text-cyan-400">
              {" "}Proteksi Trafo
            </span>
          </h1>

          <p className="text-gray-400 text-xl mb-10">
            20 soal • 30 detik per soal
          </p>

          <button
            onClick={() => {

              setCountdown(3);

            }}
            className="
              px-10
              py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-bold
              text-xl
            "
          >
            Mulai Quiz
          </button>

        </div>

      </section>

    </div>

    </>

  );
}

  const question = questions[currentQuestion];


  const handleAnswer = (option) => {

  if (selectedAnswer) return;

  setSelectedAnswer(option);
  setUserAnswers(prev => {

  const updated = [...prev];

  updated[currentQuestion] = option;

  return updated;

});

  if (option === question.correctAnswer) {

    setScore(prev => prev + 5);

    setCorrectAnswers(prev => prev + 1);

  }

  setTimeout(() => {

    handleNext();

  }, 1200);

};

const quitQuiz = () => {

  localStorage.removeItem(
    "proteksiTrafoQuiz"
  );

  setCurrentQuestion(0);

  setSelectedAnswer(null);

  setScore(0);

  setCorrectAnswers(0);

  setUserAnswers([]);

  setTimeLeft(30);

  setShowResult(false);

  setQuizStarted(false);

  setCountdown(null);

  setQuestions(
    shuffleArray(quizData)
  );

  setShowQuitModal(false);
};

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;
  
  const percentage =
  Math.round((correctAnswers / questions.length) * 100);

  let grade = "D";

  if (percentage >= 85) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 55) grade = "C";
 
  return (
    <div className="min-h-screen bg-[#020F2B] text-white">

      <Navbar />

      <section className="max-w-[1400px] mx-auto px-8 pt-28 pb-10">

        {!showResult ? (

          <>
            {/* HEADER */}

            <div className="mb-8">

              <h1 className="text-6xl font-black">
                Quiz{" "}
                <span className="text-cyan-400">
                  Proteksi Trafo
                </span>
              </h1>

              <p className="text-gray-400 mt-3 text-lg">
                Uji pemahamanmu mengenai sistem proteksi transformator.
              </p>

            </div>

            {/* STATUS */}

            <div className="bg-[#071734] rounded-3xl p-6 border border-white/10 mb-8">

              <div className="flex justify-between items-center mb-3">

  <span>
    Soal {currentQuestion + 1} / {questions.length}
  </span>

  <div className="flex items-center gap-6">

    <span>
      Score : {score}
    </span>

    <span
      className={`font-bold text-xl ${
        timeLeft <= 10
          ? "text-red-500 animate-pulse"
          : "text-cyan-400"
      }`}
    >
      {timeLeft}s
    </span>

    <button
  onClick={() =>
    setShowQuitModal(true)
  }
      className="
        px-4
        py-2
        rounded-xl
        bg-red-500/20
        border
        border-red-500
        text-red-400
        hover:bg-red-500
        hover:text-white
        transition
      "
    >
      🛑 Quit
    </button>

  </div>

</div>
              <div className="w-full bg-black/30 rounded-full h-4">

                <div
                  className="bg-cyan-400 h-4 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />

              </div>

            </div>

            {/* QUESTION */}

            <div className="bg-[#071734] rounded-3xl p-8 border border-white/10">

              <div className="mb-8">

  <h2 className="text-3xl font-bold">
    {question.question}
  </h2>

  {question.point && (
    <ul className="list-disc pl-8 mt-4 space-y-2 text-lg">
      {question.point.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )}

  {question.questionEnd && (
    <p className="mt-4 text-xl">
      {question.questionEnd}
    </p>
  )}

</div>

              <div className="space-y-4">

                {question.options.map((option, index) => {

                  let buttonStyle =
                    "border-white/10 hover:border-cyan-400/40";

                  if (selectedAnswer) {

                    if (option === question.correctAnswer) {
                      buttonStyle =
                        "border-green-500 bg-green-500/20";
                    }

                    else if (
                      option === selectedAnswer &&
                      option !== question.answer
                    ) {
                      buttonStyle =
                        "border-red-500 bg-red-500/20";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className={`
                        w-full
                        text-left
                        p-5
                        rounded-2xl
                        border
                        transition-all
                        ${buttonStyle}
                      `}
                    >
                      {option}
                    </button>
                  );
                })}

              </div>

             
            </div>

          </>

        ) : (

          <div className="
bg-[#071734]
rounded-3xl
p-12
border border-white/10
text-center
">

  <h2 className="
  text-6xl
  font-black
  text-cyan-400
  mb-6
  ">
    Quiz Selesai
  </h2>

  <div className="
  text-8xl
  font-black
  mb-4
  ">
    {score}
  </div>

  <div className="
  text-5xl
  font-black
  text-cyan-300
  mb-10
  ">
    Grade {grade}
  </div>

{/* Statistik */}

<div
  className="
  grid
  md:grid-cols-3
  gap-6
  mb-10
"
>

  <div className="bg-black/20 p-6 rounded-2xl">
    <p className="text-gray-400">
      Benar
    </p>

    <h3 className="text-4xl font-bold text-green-400">
      {correctAnswers}
    </h3>
  </div>

  <div className="bg-black/20 p-6 rounded-2xl">
    <p className="text-gray-400">
      Salah
    </p>

    <h3 className="text-4xl font-bold text-red-400">
      {questions.length - correctAnswers}
    </h3>
  </div>

  <div className="bg-black/20 p-6 rounded-2xl">
    <p className="text-gray-400">
      Nilai
    </p>

    <h3 className="text-4xl font-bold text-cyan-400">
      {percentage}%
    </h3>
  </div>

</div>

{/* Review Jawaban */}

<div className="mt-10 text-left">

  <h3 className="text-3xl font-bold mb-6">
    Review Jawaban
  </h3>

  <div className="space-y-4">

    {questions.map((q, index) => (

      <div
        key={index}
        className="
          bg-black/20
          p-5
          rounded-2xl
          border border-white/10
        "
      >

        <p className="font-semibold mb-3">
          {index + 1}. {q.question}
        </p>

        <p className="mb-2">
          Jawaban Anda :
          <span className="ml-2 text-cyan-400">
            {userAnswers[index] || "Tidak Dijawab"}
          </span>
        </p>

        <p>
  Jawaban Benar :
  <span className="ml-2 text-green-400">
    {q.correctAnswer}
  </span>
</p>

{q.explanation && (
  <div
    className="
      mt-3
      p-4
      rounded-xl
      bg-cyan-500/10
      border border-cyan-500/20
    "
  >
    <p className="text-cyan-300 font-semibold mb-1">
      Penjelasan:
    </p>

    <p className="text-gray-300">
      {q.explanation}
    </p>
  </div>
)}
      </div>

    ))}

  </div>

</div>

 
<button
  onClick={() => {

    localStorage.removeItem(
      "proteksiTrafoQuiz"
    );

    setQuestions(
      shuffleArray(quizData)
    );

    setCurrentQuestion(0);

    setSelectedAnswer(null);

    setScore(0);

    setCorrectAnswers(0);

    setUserAnswers([]);

    setTimeLeft(30);

    setShowResult(false);

    setQuizStarted(false);

  }}
  className="
    mt-6
    px-8
    py-3
    rounded-xl
    bg-cyan-500
    text-black
    font-bold
  "
>
  Ulangi Quiz
</button>

</div>

     )}
{showQuitModal && (

  <div
    className="
      fixed
      inset-0
      bg-black/70
      backdrop-blur-md
      flex
      items-center
      justify-center
      z-[9999]
    "
  >

   <motion.div
  initial={{
    scale: 0.8,
    opacity: 0,
  }}
  animate={{
    scale: 1,
    opacity: 1,
  }}
  transition={{
    duration: 0.3,
  }}
  className="
    bg-[#071734]
    border
    border-red-500/40
    rounded-3xl
    p-10
    w-[500px]
    text-center
  "
>
      <div className="text-6xl mb-4">
        ⚡
      </div>

      <h2
        className="
          text-3xl
          font-black
          text-red-400
          mb-4
        "
      >
        EMERGENCY STOP
      </h2>

      <p
        className="
          text-gray-300
          mb-8
        "
      >
        Menghentikan quiz akan
        menghapus seluruh progress
        yang sedang berjalan.
      </p>

      <div
        className="
          flex
          justify-center
          gap-4
        "
      >

        <button
          onClick={() =>
            setShowQuitModal(false)
          }
          className="
            px-6
            py-3
            rounded-xl
            border
            border-white/20
          "
        >
          Batal
        </button>

        <button
          onClick={quitQuiz}
          className="
            px-6
            py-3
            rounded-xl
            bg-red-500
            text-white
            font-bold
          "
        >
          Keluar Quiz
                </button>

      </div>

    </motion.div>

  </div>

)}
      </section>

    </div>
  );
}