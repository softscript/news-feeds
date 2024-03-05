import React from "react";
import { PersonalisedChipsWrapper, TitleSection, ChipsWrapper } from "./styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Divider } from "@mui/material";


export default function PersonalisedChips({ tags, handleSelect }) {
  return (
    <PersonalisedChipsWrapper className="personalised-feed-selection-box">
      <TitleSection>
        <Typography variant="h6" display="block" gutterBottom>
          Personalise your feeds
        </Typography>
      </TitleSection>
      <Divider />
      {/* <Stack direction="row" spacing={1}> */}
      <ChipsWrapper className="chip-wrapper-section">
        {tags.map(({label, value, isSelected = false}, index) => (
          <Chip
            key={index}
            className="chip-items"
            label={label || "Catehory"}
            onClick={() => handleSelect(value)}
            size="small"
            variant={isSelected ? 'filled' : 'outlined'}
          />
        ))}
      </ChipsWrapper>
      {/* </Stack> */}
    </PersonalisedChipsWrapper>
  );
}
