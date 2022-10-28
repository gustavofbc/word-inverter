import { useState } from "react"
import logo from '../../assets/logo.svg'
import './styles.css'

export function Form() {
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
        <div className="container">
            <form onSubmit={convertWord} className="content">
                <img src={logo} alt="Word inverter logo" />
                <label htmlFor="field">
                    <input
                        id="field"
                        type="text"
                        placeholder="Informe a(s) palavra(s)"
                        value={valueInput}
                        onChange={(event) => setValueInput(event.target.value)}
                        autoFocus
                    />
                </label>
                <button className="convertButton" type="submit">Converter</button>
                <p className="result">{valueOutput != "" ? valueOutput : "A inversão da(s) palavra(s) aparecerá aqui"}</p>
            </form>
        </div>
    )
}