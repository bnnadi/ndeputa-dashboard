import React from 'react';
import { timeDifference } from '../../helpers/utility';
import { tags, tagColor } from './mailTags.js';
import MailListWrapper from './mailList.style';
import { rtl } from '../../config/withDirection';

export default function mailList(
  mails,
  selectMail,
  selectedMail,
  toggleListVisible
) {
  const renderSingleMail = (mail, key) => {
    const onClick = () => {
      selectMail(mail.id);
      if (toggleListVisible) {
        toggleListVisible();
      }
    };
    const isSelected = selectedMail === mail.id;
    const recpName = mail.name;
    const signature = {
      splitLet: recpName
        .match(/\b(\w)/g)
        .join('')
        .split('', 2)
    };
    const activeClass = isSelected ? 'activeMail' : '';
    const unreadClass = !mail.read ? 'unreadMail' : '';
    const tagOption = mail.tags
      ? tagColor[tags.findIndex(tags => tags === mail.tags)]
      : 'transparent';
    return (
      <div
        key={`list${key}`}
        onClick={onClick}
        className={`${activeClass} ${unreadClass} nnaMailList`}
      >
        <span
          className="nnaLabelIndicator"
          style={
            rtl === 'rtl' ? (
              { borderRightColor: tagOption }
            ) : (
              { borderTopColor: tagOption }
            )
          }
        />
        <div className="nnaRecipentsImg">
          {mail.img ? (
            <img alt="#" src={mail.img} />
          ) : (
            <span>{signature.splitLet}</span>
          )}
        </div>

        <div className="nnaMailInfo">
          <div className="infoHead">
            <p className="nnaRecipents">{mail.name}</p>
            <span className="nnaReceiveDate">{timeDifference(mail.date)}</span>
          </div>
          <p className="nnaSubject">{mail.subject}</p>
        </div>
      </div>
    );
  };
  return (
    <MailListWrapper className="nnaMailListWrapper">
      {mails.map((mail, index) => renderSingleMail(mail, index))}
    </MailListWrapper>
  );
}
