import { Mission } from "../components/Mission";
import Story from "../components/Story";
import Team from "../components/Team";

export default function About() {

  return (
    <>
      <div className="section-hero about flex-1 bg-zinc-50 font-sans dark:bg-black">
        <div className="hero-bottom">
          <div className="small-text">About Nova Stack</div>
          <h1>On a mission to improve people's lives by untangling the web world.</h1>
        </div>
      </div>
      <Mission />
      <Team />
      <Story />
    </>
  );
}
