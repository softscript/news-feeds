import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const AppWrapperContainer = styled(Grid)`
  width: 100%;
  margin: 10rem 0 0 0;
`;

export const MainContentWrapper = styled("div")``;

export const StyledMobilePersonaliseSec = styled(Grid)`
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: none;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    display: block;
  }
`;

export const StyledPersonaliseSec = styled(Grid)`
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: block;
  }
  ${(props) => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`;

export const ErrorPageWrapper = styled(Grid)`
position: absolute;
top: 0;
bottom: 0;
width: 100%;

.err-title__div {
  font-family: Syne Mono, monospace;
  position: relative;
  top: 18%;
  text-align: center;
}
.route-to_home_page{
  margin-top: 1rem;
}

background: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
