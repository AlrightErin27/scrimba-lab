function PetCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default PetCard;
