import { useEffect, useState } from "react";

const TypingText = ({
  text,
  isVisible,
  speed = 80,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // blinking cursor
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // typing + reverse typing
  useEffect(() => {
    let timeout;

    if (isVisible) {
      // TYPE
      let i = displayed.length;
      timeout = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timeout);
        }
      }, speed);
    } else {
      // REVERSE TYPE
      let i = displayed.length;
      timeout = setInterval(() => {
        if (i > 0) {
          setDisplayed(text.slice(0, i - 1));
          i--;
        } else {
          clearInterval(timeout);
        }
      }, speed / 1.5);
    }

    return () => clearInterval(timeout);
  }, [isVisible, text]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {displayed}
      <span
        className={`ml-1 w-[2px] h-[1em] bg-white/60 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      />
    </span>
  );
};

export default TypingText;
