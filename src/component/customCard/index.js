import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { StyledCard, StyledAsideCard } from "./styles";
import CardLayout from "./cardLayout";
import CardMediaLeft from "./cardMediaLeft";
import AlignItemsList from "../listItem";

export default function CustomCard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={7}>
              <CardLayout num={Math.random() * 20} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <CardMediaLeft/>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Grid item xs={12}>
                <StyledCard>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.w3schools.com/html/pic_trulli.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
              <Grid item xs={12}>
                <StyledCard className="card-item">
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.w3schools.com/html/pic_trulli.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard 4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledAsideCard>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.w3schools.com/html/pic_trulli.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard 5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </StyledAsideCard>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid item xs={12}>
                <StyledCard>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.w3schools.com/html/pic_trulli.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
              <Grid item xs={12}>
                <StyledCard className="card-item">
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.w3schools.com/html/pic_trulli.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard 4
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <StyledAsideCard>
            <AlignItemsList />
          </StyledAsideCard>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: "50%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.w3schools.com/html/pic_trulli.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard 7
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: "50%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.w3schools.com/html/pic_trulli.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard 8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ maxWidth: "50%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.w3schools.com/html/pic_trulli.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard 9
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: "40%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.w3schools.com/html/pic_trulli.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard 10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
