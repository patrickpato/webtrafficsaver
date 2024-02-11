import React from "react";
import { Table  } from "semantic-ui-react";
import "./DashboardTable.css"


const TABLE_DATA = [
    {
        Day:"01-01-2024", 
        Total_visits: 450000, 
        New_visits: 100000,

    }, 
];

function DashboardTable() {
    return (
        <div className="dashboardTable">
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Day</Table.HeaderCell>
                        <Table.HeaderCell>Total Visits</Table.HeaderCell>
                        <Table.HeaderCell>New Visits</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {TABLE_DATA.map((item, i) => (
                        <Table.Row>
                            <Table.Cell>
                                <div>{item.Day}</div>
                            </Table.Cell>
                            <Table.Cell>
                                <div>{item.Total_visits}</div>
                            </Table.Cell>
                            <Table.Cell>
                                <div>{item.New_visits}</div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default DashboardTable