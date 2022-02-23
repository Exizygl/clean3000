import React from 'react'
import { useSelector } from 'react-redux';
import Header from './Header'
import "./AvisDePassage.scss"



const AvisDePassage = () => {

  const InformationAvis = useSelector(state => state.InformationAvis);

  return (
    <div>

      <Header />
      <h1>AVIS DE PASSAGE</h1>

      <div className='container'>
        <div className='container-avis'>
          <div className=' avis avis-Intervenant'>
            Nom de l'intervenant : {InformationAvis.intervenant}
          </div>
          
          <div className=' avis avis-Client'>
            Nom entreprise ou client : {InformationAvis.client}
          </div>
          <div className=' avis avis-Client'>
             Notre technicien est intervenu pour l'entretien de la vitrerie le : {InformationAvis.date}
          </div>
          <div className=' avis avis-observation'>
            OBSERVATION : {InformationAvis.observation}
          </div>
          <div>
            Merci de votre confiance
            </div>
        </div>
      </div>
    </div>
  )
}

export default AvisDePassage