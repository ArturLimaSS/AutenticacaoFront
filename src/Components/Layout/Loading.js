import React, { useState } from "react";

export const Loading = ({ status, component: Component }) => {
    const [loaded, setLoaded] = useState(false);

    if (status === 'true') {
        setLoaded(true);
    } else {
        setLoaded(false);
    }

    return loaded !== true ? (
        <div>LoadingComponent ...</div>
    ) : (
        <Component />
    );
}