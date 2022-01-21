import React, {useState, useContext} from "react";
import {Segment, Form, Button} from "semantic-ui-react";
import validatePin from "./auth";
import {toast} from "react-toastify";
import { AuthContext } from "./auth";


const LoginForm = () => {
    const [userPin, setUserPin] = useState("");
    const setPin = useContext(AuthContext)[1];

    const handleLogin = () => {
        if (validatePin(userPin)) {
            setPin(userPin);
        } else {
            toast.error("Invalid password, please try again");
            setUserPin("");
        }
    };

    return (
        <div className="login-form">
            <Segment>
                <Form onSubmit={handleLogin}>
                    <Form.Input
                        required
                        label="Enter the password to access this site"
                        value={userPin}
                        onChange={(e, {value}) => setUserPin(value)}
                    />
                    <Button content="Login" />
                </Form>
            </Segment>
        </div>
    );
};

export default LoginForm;
