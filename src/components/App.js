import React, { useState } from "react";

export const App = () => {
    const [title, setTitle] = useState("CLICK ME");

    return (
    	<button onClick={() => setTitle("CLICKED")}>
    		{title}
    	</button>
    );
};

export default App;