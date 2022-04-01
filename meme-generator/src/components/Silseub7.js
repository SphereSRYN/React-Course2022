import React from "react";
import "../css/Card.css";
function Silseub7() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Use a ternary to determine which star image filename
   * should be used based on the `contact.isFavorite` property
   *
   * `true` => "star-filled.png"
   * `false` => "star-empty.png"
   */
  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }
  return (
    <main className=".card main">
      <article className="card">
        <img src="/pizza-modified.png" className="card--image" alt="" />
        <div className="card--info">
          <img
            src={`/images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
            alt=""
          />
          <h2 className="card--name">
            {contact.firstName}
            {contact.lastName}
          </h2>
          <p className="card--contact"> {contact.phone}</p>
          <p className="card--contact"> {contact.contact}</p>
        </div>
      </article>
    </main>
  );
}

export default Silseub7;
