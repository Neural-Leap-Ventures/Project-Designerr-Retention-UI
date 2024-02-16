import Link from 'next/link';

export default function SideNav() {
    return (
        <div id="sideNav" className="left-pane pt-150">
        <div className="sidenav-close-wrapper">
          <a href="#" className="brand w-nav-brand"><img src="images/logo1.png" loading="lazy" alt="" /></a>
          <a id="btnNavClose" href="#" className="btn-nav-close w-inline-block">
            <div>X</div>
          </a>
        </div>
        <div className="left-menu-wrapper">
          <div className="left-menu-list">
            <Link href="/user-journey-3-layer-2" className="left-menu-link active w-inline-block"><img src="images/home-ico.svg" loading="lazy" alt="" className="left-link-icon" />
              <div>Home</div>
            </Link>
            <Link href="/user-journey-3-layer-3" className="left-menu-link w-inline-block"><img src="images/setting-ico.svg" loading="lazy" alt="" className="left-link-icon" />
              <div>Settings</div>
            </Link>
            <a href="#" className="left-menu-link w-inline-block"><img src="images/notification-ico.svg" loading="lazy" alt="" className="left-link-icon" />
              <div>Notification</div>
            </a>
          </div>
          <a href="#" className="left-menu-link w-inline-block"><img src="images/logout-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Log out</div>
          </a>
        </div>
      </div>
    )
}