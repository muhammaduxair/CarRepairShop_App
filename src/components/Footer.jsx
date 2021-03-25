import { Grid } from "@material-ui/core";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

export const Footer = () => {
  return (
    <Grid container className="FooterBox" alignItems="center">
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className="footerBoxLeft">
        <p>Created By Muhammad Uzair</p>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={12}
        lg={6}
        xl={6}
        className="footerBoxRight"
      >
        <span>
          <a href="https://www.facebook.com/m.uzair17/" target="_blank">
            <FaFacebook size={30} className="footerIcon" />
          </a>
          <a
            href="https://www.instagram.com/unofficial_uzair_jaan/"
            target="_blank"
          >
            <SiInstagram size={30} className="footerIcon" />
          </a>
          <a href="https://www.linkedin.com/in/uzairbhayya/" target="_blank">
            <FaLinkedin size={30} className="footerIcon" />
          </a>
          <a href="https://github.com/muhammaduxair" target="_blank">
            <FaGithub size={30} className="footerIcon" />
          </a>
        </span>
      </Grid>
    </Grid>
  );
};
