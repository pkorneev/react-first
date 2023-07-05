import React, { useState } from 'react';

interface Expense {
    amount: string;
    place: string;
    date: string;
  }

function InputExpense() {
    const [amount, setAmount] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const handleAddExpense = () => {
        const newExpense: Expense = {
            amount,
            place,
            date,
        };

        setExpenses([...expenses, newExpense]);
        setAmount('');
        setPlace('');
        setDate('');
    };
    const handleDeleteExpense = (index: number) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
      };
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text">Amount</span>
                <input 
                    type="text" 
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <span className="input-group-text">.00 $</span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Place</span>
                <input type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="Where was the expense made?"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Date</span>
                <input type="date"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="mm/dd/yyyy"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={handleAddExpense}>
                    Add Expense
                </button>
            </div>
            <div>
                <h2>Expense List</h2>
                    {expenses.map((expense, index) => (
                        <div key={index}>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>
                                        -{expense.amount}$ {expense.place} {expense.date}
                                    </span>
                                    <button className="btn btn-danger" onClick={() => handleDeleteExpense(index)}>
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default InputExpense;