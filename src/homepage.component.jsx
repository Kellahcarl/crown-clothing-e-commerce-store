import React from 'react';
import './homepage.styles.scss';

function HomePage() {
    return ( 
    <div className = 'homepage' >
        <div className = 'directory-menu' >
            <div className = 'menu-item' >
                <div className='content'>
                    <h1 className= 'title'> Hats</h1>
                    <span className= 'subtitle'> Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item' >
                <div className='content'>
                    <h1 className= 'title'> jacket</h1>
                    <span className= 'subtitle'> Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item' >
                <div className='content'>
                    <h1 className= 'title'> women</h1>
                    <span className= 'subtitle'> Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item' >
                <div className='content'>
                    <h1 className= 'title'> men</h1>
                    <span className= 'subtitle'> Shop Now </span>
                </div>
            </div>
            <div className = 'menu-item' >
                <div className='content'>
                    <h1 className= 'title'> Hats</h1>
                    <span className= 'subtitle'> Shop Now </span>
                </div>
            </div>
        </div>         
    </div>
    )
}

export default HomePage;