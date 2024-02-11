import React from "react";
import {Card, Statistic} from "semantic-ui-react";
import "./DashboardGrid.css";


const DASHBOARD_BOXES = [
    {
        title:"Average Number of Visitors", 
        className: "purple"
    }, 
    {
        title:"Average number of visits/visitor", 
        className: "green"
    }, 
    {
        title:"Average time spent in site/visitor", 
        
    }, 
    {
        title:"General rating from users"
    },
];

function DashboardGrid(){
    return (
        <div className="dashboardGrod">
            <div className="dashboardGrid-boxes">
                {DASHBOARD_BOXES.map((box, i) => (
                   <Card className="dashboardGrid-boxes-item" center raised>
                    <Statistic
                    className={box.className ? box.className: ""}
                    as="h4"
                    label={box.title}
                    value="89"
                    />
                   </Card> 
                ))}
            </div>
            <div>
                {/** content to follow */}
            </div>
        </div>
    );
}
export default DashboardGrid;