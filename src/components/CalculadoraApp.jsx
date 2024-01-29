import './botoes.css'
import './calculadora.css'
import { useState } from "react"

export default function CalculadoraApp(){
    const [valor, setvalor] = useState(0);
    const [velhoValor, setvelhoValor] = useState();
    const [operador, setOperador] = useState();

    function InputValor(e){
        let input = e.target.value

        // se o primeiro valor digitado for 0 ele continua sendo 0
        if(valor === 0){
            setvalor(input)

            // ao clicar . sem um valor antes continua 0
            if(input === "."){
                setvalor(0)
            }

         // se o primeiro valor digitado for outro número diferente de 0 ele retira o 0
        }else{
            setvalor(valor+ input)
        }

        // clicar apenas um ponto (sem repetições seguidas)
        if(input === "." && valor.includes(".")){
            setvalor(valor)
        }
    }

    function Apagar(){
        setvalor(0)
    }

    // divide o calculo em duas partes (valor velho) e (valor atual)
    function Operador(e){
        let operadorInput = e.target.value;
        setOperador(operadorInput)
        setvelhoValor(valor)
        setvalor(0)
    }

    function Calcular(){
        if(operador === "/"){
            setvalor(parseFloat(velhoValor) / parseFloat(valor))
        }

        if(operador === "+"){
            setvalor(parseFloat(velhoValor) + parseFloat(valor))
        }

        if(operador === "-"){
            setvalor(parseFloat(velhoValor) - parseFloat(valor))
        }

        if(operador === "x"){
            setvalor(parseFloat(velhoValor) * parseFloat(valor))
        }        
    }
    
    return (
        <>
        <main className="calculadora">
            <section className="display">
                <div className='resultado'>{valor}</div>
            </section>

            <section className="sec-btn">
                <button onClick={Operador} value="/" className="sinal-operacao">/</button>
                <button onClick={Operador} value="+" className="sinal-operacao">+</button>
                <button onClick={Operador} value="-" className="sinal-operacao">-</button>
                <button onClick={Operador} value="x" className="sinal-operacao">x</button>
                <button onClick={InputValor} value={7}>7</button>
                <button onClick={InputValor} value={8}>8</button>
                <button onClick={InputValor} value={9}>9</button>
                <button onClick={Calcular} className="sinal-igual" value="=">=</button>
                <button onClick={InputValor} value={4}>4</button>
                <button onClick={InputValor} value={5}>5</button>
                <button onClick={InputValor} value={6}>6</button>
                <button onClick={InputValor} value={0}>0</button>
                <button onClick={InputValor} value={1}>1</button>
                <button onClick={InputValor} value={2}>2</button>
                <button onClick={InputValor} value={3}>3</button>
                <button onClick={InputValor} value=".">.</button>
                <button className="sinal-del" onClick={Apagar}>del</button>
            </section>           
        </main>        
        </>
    )
}