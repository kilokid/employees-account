import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


const App = () => { 
    const data = [
        {id: 1, name: 'Alex M.', salary: '800', increase: false},
        {id: 2, name: 'Artem L.', salary: '3000', increase: true},
        {id: 3, name: 'Dima V.', salary: '5000', increase: false}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmploeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;