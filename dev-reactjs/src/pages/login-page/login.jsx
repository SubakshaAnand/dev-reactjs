import { Card, CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";


export default function LoginPage(){

return (

<>
<div className="loginGradient">
<Card className="mt-16 w-96">
      <CardHeader
        variant="gradient"
        color="blue"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <input  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 
        focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  type="text" id="email" placeholder="Email or UserName" size="lg" />
        <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 
        focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" color="blue" type="text" id="password" placeholder="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" color="blue" ripple={true} />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" color="blue" fullWidth>
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
</>


);
};
