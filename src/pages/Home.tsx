import AppLayout from "../appLayout/AppLayout";
import HowItWork from "../components/howitwork/HowItWork";
import Info from "../components/info/Info";

function Home() {
  return (
    <AppLayout page={"home"}>
        <Info title="Welcome to SkillVerify" description="Your one-stop solution for verifying and showcasing your skills. Connect with employers, share your verified skills, and take control of your professional journey." page="home"/>
        <HowItWork />
    </AppLayout> 
  )
}

export default Home