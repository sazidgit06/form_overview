import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css"


export const levelContext = createContext('gold');
export const moneyContext = createContext();

const Grandpa = () => {

    const [money, setMoney] = useState(0)
    return (

        <div className="grandpa">
            <h2>grandpa</h2>
            <p>net money: {money}</p>
            <moneyContext.Provider value={[money, setMoney]}>
                <levelContext.Provider value="gold">
                    <section className="flex">
                        <Dad></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </levelContext.Provider>
            </moneyContext.Provider>

        </div>
    );
};

export default Grandpa;