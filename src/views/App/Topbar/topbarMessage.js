import React, { Component } from 'react';
import { Popover } from 'antd';
import { connect } from 'react-redux';
import IntlMessages from '../../../components/utility/intlMessages';
import Scrollbar from '../../../components/utility/customScrollBar';
import TopbarDropdownWrapper from './topbarDropdown.style';

import Image from '../../../image/user3.png';

const messages = [];

class TopbarMessage extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    const { customizedTheme } = this.props;
    const content = (
      <TopbarDropdownWrapper className="topbarMessage withImg">
        <div className="isoDropdownHeader">
          <h3>
            <IntlMessages id="sidebar.message" />
          </h3>
        </div>
        <div className="isoDropdownBody">
          <Scrollbar style={{ height: 300 }}>
            {messages.map(massage => (
              <a className="isoDropdownListItem" key={massage.id}>
                <div className="isoImgWrapper">
                  <img alt="#" src={Image} />
                </div>

                <div className="isoListContent">
                  <div className="isoListHead">
                    <h5>{massage.name}</h5>
                    <span className="isoDate">{massage.time}</span>
                  </div>
                  <p>{massage.massage}</p>
                </div>
              </a>
            ))}
          </Scrollbar>
        </div>
        <a className="isoViewAllBtn">
          <IntlMessages id="topbar.viewAll" />
        </a>
      </TopbarDropdownWrapper>
    );
    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        placement="bottomLeft"
      >
        <div className="isoIconWrapper">
          <i
            className="ion-chatbubbles"
            style={{ color: customizedTheme.textColor }}
          />
          { messages.length > 0 && <span>{messages.length}</span> }
        </div>
      </Popover>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS(),
  customizedTheme: state.ThemeSwitcher.toJS().topbarTheme,
}))(TopbarMessage);
