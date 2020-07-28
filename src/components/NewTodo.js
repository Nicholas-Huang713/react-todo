import React, {Component} from 'react';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {addToList, handleChange, toDo} = this.props;
        return (
            <div>
                New Todo Form
                <form onSubmit={addToList}>
                    <input type="text" 
                        name="toDo"                            
                        value={toDo}
                        onChange={handleChange}
                    />
                    <button>Add to List</button>
                </form>
            </div>
        )
    }
}

export default NewTodo;