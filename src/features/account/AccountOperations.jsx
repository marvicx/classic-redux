import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payloan, requestLoan, widthdraw } from "./accountSlice";

const AccountOperations = () => {
  const dispatch = useDispatch();
  const {
    balance,
    loan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {
    if (!depositAmount) alert("Please enter deposit amount");
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) alert("Please enter withdrawal amount");
    if (+balance < +withdrawalAmount) {
      alert("Insuficient balance");
      return;
    }
    dispatch(widthdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount) alert("Please enter loan amount");
    if (!loanPurpose) alert("Please enter loan purpose");
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payloan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? "Converting..." : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {loan > 0 && (
          <div>
            <span>
              Pay back ${loan} {currentLoanPurpose}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOperations;
