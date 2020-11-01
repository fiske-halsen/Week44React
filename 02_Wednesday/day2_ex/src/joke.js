import React, { useState, useEffect } from "react";

function SearchJokes() {
  const [joke, setJoke] = useState();

  function getJoke() {
    console.log("Fetching");
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getJoke();
    }, 10000);
    return () => clearInterval(interval);
  }, [joke]);

  return (
    <div>
      <p> The fetch Joked is: {joke} </p>
      <button onClick={getJoke}> Get ChuckNorris</button>
    </div>
  );
}

export default SearchJokes;
