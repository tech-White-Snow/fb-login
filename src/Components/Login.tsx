import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { changeButton } from "../Redux/Reducer";

const clientId: any = process.env.REACT_APP_GOOGLE_ID;
const facebookId: any = process.env.REACT_APP_FACEBOOK_ID;
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onLoginSuccess = (res: any) => {
    console.log(res);
    dispatch(changeButton(false));
    navigate(`./homepage`, { state: res });
  };

  const onLoginFailure = (res: any) => {
    console.log(res);
  };


  const responseFacebook = (response: any) => {
    console.log(response);
    if (response.status !== "unknown") {
      dispatch(changeButton(true));
      navigate(`./homepage`, { state: response });
    }
  };

  const componentClicked = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <GoogleLogin
          clientId="843774698876-qrhnm1nrlknmserv2hv1eg38fmspflbc.apps.googleusercontent.com"
          buttonText=""
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
        <FacebookLogin
          appId="2132531396948980"
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          autoLoad={false}
        />
      </div>
    </>
  );
};

export default Login;
