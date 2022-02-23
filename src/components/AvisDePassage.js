import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header'
import "./AvisDePassage.scss"



const AvisDePassage = () => {

  const InformationAvis = useSelector(state => state.InformationAvis);

  return (
    <div>

      <Header />
      <h1 className='title-avis'>avis de passage</h1>

      <div className='container'>
        <div className='container-avis'>
          <div className='avis'>
            Nom de l'intervenant : {InformationAvis.intervenant}
          </div>
          
          <div className='avis'>
            Nom entreprise ou client : {InformationAvis.client}
          </div>
          <div className='avis'>
             Date de l'intervention : {InformationAvis.date}
          </div>
          <div className='avis'>
            <span>observation :</span> {InformationAvis.observation}
          </div>
          <div className='thanks'>
            Merci de votre confiance
            </div>
        </div>
      </div>
    </div>
  )
}

export default AvisDePassage