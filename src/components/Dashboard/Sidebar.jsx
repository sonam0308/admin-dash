import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {


    return (
        <Fragment>
            <div className="sidebar px-4 py-4 py-md-5 me-0">
                <div className="d-flex flex-column h-100">
                    <Link to="/dashboard" className="mb-0 brand-icon">
                        <span className="logo-icon">
                            <svg width={35} height={35} fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                            </svg>
                        </span>
                        <span className="logo-text">ContriverTech </span>
                    </Link>
                    {/* Menu: main ul */}
                    <ul className="menu-list flex-grow-1 mt-3">
                        <li className="collapsed">
                            <Link to="/dashboard" className="m-link active" >
                                <i className="icofont-home fs-5" />DashBoard
                            </Link>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#project-Components" href="#">
                                <i className="icofont-briefcase" /><span>Projects</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5" /></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="project-Components">
                                <Link to="/projects"><li><a className="ms-link"><span>Projects</span></a></li></Link>
                              <Link to ="/task"><li><a className="ms-link" href="task.html"><span>Tasks</span></a></li></Link>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#tikit-Components" href="#"><i className="icofont-ticket" /> <span>Tickets</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5" /></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="tikit-Components">
                               <Link to ="/projectview">  <li><a className="ms-link" href="tickets.html"> <span>Tickets View</span></a></li></Link>
                               <Link to="/projcetsdetails">   <li><a className="ms-link" href="ticket-detail.html"> <span>Ticket Detail</span></a></li></Link>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#client-Components" href="#"><i className="icofont-user-male" /> <span>Our Clients</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5" /></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="client-Components">
                               <Link to ="/clients"> <li><a className="ms-link"> <span>Clients</span></a></li></Link>
                             <Link to ="/clientsProfile"><li><a className="ms-link" > <span>Client Profile</span></a></li></Link>
                            </ul>
                        </li>

                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" href="#"><i className="icofont-ui-calculator" /> <span>Accounts</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5" /></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="menu-Componentsone">
                                <li><a className="ms-link" href="invoices.html"><span>Invoices</span> </a></li>
                                <li><a className="ms-link" href="payments.html"><span>Payments</span> </a></li>
                                <li><a className="ms-link" href="expenses.html"><span>Expenses</span> </a></li>
                            </ul>
                        </li>
                        <li className="collapsed">
                            <a className="m-link" data-bs-toggle="collapse" data-bs-target="#payroll-Components" href="#"><i className="icofont-users-alt-5" /> <span>Payroll</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5" /></a>
                            {/* Menu: Sub menu ul */}
                            <ul className="sub-menu collapse" id="payroll-Components">
                                <li><a className="ms-link" href="salaryslip.html"><span>Employee Salary</span> </a></li>
                            </ul>
                        </li>

                    </ul>
                    {/* Theme: Switch Theme */}
                    <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center justify-content-center">
                            <div className="form-check form-switch theme-switch">
                                <input className="form-check-input" type="checkbox" id="theme-switch" />
                                <label className="form-check-label" htmlFor="theme-switch">Enable Dark Mode!</label>
                            </div>
                        </li>

                    </ul>
                    {/* Menu: menu collepce btn */}
                    <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                        <span className="ms-2"><i className="icofont-bubble-right" /></span>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Sidebar