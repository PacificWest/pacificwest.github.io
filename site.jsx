'use strict';
const React = require('react'),
      fs = require('fs'),
      ReactDOMServer = require('react-dom/server'),
      PageHeader = require('react-bootstrap').PageHeader,
      Well = require('react-bootstrap').Well,
      Table = require('react-bootstrap').Table;

const trailing_bottom = null;



class HomePage extends React.Component {
  render () {
    const bstrap =
          "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css";
    return (
      <html>
        <head>
          <meta charSet={'utf-8'}/>
	  <title>Pacific Pools and Spa</title>
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
		<h2>
		  - Pacific West Pool and Spa -
		</h2>
		<a href={'tel:818-781-0864'}>818-781-0864</a>
	      </div>
	    </Well>
	    
	    <Well className={'top-about-us'}>
	      <p>
		We service pools
	      </p>
	    </Well>

	    <Well className={'clients'}>
	      Satisfied clients
	    </Well>

	    <Well className={'contact'}>
	      <footer>
		Contact information
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
