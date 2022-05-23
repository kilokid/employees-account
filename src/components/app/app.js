import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmploeesList />
            <EmployeesAddForm />
        </div>
    );
}

export default App;