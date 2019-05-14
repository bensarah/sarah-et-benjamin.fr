import Page from "../layouts/main.js";
import FramedImage from "../components/FramedImage.jsx";
import Logo from "../components/Logo.jsx";
import Bloc from "../components/Bloc.jsx";
import A from "../components/ExternalLink";

export default () => (
  <Page>
    <FramedImage src="static/nous-yosemite.jpg" />
    <div className="absolute top left mt36 ml36 mt60-ml ml60-ml">
      <Logo
        stroke="#fff"
        fill="none"
        style={{ height: 60 }}
        className="align-left"
      />
    </div>

    {/* Why you're here */}
    <div className="px36 px60-ml pt12 pb24 txt-l">
      👋 Hello,
      <div className="py6">
        Avant la grande cérémonie du 20 juin 2020, nous nous marions civilement
        ce 6 juillet 2019. On a hâte de partager ce moment avec vous !
      </div>
      <div className="align-r">
        <Logo
          stroke="none"
          fill="#3b7ebb"
          className="inline-block mr6"
          style={{ height: 13, verticalAlign: "center" }}
        />
        <span>· Sarah & Benjamin</span>
      </div>
    </div>

    {/* Timeline */}
    <div className="align-center dark-fuschia pt36 pb60">
      <h1 className="big inline-block">Mariage civil</h1>
      <br className="none-ml" />
      <span className="big ml24-ml font-weight200 inline-block">
        6 juillet 2019
      </span>
    </div>
    <Bloc
      img="static/mairie.png"
      mapsLink="https://goo.gl/maps/Dv8acD6eAs6AAVv67"
      title="Mairie"
      time="10h15"
      location="Mairie du 11ème arrondissement de Paris"
      station="Voltaire"
    >
      Rendez-vous devant la mairie du 11ème arrondissement de Paris pour la
      cérémonie qui aura lieu à 10h30.
    </Bloc>
    <Bloc
      img="static/terrasse.png"
      mapsLink="https://goo.gl/maps/F8gg8xTP13A2XPGBA"
      title="Brunch"
      time="12h00"
      location="108 boulevard Suchet, Paris 16ème"
      station="Jasmin"
    >
      Nous nous rendrons ensuite, en{" "}
      <A href="https://www.google.com/maps/dir/Mairie+du+11e+arrondissement,+Place+L%C3%A9on+Blum,+Paris/108+Boulevard+Suchet,+75016+Paris/@48.8441324,2.299006,13z/data=!4m14!4m13!1m5!1m1!1s0x47e66df79e6fe907:0xfea43ce9b2e034ac!2m2!1d2.379506!2d48.8588238!1m5!1m1!1s0x47e67ab147654a6d:0x3792e1ba5fb634d6!2m2!1d2.2608092!2d48.8516986!3e3">
        métro
      </A>{" "}
      ou{" "}
      <A href="https://www.google.com/maps/dir/Mairie+du+11e+arrondissement,+Place+L%C3%A9on+Blum,+Paris/108+Boulevard+Suchet,+75016+Paris/@48.8441324,2.299006,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47e66df79e6fe907:0xfea43ce9b2e034ac!2m2!1d2.379506!2d48.8588238!1m5!1m1!1s0x47e67ab147654a6d:0x3792e1ba5fb634d6!2m2!1d2.2608092!2d48.8516986!3e0">
        voiture
      </A>
      , chez la tante de Benjamin, Claire, pour sabrer le champagne et bruncher
      ensemble.
    </Bloc>
    <div className="flex-child--grow py36">
      <img className="wmax360 block mx-auto" src="static/nous-mairie.jpg" />
    </div>
    <div className="align-center dark-fuschia pt36 pb60">
      <div>
        <a
          className="link txt-xl"
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NW1saXE4aGhyZ29ucnY2cHVmYmUzcGRpMW4gZ2ZnNGhzMHQ1ZDVpb2FkZ29yczk1bnE4aWdAZw&tmsrc=gfg4hs0t5d5ioadgors95nq8ig%40group.calendar.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          À vos agendas !
        </a>
      </div>
      <h1 className="big inline-block">Réception</h1>
      <br className="none-ml" />
      <span className="big ml24-ml font-weight200 inline-block">
        20 juin 2020
      </span>
    </div>

    <a className="align-center" href="mailto:nous@sarah-et-benjamin.com">
      ✉️ Contact
    </a>
    {/* Margin at the bottom */}
    <div className="h36" />
  </Page>
);
