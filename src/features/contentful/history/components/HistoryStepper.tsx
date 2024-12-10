import {
  Box,
  Step,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import { HistoryProps } from "../historyTypes";

type Props = {
  histories: HistoryProps[];
};

export default function HistoryStepper({ histories }: Props) {
  const theme = useTheme();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
    });
  };

  return (
    <Stepper orientation="vertical">
      {histories.map((history, index) => (
        <Step key={index} active>
          <StepLabel icon={<></>}>
            <Typography>{history.title}</Typography>
            <Typography variant="caption" color={theme.palette.secondary.main}>
              {`${formatDate(history.date)} ~ ${
                history.endDate ? formatDate(new Date(history.endDate)) : ""
              }`}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography variant="caption" whiteSpace={"pre-wrap"}>
              {history.description}
            </Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
}
