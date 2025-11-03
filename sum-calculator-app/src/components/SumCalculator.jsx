import { useState } from 'react';

function SumCalculator() {
  // State để lưu 2 số và kết quả
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(''); // 👈 Thêm state lỗi

  // Hàm tính tổng với validation
  const calculateSum = () => {
    // Reset error và result trước
    setError('');
    setResult(null);

    // Kiểm tra input rỗng
    if (number1 === '' || number2 === '') {
      setError('⚠️ Vui lòng nhập đầy đủ cả hai số!');
      return;
    }

    // Kiểm tra có phải số hợp lệ không
    if (isNaN(number1) || isNaN(number2)) {
      setError('⚠️ Vui lòng nhập số hợp lệ!');
      return;
    }

    // Nếu hợp lệ, tính tổng
    const sum = Number(number1) + Number(number2);
    setResult(sum);
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
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Sum Calculator
      </h1>

      {/* Input 1 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Number 1:
        </label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
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

      {/* Input 2 */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Number 2:
        </label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
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

      {/* Button */}
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

      {/* Hiển thị lỗi */}
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

      {/* Hiển thị kết quả */}
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