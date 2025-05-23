import "./App.css";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((store) => store.customer.fullName);
  return (
    <>
      <div>
        {/* <h1>🏦 The React-Redux Bank ⚛️</h1> */}
        {!customer ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
    </>
  );
}

export default App;
