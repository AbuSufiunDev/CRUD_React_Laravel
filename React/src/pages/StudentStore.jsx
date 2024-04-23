import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentForm() {
    //const [csrfToken, setCsrfToken] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/students', formData);
            console.log(response.data); // Log the response from the server
            // Optionally, you can reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: ''
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Add a Student</h2>
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
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Course:</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
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
