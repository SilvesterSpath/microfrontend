import { render } from 'solid-js/web';
import './index.scss';
import Counter from 'remote/Counter';

const App = () => (
  <div>
    <div>Name: host</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Counter />
  </div>
);
render(App, document.getElementById('app'));
