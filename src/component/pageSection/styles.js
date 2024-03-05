import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const SectionHeaderWrapper = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  margin: "0.5rem 0",
});

export const SectionHeading = styled(Typography)`
  font-family: Syne Mono, monospace;
  font-weight: 500;
  padding-left: 0.5rem;
  display: flex;
  margin: none;
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 1.8rem;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1.2rem;
  }
`;

export const FooterSectionHeading = styled(Typography)`
  font-family: Syne Mono, monospace;
  font-weight: 500;

  display: flex;
  margin: none;
  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 1.5rem;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 1rem;
  }
`;

export const SectionWrapper = styled("section")({
  borderTop: "4px solid #087695",
  marginBottom: "2rem",
});

export const VideoContainer = styled("div")({
  marginTop: ".5rem",
});

export const MultiVideoWrapper = styled("div")({
  height: "38rem",
  overflow: "scroll",
});

export const VideoItem = styled(Grid)`
.more-video__card {
  padding-bottom: 0.5rem;
  border-top: none;
}
  .latest-multi-videos-item{
    height: 10rem;
`;

export const FeaturedVideoItem = styled(Grid)`

${(props) => props.theme.breakpoints.up("md")} {
  height: 38rem;
}
  .more-video__card {
    border-top: none;
    height: 100%;
  }
  .latest-videos-featured-item {
    width: 100%;
    ${(props) => props.theme.breakpoints.up("md")} {
      height: 80%;
    }
    ${(props) => props.theme.breakpoints.down("sm")} {
      height: 10rem;
    }
  }
`;
