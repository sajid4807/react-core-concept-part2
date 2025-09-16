
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Bowler from './Bowler'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Fruit from './Fruit'
import Posts from './Posts'

const fetchUsers =fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const friendsFetch = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

// const fruitFetch = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

const fruitFetch = async () =>{
  const fruit =await fetch('https://jsonplaceholder.typicode.com/users')
  return fruit.json()
}
const postsFetch = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

function App() {
  const fruitPromise = fruitFetch()
  const friendsPromise = friendsFetch()
  const postsPromise = postsFetch()
  
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
      <Suspense fallback={<h3>Loading Post....</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>Loading Fruit....</h3>}>
        <Fruit fruitPromise={fruitPromise}></Fruit>
      </Suspense>
      {/* <Suspense fallback={<h3 >Fruit....</h3>}>
        <Fruit fruitFetch={fruitFetch}></Fruit>
      </Suspense> */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
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
