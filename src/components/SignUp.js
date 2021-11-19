import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/signup.css'

export default function SignUp() {
  let url = '#'
  return (
    <>
      <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Create an Account</h2>
          <p class="hint-text">
            Sign up with your social media account or email address
          </p>
          <div class="social-btn text-center">
            <a href={url} class="btn btn-primary btn-lg">
              <i class="fa fa-facebook"></i> Facebook
            </a>
            <a href={url} class="btn btn-info btn-lg">
              <i class="fa fa-twitter"></i> Twitter
            </a>
            <a href={url} class="btn btn-danger btn-lg">
              <i class="fa fa-google"></i> Google
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
              type="email"
              class="form-control input-lg"
              name="email"
              placeholder="Email Address"
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
            <input
              type="password"
              class="form-control input-lg"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-lg btn-block signup-btn"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div class="text-center">
          Already have an account?
          <a href={url}>Login here</a>
        </div>
      </div>
    </>
  )
}
