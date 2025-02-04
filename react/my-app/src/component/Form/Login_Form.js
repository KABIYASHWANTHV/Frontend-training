import React, { useState } from 'react';
import './Form.css';

const Login_Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        gender: '',
        subjects: [],
        dob: '',
        location: ''
    });
    const [dataList, setDataList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                subjects: checked ? [...prev.subjects, value] : prev.subjects.filter((s) => s !== value)
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedList = [...dataList];
            updatedList[editIndex] = formData;
            setDataList(updatedList);
            setEditIndex(null);
        } else {
            setDataList([...dataList, formData]);
        }
        setFormData({ name: '', age: '', phone: '', gender: '', subjects: [], dob: '', location: '' });
    };

    const handleEdit = (index) => {
        setFormData(dataList[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setDataList(dataList.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="div1">
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="div1">
                        <label>Age</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="div1">
                        <label>Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="div1">
                        <label>Gender</label>
                        <div className="radiogroup">
                            <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
                            <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                        </div>
                    </div>
                    <div className="div1">
                        <label>Subjects</label>
                        <div className="checkgroup">
                            <input type="checkbox" name="subject" value="Math" checked={formData.subjects.includes('Math')} onChange={handleChange} /> Math
                            <input type="checkbox" name="subject" value="Science" checked={formData.subjects.includes('Science')} onChange={handleChange} /> Science
                            <input type="checkbox" name="subject" value="English" checked={formData.subjects.includes('English')} onChange={handleChange} /> English
                        </div>
                    </div>
                    <div className="div1">
                        <label>D.O.B</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className="div1">
                        <label>Location</label>
                        <select name="location" value={formData.location} onChange={handleChange} required>
                            <option value="" disabled>Select your location</option>
                            <option value="Tiruchengode">Tiruchengode</option>
                            <option value="Erode">Erode</option>
                            <option value="Salem">Salem</option>
                            <option value="Namakkal">Namakkal</option>
                        </select>
                    </div>
                    <button className="sbutton" type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
                </form>
            </div>
            <div className="table-container">
                <h2 className="table-title">Manage Data</h2>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Subjects</th>
                                <th>D.O.B</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.subjects.join(', ')}</td>
                                    <td>{data.dob}</td>
                                    <td>{data.location}</td>
                                    <td>
                                        <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Login_Form;
