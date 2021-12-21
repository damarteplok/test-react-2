import React, {useRef, useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css';
import Error from "../UI/Error";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name or age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater zero).'
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        setError();
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <Error
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor={'username'}>Username</label>
                    <input
                        id="username"
                        type={'text'}
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                        ref={nameInputRef}
                    />
                    <label htmlFor={'age'}>Age (Years)</label>
                    <input
                        id="age"
                        type={'number'}
                        value={enteredAge}
                        onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
