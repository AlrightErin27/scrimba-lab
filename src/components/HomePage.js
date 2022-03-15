import Card from "./Card";
import EmojiButton from "./EmojiButton";

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

export default HomePage;
