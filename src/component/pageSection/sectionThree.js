import React from "react";
import Grid from "@mui/material/Grid";
import CardMediaLeft from "../customCard/cardMediaLeft";
import CardMediaRight from "../customCard/cardMediaRight";
import CardMediaAbove from "../customCard/cardMediaAbove";
import Aside from "../aside";
import { shuffle } from "../../helper/suffleData";

export default function sectionThree({data}) {
  // const {newGeneral, popularMain} =  reArrangeData(dataSource);
  const newGeneral = shuffle(data) ;
  let popularMain = shuffle(data);
  if(popularMain.length > 10) {
    popularMain = popularMain.slice(0, 10);
  }
  const asideData = {
    category: {label: "Recent"},
    news: popularMain
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Aside limit={5} items={asideData} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={1} sx={{mb: 2}}>
            <Grid item xs={12} sm={7}>
              <CardMediaAbove article={newGeneral[0] || null}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <CardMediaLeft article={newGeneral[1] || null} />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <CardMediaAbove article={newGeneral[2] || null} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <CardMediaRight article={newGeneral[3] || null} />
              </Grid>
              <Grid item xs={12}>
                <CardMediaLeft article={newGeneral[4] || null}/>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Grid item xs={12}>
                <CardMediaAbove  article={newGeneral[5] || null}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
