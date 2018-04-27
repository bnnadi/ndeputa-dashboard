import React, { Component } from 'react';
import { connect } from "react-redux";
import employeeAction from "../../redux/employees/actions";
import { Layout, Icon } from 'antd';
import Button from '../../components/uielements/button';
import ContactList from '../../components/contacts/contactList';
import SingleContactView from '../../components/contacts/singleView';
import EditContactView from '../../components/contacts/editView';
import DeleteButton from '../../components/contacts/deleteButton';
import { EmployeesWrapper } from './employees.style';
import Scrollbar from '../../components/utility/customScrollBar';

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
} = employeeAction;

const { Content } = Layout;

class Employees extends Component {
    render() {
    const {
        employees,
        seectedId,
        editView,
        changeContact,
        addContact,
        editContact,
        deleteContact,
        viewChange
        } = this.props;
    const selectedEmployee = seectedId ? employees.filter(employee => employee.id === seectedId)[0] : null;
    const otherAttributes = null;
    const onVIewChange = () => viewChange(!editView);
        return (
            <EmployeesWrapper className="isomorphicContacts" style={{ background: 'none' }}>
                <div className="isoContactListBar">
                    <ContactList
                    contacts={employees}
                    seectedId={seectedId}
                    changeContact={changeContact}
                    deleteContact={deleteContact}
                    />
                </div>
                <Layout className="isoContactBoxWrapper">
                    {selectedEmployee ? (
                        <Content className="isoContactBox">
                            <div className="isoContactControl">
                                <Button type="button" onClick={onVIewChange}>
                                {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                                </Button>
                                <DeleteButton
                                deleteContact={deleteContact}
                                contact={selectedEmployee}
                                />
                                <Button
                                type="primary"
                                onClick={addContact}
                                className="isoAddContactBtn"
                                >
                                {/* <IntlMessages id="contactlist.addNewContact" /> */}
                                </Button>
                            </div>
                            <Scrollbar className="contactBoxScrollbar">
                                {editView ? (
                                <EditContactView
                                    contact={selectedEmployee}
                                    editContact={editContact}
                                    otherAttributes={otherAttributes}
                                />
                                ) : (
                                <SingleContactView
                                    contact={selectedEmployee}
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
            </EmployeesWrapper>
        )
    }
}
function mapStateToProps(state) {
  const { employees, seectedId, editView } = state.Employees.toJS();
  return {
    employees,
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
})(Employees);