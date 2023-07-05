import React, { useState, ChangeEvent, FormEvent  } from 'react';

function Navbar(){
    const [searchInput, setSearchInput] = useState('');
    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Search Input:', searchInput);
    }
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(e.target.value);
      };
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Expense Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;