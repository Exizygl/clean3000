import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateAvis } from './actions';
import './App.scss';
import Header from './components/Header';
import Selection from './components/Selection';






function App() {

  const ListeIntervenants = useSelector(state => state.intervenants);
  const ListeClients = useSelector(state => state.client);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
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
      <select name="intervenant" id="intervenant-select" onChange={(e) => handleChange("intervenant", e.target.value)}>
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
      <select name="client" id="client-select"  onChange={(e) => handleChange("client", e.target.value)}>
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
          <input type="date" id="date-select" name="date" onChange={(e) => handleChange("date", e.target.value)}/>
        </div>
        
        <div className="inputContainer observation">
          <label htmlFor="observation">OBSERVATIONS:</label>
          <textarea name="message" rows="10" cols="30" onChange={(e) => handleChange("observation", e.target.value)}></textarea>
        </div>

        

        <input type="submit" value="Avis de passage" />
      </form>
    </div>
  );
}

export default App;
