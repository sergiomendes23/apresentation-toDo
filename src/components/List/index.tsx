import * as s from "./style";
import { item } from "../../types/item";
import { useState } from "react";

type Props = {
    item: item
}

export const List = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <s.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange = {e => setIsChecked(e.target.checked)} 
            />
            <label>{item.name}</label>
        </s.Container>
    )
}