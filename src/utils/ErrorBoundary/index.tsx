import React, { Component } from "react";

import ErrorPage from "../../pages/ErrorPage";
import { Props, State } from "./types";

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: {} as Error,
        };
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error: error };
    }

    public render() {
        if (this.state.hasError) {
            return <ErrorPage error={this.state.error} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
