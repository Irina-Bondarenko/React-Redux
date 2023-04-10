import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customer.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}> + </button>
        <button onClick={() => getCash(Number(prompt()))}> - </button>
        <button onClick={() => addCustomer(prompt())}> + customer </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => deleteCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div>No customers</div>
      )}
    </div>
  );
}

export default App;
