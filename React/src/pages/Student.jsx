import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true); // Changed 'loding' to 'loading'

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/students');
                setStudents(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStudents();
    }, []); // Added empty dependency array to useEffect

    if(loading){
        return <h1>Loading...</h1>; // Changed 'loding' to 'loading'
    }

    return (
        <div>
            {loading ? <h1>Loading...</h1> : <h1>ok</h1>} {/* Changed 'loding' to 'loading' */}
            <div>
            {students.map(student => (
                    <div key={student.id}>
                        <span>Name: {student.name}</span>
                        <span>Phone: {student.phone}</span>
                        <span>Email: {student.email}</span>
                        <span>Course: {student.course}</span>
                        <br />
                    </div>
                ))}
                <pre>{JSON.stringify(students)}</pre> {/* Displaying students data */}
            </div>
        </div>
    );
}

export default Student;
