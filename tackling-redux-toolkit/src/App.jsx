import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementbyAmount } from './counterSlice'
import './App.css'
import { Provider } from 'react-redux'
import TodoList from './todolist'

function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1 className='h1-Counter'> RTK Counter </h1>
      <h2 className='h2-Counter'> The value is: {count}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementbyAmount(2))}>increment by 2</button>
      <TodoList />

    </>
  )
}

export default App
