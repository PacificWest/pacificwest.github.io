'use strict';
const React = require('react'),
      fs = require('fs'),
      ReactDOMServer = require('react-dom/server'),
      Well = require('react-bootstrap').Well;

const contact = <a href={'tel:818-781-0864'}>818-781-0864</a>;
const hours_of_op = (
  <div>
    <p>Monday 6AM-3PM</p>
    <p>Tuesday-Friday 9AM-5PM</p>
  </div>
);

class HomePage extends React.Component {
  render () {
    const bstrap =
          "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
    return (
      <html>
        <head>
          <meta charSet={'utf-8'}/>
	  <title>Pacific West Pool and Spa</title>
	  <meta name={"Pacific Pools and Spa"}
		content={"Quality pool cleaning and repairwork"}/>
          <meta name={"viewport"}
		content={"width=device-width, initial-scale=1"}/>
          <link rel={"stylesheet"} href={bstrap}/>
          <link rel={"stylesheet"} href={'style.css'}/>
        </head>
        <body>
          <div className="app-container">
	    <Well className={'top-header'}>
	      <div>
		<h3>Pacific West Pool and Spa</h3>
		{contact}
	      </div>
	    </Well>
	    
	    <Well className={'top-about-us'}>
	      <p className={'about-us-desc'}>
		Servicing the Greater Los Angeles Area for over 20 years.
		Experience with residential and commercial properties.
		Swimming pool maintenance and repair.
	      </p>
	    </Well>

	    <Well className={'contact'}>
	      <footer>
		{hours_of_op}
		<p>14747 Lull St.</p>
		<p>Van Nuys, CA 91405</p>
		<p>
		  <a target={'_top'}
		     href={'mailto:pacwestpools@attn.net?Subject=Pool%20question'}>
		    pacwestpools@att.net
		  </a>
		</p>
		<p>{contact}</p>
	      </footer>
	    </Well>
          </div>
        </body>
      </html>
    );
  }
};

fs.writeFile('index.html',
	     ReactDOMServer.renderToStaticMarkup(<HomePage/>),
	     null);
