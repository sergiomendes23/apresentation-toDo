import styled from 'styled-components';
import { useState } from 'react';
import { item } from './types/item';
import { List } from './components/List';
import { CreateList } from './components/CreateList';

const App = () => {

  const [list, setList] = useState<item[]>([])

  const handleAddTask = (taskName: string) => {
    let task = [...list]
    task.push({
      id: list.length +1,
      name: taskName,
      done: false,
    })
    setList(task);
  };

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>
        <CreateList onEnter={handleAddTask} />
        {list.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </Area>
    </Container>
  )
}

export default App;

export const Container = styled.div`
    background-color: #17181f;
    color: #797A81;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.div`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;