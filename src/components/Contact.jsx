import { Grid, Button } from "@material-ui/core";
import { TextInputField } from "./TextField";
import { FaFacebook, FaTwitter, FaGooglePlusSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export const Contact = () => {
  return (
    <Grid container className="contactBox" justify="space-between">
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        className="contactBoxLeft"
      >
        <h1 data-aos="fade-down">Contact Now</h1>
        <p data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
          saepe nihil at deleniti inventore sint dolore dolores? Fuga, fugit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste
          saepe nihil at deleniti inventore sint dolore dolores? Fuga, fugit?
        </p>
        <span data-aos="fade-right">
          <FaFacebook className="contactBoxLeftIcon" size={30} />
          <FaTwitter className="contactBoxLeftIcon" size={30} />
          <SiInstagram className="contactBoxLeftIcon" size={30} />
          <FaGooglePlusSquare className="contactBoxLeftIcon" size={30} />
        </span>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        className="contactBoxRight"
      >
        <div id="contactBoxID" data-aos="slide-left">
          <h1>Contact Us</h1>
          <TextInputField label="Enter Your Name" />
          <TextInputField label="Enter Your Email" />
          <TextInputField
            label="Enter Message"
            id="standard-multiline-static"
            multiline={true}
            rows={4}
          />
          <Button variant="outlined" className="contactBoxButton">
            Submit
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};
