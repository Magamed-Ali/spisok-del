import React from 'react';

function Form(props) {
    return (
        <div>
            <div className="form">
                <input
                    placeholder="Введите текст/"
                    type="text"
                    value={props.text}
                    onChange={(e) =>
                        props.setText(e.target.value)}
                />
                <button onClick={props.addTodo}>
                    добавить +

                </button>
            </div>
        </div>
    );
}

export default Form;