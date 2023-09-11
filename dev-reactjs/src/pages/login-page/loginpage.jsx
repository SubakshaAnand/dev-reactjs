import {
  Card, CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, setIsauthenticated } from "./reduxlogin/actions";


export default function LoginPage() {

  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleLoginSuccess() {
    dispatch(setIsauthenticated(true));
  }
  
  function handleLogin() {

    dispatch(login(username, password));
    handleLoginSuccess();
  }
  return (

    <React.Fragment>
      <div className="loginGradient">
        <Card className="mt-16 w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              ANBEIN
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div>
              <input className="mt-1 px-3 py-2 bg-white border shadow-sm 
                border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 
              focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                type="text"
                id="email"
                placeholder="Email or UserName"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
              placeholder-slate-400 focus:outline-none focus:border-sky-500 
                focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                type="text" id="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg" />
            </div>
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" color="blue" ripple={true} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" color="blue" fullWidth onClick={handleLogin}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                <Link to={`/signup`}>
                  Sign up
                </Link>
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </React.Fragment>

  );
};
