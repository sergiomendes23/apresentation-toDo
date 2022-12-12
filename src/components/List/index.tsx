import * as s from "./style";
import { item } from "../../types/item"

type Props = {
    item: item
}

export const List = ({item}: Props) => {
    return (
        <s.Container>
            <input type="checkbox" />
            <label>{item.name}</label>
        </s.Container>
    )
}