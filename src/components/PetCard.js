function PetCard(props) {
  console.log(props);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h3>Favorite Snacks:</h3>
      <ul>{props.snacks}</ul>
    </div>
  );
}

export default PetCard;
