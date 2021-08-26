import React from 'react';
import promoForm from './promoForm.module.css';
import MainForm from './../../../../common/collection-forms/main-form';
import FeatureItem from './components';

const PromoForm = ({ itemsData }) => {

  return (
    <section className={promoForm.wrapper}>
      <div className={promoForm.row}>
        <h2 className={promoForm.title}>Долгие поиски не принесли результатов?</h2>
        <div className={promoForm.body}>
          <div className={promoForm.column}>

            {itemsData.map(({ iconClass, title, description }) => <FeatureItem iconClass={iconClass} title={title} description={description} /> ) }

          </div>
          <div className={promoForm.column}>
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoForm;