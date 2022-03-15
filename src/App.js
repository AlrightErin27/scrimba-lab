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
  },
  {
    id: 2,
    name: "Lucy",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
  },
];

function App() {
  const petCards = pets.map((petObj) => {
    return <PetCard name={petObj.name} image={petObj.image} key={petObj.id} />;
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
