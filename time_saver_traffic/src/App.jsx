import React  from "react";
import { Header } from "semantic-ui-react";
import DashboardGrid from "./components/DashboardGrid/main"; 
import DashboardTable from "./components/DashboardTable/main"; 
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header as="h3"> Time-Saver Traffic Dashboard</Header>
      </header>
      <div className="App-main">
        <DashboardGrid />
        <DashboardTable />
      </div>
    </div>
  );
}

export default App;