import { useRouter } from 'next/router';
import Link from 'next/link';
import logout from '../utils/logout';

export default function SideNav() {
  const router = useRouter();
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
          <Link href="/dashboard" className={`left-menu-link w-inline-block ${router.pathname === '/dashboard' ? 'active' : ''}`} passhref>
            <img src="images/home-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Home</div>
          </Link>
          <Link href="/user-journey-3-layer-3" className={`left-menu-link w-inline-block ${router.pathname === '/user-journey-3-layer-3' || router.pathname === '/user-journey-3-layer-4' || router.pathname === '/user-journey-3-layer-5' ? 'active' : ''}`} passhref>
            <img src="images/setting-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Settings</div>
          </Link>
          <Link href="" className={`left-menu-link w-inline-block ${router.pathname === '/notification' ? 'active' : ''}`} passhref>
            <img src="images/setting-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Notification</div>
          </Link>
        </div>
        <a href='#' onClick={logout} className="left-menu-link w-inline-block"><img src="images/logout-ico.svg" loading="lazy" alt="" className="left-link-icon" />
          <div>Log out</div>
        </a>
      </div>
    </div>
  )
}