import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";
import SectionCarousel from "./SectionCarousel";
import StoreIcon from "@material-ui/icons/Store";
import CodeIcon from "@material-ui/icons/Code";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  console.log(classes, "classes");
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our Projects</h2>
          </GridItem>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "E-Marketing",
                    tabIcon: StoreIcon,
                    tabContent: <SectionCarousel />,
                  },
                  {
                    tabButton: "Web programming",
                    tabIcon: CodeIcon,
                    tabContent: <SectionCarousel />,
                  },
                  {
                    tabButton: "Content Management",
                    tabIcon: List,
                    tabContent: <SectionCarousel />,
                  },
                  {
                    tabButton: "Mobile applications",
                    tabIcon: MobileFriendlyIcon,
                    tabContent: <SectionCarousel />,
                  },
                  {
                    tabButton: "Artificial Intelligencet",
                    tabIcon: MobileFriendlyIcon,
                    tabContent: <SectionCarousel />,
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
