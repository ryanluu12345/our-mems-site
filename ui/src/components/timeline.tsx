import { useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";

interface TimelineEntry {
  title: string;
  datetime: Date;
  description: string;
  headerImg: string;
  contentPath: string;
}

export default function BasicTimeline() {
  const [entries, setEntries] = useState<TimelineEntry[]>([
    {
      title: "Vancouver",
      datetime: new Date("2022-08-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Los Angeles",
      datetime: new Date("2022-10-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "New York",
      datetime: new Date("2022-12-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2023-02-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Los Angeles and San Diego",
      datetime: new Date("2023-05-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Toronto and Montreal",
      datetime: new Date("2023-07-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2023-07-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Victor Yang NA Tour (MTL + NY)",
      datetime: new Date("2023-11-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Victor Yang NA Tour (LA)",
      datetime: new Date("2023-12-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2024-02-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Europe",
      datetime: new Date("2024-03-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "Coachella and LA",
      datetime: new Date("2024-04-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
    {
      title: "New York",
      datetime: new Date("2024-05-02"),
      description: "",
      headerImg: "",
      contentPath: "",
    },
  ]);

  return (
    <div id="timeline">
      <Box sx={{ height: "100vh", backgroundColor: "#fff", margin: 0 }}>
        <Timeline>
          {entries.map((item, idx) => {
            return (
              <TimelineItem position={idx % 2 === 0 ? "left" : "right"}>
                <TimelineSeparator>
                  <TimelineDot />
                  {idx !== entries.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineCard entry={item} />
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Box>
    </div>
  );
}

interface TimelineCardProps {
  entry: TimelineEntry;
}

function TimelineCard({ entry }: TimelineCardProps) {
  return (
    <Box
      sx={{
        boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography>{formatDateToMonthYear(entry.datetime)}</Typography>
      <Typography>{entry.title}</Typography>
    </Box>
  );
}

const formatDateToMonthYear = (date: Date): string => {
  // Create an Intl.DateTimeFormat instance with the desired options
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  });

  // Format the date
  return formatter.format(date);
};
