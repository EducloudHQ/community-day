<template>
  <div class="body">
    <OgImageScreenshot />

    <div id="page">
      <div id="home" class="section section-1 hdr">
        <div class="content">
          <div class="container">
            <div class="main-div">
              <div class="inner-div">
                <div class="img-div">
                  <NuxtImg class="img-logo" src="/aws-logo.png" height="40" />
                </div>

                <h1 class="com-day">COMMUNITY DAY</h1>
                <div class="sep-dev">
                  <div class="seprator"></div>
                  <div class="cam-outer-div">
                    <div class="cam-div">
                      <h2 class="cam">CAMEROON</h2>
                    </div>
                  </div>
                </div>
                <h3 class="in-person">In-person Edition 2024</h3>

                <div class="time-out4">
                  <div class="time-out3">
                    <TimeOut
                      backgroundcolor="bg-[#9933cc]"
                      :value="days"
                      text="Days"
                    />
                    <TimeOut
                      backgroundcolor="bg-[#e33205]"
                      :value="hours"
                      text="Hours"
                    />
                    <TimeOut
                      backgroundcolor="bg-[#00a3db]"
                      :value="minutes"
                      text="Minutes"
                    />
                    <TimeOut
                      backgroundcolor="bg-[#f28a03]"
                      :value="seconds"
                      text="Seconds"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-bar">
          <p id="toggle"><span></span></p>
          <li class="spec">
            <a class="buy-ticket-link disabled button">Sold Out</a>
          </li>
          <ul>
            <li>
              <a href="#">About Community Day</a>
            </li>
            <!-- <li>
            <a href="#cfp">CFP</a>
          </li> -->
            <li>
              <a href="#venues">Venues</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#workshop">Workshops</a>
            </li>
            <li>
              <a href="#sponsors">Sponsors</a>
            </li>
            <li>
              <a href="#speakers">Speakers</a>
            </li>
            <li>
              <a href="#volunteers">Volunteers</a>
            </li>

            <li>
              <a id="sub-button" href="#subscribe" class="sub-button">
                <i class="icon large ion-md-notifications-outline"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section section-2">
        <div class="flex-it container">
          <div id="com_info" class="f1 left">
            <div class="left_in">
              <h4 class="headin-ttl">WHO ARE WE?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
                eros, dapibus sit amet tincidunt ut, vestibulum vitae magna.
                Aenean sagittis nunc rutrum libero hendrerit, a semper tortor
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
                eros, dapibus sit amet tincidunt ut, vestibulum vitae magna.
                Aenean sagittis nunc rutrum libero hendrerit, a semper tortor
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
                eros, dapibus sit amet tincidunt ut, vestibulum vitae magna.
                Aenean sagittis nunc rutrum libero hendrerit, a semper tortor
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu
                eros, dapibus sit amet tincidunt ut, vestibulum vitae magna.
                Aenean sagittis nunc rutrum libero hendrerit, a semper tortor
              </p>
            </div>
          </div>
          <div id="even_info" class="f1 right">
            <div class="right_in">
              <h4 class="heading-ttl">
                What to expect from AWS Community Day?
              </h4>
              <ul class="circle">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  arcu eros, dapibus sit amet tincidunt.
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div id="ticktes" class="section section-tickets text-center">
        <div class="container">
          <h4 class="main-heading-ttl text-center">Buy Tickets</h4>
          <div class="row flex-it">
            <div class="col-md-3">
              <div class="card tick_conf with_icon sold border">
                <h4 class="heading-ttl">Conference</h4>
                <div class="bg_img"></div>
                <p>Gives you access to the conference on 27th July, 2019</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card tick_work_1 with_icon sold dark border">
                <h4 class="heading-ttl">Serverless Workshop</h4>
                <div class="bg_img"></div>
                <p>Gets you access to Serverless Workshop on 26th July, 2019</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card tick_work_2 with_icon sold border">
                <h4 class="heading-ttl">Deep learning workshop</h4>
                <div class="bg_img"></div>
                <p>
                  Gets you access to Deep learning workshop on 26th July, 2019
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card combo with_icon sold dark border">
                <h4 class="heading-ttl">Combo</h4>
                <div class="bg_img"></div>
                <p>Gives you access to conference and any one workshop</p>
              </div>
            </div>
          </div>
          <div class="buy-wrapper row flex-it">
            <div class="f1">
              <a class="button large buy-ticket-link disabled">Buy Tickets</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Modals-->
      <div id="workshop_1" class="modal fade fillo" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="heading-ttl">
                <p>Serverless on AWS</p>
              </h4>
            </div>
            <div class="modal-body"></div>

            <div class="modal-footer">
              <br />
              <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-2">
                  <img
                    class="speakerImg"
                    src="/images/user.png"
                    alt="speaker img"
                  />
                </div>

                <div class="col-md-3">
                  <div id="align">
                    <h4 style="color: #ff9900">Workshop Trainer</h4>
                    <h4>
                      <a
                        href="https://www.linkedin.com/in/madhusudanshekar/"
                        target="_blank"
                        >Name</a
                      >
                    </h4>
                    <p>
                      <a href="https://aws.amazon.com/" target="_blank">AWS</a>
                    </p>
                  </div>
                </div>

                <div class="col-md-2">
                  <img
                    class="speakerImg"
                    src="/images/user.png"
                    alt="speaker img"
                  />
                </div>

                <div class="col-md-3">
                  <div id="align1">
                    <h4 style="color: #ff9900">
                      Supporting Trainer <br /><small>(Hands-on labs)</small>
                    </h4>
                    <!-- <h4>
                      <a
                        href="https://www.linkedin.com/in/srushith/"
                        target="_blank"
                        >Srushith R</a
                      >
                    </h4>
                    <p style="margin-top: -1px">
                      <a href="https://konfhub.com/" target="_blank">KonfHub</a>
                    </p> -->
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="workshop_2" class="modal fade fillo" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="heading-ttl">
                <p>Deep Learning on AWS</p>
              </h4>
            </div>
            <div class="modal-body">
              <p class="heading-ttl small-head">Prerequisites</p>
            </div>

            <div class="modal-footer">
              <br />
              <div class="row">
                <div class="col-md-1"></div>

                <div class="col-md-2">
                  <img
                    class="speakerImg"
                    src="/images/user.png"
                    alt="speaker img"
                  />
                </div>

                <div class="col-md-3">
                  <div id="align">
                    <h4 style="color: #ff9900">Technical Trainer</h4>
                    <!-- <h4>
                      <a
                        href="https://www.linkedin.com/in/hemant-gahankari-57a1909/"
                        target="_blank"
                        >Name</a
                      >
                    </h4>
                    <p>
                      <a href="https://aws.amazon.com/aispl/" target="_blank"
                        >AISPL</a
                      >
                    </p> -->
                  </div>
                </div>

                <div class="col-md-2">
                  <img
                    class="speakerImg"
                    src="/images/user.png"
                    alt="speaker img"
                  />
                </div>

                <div class="col-md-3">
                  <div id="align1">
                    <h4 style="color: #ff9900">Technical Trainer</h4>
                    <!-- <h4>
                      <a
                        href="https://www.linkedin.com/in/shinduri-ks-5142a7156/"
                        target="_blank"
                        >Shinduri KS</a
                      >
                    </h4>
                    <p>
                      <a href="https://aws.amazon.com/aispl/" target="_blank"
                        >AISPL</a
                      >
                    </p> -->
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="venues" class="section section-3 inv">
        <div class="flex-it container">
          <div class="left f1 flex-it">
            <h4 class="headin-ttl">Venues</h4>
            <div class="left_in f1">
              <div id="map"></div>
            </div>
          </div>
          <div class="right f1">
            <div class="right_in">
              <div
                class="ven-1 ven active"
                data-lat="12.9767814"
                data-lng="77.6197088"
                data-label="Conrad Bengaluru"
              >
                <div class="rand_cls">
                  <span class="date_ori">Date</span>
                  <h4 class="headin-ttl">Conference</h4>
                </div>
                <ul>
                  <li><b>lorem lorem lorem</b></li>
                  <li><b>lorem lorem lorem</b></li>
                  <li><b>lorem lorem lorem</b></li>
                </ul>
              </div>
              <div
                class="ven-2 ven"
                data-lat="12.9502273"
                data-lng="77.6967477"
                data-label="Radisson Blu"
              >
                <div class="rand_cls">
                  <span class="date_ori">Date</span>
                  <h4 class="headin-ttl">Workshop</h4>
                </div>
                <ul>
                  <li><b>lorem lorem lorem</b></li>
                  <li><b>lorem lorem lorem</b></li>
                  <li><b>lorem lorem lorem</b></li>
                  <li><b>lorem lorem lorem</b></li>
                </ul>
              </div>
              <div class="marked"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="agenda" class="section section-4 inv">
        <div class="container">
          <div class="sponsors">
            <h4 class="main-heading-ttl text-center">Agenda</h4>
            <div class="agenda text-center">
              <div class="table">
                <div class="thead">
                  <div class="tr">
                    <div class="th idx">
                      <div>
                        <p>Time</p>
                      </div>
                    </div>
                    <div class="th">
                      <div>
                        <p>Track 1</p>
                      </div>
                    </div>
                    <div class="th">
                      <div>
                        <p>Track 2</p>
                      </div>
                    </div>
                    <div class="th">
                      <div>
                        <p>Track 3</p>
                      </div>
                    </div>
                    <div class="th">
                      <div>
                        <p>Track 4</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tbody">
                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>10:30 AM - 11:00 AM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut arcu eros, dapibus sit amet tincidunt ut,
                          vestibulum vitae magna. Aenean
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>11:00 AM - 11:30 AM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Tea Break</p>
                      </div>
                    </div>
                  </div>

                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>11:30 AM - 11:50 AM</p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>1:10 PM - 2:10 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Lunch</p>
                      </div>
                    </div>
                  </div>

                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>3:00 PM - 3:40 PM</p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>3:40 PM - 3:50 PM</p>
                      </div>
                    </div>

                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="tr">
                    <div class="td idx">
                      <div>
                        <p>04:40 PM - 5:20 PM</p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div class="td">
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="tr gap">
                    <div class="td idx">
                      <div>
                        <p>5:20 PM - 5:45 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Networking</p>
                      </div>
                    </div>
                  </div>
                  <div class="tr last">
                    <div class="td idx">
                      <div>
                        <p>5:45 PM - 6:10 PM</p>
                      </div>
                    </div>
                    <div class="td" colspan="4">
                      <div>
                        <p>Closing Note</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="workshop" class="section section-tickets inv text-center">
        <div class="container">
          <h4 class="main-heading-ttl text-center">Workshops</h4>
          <div class="col-md-12">
            <div class="row flex-it">
              <div class="col-md-3"></div>
              <div class="col-md-3">
                <div class="card tick_work_1 with_icon dark">
                  <h4 class="heading-ttl">Serverless Workshop</h4>
                  <div class="bg_img"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit
                    amet
                  </p>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#workshop_1"
                    class="bg-[#ff9900]"
                  >
                    Details
                  </button>
                </div>
              </div>

              <div class="col-md-3">
                <div class="card tick_work_2 with_icon">
                  <h4 class="heading-ttl">Deep learning workshop</h4>
                  <div class="bg_img"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit
                    amet
                  </p>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#workshop_2"
                    class="bg-[#ff9900]"
                  >
                    Details
                  </button>
                </div>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="sponsors" class="section section-5">
        <div class="container">
          <div class="sponsors">
            <h4 class="main-heading-ttl text-center">Our Esteemed Sponsors</h4>
            <div class="cats">
              <div class="pltnm">
                <div class="flex-it">
                  <div class="fhf">
                    <div class="head"><span>Platinum</span></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                </div>
              </div>
              <div class="gld">
                <div class="flex-it">
                  <div class="fhf">
                    <div class="head"><span>Gold</span></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                </div>
              </div>
              <div class="slvr">
                <div class="flex-it">
                  <div class="fhf">
                    <div class="head"><span>Silver</span></div>
                  </div>

                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                </div>
              </div>
              <div class="cmnty">
                <div class="flex-it">
                  <div class="fhf">
                    <div class="head"><span>Community</span></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                  <div class="f1">
                    <div class="sq bg-[url('/images/user.png?url')]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="speakers" class="section-8">
        <div class="container">
          <div class="speakers">
            <h4 class="main-heading-ttl text-center">Speakers</h4>
            <div class="spk_lst flex-it">
              <div class="spk_itm_col">
                <div
                  v-for="spk in speakers"
                  :key="spk.name"
                  class="spk_itm flex-it"
                >
                  <div class="prod_im">
                    <img :src="spk.image" />
                  </div>
                  <div class="namenid">
                    <p>
                      <b>{{ spk.name }}</b>
                      <br />
                      <small>{{ spk.role }}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="volunteers" class="section-6 inv">
        <div class="container">
          <div class="volunteers">
            <h4 class="main-heading-ttl text-center">Volunteers</h4>
            <div class="vl-row-list">
              <div class="vl-i flex-it hcenter">
                <div
                  v-for="person in volunteers"
                  :key="`${person.firstname}-${person.lastname}`"
                  class="person"
                  :data-fname="person.firstname"
                  :data-lname="person.lastname"
                >
                  <div :class="person.image" class="img">
                    <NuxtLink target="_blank" :to="person.twitterLink">
                      <i class="icon large ion-logo-twitter"></i>@{{
                        person.twitterLink.split("/")[
                          person.twitterLink.lenght - 1
                        ]
                      }}</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="subscribe" class="section section-7">
        <div class="container">
          <div class="sponsors">
            <div class="foot-fk">
              <h4 class="main-heading-ttl">SHOW YOUR INTEREST</h4>
              <div class="row flex-it vcenter">
                <div class="col-md-12">
                  <!-- sharing buttons -->
                  <div class="sharethis-inline-share-buttons"></div>
                </div>
              </div>
              <p class="hide text-center">
                <small
                  >Please do read the Code of Conduct for this event.</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="floating_toast">
      <a href="#">About Community Day</a>
    </div>
    <div
      id="myModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              x
            </button>
          </div>
          <div class="modal-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOgImage({
  url: "/community-day-cameroon.png?url",
  width: 1200,
  height: 630,
  alt: "AWS COMMUNITY DAY CAMEROON",
});

useSeoMeta({
  ogImage: "/community-day-cameroon.png?url",
  twitterTitle: "AWS Community Day Cameroon",
  twitterDescription: "AWS Community Day Cameroon",
  twitterImage: "/community-day-cameroon.png?url",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});

// import TimeOut from "./components/TimeOut.vue";
const countDownDate = new Date("Apr 16, 2024 00:00:00").getTime();
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

const volunteers = ref([
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
  {
    firstname: "firstn",
    lastname: "lastn",
    twitterLink: "",
    image: "bg-[url('/images/user.png?url')]",
  },
]);

const speakers = ref([
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
  {
    name: "firstn lastn",
    role: "Developer Advocate, AWS",
    image: "/images/user.png?url",
  },
]);
</script>
