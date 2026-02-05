import NavBar from '../sections/NavBar'
import JoinHero from '../sections/JoinHero'
import JoinMission from '../sections/JoinMission'
import JoinRoles from '../sections/JoinRoles'
import JoinCulture from '../sections/JoinCulture'
import JoinCTA from '../sections/JoinCTA'

const JoinPage = () => {
  return (
    <main className="min-h-dvh bg-[#0d0d0d]">
      <NavBar />
      <JoinHero />
      <JoinMission />
      <JoinRoles />
      <JoinCulture />
      <JoinCTA />
    </main>
  )
}

export default JoinPage
