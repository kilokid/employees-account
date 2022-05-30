import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../employees-list/employess-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {id: 1, name: 'Alex M.', salary: '800', increase: false, rise: false},
                {id: 2, name: 'Artem L.', salary: '3000', increase: true, rise: true},
                {id: 3, name: 'Dima V.', salary: '5000', increase: false, rise: false},
            ],
            term: '',
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        });
    };

    addItem = (name, salary) => {
        const addItem = {
            id: this.maxId++,
            name,
            salary,
            increase: false,
            rise: false,
        };

        this.setState(({data}) => {
            const newEmployee = [...data, addItem];
            return {
                data: newEmployee,
            }
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        [prop]: !item[prop],
                    }
                }

                return item;
            }),
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                 />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter />
                </div>
    
                <EmploeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem} 
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;