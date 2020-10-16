import React from 'react';

const ServiceTable = ({order}) => {
    return (
                <tr>
                    <th scope="row">{order.name}</th>
                    <td>{order.email}</td>
                    <td>{order.service}</td>
                    <td>{order.details}</td>
                    <td>Pending</td>
                </tr>
    );
};

export default ServiceTable;