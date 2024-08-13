import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './App.css'
import DynamicForm from './dynamicForm.jsx';

function App() {

  return (
    <>
      <div>
        <DynamicForm />
      </div>
      
    </>
  )
}

export default App
