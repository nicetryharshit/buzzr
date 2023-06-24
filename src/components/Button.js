import React, { useEffect, useState } from 'react';
import * as colors from '../utils/colors';

const Button = ({ text, icon, backgroundColor, onClick }) =>
{
    const [iconComponent, setIconComponent] = useState(null);
    const buttonStyle = {
        backgroundColor: backgroundColor || colors.RED,
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        height: '2.5em',
    };

    const iconStyle = {
        height: '1.25em',
        marginRight: '5px',
    };


    useEffect(() =>
    {
        const importIcon = async () =>
        {
            try
            {
                const importedIcon = await import(`../assets/icons/${icon}.svg`);
                setIconComponent(importedIcon.default);
            } catch (error)
            {
                console.error(`Error importing icon: ${error}`);
            }
        };

        if (icon)
        {
            importIcon();
        }
    }, [icon]);

    return (
        <button className="custom-button" style={buttonStyle} onClick={onClick}>
            {iconComponent && (
                <img className="custom-button-icon" src={iconComponent} alt="Icon" style={iconStyle} />
            )}
            {text && <span className="custom-button-text">{text}</span>}
        </button>
    );
};

export default Button;
