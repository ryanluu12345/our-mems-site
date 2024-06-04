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
  const [curTimeline, setCurTimeline] = useState<TimelineEntry | undefined>();
  const [entries, setEntries] = useState<TimelineEntry[]>([
    {
      title: "Vancouver",
      datetime: new Date("2022-08-02"),
      description: "",
      // TODO: replace this later.
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-10-la/0005.png",
      contentPath: "",
    },
    {
      title: "Los Angeles",
      datetime: new Date("2022-10-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-10-la/0009.png",
      contentPath: "",
    },
    {
      title: "New York",
      datetime: new Date("2022-12-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-12-ny/0009.png",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2023-02-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-02-mtl/0002.png",
      contentPath: "",
    },
    {
      title: "Los Angeles and San Diego",
      datetime: new Date("2023-05-02"),
      description: "",
      headerImg:
        "https://ailin-mems.s3.amazonaws.com/23-05-la-sea-sd-seq/0002.png",
      contentPath: "",
    },
    {
      title: "Toronto and Montreal",
      datetime: new Date("2023-07-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-07-tor-mtl/0002.png",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2023-10-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-10-mtl/0002.png",
      contentPath: "",
    },
    {
      title: "Victor Yang NA Tour (MTL + NY)",
      datetime: new Date("2023-11-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-11-ny-victor/0002.png",
      contentPath: "",
    },
    {
      title: "Victor Yang NA Tour (LA)",
      datetime: new Date("2023-12-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-12-la-victor/0002.png",
      contentPath: "",
    },
    {
      title: "Montreal",
      datetime: new Date("2024-02-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-02-mtl/0002.png",
      contentPath: "",
    },
    {
      title: "Europe",
      datetime: new Date("2024-03-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-03-europe/0002.png",
      contentPath: "",
    },
    {
      title: "Coachella and LA",
      datetime: new Date("2024-04-02"),
      description: "",
      headerImg:
        "https://ailin-mems.s3.amazonaws.com/24-04-la-coachella/0007.png",
      contentPath: "",
    },
    {
      title: "New York",
      datetime: new Date("2024-05-02"),
      description: "",
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-05-ny/0003.png",
      contentPath: "",
    },
  ]);

  return (
    <div id="timeline">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          margin: 0,
        }}
      >
        <Typography sx={{ py: 2 }} variant="h2">
          Timeline of Our Love ({curTimeline !== undefined && curTimeline.title}
          )
        </Typography>
        <Timeline sx={{ width: "40%" }}>
          {entries.map((item, idx) => {
            return (
              <TimelineItem
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setCurTimeline(item);
                }}
                position={idx % 2 === 0 ? "left" : "right"}
              >
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Typography fontWeight={700}>
        {formatDateToMonthYear(entry.datetime)}
      </Typography>
      <Typography>{entry.title}</Typography>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          borderRadius: 2,
          objectFit: "cover",
        }}
        alt="Header image."
        src={entry.headerImg}
      />
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
