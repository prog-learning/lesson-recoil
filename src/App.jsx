import { Atom } from './Atom';
import { AtomFamily } from './AtomFamily';
import { Selector } from './Selector';
import { SelectorAsync } from './SelectorAsync';
import { SelectorFamily } from './SelectorFamily';
import { User } from './User';

function App() {
  return (
    <div>
      <h1>Lesson Recoil</h1>
      <Atom />
      <Selector />
      <SelectorAsync />
      <AtomFamily />
      <SelectorFamily />
      {/* <User /> */}
    </div>
  );
}

export default App;
