import useSWR from "swr";
import AnchorLinkHeader from "../../components/AnchorLinkHeader";
import HistoryStepper from "../../features/contentful/history/components/HistoryStepper";
import { Box } from "@mui/material";
import { HistoryProps } from "../../features/contentful/history/historyTypes";

const query = `
query {
  historyCollection{
    items{
      title
      date
      endDate
      description
    }
  }
}
`;

export default function History() {
  const { data, error } = useSWR(query);
  const histories: HistoryProps[] = data?.historyCollection?.items || [];
  const sortedHistories = histories
    .filter((history) => {
      history.date = new Date(history.date);
      return history;
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  if (error) return <div>Failed to load</div>;

  return (
    <>
      <AnchorLinkHeader id="history" title="History" />
      <Box display={"flex"} justifyContent={"center"}>
        <HistoryStepper histories={sortedHistories} />
      </Box>
    </>
  );
}
