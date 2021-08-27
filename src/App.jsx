import { Atom } from './Atom';
import { Selector } from './Selector';
import { SelectorAsync } from './SelectorAsync';
import { User } from './User';

function App() {
  return (
    <div>
      <h1>Lesson Recoil</h1>
      <Atom />
      <Selector />
      <User />
      <SelectorAsync />
    </div>
  );
}

export default App;
