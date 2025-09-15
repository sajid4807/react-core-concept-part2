
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Bowler from './Bowler'

function App() {

  function handleClick (){
    alert('click me')
  }

  // const handleClick3 = ()=>{
  //   alert('click me 3')
  // }
  const handleClick3 =()=> alert('click me 33')

  const handleClick4 = (num) => {
    const newNumber = num + 5
    alert(newNumber)
  }

  return (
    <>
      <h1>React</h1>
      <Batsman></Batsman>
      <Bowler></Bowler>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() =>{alert('click me 2')}}>Click me2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => handleClick4(100)}>Click me 4</button>
    </>
  )
}

export default App
