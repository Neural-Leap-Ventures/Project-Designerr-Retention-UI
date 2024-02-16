import Link from 'next/link'

export default function HeaderNav() {
    return (
        <div className="header-strip">
    <div className="_w-90">
      <div data-animation="default" data-collapse="none" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
        <div className="nav-container w-container">
          <div className="nav-flex">
            <div className="d-flex-gap-20">
              <a id="btnSideMenu" href="#" className="btn-side-menu w-inline-block"><img src="images/navbtnimg.png" loading="lazy" alt="" /></a>
              <a href="#" className="brand w-nav-brand"><img src="images/logo1.png" loading="lazy" alt="" /></a>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div data-hover="false" data-delay={0} className="w-dropdown">
                <div className="dropdown-toggle w-dropdown-toggle">
                  <div className="w-icon-dropdown-toggle" />
                  <div className="user-dropdown-text-wrapper"><img src="images/user-dp.png" loading="lazy" alt="" className="user-dp" />
                    <div>John Doe</div>
                  </div>
                </div>
                <nav className="w-dropdown-list">
                  <a href="#" className="w-dropdown-link">Link 1</a>
                  <a href="#" className="w-dropdown-link">Link 2</a>
                  <a href="#" className="w-dropdown-link">Link 3</a>
                </nav>
              </div>
            </nav>
            <div className="w-nav-button">
              <div className="w-icon-nav-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}