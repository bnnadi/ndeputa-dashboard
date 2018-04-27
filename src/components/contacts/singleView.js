import React, { Component } from 'react';
import { ContactCardWrapper } from './contactCard.style';

export default class extends Component {
  render() {
    const { contact, otherAttributes } = this.props;
    const name = contact.name ? contact.name : 'No Name';
    const extraInfos = [];
    otherAttributes.forEach(attribute => {
      const value = contact[attribute.value];
      if (value) {
        extraInfos.push(
          <div className="nnaContactCardInfos" key={attribute.value}>
            <p className="nnaInfoLabel">{`${attribute.title}`}</p>
            <p className="nnaInfoDetails">{value}</p>
          </div>
        );
      }
    });
    return (
      <ContactCardWrapper className="nnaContactCard">
        <div className="nnaContactCardHead">
          <div className="nnaPersonImage">
            {contact.avatar ? <img alt="#" src={contact.avatar} /> : ''}
          </div>
          <h1 className="nnaPersonName">{name}</h1>
        </div>
        <div className="nnaContactInfoWrapper">{extraInfos}</div>
      </ContactCardWrapper>
    );
  }
}
