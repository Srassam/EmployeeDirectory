import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Layout(props) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>last 4 of extension</th>
                    <th>email</th>
                    <th>team</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Saad Rassam</td>
                    <td>3726</td>
                    <td>smrassam@gmail.com</td>
                    <td>Blue</td>
                </tr>
            </tbody>
        </Table>
    );
}