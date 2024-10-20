import React, { useState } from "react";
import InputType from "./InputType";

import {Link} from 'react-router-dom'
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('donor');
    const [name, setName] = useState('');
    const [organizationName, setOraganizationName] = useState('');
    const [hospital, setHospital] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <div>
            <form onSubmit={(e)=>{if (formType==='login') return handleLogin(e,email,password,role)
                else if(formType==='register') return handleRegister(e,name,role,email,password,phone,organizationName,address,hospital,website)
            }}>
                <h1 className="text-center">{formTitle}</h1>
                <hr />
                <div className="d-flex mb-3">
                    <div className="form-check" >
                        <input type="radio" className="form-check-input" name="role" id='donorRadio' value={'donor'} onChange={(e) => setRole(e.target.value)}
                            defaultChecked />
                        <label htmlFor="donorRadio" className="form-check-label">
                            Donor
                        </label>

                    </div>
                    <div className="form-check ms-2" >
                        <input type="radio" className="form-check-input" name="role" id='adminRadio' value={'admin'} onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="adminRadio" className="form-check-label">
                            Admin
                        </label>

                    </div>
                    <div className="form-check ms-2" >
                        <input type="radio" className="form-check-input" name="role" id='hospitalRadio' value={'hospital'} onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="hospitalRadio" className="form-check-label">
                            Hospital
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input type="radio" className="form-check-input" name="role" id='oraganizationRadio' value={'organization'} onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="organizationRadio" className="form-check-label">
                            Organization
                        </label>
                    </div>
                </div>
                {(() => {
                    //eslint-disable-next-line
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                   <InputType labelText={'E-Mail'} labelFor={'forEmail'} inputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputType labelText={'Password'} labelFor={'forPassword'} inputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                </>
                            );
                        }
                        case formType === 'register': {
                            return (
                                <>

                                    {(role === 'admin' || role === 'donor') && (
                                        <InputType labelText={'Name'} labelFor={'forName'} inputType={'text'} name={'name'} value={name} onChange={(e) => setName(e.target.value)} />

                                    )}

                                    {role === 'organization' && (
                                        <InputType labelText={'Organization Name'} labelFor={'forOrganizationHome'} inputType={'text'} name={'OrganizationName'} value={organizationName} onChange={(e) => setOraganizationName(e.target.value)} />
                                    )}
                                    { role==='hospital' && ( <InputType labelText={'Hospital Name'} labelFor={'forHospitalName'} inputType={'text'} name={'hospitalName'} value={hospital} onChange={(e) => setHospital(e.target.value)} />)}


                                    <InputType labelText={'E-Mail'} labelFor={'forEmail'} inputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputType labelText={'Password'} labelFor={'forPassword'} inputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <InputType labelText={'Website'} labelFor={'forWebsite'} inputType={'text'} name={'website'} value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    <InputType labelText={'Address'} labelFor={'forAddress'} inputType={'text'} name={'address'} value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <InputType labelText={'Phone'} labelFor={'forPhone'} inputType={'text'} name={'phone'} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </>
                            )
                        }
                    }
                })()}
                

                <div className="d-flex flex-row justify-content-between">
                    {formType==='login'?(
                        <p>Not registered yet?Register
                            <Link to='/register'>Here!</Link> </p>
                    ):(<p>Have an account already?Login
                            <Link to='/login'>Here!</Link> </p>)}
                    <button className="btn btn-primary" type="submit">{submitBtn}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;