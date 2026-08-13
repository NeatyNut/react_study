import { Link, useParams } from 'react-router-dom';
import CompanySection from '../components/CompanySection';
import { companies } from './HomePage';

function CompanyPage() {
  const { companyId } = useParams();
  const index = companies.findIndex((company) => company.id === companyId);
  const company = companies[index];

  if (!company) return null;

  const previous = companies[(index - 1 + companies.length) % companies.length];
  const next = companies[(index + 1) % companies.length];

  return (
    <div className="company-page">
      <CompanySection company={company} />
      <nav className="company-pagination" aria-label="다른 회사 경력">
        <Link to={`/company/${previous.id}`}><span>← PREVIOUS</span><strong>{previous.name}</strong></Link>
        <Link to="/"><span>ALL COMPANIES</span><strong>홈으로</strong></Link>
        <Link to={`/company/${next.id}`}><span>NEXT →</span><strong>{next.name}</strong></Link>
      </nav>
    </div>
  );
}

export default CompanyPage;
