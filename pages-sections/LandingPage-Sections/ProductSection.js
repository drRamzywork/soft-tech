import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import InfoIcon from "@material-ui/icons-material/Info";
import InfoIcon from "@material-ui/icons/Info";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import ChecklistIcon from "@material-ui/icons/CheckCircle";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>

          <h5 className={classes.description}>
            Soft-tech Information Systems Technology is a regular entity that
            aims to manufacture special technical products that contribute to
            providing practical solutions for specific groups through creative
            and specialized work teams, in addition to providing distinguished
            and elaborate technical services to customers around the world.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="About us"
              description="Soft-tech is an integrated entity of specialists and pioneers of software solutions, information technology systems .and digital marketing in the Arab world.
               We work as one to provide distinguished services that suit our customers around the world."
              icon={InfoIcon}
              iconColor="info"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Mission"
              description="Providing service to our customers as it should be, through: Paying attention to the smallest details that make the difference and distinguishing us from others, and keeping abreast of everything new in the world of technology in order to achieve our aspirations and goals. "
              icon={ChecklistIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Vision"
              description="Achieving leadership and excellence in our services provided, on the Arab and international levels."
              icon={RemoveRedEyeIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
