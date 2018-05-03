import React, { Component } from 'react';
import { connect } from "react-redux";
import custumerAction from "../../redux/customers/actions";
import { Layout, Icon } from 'antd';
import IntlMessages from "../../components/utility/intlMessages";
import Button from '../../components/uielements/button';
import ContactList from '../../components/contacts/contactList';
import SingleContactView from '../../components/contacts/singleView';
import EditContactView from '../../components/contacts/editView';
import DeleteButton from '../../components/contacts/deleteButton';
import { CustomersWrapper } from './customers.style';
import Scrollbar from '../../components/utility/customScrollBar';

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
} = custumerAction;

const { Content } = Layout;
class Customers extends Component {
    render() {
    const {
        customers,
        seectedId,
        editView,
        changeContact,
        addContact,
        editContact,
        deleteContact,
        viewChange
        } = this.props;
    const selectedCustomer = seectedId ? customers.filter(customer => customer.id === seectedId)[0] : null;
    const otherAttributes = null;
    const onVIewChange = () => viewChange(!editView);
        return (
            <CustomersWrapper className="isomorphicContacts" style={{ background: 'none' }}>
                <div className="isoContactListBar">
                    <ContactList
                    contacts={customers}
                    seectedId={seectedId}
                    changeContact={changeContact}
                    deleteContact={deleteContact}
                    />
                </div>
                <Layout className="isoContactBoxWrapper">
                    {selectedCustomer ? (
                        <Content className="isoContactBox">
                            <div className="isoContactControl">
                                <Button type="button" onClick={onVIewChange}>
                                {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                                </Button>
                                <DeleteButton
                                deleteContact={deleteContact}
                                contact={selectedCustomer}
                                />
                                <Button
                                type="primary"
                                onClick={addContact}
                                className="isoAddContactBtn"
                                >
                                <IntlMessages id="contactlist.addNewContact" />
                                </Button>
                            </div>
                            <Scrollbar className="contactBoxScrollbar">
                                {editView ? (
                                <EditContactView
                                    contact={selectedCustomer}
                                    editContact={editContact}
                                    otherAttributes={otherAttributes}
                                />
                                ) : (
                                <SingleContactView
                                    contact={selectedCustomer}
                                    otherAttributes={otherAttributes}
                                />
                                )}
                            </Scrollbar>
                        </Content>
                    ) : (
                        <div className="isoContactControl">
                            <Button type="primary" onClick={addContact} className="isoAddContactBtn"></Button>
                        </div>
                    )}
                </Layout>
            </CustomersWrapper>
        )
    }
}
function mapStateToProps(state) {
  const { customers, seectedId, editView } = state.Employees.toJS();
  return {
    customers,
    seectedId,
    editView
  };
}
export default connect(mapStateToProps, {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
})(Customers);