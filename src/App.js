import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import * as colors from './utils/colors';

function App()
{
  return (
    <div className="App">
      <Button text="submit" icon="share" backgroundColor={colors.GREEN} />
      <Button text="SUBMIT SUBMITSUBMIT" icon="share" backgroundColor={colors.RED} />
      <Button text="SUBMIT submit SUBMIT" icon="share" backgroundColor={colors.BLUE} />
    </div>
  );
}

export default App;
