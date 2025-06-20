import Cousin from "../cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name="rejwan"></Cousin>
                <Cousin name="rownok"></Cousin>
            </section>
        </div>
    );
};

export default Aunty;