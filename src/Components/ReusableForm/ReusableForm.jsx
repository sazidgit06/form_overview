
const ReusableForm = ({children, handleSubmit, submitBtntext='submit'}) => {

    const handlelocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form onSubmit={handlelocalSubmit}>
                <input type="text" name="name" placeholder="Your name"/>
                <br />
                <input type="email" name="email" placeholder="email"/>
                <br />
                <input type="password" name="password" placeholder="password"/>
                <br />
                <input type="submit" value={submitBtntext} />
            </form>
        </div>
    );
};

export default ReusableForm;