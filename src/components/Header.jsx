import React, { useState } from 'react'

const Header = (props) => {
    const [isOpenConfig, setIsOpenConfig] = useState(false)
    const handleOpenConfig = () => {
        setIsOpenConfig(!isOpenConfig)
    }
    const changeSpeed = () => {
        props.setIsQuick(!props.isQuick)
    }

    return (
        <>
            <div className='header'>
                <p className='logo'>Pachinko Simulator</p>
                <p className='config' onClick={handleOpenConfig}>config</p>
            </div>
            <div className={isOpenConfig ? 'is-open headerConfig' : 'headerConfig'}>
                <p className='bold'>option</p>
                <span className='normal'>Game Speed</span>
                <div className="toggle_button">
                    <input id="toggle" className="toggle_input" type='checkbox' onChange={changeSpeed} />
                    <label htmlFor="toggle" className="toggle_label" />
                </div>
            </div>
        </>
    )
}

export default Header