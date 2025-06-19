
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form submitted...');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"/>
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

export default SimpleForm;