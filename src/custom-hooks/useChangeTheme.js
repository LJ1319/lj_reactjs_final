import { useEffect } from "react";

function useChangeTheme(initial = "white") {
  useEffect(() => {
    const { body } = document;

    const setColor = (color = "white") => {
      body.style.backgroundColor = color;
    };

    const keyUpHandler = (event) => {
      if (event.key === "g") {
        setColor("#ffa400");
      } else {
        setColor();
      }
    };
    window.addEventListener("keyup", keyUpHandler);

    setColor(initial);

    return () => {
      setColor();
    };
  }, [initial]);
}

export default useChangeTheme;
