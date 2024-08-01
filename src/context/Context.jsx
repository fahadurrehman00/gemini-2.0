import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [inputs, setInputs] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, inputs]);
      setRecentPrompt(inputs);
      response = await runChat(inputs);
    }
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      newResponse += responseArray[i];
      delayPara(i, responseArray[i]);
    }
    setLoading(false);
    return response;
  };

  return (
    <Context.Provider
      value={{
        inputs,
        setInputs,
        recentPrompt,
        prevPrompts,
        showResult,
        loading,
        resultData,
        onSent,
        toggleSidebar,
        isOpenSidebar,
        newChat,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
