import "./App.css";
import AccordionTable from "./Components/AccordionTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseStyles } from "./Styles/BaseStyles";

function App() {
  return (
    <div
      style={BaseStyles}
    >
      <AccordionTable />
    </div>
  );
}

export default App;
