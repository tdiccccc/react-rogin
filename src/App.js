import { useState } from "react";
import './App.css';

function App() {
  const initialVlues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialVlues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value }); //name = 10行目のname value = inputで打ち込んだ文字列 usename:""に格納
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();//defaultとして更新を妨げる
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    //正規表現
    if(!values.username) {
      errors.username = "ユーザー名を入力してくだいさい";
    };

    if(!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してくだいさい";
      //正規表現
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    };

    if(!values.password) {
      errors.password = "passwordを入力してくだいさい";
    } else if (values.password.length < 6) {
      errors.password = "6文字以上15文字以内で入力してください"
    } else if (values.password.length > 15) {
      errors.password = "6文字以上15文字以内で入力してください"
    };
    return errors;
  };

// {Object.keys(formErrors).length}エラー文がいくつでているか
  return (
    <div className="formContainer">
      <form onSubmit = {(e) => handleSubmit(e) }>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className= "formField">
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMsg">{formErrors.username}</p>
          <div className= "formField">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="mailAddress"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMsg">{formErrors.mailAddress}</p>
          <div className= "formField">
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMsg">{formErrors.password}</p>
        <button className="submitButton">ログイン</button>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className="msgOk">ログインに成功しました</div>
        )} 
        </div>
      </form>
    </div>
  );
}

export default App;
