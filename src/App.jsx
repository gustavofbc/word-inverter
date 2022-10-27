import { useState } from "react"

function App() {
  const [valueInput, setValueInput] = useState('');
  const [valueOutput, setValueOutput] = useState('');

  function convertWord(event) {
    event.preventDefault();
    let arrayWords = valueInput.split('');
    let wordInverted = [];

    for (let i = arrayWords.length - 1; i >= 0; i--) {
      wordInverted.push(arrayWords[i]);
    }

    return setValueOutput(wordInverted)
  }

  return (
    <form onSubmit={convertWord}>
      <label htmlFor="field">
        <input
          id="field"
          type="text"
          placeholder="Informe a palavra:"
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />
      </label>
      <p>{valueOutput}</p>
      <button type="submit">Converter</button>
    </form>
  )
}

export default App
