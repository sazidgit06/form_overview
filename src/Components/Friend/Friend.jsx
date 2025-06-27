import { useContext } from "react";
import { levelContext } from "../grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(levelContext)
    return (
        <div>
            <p>Friend</p>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;