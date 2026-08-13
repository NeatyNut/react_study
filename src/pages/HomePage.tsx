import ProfileCard from '../components/ProfileCard';
import SkillBadges from '../components/SkillBadges';

function HomePage() {
  return (
    <>
      <ProfileCard />

      <section className="mt-4">
        <h2>Skills</h2>
        <SkillBadges />
      </section>
    </>
  );
}

export default HomePage;