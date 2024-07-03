import "./style.css";

import React from "react";
import { OrbitProgress } from "react-loading-indicators";

function LoadingIndicator() {
    return (
        <div className="load-indicator">
            <OrbitProgress color="#d4d2bd" />
        </div>
    );
}

export default LoadingIndicator;
