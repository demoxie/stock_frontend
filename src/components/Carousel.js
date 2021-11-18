import React from "react";
import "../assets/carousel.css";
import image1 from "../assets/images/c-d-x-PDX_a_82obo-unsplash.jpg"
import image2 from "../assets/images/caroline-attwood-E1rH__X9SA0-unsplash.jpg"
import image3 from "../assets/images/daniel-korpai-hbTKIbuMmBI-unsplash.jpg"
import image4 from "../assets/images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
import image5 from "../assets/images/imani-bahati-LxVxPA1LOVM-unsplash.jpg"
import image6 from "../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg"
import image7 from "../assets/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg"
import image8 from "../assets/images/jakob-owens-O_bhy3TnSYU-unsplash.jpg"
import image9 from "../assets/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
import image10 from "../assets/images/varun-gaba-dcgB3CgidlU-unsplash.jpg"


export default function Carousel() {
  let url = "#";
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>
              Trending <b>Products</b>
            </h2>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src={image1}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Apple iPad</h4>
                          <p className="item-price">
                            <strike>$400.00</strike> <span>$369.00</span>
                          </p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} className="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div class="thumb-wrapper">
                        <div className="img-box">
                          <img
                            src={image2}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div className="thumb-content">
                          <h4>Sony Headphone</h4>
                          <p className="item-price">
                            <strike>$25.00</strike> <span>$23.99</span>
                          </p>
                          <div class="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} className="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image3}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Macbook Air</h4>
                          <p class="item-price">
                            <strike>$899.00</strike> <span>$649.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image4}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Nikon DSLR</h4>
                          <p class="item-price">
                            <strike>$315.00</strike> <span>$250.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image5}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Sony Play Station</h4>
                          <p class="item-price">
                            <strike>$289.00</strike> <span>$269.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image6}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Macbook Pro</h4>
                          <p class="item-price">
                            <strike>$1099.00</strike> <span>$869.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image7}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Bose Speaker</h4>
                          <p class="item-price">
                            <strike>$109.00</strike> <span>$99.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image8}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Samsung Galaxy S8</h4>
                          <p class="item-price">
                            <strike>$599.00</strike> <span>$569.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image8}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Apple iPhone</h4>
                          <p class="item-price">
                            <strike>$369.00</strike> <span>$349.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image9}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Canon DSLR</h4>
                          <p class="item-price">
                            <strike>$315.00</strike> <span>$250.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image10}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Google Pixel</h4>
                          <p class="item-price">
                            <strike>$450.00</strike> <span>$418.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="thumb-wrapper">
                        <div class="img-box">
                          <img
                            src={image10}
                            class="img-responsive"
                            alt=""
                          />
                        </div>
                        <div class="thumb-content">
                          <h4>Apple Watch</h4>
                          <p class="item-price">
                            <strike>$350.00</strike> <span>$330.00</span>
                          </p>
                          <div class="star-rating">
                            <ul class="list-inline">
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="list-inline-item">
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <a href={url} class="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                class="carousel-control left"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control right"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
