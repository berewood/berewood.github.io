import React, {useState, useContext} from "react";
import {Segment, Form, Button} from "semantic-ui-react";
import usePin from "./usePin";
import validatePin from "./auth";
import {toast} from "react-toastify";
import { AuthContext } from "./auth";



const LoginForm = () => {
    const [userPin, setUserPin] = useState("");
    const [pin, setPin] = useContext(AuthContext);

    const handleLogin = () => {
        if (validatePin(userPin)) {
            setPin(userPin)
        } else {
            toast.error("Invalid PIN, please try again");
            setUserPin("");
        }
    }

    return (
        <div className="login-form"
            style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "25vw",
                minWidth: "363px",
                maxWidth: "500px",
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
            }}
        >
            <Segment style={{width: "100%"}}>
                <Form onSubmit={handleLogin}>
                    <Form.Input
                        required
                        label="Enter the pin"
                        value={userPin}
                        onChange={(e, {value}) => setUserPin(value)}
                    />
                    <Button content="Login" />
                </Form>
            </Segment>
        </div>
    );
}

export default LoginForm;
