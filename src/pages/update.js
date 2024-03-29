//Team Members:
// Kaushik Patil - 1001928970
// Vivek Yelethotadahalli Srinivas - 1002064152
import React from "react";
import "../pages/components.scss";
import { useState } from "react";
  
const Update = () => {

    const [iName, setiName] = useState ("");
    const [niName, setniName] = useState ("");

    function updateItem() {
        let data = {
          "name" : iName, 
          "name2": niName
        }
        console.log(data)
    
        fetch(`http://127.0.0.1:5000/updateitem`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), 
        }).then((res) => {
          res.json();
          alert("Updated Successfully");
        });
      }


  return (
    <div className="col-md-12">
        <div className="app-container ml-3">
            <div className="row">
                <h2>
                    Update values in 'ITEM' table
                </h2>
                <div className="col-md-3">
                    <span>Enter Old Item Name to be updated :</span>
                    <input
                        className=""
                        type="text"
                        placeholder="Item Name"
                        required
                        onChange={e => setiName(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <span>Enter New Item Name :</span>
                    <input
                        className=""
                        type="text"
                        placeholder="Item Name"
                        required
                        onChange={e => setniName(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={updateItem} className="submit-btn">Update</button>
            </div>
        </div>
    </div>
  );
};
  
export default Update;