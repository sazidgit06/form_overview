import { useEffect } from "react";
import useInputState from "../../Hooks/useInputState";

 
const HookForm = () => {

    const [name, handleChangeName] = useInputState('rojoni');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={handleChangeName} type="text" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" placeholder="Email"/>
                <br />
                <input type="text" name="number" placeholder="Number"/>
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;