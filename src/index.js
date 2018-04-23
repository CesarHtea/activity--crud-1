import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppTheme extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<AppTheme />, document.getElementById('root'));
registerServiceWorker();
