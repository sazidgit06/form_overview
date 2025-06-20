import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null)

    useEffect( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Name"/>
                <br />
                <input defaultValue={'sazid.git@gmail.com'} type="email" name="email" placeholder="Email"/>
                <br />
                <input type="text" name="number" placeholder="Number"/>
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;