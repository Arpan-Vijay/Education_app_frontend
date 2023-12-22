import React, { useEffect, useState } from 'react';
import avatar from '../../assets/avatar_2.jpeg';
import '../../Styles/TeacherProfile.css';
import { PhoneCall, ClipboardList, Clock } from 'lucide-react';
import UserProfileBar from '../Navbars/UserProfileBar';
import { jwtDecode } from 'jwt-decode';

const TeacherProfile = () => {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        // Fetch and decode the token when the component mounts
        const token = localStorage.getItem('auth');
        if (token) {
            const decoded = jwtDecode(token);
            setDecodedToken(decoded);
        }
    }, []);

    const data = [
        // { columnName: 'School Id', columnKey: 'School_ID' },
        { columnName: 'First Name', columnKey: 'first_name' },
        { columnName: 'Last Name', columnKey: 'last_name' },
        { columnName: 'Birthdate', columnKey: 'birthdate' },
        { columnName: 'Father Name', columnKey: 'father_name' },
        { columnName: 'Aadhar Card', columnKey: 'aadhar_card' },
        { columnName: 'PAN Card', columnKey: 'pan_card' },
        { columnName: 'Mobile Number', columnKey: 'contact_number' },
        { columnName: 'Alternative Mobile Number', columnKey: 'alternative_contact_number' },
        { columnName: 'Permanent Address', columnKey: 'permanent_address' },
        { columnName: 'Communication Address', columnKey: 'communication_address' },
    ];

    const replacePlaceholders = (string, dataObject) => {
        return string.replace(/{(\w+)}/g, (match, key) => dataObject[key] || 'N/A');
    };

    return (
        <>
            {decodedToken ? (
                <div className='user__container'>
                    <div className="user__general-info">
                        <div className="user__profile-img">
                            <img src={avatar} alt="" className="image" />
                        </div>
                        <div className="user__details">
                            <div className="user__name">
                                <h2 className='h-text'>
                                    {replacePlaceholders('{first_name}', decodedToken)}{' '}
                                    {replacePlaceholders('{last_name}', decodedToken)}
                                </h2>
                            </div>
                            <div className="user__desc">
                                <p className="p-text">
                                    {replacePlaceholders('School ID - {school_id}', decodedToken)}
                                    <span className='vertical_bar'>|</span>
                                </p>
                                <p className="p-text">
                                    {replacePlaceholders('{school_name}', decodedToken)}
                                    <span className='vertical_bar'>|</span>
                                </p>
                                <p className="p-text">
                                    {replacePlaceholders('{email}', decodedToken)}
                                    <span className='vertical_bar'>|</span>
                                </p>
                                <p className="p-text">
                                    {replacePlaceholders('{role}', decodedToken)}
                                    <span className='vertical_bar'>|</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <UserProfileBar /> */}

                    <div className="profile__detailed-info section__padding">
                        <div className="content__card">
                            <h3 className="content__card-heading">About Me</h3>
                            <div className="cards">
                                <table className="content__card-table">
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td className='content__table-col-heading'>{row.columnName}</td>
                                                <td className='content__table-data'>
                                                    {replacePlaceholders(`{${row.columnKey}}`, decodedToken)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="content__card">
                            <h3 className="content__card-heading">About Me</h3>
                            <div className="cards">
                                <table className="content__card-table">
                                    <tbody>
                                        {data.map((row, index) => (
                                            <tr key={index}>
                                                <td className='content__table-col-heading'>{row.columnName}</td>
                                                <td className='content__table-data'>
                                                    {replacePlaceholders(`{${row.columnKey}}`, decodedToken)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default TeacherProfile;
