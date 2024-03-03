import React from "react";
import { Table  } from "semantic-ui-react";
import "./DashboardTable.css"


const data = [
    {Day: "01-01-2024", TotalVisits:3000, NewVisits:1000, UniqueVisits:700,DailyAvgForecast:2500, ForecastedMem: 1000}, 
    {Day: "01-02-2024", TotalVisits:3500, NewVisits:1200, UniqueVisits:500,DailyAvgForecast:2800, ForecastedMem: 1500}, 
    {Day: "01-03-2024", TotalVisits:4000, NewVisits:1500, UniqueVisits:900,DailyAvgForecast:3000, ForecastedMem: 2000}, 
    {Day: "01-04-2024", TotalVisits:4000, NewVisits:1500, UniqueVisits:1000,DailyAvgForecast:3000, ForecastedMem: 2000}, 
]

function DashboardTable() {
    return (
        <div className="dashboardTable">
        <table>
            <tr>
                <th>Day</th>
                <th>Total Visits</th>
                <th>New Visits</th>
                <th>Unique Visits</th>
                <th>Forecasted daily-average visitors(90-day forecast)</th>
                <th>Forecasted resource consumption(memory in mbs)</th>
            </tr>
            {data.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.Day}</td>
                        <td>{val.TotalVisits}</td>
                        <td>{val.NewVisits}</td>
                        <td>{val.UniqueVisits}</td>
                        <td>{val.DailyAvgForecast}</td>
                        <td>{val.ForecastedMem}</td>
                    </tr>
                )
            })}
        </table>
        </div>
    );
}

export default DashboardTable