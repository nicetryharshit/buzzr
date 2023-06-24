import React, { useEffect, useState } from 'react';
import * as colors from '../utils/colors';

const Button = ({ text, icon, backgroundColor, onClick }) =>
{
    const [iconComponent, setIconComponent] = useState(null);
    const buttonStyle = {
        backgroundColor: backgroundColor || colors.BLUE,
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        height: '2.5em',
        border: 'none',
        borderRadius: '1.25em',
        cursor: 'pointer',
        margin: '.5em',
    };

    const iconStyle = {
        height: '1.2em',
        filter: 'invert(100%)',
    };

    const textStyle = {
        color: 'white',
        marginLeft: '0.5em',
        fontFamily: 'Inter',
        fontWeight: '400',
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
            {text && <span className="custom-button-text" style={textStyle}>{text}</span>}
        </button>
    );
};

export default Button;
