function ProfileCard() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-kicker"><span /> AI DEVELOPER · KIM MIN GI</div>
      <h1>복잡한 문제를<br /><em>작동하는 시스템</em>으로 만듭니다.</h1>
      <p className="hero-copy">모델 연구에서 끝나지 않고 데이터 파이프라인, 서빙, UI까지 연결합니다. 실패한 가설도 기록하며 더 나은 답을 찾아가는 AI 개발자 김민기입니다.</p>
      <div className="hero-actions">
        <a className="primary-action" href="#career">회사별 프로젝트 보기 <span>↓</span></a>
        <a href="https://github.com/neatynut" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://neatynut.github.io" target="_blank" rel="noreferrer">Blog ↗</a>
      </div>
      <div className="hero-metrics" aria-label="핵심 경력 지표">
        <div><strong>7</strong><span>Company Projects</span></div>
        <div><strong>100%</strong><span>Major AI Contribution</span></div>
        <div><strong>0.3s</strong><span>L40S Inference</span></div>
      </div>
    </section>
  );
}

export default ProfileCard;
