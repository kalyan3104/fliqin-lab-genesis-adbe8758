import { useState, useEffect } from "react";
import AnimatedCursor from "./AnimatedCursor";

const words = ["Solutions", "Studio", "Agency"];

const TypingAnimation = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <span className="inline-flex items-baseline">
      <span className="inline-block text-left">
        {currentText}
      </span>
      <AnimatedCursor className="h-[0.7em]" />
    </span>
  );
};

export default TypingAnimation;
