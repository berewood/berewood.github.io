import React from "react";
import sha512 from "crypto-js/sha512";
const PIN = "730f80693a797acd846fa6541e07a044386880ee8b20a20e20b33b51c8b896147bd8cead2866bbb87a32d15628aaa2e93b0e3b884821801425c5135a45abf3e0";

const validatePin = (pin) => {
    const hashed = sha512((pin || "").toLowerCase());
    return hashed == PIN;
};

export const AuthContext = React.createContext();

export default validatePin;
