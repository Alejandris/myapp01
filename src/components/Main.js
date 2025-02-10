import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  const img = t('img', { returnObjects: true }); 

  return (
    <main>
      <p>{t('description')}</p>
      
        <div>
          <img src={img.src} alt={img.alt} />
        </div>

      <button onClick={() => alert(t('button_text'))}>{t('button_text')}</button>
    </main>
  );
};

export default Main;
