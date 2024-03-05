import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import moment from "moment";


import { FilterWrapper, CustomInput, TitleSection } from "./styles";
import { apiConfig as newsSource } from "../../config";

export default function FilterComponent({ filterData, handleSearch }) {
  return (
    <FilterWrapper>
      <TitleSection>
        <Typography variant="h6" display="block" gutterBottom>
          Filter feeds
        </Typography>
      </TitleSection>
      <Divider sx={{mb:3}}/>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mb: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <CustomInput
          className="search-by-keyword"
          id="outlined-basic"
          label="Search Article"
          variant="outlined"
          placeholder="Search...char > 3"
          value={filterData.q || ""}
          name="q"
          onChange={(event) => handleSearch(event)}
        />
        <CustomInput
          className="filter-by-date"
          id="outlined-basic"
          label="dd/mm/yyyy"
          variant="outlined"
          name="date"
          placeholder=""
          value={filterData.date || moment()}
          type="date"
          onChange={(event) => handleSearch(event)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Source</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="source"
            label="Source"
            value={filterData.source}
            onChange={(event) => handleSearch(event)}
          >
            {newsSource.map((source, index) => (
              <MenuItem key={index} value={source.name}>
                {source.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FilterWrapper>
  );
}

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
