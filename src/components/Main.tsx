import React from "react";

import { MainProps } from "../types/MainTypes";
import { Select } from "./ui/Select/Select";
import { Input } from "./ui/Input/Input";

import styles from '../styles/Main.module.scss'


export const Main: React.FC<MainProps> = ({ currencyArray }) => {
    const [amountFrom, setAmountFrom] = React.useState<number>(0)
    const [amountTo, setAmountTo] = React.useState<number>(0)
    const [selectedFrom, setSelectedFrom] = React.useState('USD')
    const [selectedTo, setSelectedTo] = React.useState('EUR')

    const changeAmountFrom = (value: number) => {
        const priceFrom = currencyArray.find(cur => cur.cc === selectedTo)?.rate
        const priceTo = currencyArray.find(cur => cur.cc === selectedFrom)?.rate
        const price = !!priceFrom && value / priceFrom
        const result = !!priceTo && (+price * priceTo).toFixed(2)
        setAmountTo(+result)
        setAmountFrom(value)
    }

    const changeAmountTo = (value: number) => {
        const priceFrom = currencyArray.find(cur => cur.cc === selectedTo)?.rate
        const priceTo = currencyArray.find(cur => cur.cc === selectedFrom)?.rate
        const result = priceFrom !== undefined && priceTo !== undefined && (priceFrom / priceTo * value).toFixed(2)
        setAmountFrom(+result)
        setAmountTo(value)
    }

    React.useEffect(() => {
        changeAmountTo(amountTo)
    }, [selectedFrom, amountFrom])

    React.useEffect(() => {
        changeAmountFrom(amountFrom)
    }, [selectedTo, amountTo])

    return (
        <section className={styles['main']}>
            <div className={styles['main__wrapper']}>
                <div className={styles['main__block']}>
                    <Select currencyArray={currencyArray} selected={selectedFrom} setSelected={setSelectedFrom} />
                    <Input amount={amountFrom} setAmount={changeAmountFrom} />
                </div>
                <div className={styles['main__block']}>
                    <Select currencyArray={currencyArray} selected={selectedTo} setSelected={setSelectedTo} />
                    <Input amount={amountTo} setAmount={changeAmountTo} />
                </div>
            </div>
        </section >
    );
};
