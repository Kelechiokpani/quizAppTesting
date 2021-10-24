import React from "react";
import { Route, Redirect,useParams } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem("user-token");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export const SecureQuestions = ({ component: Component, ...rest }) => {
  // const {questionNumber} = useParams()
  // console.log(questionNumber,"from private route")
  const current = true
  // const current = sessionStorage.getItem("current");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (current) {
          return <Component {...rest} {...props} />;
        }
        else {console.log("no current")}
        // else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/forgotpassword",
        //         state: {
        //           from: props.location,
        //         },
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
};

export const AdminRoute = ({ component: Component, ...rest }) => {
  const storage = JSON.parse(sessionStorage.getItem("user-data"));
  let isAdmin =
    storage && storage.isAdmin === true ? storage.isAdmin : undefined;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAdmin) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
