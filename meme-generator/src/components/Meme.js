import React from "react";
import "../css/Meme.css";
import memesData from "../data/memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  // let url = "";

  /**
   * Challenge: Get a random image from the `memesData` array
   * when the "new meme image" button is clicked.
   */
  function getRandomMeme() {
    /**Bob 코드 
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;*/
    /** 내 코드*/
    let memes = memesData.data.memes;
    let min = 0; //Math.ceil(min);
    let max = Math.floor(memesData.data.memes.length);
    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    //  url = memes[randomNum].url;
    // console.log("memes, ", url);

    setMemeImage(memes[randomNum].url);
  }

  /**
   * Challenge: Save the random meme URL in state
   * - Create new state called `memeImage` with an
   *   empty string as default
   * - When the getMemeImage function is called, update
   *   the `memeImage` state to be the random chosen
   *   image URL
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="top" />
        <input type="text" className="form--input" placeholder="bottom" />
        <button onClick={getRandomMeme} type="button" className="form--button">
          Get a new meme image! 🖼
        </button>
      </form>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
