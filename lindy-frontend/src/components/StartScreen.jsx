export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h2>Welcome to Lindy</h2>
      <button onClick={onStart}>Start Chatting</button>
    </div>
  );
}
