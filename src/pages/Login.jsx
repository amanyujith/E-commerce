import React from "react";
function Login(){
    return <div>
        <h1>Login</h1>
        <div className="register">

          <form action="/login" method="POST">
            <div class="form-group">
              <label for="email">Email</label><br></br>
              <input type="email" class="form-control" name="username"/>
            </div><br></br>
            <div class="form-group">
              <label for="password">Password</label><br></br>
              <input type="password" class="form-control" name="password"/>
            </div><br></br>
            <button type="submit" class="btn btn-dark">Login</button>
          </form>

        </div>
    </div>
}
export default Login;