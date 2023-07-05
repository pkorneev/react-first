import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar'
import InputExpense from './components/InputExpense'
function App() {
  return (
    <>
      <Navbar />
      <InputExpense />
    </>
  )
}

export default App
