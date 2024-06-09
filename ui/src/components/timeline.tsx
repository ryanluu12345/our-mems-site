import { useState } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";
import TimelineModal from "./timelineModal";

export interface TimelineEntry {
  title: string;
  datetime: Date;
  description: string;
  headerImg: string;
  contentRelPath: string;
  startIdx: number;
  endIdx: number;
}

export default function BasicTimeline() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [curTimeline, setCurTimeline] = useState<TimelineEntry | undefined>();
  const [entries, setEntries] = useState<TimelineEntry[]>([
    {
      title: "Vancouver",
      datetime: new Date("2022-08-02"),
      description: `It's still so crazy to me that we both met on a whim. If it weren't for that
fateful day where you invited me to join you on your solo trip to Vancouver, none of this would have ever happened.
I'm thankful every day that we are both such 'down' people and were comfortable hanging with a stranger in
a city we are both not from. When I look back at that trip, I think about how you felt so relatable, familiar, and
comfortable. Leaving that trip, it was not a question in my mind that I wanted to be with you, even though initially when
we had that talk on the kayak I was still hesitant. Thanks for not throwing me off the kayak 😛. Vancouver really signified
a new beginning and the honeymoon phase. I feel like those 5 days were a full month of us going on dates and learning
more about each other - Bowen Island, the drive up to whistler, taking care of each other, and trying every tasty thing
from crystal mall.`,
      // TODO: replace this later.
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-10-la/0005.png",
      contentRelPath: "22-08-van",
      startIdx: 0,
      endIdx: 0,
    },
    {
      title: "Los Angeles",
      datetime: new Date("2022-10-02"),
      description: `It had been your dream for the longest time to live your LA girlie life. I'm really
      honored to have been included in that dream by being the reason you came to visit LA for the first time. Sorry, your
      first trip didn't hit the expectation you had, but I want to remind you of some of the highlights from that trip.
      This was the start of your being able to get to know my parents and build a relationship. I am thankful every day
      for your focus on family and ensuring the people in my life are important to you. During this trip is when we had
      the aesthetic photo shoot day in Getty Villa, visited SF and did the whole walking tour around the city, ate so much
      tasty asian food until our bellies busted (shoutout to banh mi), and started off the tradition of going back and forth.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-10-la/0009.png",
      contentRelPath: "22-10-la",
      startIdx: 1,
      endIdx: 22,
    },
    {
      title: "New York",
      datetime: new Date("2022-12-02"),
      description: `Spontaneity was the theme of this trip. I think New York really unlocks the exciting
      parts of ourselves and lets us immerse ourselves in new experiences and wild times. During the two weeks
      we spent in New York, we stayed in 5 different places (LOL), ate too many bagels to count, got the flu (oof),
      clubbed hard, went mini golfing, saw broadway shows, went to the Museum of Sex, and worked our full work week.
      It's a bit wild thinking back that we did just all that in two weeks, especially while you were going through
      your battle against the flu. You're such a champ! Additionally, what I really appreciated about this trip
      is going through the craziness and hecticness with you. You never fail to bring an energy and toughness
      that I admire so much. The fact that we are so comfortable going to the Museum of Sex and just saying "bet, let's do it"
      is a hallmark of our relationship. We just take opportunities as they come and enjoy the life experience.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/22-12-ny/0009.png",
      contentRelPath: "22-12-ny",
      startIdx: 1,
      endIdx: 12,
    },
    {
      title: "Montreal",
      datetime: new Date("2023-02-02"),
      description: `Family time! I know you know this now but I love being a part of your family. I was honestly
      a bit intimidated at first since I didn't know your family well, was still struggling to string together a few
      characters of Chinese, and put a lot of pressure on myself to make your parents like me. I think immersing
      myself in Montreal in the freezing cold weather and living in your home for a month really helped warm
      me up. I'm really appreciative that from the start your parents have been so welcoming and loving. I definitely
      understand they had their reservations at first, but I'm glad we were able to slowly work on relationship.
      I really love the traditions we have with your parents to go on day trips on Sunday (very active!), hang out with your
      fam friends (who all cook so well yummm), and hang with your friend groups in Montreal. Thanks for giving
      me a crash course in Canada -- taking me through Quebec City, Ottawa, and Toronto. Thank you so much
      for introducing me to Scandinavian spas. I can never go to a regular spa ever again. In all seriousness,
      I love seeing you in your element and being a guest in your world. It helps me to better understand you,
      the people who love you, and the activities you enjoy doing.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-02-mtl/0002.png",
      contentRelPath: "23-02-mtl",
      startIdx: 1,
      endIdx: 49,
    },
    {
      title: "Los Angeles, Seattle, and San Diego",
      datetime: new Date("2023-05-02"),
      description: `Lesson learned during this trip: California weather is unpredictable. Despite the cloudy
      skies in San Diego, I really enjoyed this trip with you because I felt like we got even closer and were
      able to build up relationships with my broader family. During this trip, we explored Seattle as part of your onsite
      and got to spend more quality time with Eman and Emily. We also got to spend more time with my parents and did
      a few nice dinners together, which was nice! I also really liked how you were able to discover your passion for nom
      nom tea and enjoy Lacy park that one day where we just threw a football around and took a nice stroll. That is one of
      my fondest memories since it was such a simple yet wholesome day. RIP to my airpods that day, which I eventually found again.
      Next time, let's go back to SD when the sun is immaculate haha.`,
      headerImg:
        "https://ailin-mems.s3.amazonaws.com/23-05-la-sea-sd-seq/0002.png",
      contentRelPath: "23-05-la-sea-sd-seq",
      startIdx: 1,
      endIdx: 53,
    },
    {
      title: "Toronto and Montreal",
      datetime: new Date("2023-07-02"),
      description: `Sam and Jason mega trip part two. I really loved how during this trip we were able to celebrate
      our 6 month anniversary and that you were able to try fine dining. Seeing your face light up at the view and
      the experience, was worth all the money to me. I love how you get excited about things and how this also inpsired 
      you to book your parents a nice fine dining experience in MTL. During the trip, I want to thank you for being such a 
      great tour guide and making sure that everyone had a fun and packed schedule. I know that I was a bit of a liability
      towards the end of Toronto because of that food poisoning, but thanks so much for taking care of me. It's a reminder
      how we are always willing to take care of each other no matter what. We still had some memorable times exploring Canada, doing the spa,
      and spending time with Sam/Jason. Isn't it crazy that we played cupid like that too?`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-07-tor-mtl/0002.png",
      contentRelPath: "23-07-tor-mtl",
      startIdx: 1,
      endIdx: 22,
    },
    {
      title: "Montreal",
      datetime: new Date("2023-10-02"),
      description: `What I remember most from this trip is all of the fun day trips we went on with
      your parents. There were a lot of hikes, orchards, and drives through different areas of Montreal.
      It was one of those trips where I felt like it was a good routine.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-10-mtl/0002.png",
      contentRelPath: "23-10-mtl",
      startIdx: 1,
      endIdx: 12,
    },
    {
      title: "Victor Yang NA Tour (MTL + NY)",
      datetime: new Date("2023-11-02"),
      description: `Long awaited eras tour by Victor Yang. I find it really interesting how we were curious
      what the vibe was gonna be like since we've both hung out with Victor independently only. But I think our
      assumption was correct - it was just an absolute vibe. So much fun and adventure each day. Victor had so much energy, 
      respect for your friends and family, and his classic sense of humor. I just remember laughing our way through
      the east coast and watching more sports game than I can remember. I think we learned this trip that
      we are not, indeed, hostel people. Victor is so comfortable in this environment and def taught us
      about communal living. The day we hung out with Jaja and then all the NY homies was so iconic in my mind, just
      blending together the worlds and doing a whole day of activities and hangouts. So fun!`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-11-ny-victor/0002.png",
      contentRelPath: "23-11-ny-victor",
      startIdx: 1,
      endIdx: 16,
    },
    {
      title: "Victor Yang NA Tour (LA)",
      datetime: new Date("2023-12-02"),
      description: `I think this was the start of us feeling like tourists in LA, which is fitting
      when your good buddy visits from AU. I'm glad we were able to hit up every thrift store, visit the beaches in OC,
      see Griffith at night (especially Saturn which Victor seemed to love), and watch the in-season NBA tournament. That
      Clippers game we went to was wilddddd! During this trip, we also had our friendsgiving, saw some life situations unfold :eyes:,
      and spent much needed quality time with Victor. `,
      headerImg: "https://ailin-mems.s3.amazonaws.com/23-12-la-victor/0002.png",
      contentRelPath: "23-12-la-victor",
      startIdx: 1,
      endIdx: 21,
    },
    {
      title: "Montreal",
      datetime: new Date("2024-02-02"),
      description: `Haikyu Arc frfr. I never would have though we would have played so much volleyball. Alas,
      we joined a volleyball league, practiced weekly, and really worked on our game. I'm really proud of you
      for your consistent serves at hits that you got towards our later games. It's also so nice that I felt more 
      integrated into your friend group and got to know everyone a lot better. Really feel like I broke the ice a whole
      lot more with Yuta. That whole month in Montreal also solidifed to me that I feel like your parent's son. It
      represented my understanding that I'm in the family and my thankfulness to that fact. Additionally, I enjoyed how it
      was a routine month that also encompassed many hangouts with your core group of friends. The snack activity was really cool
      and so was going to see your 2k show.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-02-mtl/0002.png",
      contentRelPath: "24-02-mtl",
      startIdx: 1,
      endIdx: 10,
    },
    {
      title: "Europe",
      datetime: new Date("2024-03-02"),
      description: `This trip really demonstrated that anything that can happen will happen. I feel like we
      went through some of the highest highs and lowest lows just within two weeks. During the amsterdam part of the trip,
      I was genuinely concerned about your health and really focused on ensuring you got the adequate care you needed. I'm so
      glad that you pushed through and made it out ok. Again, really impressed with your resolve and strength. You went from having
      excruciating pains to having the most optimistic of spirits the rest of the trip. I want to thank you for
      still prioritizing the trip with BFAM even though you weren't in the best health. We made so many strong memories here: like paragliding,
      taking scenic trains all around, dealing with the hectic times in amsterdam, enjoying the Paris experience,
      and traveling throughout Europe. What I'm also impressed by is the level of detail with which you planned the trip
      with your parents. I think I realized that traveling with your parents is actually really fun and not stressful,
      since they're just in couple mode. They have such a youthful energy that is refreshing. I really hope that when we are
      older, we still have that energy and consistent love. I want to keep taking photos for you so you always feel pretty.
      And I want us to always plan fun things to do and spend time doing that with our kids in the future too.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-03-europe/0002.png",
      contentRelPath: "24-03-europe",
      startIdx: 1,
      endIdx: 55,
    },
    {
      title: "Coachella and LA",
      datetime: new Date("2024-04-02"),
      description: `I'm excited for you that your LA girlie dreams were completely realized on this trip.
      What else could get more LA than Malibu brunch at Geoffrey's, a hike along Malibu's coastline, shopping
      in thousand oaks at Pac Sun, and Coachella. I love seeing you get so excited for dressing up for Coachella
      and watching all of the sets. You looked absolutely stunning. I really had to pinch myself each day to remind
      myself I'm not dreaming. You're so attractive bub. I also really enjoyed the whole festival experience with you
      since you're always so down and hyped to see different artists. Thank you so much for your patience and help getting
      through a busy moving and life month. You also made my new place feel a lot more like home by putting your
      personal touches and helping me to interior design my new room. This room feels empty without you and I wish
      I could share this with you every day.`,
      headerImg:
        "https://ailin-mems.s3.amazonaws.com/24-04-la-coachella/0007.png",
      contentRelPath: "24-04-la-coachella",
      startIdx: 1,
      endIdx: 30,
    },
    {
      title: "New York",
      datetime: new Date("2024-05-02"),
      description: `Our most recent time in NYC seemed like a routine in a good way. We had productive days at work, 
      were able to spend quality time with friends, and really feel what it's like living in the city. I always love
      being in NY with you because we embrace new activities, cherish old ones, and prioritize seeing people
      we love to hang out around. You're 2/3 of getting absolutely smashed in NYC too. Seems like the perfect party city
      for you hahahahah. But real talk, it was so fun hanging out at jade and clover and doing that bar crawl
      with the old housemates.`,
      headerImg: "https://ailin-mems.s3.amazonaws.com/24-05-ny/0003.png",
      contentRelPath: "24-05-ny",
      startIdx: 1,
      endIdx: 4,
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
          Timeline of Our Love
        </Typography>
        <Timeline sx={{ width: "60%" }}>
          {entries.map((item, idx) => {
            return (
              <TimelineItem
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setCurTimeline(item);
                  handleOpen();
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
      <TimelineModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        item={curTimeline}
      />
    </div>
  );
}

interface TimelineCardProps {
  entry: TimelineEntry;
}

const TimelineCard = ({ entry }: TimelineCardProps) => {
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
      <Typography variant="h5" fontWeight={700}>
        {formatDateToMonthYear(entry.datetime)}
      </Typography>
      <Typography variant="h6">{entry.title}</Typography>
      <Box
        component="img"
        sx={{
          height: "80%",
          width: "90%",
          borderRadius: 2,
          objectFit: "cover",
        }}
        alt="Header image."
        src={entry.headerImg}
      />
    </Box>
  );
};

export const formatDateToMonthYear = (date: Date): string => {
  // Create an Intl.DateTimeFormat instance with the desired options
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  });

  // Format the date
  return formatter.format(date);
};
