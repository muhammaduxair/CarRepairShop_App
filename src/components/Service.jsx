import { Grid } from "@material-ui/core";
import { useState } from "react";

export const Service = () => {
  const [data, setData] = useState([
    { url: "https://i.ibb.co/mRDsqXw/vc-1.jpg", title: "Car Repairing" },
    { url: "https://i.ibb.co/9qzZzMt/vc-2.jpg", title: "Car Wash" },
    { url: "https://i.ibb.co/R0CM3Hn/vc-3.png", title: "Oil Change" },
    { url: "https://i.ibb.co/XsStBX2/vc-4.jpg", title: "Buy & Sell" },
  ]);

  return (
    <Grid container justify="space-between" className="mainBoxService">
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        className="serviceLeftBox"
      >
        {data.map((v, i) => (
          <div
            key={i}
            id={i === 1 ? "serviceBoxID" : null}
            data-aos="zoom-out"
            data-aos-anchor=".navBar"
            data-aos-delay="1500"
          >
            <img src={v.url} alt="vector_images" />
            <span>
              <h1>{v.title}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </span>
          </div>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        className="serviceRightBox"
        data-aos="slide-left"
        data-aos-delay="1500"
      >
        <h1>
          Our Services <br />
          <span>With Your Car</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus vel
          error placeat at, ullam reprehenderit accusamus necessitatibus, itaque
          in a totam temporibus reiciendis voluptatibus qui expedita magnam!
          Nemo explicabo ipsam laudantium ut voluptatem pariatur quam magnam
          repudiandae alias! Omnis molestias nihil doloribus consequuntur, ad
          sit quod aliquid ducimus recusandae consequatur.
        </p>
      </Grid>
    </Grid>
  );
};
