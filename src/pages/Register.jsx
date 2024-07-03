import React from "react";
function Register(){
    return <div >
        <h1>Register</h1>
        <div class="register">

            <form action="/register" method="POST">
              <div class="form-group">
                <label for="email">Email</label><br></br>
                <input type="email" class="form-control" name="username"/>
              </div>
              <br></br>
              <div class="form-group">
                <label for="password">Password</label><br></br>
                <input type="password" class="form-control" name="password"/><br></br>
              </div>
              <br></br>
              <button type="submit" class="btn btn-dark">Register</button>
            </form>

          </div>
    </div>
}
export default Register;