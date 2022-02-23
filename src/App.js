import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAvis } from './actions';
import './App.scss';
import Header from './components/Header';
import Selection from './components/Selection';







function App() {

  const ListeIntervenants = useSelector(state => state.intervenants);
  const ListeClients = useSelector(state => state.client);
  const InformationAvis = useSelector(state => state.InformationAvis);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = false;

    if(InformationAvis.intervenant !== "" && InformationAvis.client !== ""  && InformationAvis.date !== "" && InformationAvis.observation){
      valid =true;
    }else{
      alert("veuillez entrer toutes les informations") 
    }

    if(valid) navigate('/avis');
  }


  const IntervenantSelect = () => {

    const list = ListeIntervenants.map(item => {

      return (

        <Selection
          key={item.id}
          name={item.name}
        />
      );
    });

    return (
      <select name="intervenant" id="intervenant-select" className='Champ-selection' value={InformationAvis.intervenant} onChange={(e) => handleChange("intervenant", e.target.value)}>
        <option></option>
        {list}
      </select>
    )
  }

  const ClientSelect = () => {

    const list = ListeClients.map(item => {

      return (

        <Selection
          key={item.id}
          name={item.name}
        />
      );
    });

    return (
      <select name="client" id="client-select" className='Champ-selection' value={InformationAvis.client} onChange={(e) => handleChange("client", e.target.value)}>
        <option></option>
        {list}
      </select>
    )
  }


  const handleChange = (key, value) =>{
    dispatch(updateAvis(key,value));
    

}


  return (
    <div className="App">
      <Header />

      <h1 className='title-avis'> formulaire d'avis de passage</h1>
      
      <form onSubmit={(e) => handleSubmit(e)}>

        <div className="inputContainer">
          <label htmlFor="intervenant-select">Nom de l'intervenant :</label>
          {IntervenantSelect()}
        </div>

        <div className="inputContainer">
          <label htmlFor="client-select">Nom du client/entreprise :</label>
          {ClientSelect()}
        </div>

        <div className="inputContainer">
          <label htmlFor="date-select">Start date:</label>
          <input type="date" id="date-select" name="date" className='Champ-selection' value={InformationAvis.date} onChange={(e) => handleChange("date", e.target.value)}/>
        </div>
        
        <div className="inputContainer observation">
          <label htmlFor="observation">OBSERVATIONS:</label>
          <textarea name="message" rows="10" cols="30" className='Champ-selection' value={InformationAvis.observation} onChange={(e) => handleChange("observation", e.target.value)}></textarea>
        </div>

        
      <div className='button-form'>
        <input  type="submit" value="Avis de passage" />
      </div>
      </form>
    </div>
  );
}

export default App;
