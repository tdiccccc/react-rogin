import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className= "formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username"/>
          </div>
          <div className= "formField">
            <label>Email</label>
            <input type="text" placeholder="Email" name="mailAddress"/>
          </div>
          <div className= "formField">
            <label>Password</label>
            <input type="text" placeholder="Password" name="password"/>
          </div>
        </div>
        <button className="submitButton">ログイン</button>
      </form>
    </div>
  );
}

export default App;
