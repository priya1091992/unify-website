import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../Page';

class OverviewPage extends Component {
  render() {
    const componentData = [
      {
        name: 'Bottom Navigation',
        img: require('./images/Bottom Nav.svg'),
        link: '/components/bottom-navigation'
      },
      {
        name: 'Bottom Sheets',
        img: require('./images/Bottom Sheet.svg'),
        link: '/components/bottom-sheets'
      },
      {
        name: 'Button',
        img: require('./images/Button.svg'),
        link: '/components/button'
      },
      {
        name: 'Dialogs',
        img: require('./images/Dialog.svg'),
        link: '/components/dialogs'
      },
      {
        name: 'Menus',
        img: require('./images/Menu.svg'),
        link: '/components/menus'
      },
      {
        name: 'Navigation Bar',
        img: require('./images/Navigation Bar.svg'),
        link: '/components/navigation-bar'
      },
      {
        name: 'Tabs',
        img: require('./images/Tabs.svg'),
        link: '/components/tabs'
      },
      {
        name: 'Tickers',
        img: require('./images/Ticker.svg'),
        link: '/components/tickers'
      },
      {
        name: 'Toaster',
        img: require('./images/Toaster.svg'),
        link: '/components/toaster'
      },
      {
        name: 'Tooltips',
        img: require('./images/Tooltip.svg'),
        link: '/components/tooltips'
      }
    ];
    let key = 0;
    const componentTemplate = componentData.map(component => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={component.link}>
              <img src={component.img} />
              <p className="component-name">{component.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page">
        <ul className="flex-container">{componentTemplate}</ul>
      </div>
    );
    return <Page label="Components" title="Overview" content={content} />;
  }
}

export default OverviewPage;
