import React, { Fragment } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


const Home = () => {
    return (
        <Fragment>
            <div id="mytask-layout" className="theme-indigo">
                {/* sidebar */}
                <Sidebar />
                {/* main body area */}
                <div className="main px-lg-4 px-md-4">
                    {/* Body: Header */}
                    <Header />
                    {/* Body: Body */}
                    <div className="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row clearfix g-3">
                                <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Project Flow</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="ac-line-transparent" id="apex-emplyoeeAnalytics" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-12 col-md-12">
                                    <div className="row g-3 row-deck">
                                        <div className="col-md-6 col-lg-6 col-xl-12">
                                            <div className="card bg-primary">
                                                <div className="card-body row">
                                                    <div className="col">
                                                        <span className="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-file-text fs-5" /></span>
                                                        <h1 className="mt-3 mb-0 fw-bold text-white">1546</h1>
                                                        <span className="text-white">Applications</span>
                                                    </div>
                                                    <div className="col">
                                                        <img className="img-fluid" src="assets/images/interview.svg" alt="interview" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4">
                                        <div className="col">
                                            <div className="card bg-primary">
                                                <div className="card-body text-white d-flex align-items-center">
                                                    <i className="icofont-data fs-3" />
                                                    <div className="d-flex flex-column ms-3">
                                                        <h6 className="mb-0">Total Projects</h6>
                                                        <span className="text-white">550</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card bg-primary">
                                                <div className="card-body text-white d-flex align-items-center">
                                                    <i className="icofont-chart-flow fs-3" />
                                                    <div className="d-flex flex-column ms-3">
                                                        <h6 className="mb-0">Coming Projects</h6>
                                                        <span className="text-white">210</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card bg-primary">
                                                <div className="card-body text-white d-flex align-items-center">
                                                    <i className="icofont-chart-flow-2 fs-3" />
                                                    <div className="d-flex flex-column ms-3">
                                                        <h6 className="mb-0">Progress Projects</h6>
                                                        <span className="text-white">8456 Files</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card bg-primary">
                                                <div className="card-body text-white d-flex align-items-center">
                                                    <i className="icofont-tasks fs-3" />
                                                    <div className="d-flex flex-column ms-3">
                                                        <h6 className="mb-0">Finished Projects</h6>
                                                        <span className="text-white">88 Files</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3 mb-3 row-deck">
                                        <div className="col-md-12">
                                            <div className="card mb-3">
                                                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                                                    <div className="info-header">
                                                        <h6 className="mb-0 fw-bold ">Project Information</h6>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: '100%' }}>
                                                        <thead>
                                                            <tr>
                                                                <th>Title</th>
                                                                <th>Date Start</th>
                                                                <th>Deadline</th>
                                                                <th>Leader</th>
                                                                <th>Completion</th>
                                                                <th>Stage</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><a href="projects.html">Social Geek Made</a></td>
                                                                <td>10-01-2021</td>
                                                                <td>4 Month</td>
                                                                <td><img src="assets/images/xs/avatar1.jpg" alt="Avatar" className="avatar sm  rounded-circle me-2" /><a href="#">Keith</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }}>78%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-warning">MEDIUM</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Practice to Perfect</a></td>
                                                                <td>12-02-2021</td>
                                                                <td>1 Month</td>
                                                                <td><img src="assets/images/xs/avatar2.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Colin</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{ width: '80%' }}>80%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-success">LOW</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Rhinestone</a></td>
                                                                <td>18-02-2021</td>
                                                                <td>2 Month</td>
                                                                <td><img src="assets/images/xs/avatar3.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Adam</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{ width: '90%' }}>90%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-danger">HIGH</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Box of Crayons</a></td>
                                                                <td>23-02-2021</td>
                                                                <td>1 Month</td>
                                                                <td><img src="assets/images/xs/avatar4.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Peter</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{ width: '85%' }}>85%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-warning">MEDIUM</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Gob Geeklords</a></td>
                                                                <td>16-03-2021</td>
                                                                <td>10 Month</td>
                                                                <td><img src="assets/images/xs/avatar5.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Evan</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{ width: '65%' }}>65%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-success">LOW</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Java Dalia</a></td>
                                                                <td>17-03-2021</td>
                                                                <td>8 Month</td>
                                                                <td><img src="assets/images/xs/avatar6.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Connor</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} style={{ width: '48%' }}>48%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-secondary">MEDIUM</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td><a href="projects.html">Fast Cad</a></td>
                                                                <td>14-04-2021</td>
                                                                <td>2 Month</td>
                                                                <td><img src="assets/images/xs/avatar7.jpg" alt="Avatar" className="avatar sm rounded-circle me-2" /><a href="#">Benjamin</a></td>
                                                                <td>
                                                                    <div className="progress">
                                                                        <div className="progress-bar  bg-primary" role="progressbar" aria-valuenow={76} aria-valuemin={0} aria-valuemax={100} style={{ width: '76%' }}>76%</div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-secondary">MEDIUM</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* Row End */}
                                </div>

                            </div>{/* Row End */}
                        </div>
                    </div>
                    {/* Modal Members*/}
                    <div className="modal fade" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div className="inviteby_email">
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" />
                                            <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                                        </div>
                                    </div>
                                    <div className="members_list">
                                        <h6 className="fw-bold ">Employee </h6>
                                        <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                            <li className="list-group-item py-3 text-center text-md-start">
                                                <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                    <div className="no-thumbnail mb-2 mb-md-0">
                                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar2.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-fill ms-3 text-truncate">
                                                        <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                                                        <span className="text-muted">rachel.carr@gmail.com</span>
                                                    </div>
                                                    <div className="members-action">
                                                        <span className="members-role ">Admin</span>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="icofont-ui-settings  fs-6" />
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a>
                                                                </li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-3 text-center text-md-start">
                                                <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                    <div className="no-thumbnail mb-2 mb-md-0">
                                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar3.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-fill ms-3 text-truncate">
                                                        <h6 className="mb-0  fw-bold">Lucas Baker<a href="#" className="link-secondary ms-2">(Resend invitation)</a></h6>
                                                        <span className="text-muted">lucas.baker@gmail.com</span>
                                                    </div>
                                                    <div className="members-action">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Members
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="icofont-check-circled" />
                                                                        <span>All operations permission</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="fs-6 p-2 me-1" />
                                                                        <span>Only Invite &amp; manage team</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="icofont-ui-settings  fs-6" />
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Delete
                                                                    Member</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item py-3 text-center text-md-start">
                                                <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                    <div className="no-thumbnail mb-2 mb-md-0">
                                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar8.jpg" alt="" />
                                                    </div>
                                                    <div className="flex-fill ms-3 text-truncate">
                                                        <h6 className="mb-0  fw-bold">Una Coleman</h6>
                                                        <span className="text-muted">una.coleman@gmail.com</span>
                                                    </div>
                                                    <div className="members-action">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Members
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="icofont-check-circled" />
                                                                        <span>All operations permission</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">
                                                                        <i className="fs-6 p-2 me-1" />
                                                                        <span>Only Invite &amp; manage team</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="btn-group">
                                                            <div className="btn-group">
                                                                <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i className="icofont-ui-settings  fs-6" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-end">
                                                                    <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2" />ResetPassword</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2" />ActivityReport</a>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2" />Suspend
                                                                        member</a></li>
                                                                    <li><a className="dropdown-item" href="#"><i className="icofont-not-allowed fs-6 me-2" />Delete
                                                                        Member</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Home