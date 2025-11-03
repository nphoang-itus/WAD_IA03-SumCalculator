import { useState } from "react";

function SumCalculator() {
  // State để lưu 2 số và kết quả
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  // Hàm tính tổng
  const calculateSum = () => {
    // Chuyển string thành number và cộng lại
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Sum Calculator</h1>

      {/* Input 1 */}
      <div style={{ marginBottom: '10px' }}>
        <label>Number 1: </label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Enter first number"
        />
      </div>

      {/* Input 2 */}
      <div style={{ marginBottom: '10px' }}>
        <label>Number 2: </label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>

      {/* Button */}
      <button onClick={calculateSum}>
        Calculate Sum
      </button>

      {/* Hiển thị kết quả */}
      {result !== null && (
        <div style={{ marginTop: '20px', fontSize: '20px' }}>
          <strong>Result: {result}</strong>
        </div>
      )}
    </div>
  );
}
export default SumCalculator;