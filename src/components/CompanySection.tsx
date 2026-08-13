import { useEffect, useState } from 'react';
import ProjectCard, { type Project } from './ProjectCard';
import xcureLogo from '../assets/xcure-logo.png';
import csiLogo from '../assets/csi-logo.jpg';
import jongroLogo from '../assets/jongro-logo.jpg';

const companyLogos: Record<string, string> = {
  xcure: xcureLogo,
  csi: csiLogo,
  jongro: jongroLogo,
};

export type Company = {
  id: string; name: string; nameEn: string; role: string; period: string;
  intro: string; color: string; projects: Project[];
};

function CompanySection({ company }: { company: Company }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('splash-open');
    setShowSplash(true);
    const hideTimer = window.setTimeout(() => {
      setShowSplash(false);
      document.body.classList.remove('splash-open');
    }, 1450);
    return () => {
      window.clearTimeout(hideTimer);
      document.body.classList.remove('splash-open');
    };
  }, [company.id]);

  return (
    <section className="company-section" id={company.id} style={{ '--company-color': company.color } as React.CSSProperties}>
      {showSplash && <div className="company-splash" aria-hidden="true">
        <div className={`splash-logo splash-logo--${company.id}`}>
          <img src={companyLogos[company.id]} alt="" />
        </div>
        <p>{company.name}</p>
        <strong>{company.nameEn}</strong>
      </div>}
ㅛㅇ      <div className="company-content">
        <header className="company-heading">
          <div className="company-heading-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="company-index">COMPANY / {company.id.toUpperCase()}</div>
          <div className="company-title-row">
            <div><h2>{company.name}</h2><p className="company-en">{company.nameEn}</p></div>
            <div className="company-role"><b>{company.role}</b><span>{company.period}</span></div>
          </div>
          <p className="company-intro">{company.intro}</p>
        </header>
        <div className="project-list">
          <div className="projects-label">
            <span>SELECTED PROJECTS</span>
            <b>{String(company.projects.length).padStart(2, '0')}</b>
          </div>
          {company.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
