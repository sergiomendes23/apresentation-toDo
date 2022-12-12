import * as s from './/App.styles'
import { useState } from 'react';
import { item } from './types/item';

const App = () => {

  const [list, setList] = useState<item[]>([
    {id: 1, name: 'Fazer o hub', done: false},
    {id: 2, name: 'Fazer o projetão', done: false}
  ])

  return (
    <s.Container>
      <s.Area>
        <s.Header>Lista de Tarefas</s.Header>
        {list.map((item, index) => (
          <div>...</div>
        ))}
      </s.Area>
    </s.Container>
  )
}

export default App;