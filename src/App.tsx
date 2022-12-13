import * as s from './/App.styles'
import { useState } from 'react';
import { item } from './types/item';
import { List } from './components/List';
import { CreateList } from './components/CreateList';

const App = () => {

  const [list, setList] = useState<item[]>([
    {id: 1, name: 'Fazer o hub', done: false},
    {id: 2, name: 'Fazer o projetão', done: false}
  ])

  return (
    <s.Container>
      <s.Area>
        <s.Header>Lista de Tarefas</s.Header>
        <CreateList />
        {list.map((item, index) => (
          <List key={index} item={item} />
        ))}
      </s.Area>
    </s.Container>
  )
}

export default App;