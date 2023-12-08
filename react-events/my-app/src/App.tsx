import CustomButton from './CustomButton';
import './App.css';

function handleCustomClick(text: string) {
  alert(`The ${text} button was clicked`);
}

function App() {
  return (
    <>
      <CustomButton onCustomClick={handleCustomClick} text="red" color="red" />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="green"
        color="green"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="blue"
        color="blue"
      />
    </>
  );
}

export default App;
