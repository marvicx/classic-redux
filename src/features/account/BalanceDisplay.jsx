import React from "react";
import { useSelector } from "react-redux";

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency || "USD",
  }).format(value);
}

const BalanceDisplay = () => {
  const account = useSelector((store) => store.account);
  return (
    <div className="balance">
      {formatCurrency(account.balance, account.currency)}
    </div>
  );
};

export default BalanceDisplay;
