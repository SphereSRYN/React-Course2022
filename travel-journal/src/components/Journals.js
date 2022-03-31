import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../css/journal.css";
function Journals({ journals }) {
  console.log("jounals, ", journals);
  return (
    <div className="journal">
      <div className="journal_img">
        <img src={journals.imageUrl} alt="" />
      </div>
      <div className="journal_list">
        <div className="journal_location">
          <FontAwesomeIcon icon={faLocationDot} className="faLocationDot" />
          <span className="j_location">{journals.location}</span>
          <span className="j_view">View on Google Maps</span>
        </div>
        <div className="journal_title">
          <span>{journals.title}</span>
        </div>
        <div className="journal_description">
          <span className="j_date">
            {journals.startDate} - {journals.endDate}
          </span>
          <span className="j_location">{journals.description}</span>
        </div>
      </div>
    </div>
  );
}

export default Journals;
