function MainCard(props) {
  return (
    <div className="content">
      <img src={props.image} alt={props.title} />
      <div className="description">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default MainCard;
