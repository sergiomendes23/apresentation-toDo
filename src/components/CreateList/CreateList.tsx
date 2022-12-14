import styled from 'styled-components';
import { useState, KeyboardEvent } from "react";

type Props = {
    onEnter: (taskName: string) => void
}

export const CreateList = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

	return (
		<Container>
			<div className="image">➕</div>
			<input 
                type="text" 
                placeholder="Adicionar uma tarefa" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp ={handleKeyUp}
            />
		</Container>
	);
};

const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    .image{
        margin-right: 5px;
    }
    input{
        border: 0px;
        background-color: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }
`;