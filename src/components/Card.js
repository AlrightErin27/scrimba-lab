function Card(props) {
  return (
    <div className="card">
      <h2>{props.cardText}</h2>
      {props.children}
    </div>
  );
}

export default Card;
