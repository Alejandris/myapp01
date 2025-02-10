import React from 'react';
import { useTranslation } from 'react-i18next';
const Header = () => {
const { t, i18n } = useTranslation();
    return (
    <header>
        <h1>{t('title')}</h1>
    <   select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="al" > Gerrmany</option>
        </select>
    </header>
);
};
export default Header;