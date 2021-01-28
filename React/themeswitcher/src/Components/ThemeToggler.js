import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>
        {themeMode === "light" ? (
          <img
            src="https://media.istockphoto.com/vectors/vector-on-off-switch-dark-and-light-mode-switcher-for-phone-screens-vector-id1165256895?s=612x612"
            width="90px"
            height="50px"
          />
        ) : (
          <img
            src="https://media.istockphoto.com/vectors/dark-mode-on-and-off-switch-button-illustration-vector-vector-id1208328210?s=612x612"
            width="90px"
            height="50px"
          />
        )}
      </span>
    </div>
  );
};

export default ThemeToggler;
