import React from "react";
import { Card } from "../styles/Card";
import { StyledVideos, VideosMain } from "../styles/Videos";
import { ReactComponent as More } from "../assets/east_black_24dp.svg";
import { Link } from "react-router-dom";

function VideosDiv() {
  return (
    <StyledVideos>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>latest videos</h2>
          <div>
            <Link to="/videos" style={{ display: "flex", marginRight: "1rem" }}>
              <div>
                <More />
              </div>
              <h4>More Videos</h4>
            </Link>
          </div>
        </div>
        <VideosMain>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Z-pT0XDYvDM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <p>TECHNOLOGY</p>
              <h3>Inside Google's Massive Headquarters</h3>
              <p id="description">
                We all use its services every day, it answers our most bizarre
                questions, you’re even watching this video using the company’s
                video streaming platform. We’re talking Google, or more
                importantly, it’s bank busting Silicon Valley headquarters. A
                short walk from the San Francisco Bay Area, and a stone’s throw
                away from other multinational...
              </p>
            </div>
          </div>
          <div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BEbVddOm2X8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>TECHNOLOGY</p>
              <h4>Why So Many CEOs Are Engineers</h4>
            </div>
            <div>
              <iframe
                width="60"
                height="315"
                src="https://www.youtube.com/embed/XkFulQe9EVE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>LIFESTYLE</p>
              <h4>A Day in the Life of a Harvard Student</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/n2RNcPRtAiY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>TECHNOLOGY</p>
              <h4>Talking Tech and AI with Google CEO Sundar Pichai!</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cEItmb_a20M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>SPORTS</p>
              <h4>The fastest man on two hands</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Vwv0LPgXQ_M"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>GAMING</p>
              <h4>30 Apex Legends Tips From Noob To Pro</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WbiNr_b7oZk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>BUSINESS</p>
              <h4>How 1.5 Million Aloe Vera Leaves Are Harvested A Week</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uz_DVBZaAoY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>HEALTH</p>
              <h4>What I Actually Eat In A Day</h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Tuw8hxrFBH8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>CULTURE</p>
              <h4>One of the Greatest Speeches Ever | Steve Jobs </h4>
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sqWJsSoWJ5w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>TECHNOLOGY</p>
              <h4>How to build a tech startup - Paypal founder Max Levchin</h4>
            </div>
          </div>
        </VideosMain>
      </Card>
    </StyledVideos>
  );
}

export default VideosDiv;
