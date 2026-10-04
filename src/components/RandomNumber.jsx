import { useState } from "react";

const RandomNumber = () => {
  // to Store the generated number
  const [number, setNumber] = useState(null);

  // to Store the minimum and maximum values
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  // to Store an error message
  const [error, setError] = useState("");

  // for Generating a random number
  const generateNumber = () => {
    // Check if the range is not valid
    if (min > max) {
      setError("Min cannot be greater than Max");
      return;
    }

    // Clear the old error messages 
    setError("");

    // for Generating a number between min and max
    const randomNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;

    setNumber(randomNumber);
  };

  return (
    <section className="random-number">
      <h2>Random Number Generator</h2>

      {/* for Showing the generated number */}
      <p className="random-value">
        {number === null ? "No number generated yet" : number}
      </p>

      {/* Letting  the user to choose the range */}
      <div className="number-range">
        <label>
          Min:
          <input
            type="number"
            value={min}
            onChange={(event) => setMin(Number(event.target.value))}
          />
        </label>

        <label>
          Max:
          <input
            type="number"
            value={max}
            onChange={(event) => setMax(Number(event.target.value))}
          />
        </label>
      </div>

      {/* to Show an error when the range is invalid */}
      {error && <p className="error-message">{error}</p>}

      {/* for Generating a number using the selected range */}
      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </section>
  );
};

export default RandomNumber;