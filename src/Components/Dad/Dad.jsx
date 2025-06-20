import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import Son from "../son/Son";

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <Son></Son>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;