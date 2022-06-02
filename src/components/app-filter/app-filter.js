import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'employeesRise', label: 'Сотрудники на повышение'},
        {name: 'salaryCount', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const activeClass = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button className={`btn ${activeClass}`} type="button" key={name} onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;