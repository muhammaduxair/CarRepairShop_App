import { Grid, Button } from "@material-ui/core";
import { RiMenu4Line } from "react-icons/ri";

export const Header = () => {
  return (
    <Grid container style={{ backgroundColor: "#fff", paddingBottom: "30px" }}>
      <Grid item xs={12} xl={7} sm={12} md={7} lg={7} className="leftBox">
        <div className="navBar" data-aos="slide-down">
          <input type="checkbox" className="checkBox" id="CHECK" />
          <label htmlFor="CHECK">
            <RiMenu4Line className="menuIcon" />
          </label>
          <img src="https://i.ibb.co/kyKn07H/carLogo.png" alt="logo" />
          <div className="buttonBox">
            <Button className="button" variant="outlined">
              home
            </Button>
            <Button className="button" variant="outlined" href="#serviceBoxID">
              services
            </Button>
            <Button className="button" variant="outlined" href="#workshopID">
              workshop
            </Button>
            <Button className="button" variant="outlined" href="#contactBoxID">
              contact
            </Button>
          </div>
        </div>
        <div className="titleBox">
          <h1 data-aos="fade-down" data-aos-delay="500">
            your reliable <br />
            <span>car docter</span>
          </h1>
          <p data-aos="fade-down" data-aos-delay="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            blanditiis fugiat commodi exercitationem quisquam ducimus beatae qui
            error atque possimus ullam. Ullam sapiente repudiandae adipisci.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            blanditiis fugiat commodi exercitationem quisquam ducimus beatae qui
            error atque possimus ullam. Ullam sapiente repudiandae adipisci.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            blanditiis fugiat commodi exercitationem quisquam ducimus beatae qui
            error atque possimus ullam. Ullam sapiente repudiandae adipisci.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} xl={5} sm={12} md={5} lg={5} className="rightBox">
        <img
          data-aos="slide-left"
          src="https://i.ibb.co/dmcs7rN/carimg1.png"
          alt="car image"
          onContextMenu={(e) => e.preventDefault()}
        />
      </Grid>
    </Grid>
  );
};
