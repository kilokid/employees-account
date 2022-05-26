import EmployeesListItem from "../employees-list-item/emploeeys-list-item";

import './employees-list.css';

const EmploeesList = ({data}) => {
    const elements = data.map(employee => {
        const {id, ...itemProps} = employee;

        return (
            <EmployeesListItem key={id} {...itemProps} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmploeesList;