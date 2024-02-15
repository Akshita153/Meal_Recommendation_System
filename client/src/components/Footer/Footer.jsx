import React from "react";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Divider, Grid, Typography } from "@mui/material";
import ME from '../../assets/icon.png'
const Footer = () => {
  return (
    <div style={{ margin: '0 0 !important' }}>
    
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height={{ xs: 360, sm: 300, md: 300 }}
      backgroundColor="#f5d2b7"
      style={{ position: "static", margin: 0, color: '#975625'}}
      
    >
      {/* First Box in Footer */}
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          margin={{ xs: "20px 0", sm: "30px" }}
        >
          <Box display="flex" alignItems="center">
            <img src={ME} alt="/" style={{
                height: '3rem',
                marginRight: "8px",
                
            }}
            />
            <Typography
              variant="h6"
              fontSize={{ xs: "20px", sm: "30px" }}
              
            >
              FitFuel
            </Typography>
          </Box>
          <Typography  fontSize={{ xs: "14px", sm: "20px" }}>
            Lets Get Your Meal! 
          </Typography>
          <Box display="flex" marginTop={3}>
            <Link to="/facebook-page" style={{ textDecoration: "none" }}>
              <FacebookOutlined
                style={{
                  color: "#975625",
                  cursor: "pointer",
                  marginRight: 13,
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
            <Link to="/instagram-page" style={{ textDecoration: "none" }}>
              <InstagramIcon
                style={{
                  color: "#975625",
                  cursor: "pointer",
                  marginRight: 13,
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
            <Link to="/twitter-page" style={{ textDecoration: "none" }}>
              <TwitterIcon
                style={{
                  color: "#975625",
                  cursor: "pointer",
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
          </Box>
        </Box>
      </Grid>

      {/* Second Box in Footer */}
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          margin={{ xs: "20px 0", sm: "30px" }}
        >
          <Typography
            fontSize={{ xs: "20px", sm: "30px" }}
            variant="h6"
            color="#975625"
          >
            Quick Links
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  fontSize={{ xs: "14px", sm: "20px" }}
                  style={{ textAlign: "left" }}
                  variant="body2"
                  color="#975625"
                >
                  <ArrowRightIcon style={{ marginRight: "4px" }} />
                  Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  fontSize={{ xs: "14px", sm: "20px" }}
                  style={{ textAlign: "left" }}
                  variant="body2"
                  color="#975625"
                >
                  <ArrowRightIcon style={{ marginRight: "4px" }} />
                  Our Services
                </Typography>
              </Link>
            </li>
          </ul>
         
        </Box>
      </Grid>
      <h6 style={{marginBottom:'-2rem'}}>© 2024 Diet Planner. All rights reserved.</h6>
      <Divider style={{ width: "100%", backgroundColor: "white" }} />
    </Grid>
                
    </div>
  );
};

export default Footer;
