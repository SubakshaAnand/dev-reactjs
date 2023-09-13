import React from "react";
import LogoutButton from "../login-page/reduxlogin/logoutbutton";
import { ToggleAccordion } from "../../Utils/ToggleAccordion";
import { Card } from "@material-tailwind/react";


export default function Dashboard() {

    return (
        <>
        <Card className="mt-36">
            <div className="floatright">
                <LogoutButton />
            </div>
            </Card>

            <div className="mt-10 ">
                <ToggleAccordion />
              
            </div>
        </>
    );
}