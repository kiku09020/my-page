import { Chip, Stack, Typography } from "@mui/material";

type Props = {
  chips: string[];
  title?: string;
  icon?: React.ReactNode;
  spacing?: number;
};

export default function ChipStack(props: Props) {
  const defaultChipSpacing = 1;

  return (
    <div>
      <Stack direction="column" spacing={1}>
        {/* アイコン、タイトル */}
        <Stack direction="row" spacing={0.5}>
          {props.icon}
          <Typography>{props.title}</Typography>
        </Stack>

        {/* チップ一覧 */}
        <Stack direction="row" spacing={props.spacing ?? defaultChipSpacing}>
          {props.chips.map((chip) => (
            <Chip key={chip} label={chip} variant="outlined" />
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
