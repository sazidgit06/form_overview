import { useState } from "react";
import "./Form.css";

const StandardForm = () => {

    const [email, setEmail] = useState('sazid.git@gmail.com');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be longer than 6 charecter');
        }else{
            setError('');
            console.log(email, password)
        }
        
    }

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="text-color">
                    {
                        error && <p>{error}</p>
                    }
                </div>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input onChange={handleChangeEmail} 
                    type="email" name="email" 
                    value={email} placeholder="Email"
                />
                <br />
                <input 
                    onChange={handleChangePassword} 
                    type="password" name="password" placeholder="password"/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StandardForm;