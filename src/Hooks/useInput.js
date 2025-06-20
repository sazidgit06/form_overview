import { useState } from "react";

const useInput = (defaultValue = null) => {
    const [input, setInput] = useState(defaultValue);

    const handleChange = e => {
        setInput(e.target.value);
    }
    return[input, handleChange];
};

export default useInput;