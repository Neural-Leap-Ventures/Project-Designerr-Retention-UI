import { useRouter } from 'next/router';
import Link from 'next/link';

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
          <a href="/user-journey-3-layer-2" className={`left-menu-link w-inline-block ${router.pathname === '/user-journey-3-layer-2' ? 'active' : ''}`} passHref>
            <img src="images/home-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Home</div>
          </a>
          <a href="/user-journey-3-layer-3" className={`left-menu-link w-inline-block ${router.pathname === '/user-journey-3-layer-3' || router.pathname === '/user-journey-3-layer-4' || router.pathname === '/user-journey-3-layer-5' ? 'active' : ''}`} passHref>
            <img src="images/setting-ico.svg" loading="lazy" alt="" className="left-link-icon" />
            <div>Settings</div>
          </a>
          <a href="" className={`left-menu-link w-inline-block ${router.pathname === '/notification' ? 'active' : ''}`} passHref>
            <img src="images/setting-ico.svg" loading="lazy" alt="" className="left-link-icon" />
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