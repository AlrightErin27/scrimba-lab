import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import PetCard from "./components/PetCard";
// import Card from "./components/Card";
// import EmojiButton from "./components/EmojiButton";

const pets = [
  {
    id: 1,
    name: "Romeo",
    image:
      "https://sweetdachshunds.com/wp-content/uploads/2021/12/Cream-Wheaton-Fawn-And-Blonde-Long-Haired-Dachshunds-%E2%80%93-Whats-The-Difference-730x350.jpg?ezimgfmt=rs:730x350/rscb1/ng:webp/ngcb1",
    snacks: ["Peanut Butter", "Greenies", "The Bones of Erin's Enemies"],
  },
  {
    id: 2,
    name: "Lucy",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    snacks: ["Pigeons", "Grass", "Chicken"],
  },
];

pets.push({
  id: 3,
  name: "Telephone",
  image:
    "https://geniusvets.s3.amazonaws.com/gv-dog-breeds/english-bulldog-1.jpg",
  snacks: ["Bugs"],
});

function App() {
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        name={petObj.name}
        image={petObj.image}
        key={petObj.id}
        snacks={petObj.snacks.map((snack) => {
          return <li>{snack}</li>;
        })}
      />
    );
  });
  //console.log(petCards);
  return (
    <div>
      <Header />
      <div className="card">{petCards}</div>
      {/* <HomePage /> */}
    </div>
  );
}
export default App;
