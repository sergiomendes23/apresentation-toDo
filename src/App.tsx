import * as s from './/App.styles'
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
    <s.Container>
      <s.Area>
        <s.Header>Lista de Tarefas</s.Header>
        <CreateList onEnter={handleAddTask} />
        {list.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </s.Area>
    </s.Container>
  )
}

export default App;