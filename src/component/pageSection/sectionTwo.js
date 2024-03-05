import React from "react";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Divider } from "@mui/material";

import { SectionWrapper } from "./styles";
import {
  SectionHeaderWrapper,
  SectionHeading,
  VideoContainer,
  MultiVideoWrapper,
  VideoItem,
  FeaturedVideoItem,
} from "./styles";
import { CardVideoAbove } from "../customCard/cardVideoAbove";
import { shuffle } from "../../helper/suffleData";

export default function SectionTwo({ videos }) {
  const suffledVideos = shuffle(videos);
  const aisdeVideos = suffledVideos.slice(1, 5);
  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeading variant="h4">Latest Videos</SectionHeading>
        <SectionHeading variant="h4">
          <ArrowCircleRightOutlinedIcon sx={{ margin: "auto" }} />
          More videos
        </SectionHeading>
      </SectionHeaderWrapper>
      <Divider variant="middle" />
      <VideoContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <FeaturedVideoItem>
              <CardVideoAbove featuredItem={true} media={suffledVideos[0]} />
            </FeaturedVideoItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MultiVideoWrapper>
              <Grid container spacing={2}>
                {aisdeVideos.map((media, index) => (
                  <VideoItem key={index} item xs={12} sm={12}>
                    <CardVideoAbove media={media} />
                  </VideoItem>
                ))}
              </Grid>
            </MultiVideoWrapper>
          </Grid>
        </Grid>
      </VideoContainer>
    </SectionWrapper>
  );
}
