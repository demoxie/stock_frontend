import React from 'react'
import '../assets/nav.css'
export default function NavBar() {
  let url = '#'
  return (
    <>
      <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a class="navbar-brand" href={url}>
            <i class="fa fa-cube"></i>Crown<b>Interactive</b>
          </a>
          <button
            type="button"
            data-target="#navbarCollapse"
            data-toggle="collapse"
            class="navbar-toggle"
          >
            <span class="navbar-toggler-icon"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href={url}>Home</a>
            </li>
            <li>
              <a href={url}>About</a>
            </li>
            <li class="dropdown">
              <a data-toggle="dropdown" class="dropdown-toggle" href={url}>
                Services <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href={url}>Web Design</a>
                </li>
                <li>
                  <a href={url}>Web Development</a>
                </li>
                <li>
                  <a href={url}>Graphic Design</a>
                </li>
                <li>
                  <a href={url}>Digital Marketing</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={url}>Blog</a>
            </li>
            <li>
              <a href={url}>Contact</a>
            </li>
          </ul>
          <form class="navbar-form form-inline">
            <div class="input-group search-box">
              <input
                type="text"
                id="search"
                class="form-control"
                placeholder="Search by Name"
              />
              <span class="input-group-addon">
                <i class="material-icons">&#xE8B6;</i>
              </span>
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href={url} class="notifications">
                <i class="fa fa-bell-o"></i>
                <span class="badge">1</span>
              </a>
            </li>
            <li>
              <a href={url} class="messages">
                <i class="fa fa-shopping-cart"></i>
                <span class="badge">10</span>
              </a>
            </li>
            <li class="dropdown">
              <a
                href={url}
                data-toggle="dropdown"
                class="dropdown-toggle user-action"
              >
                <img
                  src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                  class="avatar"
                  alt="Avatar"
                />{' '}
                Paula Wilson <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href={url}>
                    <i class="fa fa-user-o"></i> Profile
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i class="fa fa-calendar-o"></i> Calendar
                  </a>
                </li>
                <li>
                  <a href={url}>
                    <i class="fa fa-sliders"></i> Settings
                  </a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href={url}>
                    <i class="material-icons">&#xE8AC;</i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
