// THIS IS WHERE WE WILL IMPORT EVERYTHING
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute,Link, Router, Route, browserHistory } from 'react-router';
import data from './data.js';	
import CSS from './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

// THIS IS THE PARENT COMPONENT-----------------------------------------------------------------------------------------
var Parent = React.createClass({
  // RENDER FUNCTION
  render: function() {
    return (
      <div> 
          <center><h1>{data.about.restaurant_name}</h1></center>
          <center><h2>{data.about.restaurant_slogan}</h2></center>
        	<Navbar />
        	<br />
          {this.props.children}
          <Footer />
      </div>
    )
  }
})

// THIS IS THE NAVBAR COMPONENT-----------------------------------------------------------------------------------------
// RENDERED IN THE PARENT
var Navbar = React.createClass({
  render: function() {
    return (
      <div className="navdiv">
        <div className="container">
        <center>
          <tb id="nav">
            <center><th className="line"><Link to="/">Home</Link></th></center>
            <center><th className="line"><Link to="/about">About</Link></th></center>
            <center><th className="line"><Link to="/menu">Menu</Link></th></center>
            <center><th className="line"><Link to="/contact">Contact/ order</Link></th></center>
          </tb>
        </center>
        </div>
      </div>
    )
  }
})

// THIS IS THE HOME COMPONENT-------------------------------------------------------------------------------------------
var Home = React.createClass({
  // GET THE INITIAL STATE
  getInitialState() {
  	return({images: null, about: null})
  },
  // COMPONENT WILL MOUNT
  componentWillMount() {
  	this.setState({images: data.getImages(), about: data.getAbout()})
  },
  render: function() {
    return (
      <div>
      		<hr />
          <center><h2>{this.state.about.restaurant_mission}</h2></center>
      		<center><img src={this.state.images[0]} class="img-responsive" alt="Responsive image" /></center>
      		<hr />
      </div>
    )
  }
})

// THIS IS THE ABOUT COMPONENT------------------------------------------------------------------------------------------
var About = React.createClass({
  // GET INITIAL STATE
  getInitialState() {
  	return({about: null})
  },
  // COMPONENET WILL MOUNT
  componentWillMount() {
  	this.setState({about: data.getAbout()})
  },
  render: function() {
    return (
      <div>
      		<hr />
      		<center><h1>About us</h1></center>
      		<center><h3>{this.state.about.restaurant_name + " -taste our culture"}</h3></center>
      		<br />
      		<center><h1>Contact</h1></center>
      		<center><h5>{this.state.about.restaurant_address}</h5></center>
      		<center><h5>{this.state.about.restaurant_email}</h5></center>
      		<center><h5>{this.state.about.restaurant_phone}</h5></center>
      		<h4></h4>
      		<hr />
      </div>
    )
  }
})

// THIS IS THE MENU COMPONENT-------------------------------------------------------------------------------------------
var Menu = React.createClass({
  // GET THE INITIAL STATE
  getInitialState() {
  	return({menu: null})
  },
  // COMPONENT WILL MOUNT 
  componentWillMount() {
  this.setState({menu: data.getMenu()})
  },
  // THE RENDER FUNCTION
  render: function() {
           var makeLine = this.state.menu.burgers.map(function(burger){
                <li className="tableitem">{burger.name + "- "}{burger.price}</li>
            })}
    
    return (
      <div className="menudiv">
      		<hr />
      		<center><h1>Menu</h1></center>

        <center>
          <table>

            <tr>
              <td className="tablecomponent">  
                  <ul id="menulist">
                    <h3><center>Burgers</center></h3>
                    {makeLine}
                  </ul>
              </td>

              <td className="tablecomponent">  
                  <ul id="menulist">
                    <h3><center>Drinks</center></h3>
                    <li className="tableitem">{this.state.menu.drinks[0].name + "- "}{this.state.menu.drinks[0].price}</li>
                    <li className="tableitem">{this.state.menu.drinks[1].name + "- "}{this.state.menu.drinks[1].price}</li>
                    <li className="tableitem">{this.state.menu.drinks[2].name + "- "}{this.state.menu.drinks[2].price}</li>
                  </ul>
              </td>

              <td className="tablecomponent"> 
                <ul id="menulist">
                  <h3><center>Fries</center></h3>
                  <li className="tableitem">{this.state.menu.fries[0].name + "- "}{this.state.menu.fries[0].price}</li>
                  <li className="tableitem">{this.state.menu.fries[1].name + "- "}{this.state.menu.fries[1].price}</li>
                  <li className="tableitem">{this.state.menu.fries[2].name + "- "}{this.state.menu.fries[2].price}</li>
                </ul>
              </td>

              <td className="tablecomponent">   
                <ul id="menulist">
                  <h3><center>Alcohol</center></h3>
                  <li className="tableitem">{this.state.menu.alcohol[0].name + "- "}{this.state.menu.alcohol[0].price}</li>
                  <li className="tableitem">{this.state.menu.alcohol[1].name + "- "}{this.state.menu.alcohol[1].price}</li>
                  <li className="tableitem">{this.state.menu.alcohol[2].name + "- "}{this.state.menu.alcohol[2].price}</li>
                </ul>
              </td>

              <td className="tablecomponent">     
                <ul id="menulist">
                  <h3><center>Wine</center></h3>
                  <li className="tableitem">{this.state.menu.wine[0].name + "- "}{this.state.menu.wine[0].price}</li>
                  <li className="tableitem">{this.state.menu.wine[1].name + "- "}{this.state.menu.wine[1].price}</li>
                  <li className="tableitem">{this.state.menu.wine[2].name + "- "}{this.state.menu.wine[2].price}</li>
                </ul>
              </td>
            </tr>

          </table>
        </center>

      </div>
    )
  }
})

// THIS IS THE CONTACT COMPONENT-------------------------------------------------------------------------------------------
var Contact = React.createClass({
  // GET THE INITIAL STATE
  getInitialState() {
    return({contact: null})
  },
  // COMPONENT WILL MOUNT 
  componentWillMount() {
  this.setState({contact: data.getContact()})
  },
  // THE RENDER FUNCTION
  render: function() {
    return (
      <div>
          <hr />
          <center><h2><u>Contact us today!</u></h2></center>
          <center><h1>{this.state.contact.contact_info}</h1></center>
          <center><h2>{this.state.contact.contact_info_next}</h2></center>
          <hr />
          <center><h2><strong>Order online from our menu</strong></h2></center>
          <center><img src="https://editsquare.com/wp-content/uploads/2016/02/credit-cards-logos.png"  className="img-responsive" alt="Responsive image" /></center>
          <center>
            <form id="infoform">
              <h3>Name</h3>
              <input type="text" placeholder="Name" id="inputbox"/>
              <h3>Phone Number</h3>
              <input type="text" placeholder="Phone number" id="inputbox"/>
              <h3>Address</h3>
              <input type="text" placeholder="Address" id="inputbox"/>
              <h3>{this.state.contact.contact_what_order}</h3>
              <input type="textbox" id="textbox"/>
              <br />
              <Link to="/payment"><button id="subor">Proceed to payment</button></Link>
            </form>
          </center>
          <br />
      </div>
    )
  }
})

// THIS IS THE PAYMENT COMPONENT-------------------------------------------------------------------------------------------
var Payment = React.createClass({
  render: function() {
    return (
        <div className="paymentdiv">
            <center>
              <h1>Payment method</h1>
              <center><img src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_visa_mc_amex_discover_paypal_sm.gif" /></center>
              <h3>Credit Card number</h3>
              <input type="text" placeholder="Name" id="inputbox"/>

              <select>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>

              <h3>CVC code</h3>
              <input type="text" placeholder="cvc" id="cvcbox"/>
              <br />
              <Link to="/confirmationpage"><button id="submitpay">Submit payment</button></Link>
              <br />
            </center>
        </div>
    )
  }
})

// THIS IS THE CONFIRMATION COMPONENT-------------------------------------------------------------------------------------
var Confirmation = React.createClass({
  // GET THE INITIAL STATE
  getInitialState() {
    return({confirmed: null})
  },
  // SET THE STATE
  componentWillMount() {
    this.setState({confirmed: data.getConfirmed()})
  },
  // RENDER FUNCTION
  render: function() {
    return (
      <div id="ordercondiv">
        <center><h1 id="conheading">{this.state.confirmed.con_order}</h1></center>
        <center><h2 id="conwait">{this.state.confirmed.con_wait}</h2></center>
      </div>  
    )
  }
})

// THIS IS THE FOOTER COMPONENT-------------------------------------------------------------------------------------------
var Footer = React.createClass({
  // GET THE INITIAL STATE
  getInitialState() {
    return({about: null})
  },
  // COMPONENT WILL MOUNT
  componentWillMount() {
    this.setState({about: data.getAbout()})
  },
  render: function() {
    return (
      <div id="footer">
          <h3>{this.state.about.restaurant_address}</h3>
          <p>{this.state.about.restaurant_phone}</p>
          <p><em>{this.state.about.restaurant_slogan}</em></p>
      </div>
    )
  }
})


// THIS IS WHERE WE WILL RENDER EVERYTHING ------------------------------------------------------------------------------
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Parent}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/menu/:foodname' component={Menu} />
      <Route path='/contact' component={Contact} />
      <Route path='/payment' component={Payment} />
      <Route path='/confirmationpage' component={Confirmation} />
    </Route>
  </Router>,
  document.getElementById('root')
);

