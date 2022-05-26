import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase: false,
            advance: false,
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase,
        }))
    }

    onadvance = () => {
        this.setState(({advance}) => ({
            advance: !advance,
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, advance} = this.state;

        let classNames = "";

        if (advance) {
            classNames = "list-group-item d-flex justify-content-between like";
        } else {
            classNames = "list-group-item d-flex justify-content-between";
        }

        if (increase) {
            classNames += " increase";
        }

        return (
            <li className={classNames} onClick={this.onadvance}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
};

export default EmployeesListItem;