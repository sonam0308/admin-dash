import React, { Fragment } from "react";
import Sidebar from "./Sidebar";


const Dashboard = () => {
    return (
        <Fragment>
            <div id="mytask-layout" class="theme-indigo">
                <Sidebar />
            </div>
            <div class="main px-lg-4 px-md-4">
                <div>
                    {/* Body: Body */}
                    <div className="body d-flex py-3">
                        <div className="container-xxl">
                            <div className="row clearfix g-3">
                                <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
                                    <div className="row g-3">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Employees Info</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="ac-line-transparent" id="apex-emplyoeeAnalytics" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Employees Availability</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row g-2 row-deck">
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="card">
                                                                <div className="card-body ">
                                                                    <i className="icofont-checked fs-3" />
                                                                    <h6 className="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                                                                    <span className="text-muted">400</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="card">
                                                                <div className="card-body ">
                                                                    <i className="icofont-stopwatch fs-3" />
                                                                    <h6 className="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                                                                    <span className="text-muted">17</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="card">
                                                                <div className="card-body ">
                                                                    <i className="icofont-ban fs-3" />
                                                                    <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                                                                    <span className="text-muted">06</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="card">
                                                                <div className="card-body ">
                                                                    <i className="icofont-beach-bed fs-3" />
                                                                    <h6 className="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                                                                    <span className="text-muted">14</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Total Employees</h6>
                                                    <h4 className="mb-0 fw-bold ">423</h4>
                                                </div>
                                                <div className="card-body">
                                                    <div className="mt-3" id="apex-MainCategories" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Top Hiring Sources</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div id="hiringsources" />
                                                </div>
                                            </div>
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
                                        <div className="col-md-6 col-lg-6 col-xl-12  flex-column">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-users-alt-2 fs-5" /></span>
                                                        <div className="d-flex flex-column ps-3  flex-fill">
                                                            <h6 className="fw-bold mb-0 fs-4">246</h6>
                                                            <span className="text-muted">Interviews</span>
                                                        </div>
                                                        <i className="icofont-chart-bar-graph fs-3 text-muted" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center flex-fill">
                                                        <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i className="icofont-holding-hands fs-5" /></span>
                                                        <div className="d-flex flex-column ps-3 flex-fill">
                                                            <h6 className="fw-bold mb-0 fs-4">101</h6>
                                                            <span className="text-muted">Hired</span>
                                                        </div>
                                                        <i className="icofont-chart-line fs-3 text-muted" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-xl-12">
                                            <div className="card">
                                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                                    <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="flex-grow-1">
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar2.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Natalie Gibson</h6>
                                                                    <span className="text-muted">Ui/UX Designer</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 1.30 - 1:30
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar9.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Peter Piperg</h6>
                                                                    <span className="text-muted">Web Design</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 9.00 - 1:30
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar12.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Robert Young</h6>
                                                                    <span className="text-muted">PHP Developer</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 1.30 - 2:30
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar8.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Victoria Vbell</h6>
                                                                    <span className="text-muted">IOS Developer</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 2.00 - 3:30
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar7.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Mary Butler</h6>
                                                                    <span className="text-muted">Writer</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 4.00 - 4:30
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar3.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Youn Bel</h6>
                                                                    <span className="text-muted">Unity 3d</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 7.00 - 8.00
                                                            </div>
                                                        </div>
                                                        <div className="py-2 d-flex align-items-center  flex-wrap">
                                                            <div className="d-flex align-items-center flex-fill">
                                                                <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar2.jpg" alt="profile" />
                                                                <div className="d-flex flex-column ps-3">
                                                                    <h6 className="fw-bold mb-0 small-14">Gibson Butler</h6>
                                                                    <span className="text-muted">Networking</span>
                                                                </div>
                                                            </div>
                                                            <div className="time-block text-truncate">
                                                                <i className="icofont-clock-time" /> 8.00 - 9.00
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card light-danger-bg">
                                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                            <h6 className="mb-0 fw-bold ">Top Perfrormers</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-3 align-items-center">
                                                <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                                                    <p>You have 140 <span className="fw-bold">influencers </span> in your company.
                                                    </p>
                                                    <div className="d-flex  justify-content-between text-center">
                                                        <div className>
                                                            <h3 className="fw-bold">350</h3>
                                                            <span className="small">New Task</span>
                                                        </div>
                                                        <div className>
                                                            <h3 className="fw-bold">130</h3>
                                                            <span className="small">Task Completed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                                                    <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar2.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">Luke Short</h6>
                                                                    <span className="text-muted mb-2">@Short</span>
                                                                    <h4 className="fw-bold text-primary fs-3">80%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar5.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">John Hard</h6>
                                                                    <span className="text-muted mb-2">@rdacre</span>
                                                                    <h4 className="fw-bold text-primary fs-3">70%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar8.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">Paul Rees</h6>
                                                                    <span className="text-muted mb-2">@Rees</span>
                                                                    <h4 className="fw-bold text-primary fs-3">77%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar9.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">Rachel Parr</h6>
                                                                    <span className="text-muted mb-2">@Parr</span>
                                                                    <h4 className="fw-bold text-primary fs-3">85%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar12.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">Eric Reid</h6>
                                                                    <span className="text-muted mb-2">@Eric</span>
                                                                    <h4 className="fw-bold text-primary fs-3">95%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="card shadow">
                                                                <div className="card-body text-center d-flex flex-column justify-content-center">
                                                                    <img className="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar3.jpg" alt="profile" />
                                                                    <h6 className="fw-bold my-2 small-14">Jan Ince</h6>
                                                                    <span className="text-muted mb-2">@Ince</span>
                                                                    <h4 className="fw-bold text-primary fs-3">97%</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Dashboard