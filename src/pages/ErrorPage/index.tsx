import "./style.css";

import React from "react";

function ErrorPage() {
    return (
        <div className="error-page">
            <h1>An error has occured!</h1>
            <div>
                <span>Possible reasons:</span>
                <ol>
                    <li>
                        This app uses Google Books API, which may have a
                        restricted access in your country.
                    </li>
                    <li>API&apos;s quota exceeded for queries per day.</li>
                    <li>
                        You have made too many requests in a short period of
                        time. Try again later.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default ErrorPage;
