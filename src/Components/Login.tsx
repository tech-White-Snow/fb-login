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
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
        <FacebookLogin
          appId={facebookId}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
    </>
  );
};

export default Login;
