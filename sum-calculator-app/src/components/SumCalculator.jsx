import { useState } from 'react';

/**
 * Component for calculating the sum of two numbers.
 * Includes input validation and error handling.
 */
function SumCalculator() {
  // State variables to store input numbers, result, and error message
  const [number1, setNumber1] = useState(''); // First input number
  const [number2, setNumber2] = useState(''); // Second input number
  const [result, setResult] = useState(null); // Result of the sum
  const [error, setError] = useState(''); // Error message for invalid inputs

  /**
   * Function to calculate the sum of two numbers.
   * Validates inputs and updates the result or error state.
   */
  const calculateSum = () => {
    // Reset error and result before calculation
    setError('');
    setResult(null);

    // Validate if inputs are not empty
    if (number1.trim() === '' || number2.trim() === '') {
      setError('\u26A0 Please enter both numbers!'); // Error for empty inputs
      return;
    }

    // Convert inputs to numbers
    const num1 = Number(number1);
    const num2 = Number(number2);

    // Validate if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      setError('\u26A0 Please enter valid numbers!'); // Error for invalid numbers
      return;
    }

    // Calculate the sum if inputs are valid
    const sum = num1 + num2;
    setResult(sum); // Update result state
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '400px',
      margin: '50px auto',
      border: '2px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Title */}
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Sum Calculator
      </h1>

      {/* Input field for the first number */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Number 1:
        </label>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)} // Update state on input change
          placeholder="Enter first number"
          style={{
            width: '90%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
      </div>

      {/* Input field for the second number */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Number 2:
        </label>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)} // Update state on input change
          placeholder="Enter second number"
          style={{
            width: '90%',
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        />
      </div>

      {/* Button to trigger sum calculation */}
      <button
        onClick={calculateSum}
        style={{
          width: '50%',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Calculate Sum
      </button>

      {/* Display error message if any */}
      {error && (
        <div style={{
          padding: '10px',
          backgroundColor: '#ffebee',
          color: '#c62828',
          borderRadius: '5px',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}

      {/* Display the result if calculation is successful */}
      {result !== null && (
        <div style={{
          padding: '15px',
          backgroundColor: '#e8f5e9',
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0', fontSize: '18px', color: '#2e7d32' }}>
            <strong>Result: {result}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default SumCalculator;