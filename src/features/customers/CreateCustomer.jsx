import React, { useState } from "react";
import { createCustomer } from "./customerSlice";
import { useDispatch } from "react-redux";

const CreateCustomer = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};

export default CreateCustomer;
