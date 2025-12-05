import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setResult(value);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [result, delay]);

  return result;
};
export default useDebounce;
