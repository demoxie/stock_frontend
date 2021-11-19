import React from 'react'
import '../assets/signin.css'

export default function SignIn() {
  let url = '#'
  return (
    <>
      <div class="signin-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Sign in</h2>
          <p class="hint-text">Sign in with your social media account</p>
          <div class="social-btn text-center">
            <a href={url} class="btn btn-primary btn-lg" title="Facebook">
              <i class="fa fa-facebook"></i>
            </a>
            <a href={url} class="btn btn-info btn-lg" title="Twitter">
              <i class="fa fa-twitter"></i>
            </a>
            <a href={url} class="btn btn-danger btn-lg" title="Google">
              <i class="fa fa-google"></i>
            </a>
          </div>
          <div class="or-seperator">
            <b>or</b>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control input-lg"
              name="username"
              placeholder="Username"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control input-lg"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-lg btn-block signup-btn"
            >
              Sign in
            </button>
          </div>
          <div class="text-center small">
            <a href={url}>Forgot Your password?</a>
          </div>
        </form>
        <div class="text-center small">
          Don't have an account? <a href={url}>Sign up</a>
        </div>
      </div>
    </>
  )
}
