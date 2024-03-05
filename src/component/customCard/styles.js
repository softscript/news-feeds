import Card from "@mui/material/Card";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export const AnchorTagWrapper = styled("a")({
  cursor: "pointer",
    textDecoration: "none",
})

export const StyledCard = styled(Card)({
  padding: 8,
  borderRadius: 4,
  marginBottom: ".5rem",
  height: "calc(100% - 1rem)",
  borderTop: "5px solid #087695",
  '&:hover': {
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px",
    position: "relative",
    top: -5
  },
  ':last-child':{
    paddingBottom: 0
}
});
export const StyledAsideCard = styled(Card)({
  borderRadius: 4,
  marginBottom: ".5rem",
  height: "calc(100% - 1.5rem)",
  borderTop: "9px solid #087695",
//   '&:hover': {
//     boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px",
//     position: "relative",
//     top: -5,
//     zIndex: -1
//   }
});

export const StyledCardContent = styled(CardContent)({
    margin: "0.2rem 0.5rem",
    padding: ".5rem 0 0 0"
})

export const StyledTypography = styled(Typography)((props) => {
  return {
    marginBottom: ".5rem",
    height: "calc(100% - 1.5rem)",
    color: "rgba(0, 0, 0, 0.6)"
  };
});

export const ArticleHeading = styled(Typography)((props) => {
  return {
    padding: 0,
    margin: 0,
    color: "rgba(0, 0, 0, 0.6)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  };
});

export const ArticleBody = styled(Typography)((props) => {
  return {
    marginBottom: ".5rem",
    height: "calc(100% - 1.5rem)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: props.maxline || 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    margin: null
  };
});

export const ArticleSubHeading = styled(Typography)((props) => {
  return {
    padding: 0,
    margin: 0,
    color: "#2b2a2a"
  };
});



