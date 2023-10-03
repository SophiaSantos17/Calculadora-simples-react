
import Input from './componentes/Input';
import Button from './componentes/Button';


import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');
  

  const hadleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setFirstNumber('0')
    setCurrentNumber('0');
  }

  const handleOnDeleteLast = () => {
    setCurrentNumber(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      } else {
        return '0';
      }
    });
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    }else{
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  
    const handleMultNumbers = () => {
      if (firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
  
      }else{
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }
  
    const handleDivNumbers = () => {
      if (firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
  
      }else{
        const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }
  
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== "0"){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '*':
          handleMultNumbers();
          break;

        case '/':
          handleDivNumbers();
          break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Input value={currentNumber}/> 
      <Content>
        <Row>
          <Button label="7" onClick={() => hadleAddNumber('7')}/>
          <Button label="8" onClick={() => hadleAddNumber('8')}/>
          <Button label="9" onClick={() => hadleAddNumber('9')}/>
          <Button label="DEL" onClick={handleOnDeleteLast}/>
        </Row>

        <Row>
          <Button label="4"  onClick={() => hadleAddNumber('4')} />
          <Button label="5"  onClick={() => hadleAddNumber('5')} />
          <Button label="6"  onClick={() => hadleAddNumber('6')} />
          <Button label="+"  onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Button label="1"  onClick={() => hadleAddNumber('1')} />
          <Button label="2"  onClick={() => hadleAddNumber('2')} />
          <Button label="3"  onClick={() => hadleAddNumber('3')} />
          <Button label="-"  onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="."  onClick={() => hadleAddNumber('.')} />
          <Button label="0"  onClick={() => hadleAddNumber('0')} />
          <Button label="/"  onClick={handleDivNumbers} />
          <Button label="x"  onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label="RESET" onClick={handleOnClear}/>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
