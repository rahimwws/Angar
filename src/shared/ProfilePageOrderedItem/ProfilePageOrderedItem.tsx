import React from 'react'

import "./style.scss"

type Props = {}

export const ProfilePageOrderedItem = (props: Props) => {
    return (
        <div className='profile-page-ordered-item'>
            <span className='ordered-id'>
                #2365341
            </span>
            <p className='ordered-data'>16 Августа 2023</p>
            <h3 className='ordered-price'>36 829 ₽</h3>
            <button className='ordered-button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M0.926802 6.00906L14.3102 6.00346M14.3102 6.00346L9.28944 1.23771M14.3102 6.00346L9.29344 10.7734" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    )
}