import { useContext } from "react";
import Special from "../Special/Special";
import Cousin from "../cousin/Cousin";
import { moneyContext } from "../grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name="rejwan"></Cousin>
                <Cousin name="rownok"></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money+1000)}>Add 1000</button>
        </div>
    );
};

export default Aunty;