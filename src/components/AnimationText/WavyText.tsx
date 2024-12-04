import { Typography } from "@mui/material";
import "./wavy-text.css";

type Props = {
  text: string;
  textDelay?: number;
  moveY?: number;
};

export default function WavyText({ text, textDelay = 0.1, moveY = 5 }: Props) {
  const charArray = text.split("");

  return (
    <div className="wavy-text" style={{ display: "flex", justifyContent: "center" }}>
      {charArray.map((char, index) => {
        return (
          <Typography
            key={index}
            component={"span"}
            variant="h4"
            whiteSpace={"pre"}
            style={
              {
                "--moveY": `${moveY}px`,
                animationDuration: `${charArray.length * textDelay}s`,
                animationDelay: `${index * textDelay}s`,
              } as React.CSSProperties
            }
          >
            {char}
          </Typography>
        );
      })}
    </div>
  );
}
