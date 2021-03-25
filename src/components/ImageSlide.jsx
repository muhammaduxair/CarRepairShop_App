import { Grid } from "@material-ui/core";
import { useState } from "react";

export const ImageSlide = () => {
  const [imgData, setImgData] = useState([
    { url: "https://i.ibb.co/7NT7stw/slide5.jpg", name: "slide_img_5" },
    { url: "https://i.ibb.co/yVTVdXW/slide6.jpg", name: "slide_img_6" },
    { url: "https://i.ibb.co/d48RJNQ/slide7.jpg", name: "slide_img_7" },
    { url: "https://i.ibb.co/q0DWj8Q/slide8.jpg", name: "slide_img_8" },
    { url: "https://i.ibb.co/DpYF8wh/slide1.jpg", name: "slide_img_1" },
    { url: "https://i.ibb.co/vvh39sH/slide2.jpg", name: "slide_img_2" },
    { url: "https://i.ibb.co/f0fBpgJ/slide3.jpg", name: "slide_img_3" },
    { url: "https://i.ibb.co/B4myDYr/slide4.jpg", name: "slide_img_4" },
  ]);

  return (
    <Grid container className="imageSlideBox">
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="imageSlideBoxHeader"
      >
        <h1 data-aos="zoom-out">Image Gallery</h1>
      </Grid>
      {imgData.map((v, i) => (
        <Grid
          item
          xs={6}
          sm={6}
          md={3}
          lg={3}
          xl={3}
          className="imageSlideBoxImageWrapper"
          key={i}
        >
          <div data-aos="zoom-in">
            <img src={v.url} alt={v.name} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
