import React, { useState } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState(""); // Message state

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const myFun = async () => {
        if (search.trim() === "") { // Trim to prevent only spaces
            setMsg("⚠️ Please enter something!"); // Set message when empty
            setData(null); // Clear previous results
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();

            if (jsonData.meals) {
                setData(jsonData.meals);
                setMsg(""); // Clear message when data is found
            } else {
                setData(null);
                setMsg("❌ Sorry, no recipes found!"); // Show error when no data is found
            }
        }
    };

    return (
        <>
            <h1 className="head">FOOD RECIPE APP</h1>
            <div className="container">
                <div className="searchBar">
                    <input 
                        type="text" 
                        placeholder="Enter Dish" 
                        value={search} // Ensure text is visible
                        onChange={handleInput}
                    />
                    <button onClick={myFun}>Search</button>
                </div>

                {/* 2️⃣ Display the message properly */}
                {msg && <h4 className="msg">{msg}</h4>}

                <div>
                    <Mealcards detail={data} />
                </div>
            </div>
        </>
    );
};

export default Mainpage;
