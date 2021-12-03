import { Button, Grid, Avatar, Paper,Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { GoogleLogout } from "react-google-login";
import { useSelector } from "react-redux";
import { showButtonLogic } from "../Redux/Reducer";

declare const window: any;

const googleId: any = process.env.REACT_APP_GOOGLE_ID;
const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showButton = useSelector(showButtonLogic);
  const logOutHandler = () => {
    FB.getLoginStatus(function (response) {
      FB.logout(function (response) {
        console.log("Logged Out!");
        window.location = "/";
      });
    });
  };
  const logout = () => {
    navigate(`/`);
  };
  const data = location.state
  return (
    <>
      <Grid style={{ marginTop: "6rem" }}>
        <Paper
          elevation={10}
          style={{
            padding: 20,
            height: "50vh",
            width: 330,
            margin: "20px auto",
          }}
        >
          <Grid>
            <Avatar
              style={{ backgroundColor: "#1bbd7e", marginLeft: "30%",width:'8rem',height:'8rem',marginBottom:'3rem' }} src={showButton ? data.picture.data.url :data.profileObj.imageUrl} 
            ></Avatar>
          </Grid>
            <Typography gutterBottom variant="h5" component="h3">
              Name:<strong>{showButton ? data.name : data.profileObj.name}</strong>
            </Typography>
            <Typography gutterBottom variant="h6" component="h3" style ={{marginBottom:'3rem'}} >
              Email:<strong>{showButton ? data.email : data.profileObj.email}</strong>
            </Typography>
          {showButton ? (
            <Button
              color="primary"
              variant="contained"
              type="button"
              onClick={logOutHandler}
            
            >
              Logout with Facebook
            </Button>
          ) : (
            <GoogleLogout
              clientId={googleId}
              buttonText="Logout"
              onLogoutSuccess={logout}
            ></GoogleLogout>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default HomePage;
