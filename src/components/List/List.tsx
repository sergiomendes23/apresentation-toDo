import styled from 'styled-components';
import { item } from "../../types/item";
import { useState } from "react";

type Props = {
    item: item
}

type ContainerProps = {
    done: boolean,
}

export const List = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange = {e => setIsChecked(e.target.checked)} 
            />
            <label>{item.name}</label>
        </Container>
    )
}

const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
));