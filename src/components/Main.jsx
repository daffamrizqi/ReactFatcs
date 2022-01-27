import React from 'react';
import "./main.css"

export default function Main() {
    return (
        <main className='main-container' >
            <div className='content' >
                <h1 className='main-title'>Fun facts about React</h1>
                <ul className='main-facts' >
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    )
}
