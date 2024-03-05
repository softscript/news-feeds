import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";

export const StyledAvatar = styled(Avatar)({
    height: "50px",
    width: "50px",
    borderRadius: 0
})

export const StyledListItemText = styled(ListItemText)({
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
})