function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button style={{ padding: '10px 20px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px' }} onClick={handleClick}>
        Hee hee
      </button>
    </div>
  );
}

export default Home;
