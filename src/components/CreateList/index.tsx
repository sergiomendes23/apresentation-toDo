import * as s from "./style";
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
		<s.Container>
			<div className="image">➕</div>
			<input 
                type="text" 
                placeholder="Adicionar uma tarefa" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyUp ={handleKeyUp}
            />
		</s.Container>
	);
};
