import React, { useState } from "react";

const UiContext = React.createContext();

const UiContextProvider = ({ children }) => {
  const defaultState = [];
  const [uiState, setUiState] = useState(defaultState);
  return (
    <UiContext.Provider
      value={{
        uiState,
        addUiElement: (element) => {
          let oldState = uiState;
          oldState.push(element);
          setUiState(oldState);
        },
        removeUiElement: (id) => {
          let oldState = uiState;
          oldState.filter((obj) => obj.id !== id);
          setUiState(oldState);
        },
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export { UiContextProvider, UiContext };
