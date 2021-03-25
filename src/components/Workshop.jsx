import { Grid } from "@material-ui/core";
import { useState } from "react";

export const Workshop = () => {
  const [data, setData] = useState([
    { url: "https://i.ibb.co/7x3ZLXb/karachi.jpg", name: "Karachi" },
    { url: "https://i.ibb.co/z66s790/Minar-e-Pakistan.png", name: "Lahore" },
    { url: "https://i.ibb.co/x72J6N6/islamabad.png", name: "Islamabad" },
    { url: "https://i.ibb.co/7gHQG36/peshawar.png", name: "Peshawar" },
  ]);

  return (
    <Grid container className="workshopBox" justify="space-between">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="workshopHeader"
      >
        <h1 id="workshopID" data-aos="zoom-in">
          Workshop Locations
        </h1>
      </Grid>
      {data.map((v, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          key={i}
          className="workshopLocationBox"
          data-aos={i <= 1 ? "fade-right" : "fade-left"}
        >
          <div>
            <img src={v.url} alt={`${v.name.toLowerCase()}_image`} />
            <h2>{v.name}</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>+92312-3456789</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
