import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import NoImage from "../../assets/no_image.jpeg";
import { StyledListItemText } from "./styles";
import ListItemButton from '@mui/material/ListItemButton';

import { StyledAvatar } from "./styles";



export default function AsideListItem({items}) {
  if (!items) {
    return <p>No Data available...</p>;
  }

  return (
    <List component="nav" sx={{ zIndex: 0, width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {items.map((item, index) => {
        if(!item) {
          return(<></>)
        }
        const primaryText = item?.source && item?.source.lenth > 0 ? item?.source : "..."
        return (
          <React.Fragment key={index}>
            <ListItemButton component="a" href={item.url} target="_blank" rel="noreferrer" key={index}>
              <ListItemAvatar>
                <StyledAvatar
                  alt={item?.title}
                  src={item?.urlToImage || NoImage}
                />
              </ListItemAvatar>
              <StyledListItemText
                primary={primaryText}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item?.title || ""}
                    </Typography>
                    {item?.description || ""}
                  </React.Fragment>
                }
              />
            </ListItemButton>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}
