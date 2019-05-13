import Page from "../layouts/main.js";
import FramedImage from "../components/FramedImage.jsx";
import Logo from "../components/Logo.jsx";
import Bloc from "../components/Bloc.jsx";

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
        ce 6 juillet 2019. On a hâte de vous avoir avec nous !
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
      time="10h30"
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
      Nous nous rendrons ensuite, en métro ou voiture, chez la tante de
      Benjamin, Claire, pour sabrer le champagne et bruncher ensemble.
    </Bloc>
    <div className="flex-child--grow py36">
      <img className="wmax360 block mx-auto" src="static/nous-mairie.jpg" />
    </div>
    <div className="align-center dark-fuschia pt36 pb60">
      <div>
        <a
          className="link txt-xl"
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NnM2NGp1ZTJ0YzFzZjB1bmY3bXBhYmF0ZDYgYmVuamFtaW4udGRtQG0&tmsrc=benjamin.tdm%40gmail.com"
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

    <a className="align-center" href="mailto:contact@escapades.voyage">
      ✉️ Contact
    </a>
    {/* Margin at the bottom */}
    <div className="h36" />
  </Page>
);
