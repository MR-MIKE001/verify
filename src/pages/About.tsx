import AppLayout from "../appLayout/AppLayout";
import AboutSec from "../components/aboutSec/AboutSec";
import Info from "../components/info/Info";

function About() {
  return (
    <AppLayout page={"About"}>
      <Info title="About Skills signature" description="Skills signature is a cutting-edge platform designed to revolutionize the way individuals verify and showcase their skills. Our mission is to empower professionals by providing a secure and efficient way to validate their expertise, connect with employers, and take control of their career growth." page="about"/>
      <AboutSec />
    </AppLayout>

  )
}

export default About