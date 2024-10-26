import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1"></a>html</li>
        <li><a href="/read/2"></a>css</li>
        <li><a href="/read/3"></a>js</li>
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
