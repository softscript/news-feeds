import React from "react";
import Grid from "@mui/material/Grid";
import CardMediaAbove from "../customCard/cardMediaAbove";
import Aside from "../aside";
import { transformAsideData } from "../../helper/transformAsideData";
// import Loader from "../component/loader/loader";


export default function SectionFour({ loading, categoryData, newsSource }) {
  const {cardData = [], asideNewsList = []} = transformAsideData(newsSource, categoryData);
  console.log('---4sec--loading', loading)


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <CardMediaAbove article={cardData[1] || {}} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Aside loading={loading} items={asideNewsList[0] || {}} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Aside loading={loading} items={asideNewsList[1] || {}} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={12} md={12}><CardMediaAbove  article={cardData[1] || {}}/></Grid>
            <Grid item xs={12} md={12}><Aside loading={loading} limit={5} items={asideNewsList[2] || {}} /></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
