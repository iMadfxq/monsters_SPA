import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email, website } = this.props.monster;
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${id}.png`}
          alt={`The monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
        <a href={`https://www.${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
    );
  }
}

export default Card;
