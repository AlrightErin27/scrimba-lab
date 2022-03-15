import "./App.css";

function EmojiButton(props) {
  return (
    <button>
      <span role="img">{props.emoji}</span>
      {props.label}
    </button>
  );
}

function Header() {
  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        <EmojiButton emoji="👤" label="Login" />
      </nav>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.cardText}</h2>
      {props.children}
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Card cardText="Welcome to PetLand!">
        <em>Find your dream pet</em>
      </Card>
      <Card cardText="What pets would you like to see?">
        <div>
          <EmojiButton emoji="😸" label="Cats" />
          <EmojiButton emoji="🐕" label="Dogs" />
        </div>
      </Card>
    </main>
  );
}
function App() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
}
export default App;
