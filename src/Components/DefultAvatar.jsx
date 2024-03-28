import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";

const DefultAvatar = ({ width, height, textColor, textSize }) => {
  const { user } = useAuth();
  const [backgroundColor, setBackgroundColor] = useState("");
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    // Function to generate a deterministic color based on the user's email
    const getUserColor = (email) => {
      if (!email) return ""; // Add nullish coalescing or optional chaining here

      // Use a hashing function (e.g., hashCode) to generate a numerical value
      const hashCode = email.split("").reduce((acc, char) => {
        // Error should be resolved here
        acc = (acc << 5) - acc + char.charCodeAt(0);
        return acc & acc;
      }, 0);

      // Convert the numerical value to a color
      const color = `hsl(${Math.abs(hashCode % 360)}, 70%, 60%)`;
      return color;
    };

    const userColor = getUserColor(user?.email); // Add optional chaining here
    setBackgroundColor(userColor);

    // Function to generate a slightly darker shade of the background color for the border
    const generateBorderColor = (color) => {
      // Extract HSL components from the background color
      const [, hue, saturation, lightness] = color.match(
        /hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)/
      );

      // Adjust the lightness to get a slightly darker shade for the border
      const adjustedLightness = Math.max(
        0,
        parseInt(lightness.replace("%", "")) - 20
      ); // Decrease lightness by 20%

      // Return the border color with adjusted lightness
      return `hsl(${hue}, ${saturation}, ${adjustedLightness}%)`;
    };

    const borderColor = generateBorderColor(userColor); // Generate border color
    setBorderColor(borderColor);
  }, [user.displayName]);

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        border: `3px solid ${borderColor}`,
      }}
      className={` w-[55px] h-[55px] rounded-full    overflow-hidden grid place-content-center`}>
      <span
        style={{
          fontSize: textSize,
          color: textColor,
        }}
        className={`text-4xl font-bold`}>
        {user?.displayName.substring(0, 2)}
      </span>
    </div>
  );
};
DefultAvatar.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default DefultAvatar;
