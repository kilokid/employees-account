import EmployeesListItem from "../employees-list-item/emploees-list-item";

import './employees-list.css';

const EmploeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(employee => {
        const {id, ...itemProps} = employee;

        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle') )}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmploeesList;