import React, { useState, useEffect } from 'react';
import axiosClient from '../axios-clint';
import { useStateContext } from '../context/ContextProvider';

function StudentForm() {

    const {setUser, setToken} = useStateContext()
    const [errors, setErrors] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(formData)
        //consol.log axiosClient url
        console.log(axiosClient.BaseURL)

        axiosClient.post('http://127.0.0.1:8000/api/signup', formData)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
    
    };

    return (
        <div>
            <h2>Add a Student </h2>
            <div>
            {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password Confirmation:</label>
                    <input
                        type="text"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
