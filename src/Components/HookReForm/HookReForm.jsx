import useInput from "../../Hooks/useInput";

const HookReForm = () => {

    const [name, handleChangeName] = useInput('sazid');
    const [email, handleChangeEmail] = useInput('sazid.doc@gmail.com');
    const [password, handleChangePassword] = useInput();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={handleChangeName} type="text" name="name"/>
                <br />
                <input defaultValue={email} onChange={handleChangeEmail} type="email" name="email"/>
                <br />
                <input defaultValue={password} onChange={handleChangePassword} type="password" name="password" placeholder="password"/>
                <br />
                <button type="submit" value="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookReForm;