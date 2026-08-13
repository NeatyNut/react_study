/* oxlint-disable react/only-export-components -- company route shares this portfolio dataset */
import { Link } from 'react-router-dom';
import type { Company } from '../components/CompanySection';
import ProfileCard from '../components/ProfileCard';
import xcureLogo from '../assets/xcure-logo.png';
import csiLogo from '../assets/csi-logo.jpg';
import jongroLogo from '../assets/jongro-logo.jpg';

const companyLogos: Record<string, string> = {
  xcure: xcureLogo,
  csi: csiLogo,
  jongro: jongroLogo,
};

export const companies: Company[] = [
  {
    id: 'xcure', name: '(주)엑스큐어넷', nameEn: 'XCURENET', role: 'AI Developer', period: '2025 — Present', color: '#2c65ab',
    intro: 'DLP 보안 데이터를 이해하는 모델부터 실시간 추론과 Agent까지, 연구 아이디어를 실제 제품 환경으로 연결했습니다.',
    projects: [
      { title: '자연어 속 소스코드 탐지 모델', period: '2025.10 — 12', contribution: '1인 · 100%', summary: '자연어와 코드가 혼재된 문서에서 10종 이상의 프로그래밍 언어를 식별하고 추출하는 경량 모델을 설계했습니다.', result: '검출률 98.7% · 200M 모델 · L40S 기준 0.3초 추론', tech: ['CodeBERT', 'Transformer', 'Triton Server', 'Hugging Face'] },
      { title: '도메인 특화 이미지 분류', period: '2026.05 — 07', contribution: '1인 · 100%', summary: '반도체 도면, 제품 시안, 신분증처럼 클래스가 고정되지 않는 환경을 위한 Zero-shot 분류 시스템을 고안했습니다.', result: '파인튜닝 없이 정확도 99.7% · VLM 없이 L40S 0.3초 추론', tech: ['SigLIP', 'Zero-shot', 'Vision Embedding', 'VLM'] },
    ],
  },
  {
    id: 'csi', name: '(주)씨에스아이비젼', nameEn: 'CSI VISION', role: 'Research Software Developer', period: '2024.09 — 12', color: '#0e72b5',
    intro: '연구자의 수식과 분석 절차를 소프트웨어로 옮기고, 모델 비교부터 시각화와 반응형 UI까지 한 흐름으로 구현했습니다.',
    projects: [
      { title: '레이저 분석 장치 AI · UI', period: '2024.11 — 12', contribution: '1인 · 100%', summary: 'RIST 레이저 분석 장치에서 PLS-R·PCR 모델을 비교하고 최적 모델을 저장하는 분석 프로그램과 반응형 UI를 개발했습니다.', result: '원소별 데이터 분리 · RMSE 기반 모델 비교/저장 자동화', tech: ['PLS-R', 'PCR', 'Scientific UI', 'Numerical Integration'] },
      { title: 'Abaqus 데이터 시각화 · 전처리', period: '2024.09 — 11', contribution: '1인 · 100%', summary: '한국재료연구원의 Abaqus .inp 포맷을 해석해 오일러각과 노달 포인트 기반 소재 데이터를 시각화했습니다.', tech: ['Abaqus', 'MTEX', 'Euler Angles', 'Data Visualization'] },
    ],
  },
  {
    id: 'jongro', name: '(주)종로아카데미', nameEn: 'JONGRO ACADEMY', role: 'Data Automation · Operations', period: '2020.10 — 2023.08', color: '#125a56',
    intro: '반복 업무를 관찰해 자동화 가능한 단위로 나누고, 작은 도구를 실제 운영 성과와 비용 절감으로 전환했습니다.',
    projects: [
      { title: '입시 운영 업무 자동화', period: '2020.10 — 2023.08', contribution: '1인 · 100%', summary: '데이터 전처리, 크롤링, 임금 관리, 한글 문서 생성 등 반복 업무를 매크로와 실행 프로그램으로 자동화했습니다.', result: '입시결과 한글화: 5인 8시간 → 무인 2시간 · DB 전처리: 1일 → 5초', tech: ['Python', 'Excel VBA', 'HWP Automation', 'Web Crawling'] },
      { title: '전국 대학입시 자료집 제작 시스템', period: '2020.10 — 2023.07', contribution: '부총괄 · 30%', summary: '아르바이트 인력을 교육하고 결과물을 검수했으며, 대학별 상이한 언어와 양식을 자동화 도구로 표준화했습니다.', result: '제작비 500만원 이상 절감 · 5개 시즌 자료집 운영', tech: ['Workflow Design', 'Data Validation', 'Automation', 'Team Operations'] },
      { title: '최저학력기준 서비스 DB 설계', period: '2022 — 2024', contribution: '1인 · 100%', summary: '통합수능의 복합적인 대학별 최저 기준을 서비스 가능한 변수와 규칙으로 모델링했습니다.', result: '사·과탐 동시 응시, 대학별 외국어·과탐·영어 예외 규칙 반영', tech: ['Database Design', 'Rule Modeling', 'Data Processing'] },
    ],
  },
];

function HomePage() {
  return (
    <>
      <ProfileCard />
      <section className="career-intro" id="career">
        <span>SELECTED WORK</span>
        <h2>회사가 바뀌어도,<br />문제를 푸는 방식은 이어집니다.</h2>
        <p>가장 최근 경력부터 회사 안의 프로젝트와 성과를 확인해보세요.</p>
      </section>
      <section className="company-directory" aria-label="회사별 경력">
        {companies.map((company, index) => (
          <Link
            className="company-link-card"
            to={`/company/${company.id}`}
            key={company.id}
            style={{ '--company-color': company.color } as React.CSSProperties}
          >
            <div className="directory-top">
              <span>{String(index + 1).padStart(2, '0')} / 03</span>
              <i>VIEW CAREER ↗</i>
            </div>
            <div className={`directory-logo directory-logo--${company.id}`}>
              <img src={companyLogos[company.id]} alt="" />
            </div>
            <div className="directory-copy">
              <small>{company.nameEn}</small>
              <strong>{company.name}</strong>
              <p>{company.role}<br />{company.period}</p>
            </div>
          </Link>
        ))}
      </section>
      <footer>
        <p>문제를 발견하고, 실험하고, 끝내 작동하게 만듭니다.</p>
        <a href="https://github.com/neatynut" target="_blank" rel="noreferrer">github.com/neatynut ↗</a>
        <span>© 2026 KIM MIN GI</span>
      </footer>
    </>
  );
}

export default HomePage;
