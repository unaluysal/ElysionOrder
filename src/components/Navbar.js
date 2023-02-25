import React from "react";

class Navbar extends React.Component {

    render() {


        return (

            <>
                <div className="main-container" id="container">

                    <div className="overlay"></div>
                    <div className="search-overlay"></div>


                    <div className="sidebar-wrapper sidebar-theme">

                        <nav id="sidebar">

                            <div className="navbar-nav theme-brand flex-row  text-center">
                                <div className="nav-logo">
                                    <div className="nav-item theme-logo">
                                        <a href="./index.html">
                                            <img src="../src/assets/img/logo.svg" className="navbar-logo" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="nav-item theme-text">
                                        <a href="./index.html" className="nav-link"> CORK </a>
                                    </div>
                                </div>
                                <div className="nav-item sidebar-toggle">
                                    <div className="btn-toggle sidebarCollapse">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-left"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-bottom"></div>
                            <ul className="list-unstyled menu-categories" id="accordionExample">
                                <li className="menu active">
                                    <a href="#dashboard" data-bs-toggle="collapse" aria-expanded="true" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                            <span>Dashboard</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled show" id="dashboard" data-bs-parent="#accordionExample">
                                        <li className="active">
                                            <a href="./index.html"> Analytics </a>
                                        </li>
                                        <li>
                                            <a href="./index2.html"> Sales </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu menu-heading">
                                    <div className="heading"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>APPLICATIONS</span></div>
                                </li>

                                <li className="menu">
                                    <a href="#apps" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                                            <span>Apps</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="apps" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./app-calendar.html"> Calendar </a>
                                        </li>
                                        <li>
                                            <a href="./app-chat.html"> Chat </a>
                                        </li>
                                        <li>
                                            <a href="./app-mailbox.html"> Mailbox </a>
                                        </li>
                                        <li>
                                            <a href="./app-todoList.html"> Todo List </a>
                                        </li>
                                        <li>
                                            <a href="./app-notes.html"> Notes </a>
                                        </li>
                                        <li>
                                            <a href="./app-scrumboard.html"> Scrumboard </a>
                                        </li>
                                        <li>
                                            <a href="./app-contacts.html"> Contacts </a>
                                        </li>
                                        <li>
                                            <a href="#invoice" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Invoice <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg> </a>
                                            <ul className="collapse list-unstyled sub-submenu" id="invoice" data-bs-parent="#apps">
                                                <li>
                                                    <a href="./app-invoice-list.html"> List </a>
                                                </li>
                                                <li>
                                                    <a href="./app-invoice-preview.html"> Preview </a>
                                                </li>
                                                <li>
                                                    <a href="./app-invoice-add.html"> Add </a>
                                                </li>
                                                <li>
                                                    <a href="./app-invoice-edit.html"> Edit </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#ecommerce" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Ecommerce <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg> </a>
                                            <ul className="collapse list-unstyled sub-submenu" id="ecommerce" data-bs-parent="#apps">
                                                <li>
                                                    <a href="./app-ecommerce-product-shop.html"> Shop </a>
                                                </li>
                                                <li>
                                                    <a href="./app-ecommerce-product.html"> Product </a>
                                                </li>
                                                <li>
                                                    <a href="./app-ecommerce-product-list.html"> List </a>
                                                </li>
                                                <li>
                                                    <a href="./app-ecommerce-product-add.html"> Create </a>
                                                </li>
                                                <li>
                                                    <a href="./app-ecommerce-product-edit.html"> Edit </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="#blog" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed">Blog <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg> </a>
                                            <ul className="collapse list-unstyled sub-submenu" id="blog" data-bs-parent="#apps">
                                                <li>
                                                    <a href="./app-blog-grid.html"> Grid </a>
                                                </li>
                                                <li>
                                                    <a href="./app-blog-list.html"> List </a>
                                                </li>
                                                <li>
                                                    <a href="./app-blog-post.html"> Post </a>
                                                </li>
                                                <li>
                                                    <a href="./app-blog-create.html"> Create </a>
                                                </li>
                                                <li>
                                                    <a href="./app-blog-edit.html"> Edit </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu menu-heading">
                                    <div className="heading"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>USER INTERFACE</span></div>
                                </li>

                                <li className="menu">
                                    <a href="#components" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                            <span>Components</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="components" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./component-tabs.html"> Tabs </a>
                                        </li>
                                        <li>
                                            <a href="./component-accordion.html"> Accordions  </a>
                                        </li>
                                        <li>
                                            <a href="./component-modal.html"> Modals </a>
                                        </li>
                                        <li>
                                            <a href="./component-cards.html"> Cards </a>
                                        </li>
                                        <li>
                                            <a href="./component-bootstrap-carousel.html">Carousel</a>
                                        </li>
                                        <li>
                                            <a href="./component-splide.html">Splide</a>
                                        </li>
                                        <li>
                                            <a href="./component-sweetalert.html"> Sweet Alerts </a>
                                        </li>
                                        <li>
                                            <a href="./component-timeline.html"> Timeline </a>
                                        </li>
                                        <li>
                                            <a href="./component-notifications.html"> Notifications </a>
                                        </li>
                                        <li>
                                            <a href="./component-media-object.html"> Media Object </a>
                                        </li>
                                        <li>
                                            <a href="./component-list-group.html"> List Group </a>
                                        </li>
                                        <li>
                                            <a href="./component-pricing-table.html"> Pricing Tables </a>
                                        </li>
                                        <li>
                                            <a href="./component-lightbox.html"> Lightbox </a>
                                        </li>
                                        <li>
                                            <a href="./component-drag-drop.html"> Drag and Drop </a>
                                        </li>
                                        <li>
                                            <a href="./component-fonticons.html"> Font Icons </a>
                                        </li>
                                        <li>
                                            <a href="./component-flags.html"> Flag Icons </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#elements" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                            <span>Elements</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="elements" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./element-alerts.html"> Alerts </a>
                                        </li>
                                        <li>
                                            <a href="./element-avatar.html"> Avatar </a>
                                        </li>
                                        <li>
                                            <a href="./element-badges.html"> Badges </a>
                                        </li>
                                        <li>
                                            <a href="./element-breadcrumbs.html"> Breadcrumbs </a>
                                        </li>
                                        <li>
                                            <a href="./element-buttons.html"> Buttons </a>
                                        </li>
                                        <li>
                                            <a href="./element-buttons-group.html"> Button Groups </a>
                                        </li>
                                        <li>
                                            <a href="./element-color-library.html"> Color Library </a>
                                        </li>
                                        <li>
                                            <a href="./element-dropdown.html"> Dropdown </a>
                                        </li>
                                        <li>
                                            <a href="./element-infobox.html"> Infobox </a>
                                        </li>
                                        <li>
                                            <a href="./element-loader.html"> Loader </a>
                                        </li>
                                        <li>
                                            <a href="./element-pagination.html"> Pagination </a>
                                        </li>
                                        <li>
                                            <a href="./element-popovers.html"> Popovers </a>
                                        </li>
                                        <li>
                                            <a href="./element-progressbar.html"> Progress Bar </a>
                                        </li>
                                        <li>
                                            <a href="./element-search.html"> Search </a>
                                        </li>
                                        <li>
                                            <a href="./element-tooltips.html"> Tooltips </a>
                                        </li>
                                        <li>
                                            <a href="./element-treeview.html"> Treeview </a>
                                        </li>
                                        <li>
                                            <a href="./element-typography.html"> Typography </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="./map-leaflet.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                                            <span>Maps</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a href="./charts-apex.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                                            <span>Charts</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a href="./widgets.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                                            <span>Widgets</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a href="#layouts" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                                            <span>Layouts</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="layouts" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./layout-blank-page.html"> Blank Page </a>
                                        </li>
                                        <li>
                                            <a href="./layout-empty.html"> Empty Page </a>
                                        </li>
                                        <li>
                                            <a href="./layout-boxed.html"> Boxed </a>
                                        </li>
                                        <li>
                                            <a href="./layout-collapsible-menu.html"> Collapsed Menu </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu menu-heading">
                                    <div className="heading"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>TABLES AND FORMS</span></div>
                                </li>

                                <li className="menu">
                                    <a href="./table-basic.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                            <span>Tables</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a href="#datatables" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                            <span>DataTables</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="datatables" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./table-datatable-basic.html"> Basic </a>
                                        </li>
                                        <li>
                                            <a href="./table-datatable-striped-table.html"> Striped </a>
                                        </li>
                                        <li>
                                            <a href="./table-datatable-custom.html"> Custom </a>
                                        </li>
                                        <li>
                                            <a href="./table-datatable-miscellaneous.html"> Miscellaneous </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#forms" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                            <span>Forms</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="forms" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./form-bootstrap-basic.html"> Basic </a>
                                        </li>
                                        <li>
                                            <a href="./form-input-group-basic.html"> Input Group </a>
                                        </li>
                                        <li>
                                            <a href="./form-layouts.html"> Layouts </a>
                                        </li>
                                        <li>
                                            <a href="./form-validation.html"> Validation </a>
                                        </li>
                                        <li>
                                            <a href="./form-input-mask.html"> Input Mask </a>
                                        </li>
                                        <li>
                                            <a href="./form-tom-select.html"> Tom Select </a>
                                        </li>
                                        <li>
                                            <a href="./form-tagify.html"> Tagify </a>
                                        </li>
                                        <li>
                                            <a href="./form-bootstrap-touchspin.html"> TouchSpin </a>
                                        </li>
                                        <li>
                                            <a href="./form-maxlength.html"> Maxlength </a>
                                        </li>
                                        <li>
                                            <a href="./form-checkbox.html"> Checkbox </a>
                                        </li>
                                        <li>
                                            <a href="./form-radio.html"> Radio </a>
                                        </li>
                                        <li>
                                            <a href="./form-switches.html"> Switches </a>
                                        </li>
                                        <li>
                                            <a href="./form-wizard.html"> Wizards </a>
                                        </li>
                                        <li>
                                            <a href="./form-fileupload.html"> File Upload </a>
                                        </li>
                                        <li>
                                            <a href="./form-quill.html"> Quill Editor </a>
                                        </li>
                                        <li>
                                            <a href="./form-markdown.html"> Markdown Editor </a>
                                        </li>
                                        <li>
                                            <a href="./form-date-time-picker.html"> Date Time Picker </a>
                                        </li>
                                        <li>
                                            <a href="./form-slider.html"> Slider </a>
                                        </li>
                                        <li>
                                            <a href="./form-clipboard.html"> Clipboard </a>
                                        </li>
                                        <li>
                                            <a href="./form-autoComplete.html"> Auto Complete </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu menu-heading">
                                    <div className="heading"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>USER AND PAGES</span></div>
                                </li>

                                <li className="menu">
                                    <a href="#users" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                            <span>Users</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="users" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./user-profile.html"> Profile </a>
                                        </li>
                                        <li>
                                            <a href="./user-account-settings.html"> Account Settings </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#pages" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                            <span>Pages</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="pages" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./pages-knowledge-base.html"> Knowledge Base </a>
                                        </li>
                                        <li>
                                            <a href="./pages-faq.html"> FAQ </a>
                                        </li>
                                        <li>
                                            <a href="./pages-contact-us.html"> Contact Form </a>
                                        </li>
                                        <li>
                                            <a href="./pages-error404.html" target="_blank"> Error </a>
                                        </li>
                                        <li>
                                            <a href="./pages-maintenence.html" target="_blank"> Maintanence </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#authentication" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                            <span>Authentication</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="authentication" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="./auth-boxed-signin.html" target="_blank"> Sign In </a>
                                        </li>
                                        <li>
                                            <a href="./auth-boxed-signup.html" target="_blank"> Sign Up </a>
                                        </li>
                                        <li>
                                            <a href="./auth-boxed-lockscreen.html" target="_blank"> Unlock </a>
                                        </li>
                                        <li>
                                            <a href="./auth-boxed-password-reset.html" target="_blank"> Reset </a>
                                        </li>
                                        <li>
                                            <a href="./auth-boxed-2-step-verification.html" target="_blank"> 2 Step </a>
                                        </li>
                                        <li>
                                            <a href="./auth-cover-signin.html" target="_blank"> Sign In Cover </a>
                                        </li>
                                        <li>
                                            <a href="./auth-cover-signup.html" target="_blank"> Sign Up Cover </a>
                                        </li>
                                        <li>
                                            <a href="./auth-cover-lockscreen.html" target="_blank"> Unlock Cover </a>
                                        </li>
                                        <li>
                                            <a href="./auth-cover-password-reset.html" target="_blank"> Reset Cover </a>
                                        </li>
                                        <li>
                                            <a href="./auth-cover-2-step-verification.html" target="_blank"> 2 Step Cover </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu menu-heading">
                                    <div className="heading"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>MISCELLANEOUS</span></div>
                                </li>

                                <li className="menu">
                                    <a href="#menuLevel1" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                            <span>Item Level</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="menuLevel1" data-bs-parent="#accordionExample">
                                        <li>
                                            <a href="#"> Item Level 1a </a>
                                        </li>
                                        <li>
                                            <a href="#"> Item Level 1b </a>
                                        </li>

                                        <li>
                                            <a href="#level-three" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle collapsed"> Item Level 1c <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg> </a>
                                            <ul className="collapse list-unstyled sub-submenu" id="level-three" data-bs-parent="#pages">
                                                <li>
                                                    <a href="#"> Item Level 2a </a>
                                                </li>
                                                <li>
                                                    <a href="#"> Item Level 2b </a>
                                                </li>
                                                <li>
                                                    <a href="#"> Item Level 2c </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#" aria-expanded="false" className="dropdown-toggle disabled">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                            <span>Item Disabled</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a href="#" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                            <span>Item Label</span>
                                            <span className="badge badge-primary sidebar-label"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle badge-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> New</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="menu">
                                    <a target="_blank" href="../../documentation/index.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                                            <span>Documentation</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="menu">
                                    <a target="_blank" href="../../documentation/changelog.html" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
                                            <span>Changelog</span>
                                        </div>
                                    </a>
                                </li>

                            </ul>

                        </nav>

                    </div>

                    <div id="content" className="main-content">
                        <div className="layout-px-spacing">

                            <div className="middle-content container-xxl p-0">


                                <div className="secondary-nav">
                                    <div className="breadcrumbs-container" data-page-heading="Analytics">
                                        <header className="header navbar navbar-expand-sm">
                                            <a href="#" className="btn-toggle sidebarCollapse" data-placement="bottom">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                            </a>
                                            <div className="d-flex breadcrumb-content">
                                                <div className="page-header">

                                                    <div className="page-title">
                                                    </div>

                                                    <nav className="breadcrumb-style-one" aria-label="breadcrumb">
                                                        <ol className="breadcrumb">
                                                            <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                                            <li className="breadcrumb-item active" aria-current="page">Analytics</li>
                                                        </ol>
                                                    </nav>

                                                </div>
                                            </div>
                                            <ul className="navbar-nav flex-row ms-auto breadcrumb-action-dropdown">
                                                <li className="nav-item more-dropdown">
                                                    <div className="dropdown  custom-dropdown-icon">
                                                        <a className="dropdown-toggle btn" href="#" role="button" id="customDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span>Settings</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down custom-dropdown-arrow"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                        </a>

                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="customDropdown">

                                                            <a className="dropdown-item" data-value="Settings" data-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; className=&quot;feather feather-settings&quot;><circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;></circle><path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;></path></svg>" href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings
                                                            </a>

                                                            <a className="dropdown-item" data-value="Mail" data-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; className=&quot;feather feather-mail&quot;><path d=&quot;M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z&quot;></path><polyline points=&quot;22,6 12,13 2,6&quot;></polyline></svg>" href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Mail
                                                            </a>

                                                            <a className="dropdown-item" data-value="Print" data-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; className=&quot;feather feather-printer&quot;><polyline points=&quot;6 9 6 2 18 2 18 9&quot;></polyline><path d=&quot;M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2&quot;></path><rect x=&quot;6&quot; y=&quot;14&quot; width=&quot;12&quot; height=&quot;8&quot;></rect></svg>" href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-printer"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> Print
                                                            </a>

                                                            <a className="dropdown-item" data-value="Download" data-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; className=&quot;feather feather-download&quot;><path d=&quot;M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4&quot;></path><polyline points=&quot;7 10 12 15 17 10&quot;></polyline><line x1=&quot;12&quot; y1=&quot;15&quot; x2=&quot;12&quot; y2=&quot;3&quot;></line></svg>" href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download
                                                            </a>

                                                            <a className="dropdown-item" data-value="Share" data-icon="<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; className=&quot;feather feather-share-2&quot;><circle cx=&quot;18&quot; cy=&quot;5&quot; r=&quot;3&quot;></circle><circle cx=&quot;6&quot; cy=&quot;12&quot; r=&quot;3&quot;></circle><circle cx=&quot;18&quot; cy=&quot;19&quot; r=&quot;3&quot;></circle><line x1=&quot;8.59&quot; y1=&quot;13.51&quot; x2=&quot;15.42&quot; y2=&quot;17.49&quot;></line><line x1=&quot;15.41&quot; y1=&quot;6.51&quot; x2=&quot;8.59&quot; y2=&quot;10.49&quot;></line></svg>" href="#">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share
                                                            </a>

                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        </header>
                                    </div>
                                </div>


                                <div className="row layout-top-spacing">

                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-six">
                                            <div className="widget-heading">
                                                <h6 className="">Statistics</h6>
                                                <div className="task-action">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" href="#" role="button" id="statistics" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>

                                                        <div className="dropdown-menu left" aria-labelledby="statistics" style={{"willChange":"transform"}} >
                                                            <a className="dropdown-item" href="#">View</a>
                                                            <a className="dropdown-item" href="#">Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-chart">
                                                <div className="w-chart-section">
                                                    <div className="w-detail">
                                                        <p className="w-title">Total Visits</p>
                                                        <p className="w-stats">423,964</p>
                                                    </div>
                                                    <div className="w-chart-render-one">
                                                        <div id="total-users"></div>
                                                    </div>
                                                </div>

                                                <div className="w-chart-section">
                                                    <div className="w-detail">
                                                        <p className="w-title">Paid Visits</p>
                                                        <p className="w-stats">7,929</p>
                                                    </div>
                                                    <div className="w-chart-render-one">
                                                        <div id="paid-visits"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-four">
                                            <div className="widget-content">
                                                <div className="w-header">
                                                    <div className="w-info">
                                                        <h6 className="value">Expenses</h6>
                                                    </div>
                                                    <div className="task-action">
                                                        <div className="dropdown">
                                                            <a className="dropdown-toggle" href="#" role="button" id="expenses" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                            </a>

                                                            <div className="dropdown-menu left" aria-labelledby="expenses" style={{"willChange":"transform"}} >
                                                                <a className="dropdown-item" href="#">This Week</a>
                                                                <a className="dropdown-item" href="#">Last Week</a>
                                                                <a className="dropdown-item" href="#">Last Month</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-content">

                                                    <div className="w-info">
                                                        <p className="value">$ 45,141 <span>this week</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></p>
                                                    </div>

                                                </div>

                                                <div className="w-progress-stats">
                                                    <div className="progress">
                                                        <div className="progress-bar bg-gradient-secondary" role="progressbar" style={{"width":"57%"}}aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>

                                                    <div className="">
                                                        <div className="w-icon">
                                                            <p>57%</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-five">
                                            <div className="widget-content">
                                                <div className="account-box">

                                                    <div className="info-box">
                                                        <div className="icon">
                                                            <span>
                                                                <img src="../src/assets/img/money-bag.png" alt="money-bag" />
                                                            </span>
                                                        </div>

                                                        <div className="balance-info">
                                                            <h6>Total Balance</h6>
                                                            <p>$41,741.42</p>
                                                        </div>
                                                    </div>

                                                    <div className="card-bottom-section">
                                                        <div><span className="badge badge-light-success">+ 13.6% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></span></div>
                                                        <a href="#" className="">View Report</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-chart-three">
                                            <div className="widget-heading">
                                                <div className="">
                                                    <h5 className="">Unique Visitors</h5>
                                                </div>

                                                <div className="task-action">
                                                    <div className="dropdown ">
                                                        <a className="dropdown-toggle" href="#" role="button" id="uniqueVisitors" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>

                                                        <div className="dropdown-menu left" aria-labelledby="uniqueVisitors">
                                                            <a className="dropdown-item" href="#">View</a>
                                                            <a className="dropdown-item" href="#">Update</a>
                                                            <a className="dropdown-item" href="#">Download</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="widget-content">
                                                <div id="uniqueVisits"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-activity-five">

                                            <div className="widget-heading">
                                                <h5 className="">Activity Log</h5>

                                                <div className="task-action">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" href="#" role="button" id="activitylog" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>

                                                        <div className="dropdown-menu left" aria-labelledby="activitylog" style={{"willChange":"transform"}} >
                                                            <a className="dropdown-item" href="#">View All</a>
                                                            <a className="dropdown-item" href="#">Mark as Read</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="widget-content">

                                                <div className="w-shadow-top"></div>

                                                <div className="mt-container mx-auto">
                                                    <div className="timeline-line">

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>New project created : <a href="javscript:void(0);"><span>[Cork Admin]</span></a></h5>
                                                                </div>
                                                                <p>07 May, 2022</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-success"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Mail sent to <a href="#">HR</a> and <a href="#">Admin</a></h5>
                                                                </div>
                                                                <p>06 May, 2022</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Server Logs Updated</h5>
                                                                </div>
                                                                <p>01 May, 2022</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Task Completed : <a href="javscript:void(0);"><span>[Backup Files EOD]</span></a></h5>
                                                                </div>
                                                                <p>30 Apr, 2022</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Documents Submitted from <a href="#">Sara</a></h5>
                                                                    <span className=""></span>
                                                                </div>
                                                                <p>25 Apr, 2022</p>
                                                            </div>
                                                        </div>

                                                        <div className="item-timeline timeline-new">
                                                            <div className="t-dot">
                                                                <div className="t-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg></div>
                                                            </div>
                                                            <div className="t-content">
                                                                <div className="t-uppercontent">
                                                                    <h5>Server rebooted successfully</h5>
                                                                    <span className=""></span>
                                                                </div>
                                                                <p>10 Apr, 2022</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-shadow-bottom"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget-four">
                                            <div className="widget-heading">
                                                <h5 className="">Visitors by Browser</h5>
                                            </div>
                                            <div className="widget-content">
                                                <div className="vistorsBrowser">
                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
                                                        </div>
                                                        <div className="w-browser-details">
                                                            <div className="w-browser-info">
                                                                <h6>Chrome</h6>
                                                                <p className="browser-count">65%</p>
                                                            </div>
                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-primary" role="progressbar" style={{"width":"65%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-compass"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                                                        </div>
                                                        <div className="w-browser-details">

                                                            <div className="w-browser-info">
                                                                <h6>Safari</h6>
                                                                <p className="browser-count">25%</p>
                                                            </div>

                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-danger" role="progressbar" style={{"width":"35%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="browser-list">
                                                        <div className="w-icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                                        </div>
                                                        <div className="w-browser-details">

                                                            <div className="w-browser-info">
                                                                <h6>Others</h6>
                                                                <p className="browser-count">15%</p>
                                                            </div>

                                                            <div className="w-browser-stats">
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-warning" role="progressbar" style={{"width":"15%"}}  aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="row widget-statistic">
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-followers">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">31.6K</p>
                                                                <h5 className="">Followers</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-referral">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">1,900</p>
                                                                <h5 className="">Referral</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers1"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing">
                                                <div className="widget widget-one_hybrid widget-engagement">
                                                    <div className="widget-heading">
                                                        <div className="w-title">
                                                            <div className="w-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                            </div>
                                                            <div className="">
                                                                <p className="w-value">18.2%</p>
                                                                <h5 className="">Engagement</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content">
                                                        <div className="w-chart">
                                                            <div id="hybrid_followers3"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-five">

                                            <div className="widget-heading">

                                                <a href="#" className="task-info">

                                                    <div className="usr-avatar">
                                                        <span>FD</span>
                                                    </div>

                                                    <div className="w-title">

                                                        <h5>Figma Design</h5>
                                                        <span>Design Project</span>

                                                    </div>

                                                </a>

                                                <div className="task-action">
                                                    <div className="dropdown">
                                                        <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                        </a>

                                                        <div className="dropdown-menu left" aria-labelledby="pendingTask" style={{"willChange":"transform"}}  >
                                                            <a className="dropdown-item" href="#">View Project</a>
                                                            <a className="dropdown-item" href="#">Edit Project</a>
                                                            <a className="dropdown-item" href="#">Mark as Done</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="widget-content">

                                                <p>Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi.</p>

                                                <div className="progress-data">

                                                    <div className="progress-info">
                                                        <div className="task-count"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><p>5 Tasks</p></div>
                                                        <div className="progress-stats"><p>86.2%</p></div>
                                                    </div>

                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{"width":"65%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>

                                                </div>

                                                <div className="meta-info">

                                                    <div className="due-time">
                                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 3 Days Left</p>
                                                    </div>


                                                    <div className="avatar--group">

                                                        <div className="avatar translateY-axis more-group">
                                                            <span className="avatar-title">+6</span>
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="../src/assets/img/profile-8.jpeg" />
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="../src/assets/img/profile-12.jpeg" />
                                                        </div>
                                                        <div className="avatar translateY-axis">
                                                            <img alt="avatar" src="../src/assets/img/profile-19.jpeg" />
                                                        </div>

                                                    </div>

                                                </div>


                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-one">
                                            <div className="widget-content">

                                                <div className="media">
                                                    <div className="w-img">
                                                        <img src="../src/assets/img/profile-19.jpeg" alt="avatar" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Jimmy Turner</h6>
                                                        <p className="meta-date-time">Monday, May 18</p>
                                                    </div>
                                                </div>

                                                <p>"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                                <div className="w-action">
                                                    <div className="card-like">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                        <span>551 Likes</span>
                                                    </div>

                                                    <div className="read-more">
                                                        <a href="#">Read More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                                        <div className="widget widget-card-two">
                                            <div className="widget-content">

                                                <div className="media">
                                                    <div className="w-img">
                                                        <img src="../src/assets/img/g-8.png" alt="avatar" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Dev Summit - New York</h6>
                                                        <p className="meta-date-time">Bronx, NY</p>
                                                    </div>
                                                </div>

                                                <div className="card-bottom-section">
                                                    <h5>4 Members Going</h5>
                                                    <div className="img-group">
                                                        <img src="../src/assets/img/profile-19.jpeg" alt="avatar" />
                                                        <img src="../src/assets/img/profile-6.jpeg" alt="avatar" />
                                                        <img src="../src/assets/img/profile-8.jpeg" alt="avatar" />
                                                        <img src="../src/assets/img/profile-3.jpeg" alt="avatar" />
                                                    </div>
                                                    <a href="#" className="btn">View Details</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="footer-wrapper">
                            <div className="footer-section f-section-1">
                                <p className="">Copyright © <span className="dynamic-year">2022</span> <a target="_blank" href="https://designreset.com/cork-admin/">DesignReset</a>, All rights reserved.</p>
                            </div>
                            <div className="footer-section f-section-2">
                                <p className="">Coded with <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></p>
                            </div>
                        </div>

                    </div>


                </div>

            </>


        )
    }


}

export default Navbar;