import { useState } from 'react';
import { Atom } from './Atom';
import { AtomFamily } from './AtomFamily';
import { Selector } from './Selector';
import { SelectorAsync } from './SelectorAsync';
import { SelectorFamily } from './SelectorFamily';
import { SomeNest } from './SomeNest';

function App() {
  const [state, setState] = useState('atom');

  return (
    <div>
      <h1>Lesson Recoil</h1>
      <SomeNest hello="hello some nest" />

      <button onClick={() => setState('atom')}>atom</button>
      <button onClick={() => setState('selector')}>selector</button>
      <button onClick={() => setState('selectorAsync')}>selectorAsync</button>
      <button onClick={() => setState('atomFamily')}>atomFamily</button>
      <button onClick={() => setState('selectorFamily')}>selectorFamily</button>

      {state === 'atom' && <Atom />}
      {state === 'selector' && <Selector />}
      {state === 'selectorAsync' && <SelectorAsync />}
      {state === 'atomFamily' && <AtomFamily />}
      {state === 'selectorFamily' && <SelectorFamily />}
    </div>
  );
}

export default App;
