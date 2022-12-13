import * as s from "./style"

export const CreateList = () => {
    return (
        <s.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicionar uma tarefa"
            />
        </s.Container>
    )
}