import React from 'react'
import '../../Styles/UserProfileBar.css'
import avatar from '../../assets/avatar_2.jpeg'

const UserProfileBar = () => {
    return (
        <div className='user__container'>

            <div className="user__general-info">

                <div className="user__profile-img">
                    <img src={avatar} alt="" className="image" />
                </div>

                <div className="user__details">

                    <div className="user__name">
                        <h2 className='h-text'>Tony Stark</h2>
                    </div>

                    <div className="user__desc">
                        <p className="p-text">School Id - T001 <span className='vertical_bar'>|</span></p>
                        <p className="p-text">Saint Pauls <span className='vertical_bar'>|</span></p>
                        <p className="p-text">tonyStark@school.com <span className='vertical_bar'>|</span></p>
                        <p className="p-text">Teacher <span className='vertical_bar'>|</span></p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserProfileBar
