import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';


function App(props) {
 
  return (
    <div className="App">
      <header>
         <Header className="header-wrapper" />
      </header>
      <main>
        <Main dispatch={props.dispatch} 
        messageValue={props.appState.messagePage.messageInputValue}
        postValue={props.appState.profilePage.newPostText}
        post={props.appState.profilePage.posts} 
        users={props.appState.messagePage.dialogs} messages={props.appState.messagePage.message} friend={props.appState.navBar.friend} className="main-wrapper" />
      </main>
    </div>
    
  );
}


export default App;
