function Something() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button style={{ padding: '10px 20px', background: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px' }} onClick={handleClick}>
        Dont Click me
      </button>
    </div>
  );
}

export default Something;
