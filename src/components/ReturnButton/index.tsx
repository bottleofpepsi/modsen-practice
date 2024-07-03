import "./style.css";

import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

function ReturnButton() {
    const navigate = useNavigate();

    const navigation = () => {
        navigate("/");
    };

    return (
        <Button onClick={navigation}>
            <FaAngleLeft />
            Go Back
        </Button>
    );
}

export default ReturnButton;
