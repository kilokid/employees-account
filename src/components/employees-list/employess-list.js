import EmployeesListItem from "../employees-list-item/emploeeys-list-item";

import './employees-list.css';

const EmploeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
};

export default EmploeesList;