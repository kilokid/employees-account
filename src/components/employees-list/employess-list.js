import EmployeesListItem from "../employees-list-item/emploeeys-list-item";

import './employees-list.css';

const EmploeesList = ({data}) => {
    const elements = data.map(employee => {
        return (
            <EmployeesListItem {...employee} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmploeesList;