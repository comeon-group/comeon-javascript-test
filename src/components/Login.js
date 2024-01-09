import React, {useState, useEffect} from "react"
import { toast } from "react-toastify"



const Login= ()=> {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  async function loginUser(usercredentials) {
    return fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usercredentials),
    }).then((res) => res.json())
  }
  const style = {
    backgroundColor: '#8EB50D',
    "&:hover": {
      backgroundColor: "#023020"
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()

    await loginUser({
      username,
      password,
    }).then((res) => {
      if (res.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.player))
        window.location.href ="/"
      } else {
        toast.error(res.error, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    })
  }
return (
    <div className="login">
    <div className="ui grid centered">
        <form onSubmit={handleSubmit}>
            <div className="fields">
                <div className="required field">
                    <div className="ui icon input">
                        <input type="text" onChange={(e) => setUserName(e.target.value)} name="username" placeholder="Username" />
                        <i className="user icon"></i>
                    </div>
                </div>
                <div className="required field">
                    <div className="ui icon input">
                        <input type="password"  onChange={(e) => setPassword(e.target.value)}  name="password" placeholder="Password" />
                        <i className="lock icon"></i>
                    </div>
                </div>
                <div className="field">
                    <div className="ui icon input">
                        <input style={style} type="submit" value="Login" />
                        <i className="right chevron icon"></i>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
)

};

export default Login;