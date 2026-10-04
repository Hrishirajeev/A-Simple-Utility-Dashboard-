import { useState } from "react";

const Counter = () => {
  // Store the current counter value
  const [count, setCount] = useState(0);

  // Store how much we want to increase or decrease
  const [step, setStep] = useState(1);

  // Increase the counter
  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  // Decrease the counter, but don't go below 0
  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - step, 0));
  };

  // Reset the counter back to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <section className="counter">
      <h2>Counter</h2>

      {/* for Showing the current counter value */}
      <p className="counter-value">{count}</p>

      {/* for Showing this message when the counter reaches 0 */}
      {count === 0 && (
        <p className="limit-message">Minimum limit reached</p>
      )}

      {/* Letting the user to choose the step value */}
      <label>
        Step:
        <input
          type="number"
          min="1"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
      </label>

      {/* Counter action buttons */}
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;