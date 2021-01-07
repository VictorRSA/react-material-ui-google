import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/core/Button';
import Saveicon from 'material-ui/icons/Save';
import ButtonGroup from 'material-ui/core/ButtonGroup';
import DeleteIcon from 'material-ui/icons/Delete';
import Checkbox from 'material-ui/core/CheckBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonGroup>
        <Button onClick={ ()=>alert('Hello World')} 
        variant='contained'
        color='secondary'
        fontSize='15px'
        startIcon={<Saveicon />} >
          Hello Word
          /*size="small,large to make button larger or smaller,style="*/ 
        </Button>

        </ButtonGroup>
       
       
      </header>
    </div>
  );
}
{/*victor.nkuna@yahoo.com  VINK40130760170851@# */}

export default App;
