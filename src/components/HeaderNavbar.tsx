import { NavLink } from 'react-router-dom';

const companies = [['엑스큐어넷', 'xcure'], ['씨에스아이비젼', 'csi'], ['종로아카데미', 'jongro']];

function HeaderNavbar() {
  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="처음으로">MK<span>.</span></NavLink>
      <nav aria-label="회사별 경력">
        {companies.map(([label, id]) => (
          <NavLink className={({ isActive }) => isActive ? 'active-company' : ''} to={`/company/${id}`} key={id}>{label}</NavLink>
        ))}
      </nav>
      <a className="header-contact" href="https://www.linkedin.com/in/min-gee-kim-9783b5229" target="_blank" rel="noreferrer">Contact</a>
    </header>
  );
}

export default HeaderNavbar;
