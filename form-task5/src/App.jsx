import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Homepage from './components/page';
import store from './store';




function App() {

  return (
    <>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          <Homepage />
        {/* </LocalizationProvider> */}

    </>
  )
}

export default App
