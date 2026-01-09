import CallAPI from "../../API Calling/CallAPI";
import "../../styles/HomeStyle.css";
// import CallAPI from "../../API Calling/CallAPI";
import CallAPIaxios from "../../API Calling/CallAPIaxios";

export default function Home() {
  return (
    <> 
    <section className="hero">
      <div className="hero-left">
        <h1>
          Unlock Top <br />
          Emergency Response <br />
          <span>With One Click</span>
        </h1>

        <p>
          AI-powered emergency assistance connecting people,
          responders, and hospitals instantly.
        </p>

        <button className="cta">Start Project</button>
      </div>

      <div className="hero-right">
  <div className="orbit orbit-1">
    <img src="/avatar1.png" />
    <img src="/avatar2.png" />
    <img src="/avatar3.png" />
    <img src="/avatar4.png" />
  </div>
  <div className="orbit orbit-2">
    <img src="/avatar5.png" />
    <img src="/avatar6.png" />
    <img src="/avatar7.png" />
  </div>

  <div className="orbit orbit-3">
    <img src="/avatar8.png" />
    
    <img src="/avatar9.png" />
  </div>

  <div className="center-text">
    20k+ <br /> Responders
  </div>
</div>
    </section>

    <CallAPI />
    <CallAPIaxios />
    </>
  );
}
