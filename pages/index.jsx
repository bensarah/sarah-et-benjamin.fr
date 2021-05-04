import dynamic from "next/dynamic";

import Page from "../layouts/main.js";
import FramedImage from "../components/FramedImage.jsx";
import Logo from "../components/Logo.jsx";
import Bloc from "../components/Bloc.jsx";

const Title = (props) => (
  <div className="align-center medium-blue py36">
    <h1 className="big inline-block">{props.children}</h1>
  </div>
);

const Subtitle = (props) => (
  <div className="align-center medium-blue pt36 pb24 mg-custom">
    <h2 className="px24" style={{ color: "#325CC6" }}>
      {props.children}
    </h2>
  </div>
);

export default () => (
  <Page>
    <div className="flex-parent flex-parent--row-reverse-ml flex-parent--row-ml flex-parent--column px36-ml py36-ml grid-ml">
      {/* Image */}
      <div className="relative flex-child align-right flex-child--grow viewport-almost-ml viewport-full px36 py36 px0-ml py0-ml">
        <FramedImage src="static/nous-yosemite.jpg" />
        <div className="absolute top left py12-ml px12-ml px60 py60">
          <Logo
            stroke="#fff"
            fill="none"
            style={{ height: 60 }}
            className="align-left"
          />
        </div>
      </div>
      <div
        style={{
          background: "url(/static/frame.png) no-repeat bottom center",
          backgroundSize: "contain",
        }}
        className="my36 my0-ml relative dark-blue flex-child w360-ml hmin360 w-full px12 py12 flex-parent flex-parent--column flex-parent--center-main flex-parent--center-cross"
      >
        <div
          style={{
            background: "url(/static/frame-top2.png) no-repeat top center",
            backgroundSize: "contain",
          }}
          className="absolute w-full h-full top-0"
        />
        <h1 className="dancing-script txt-h1">Sarah et Benjamin</h1>
        <p className="pt24 txt-h2 font-light inline-block">14 juillet 2021</p>
      </div>
    </div>
    {/* Intro */}
    <div
      className="mx-auto px36 flex-parent flex-parent--space-between-main flex-parent--center-cross items-center pt24 pb36"
      style={{ width: "min(64rem, 100%)" }}
    >
      <div style={{ height: "min-content" }}>
        <p className="pb12">
          Après bientôt 7 ans, 2 reports et une trentaine de sommets, on va se marier&nbsp;! 🤞
        </p>
        <p className="pb12">
          Rendez-vous pour la messe à <span className="txt-bold dark-blue">Briare</span> proche de Gien dans le Loiret, pour faire la fête toute la nuit. Hâte de vous y retrouver
          😘
        </p>
      </div>
      <img className="right w120" src="/static/loiret.png"></img>
    </div>
    {/* Timeline */}
    <div style={{ backgroundColor: "#f5fafd" }}>
      <div className="align-center medium-blue pt60 pb60">
        <h1 className="big inline-block">Le programme</h1>
        <br className="none-ml" />
        <span className="big ml24-ml font-weight200 inline-block">
          14 juillet
        </span>
      </div>
      <Bloc
        img="static/briare.jpg"
        mapsLink="https://goo.gl/maps/rAbkDYm4dAX2moD9A"
        title="Cérémonie"
        time="14h"
        location="Église de Briare"
      >
        Rejoignons-nous pour la célébration qui aura lieu en l'église de Briare.
      </Bloc>
      <Bloc
        img="static/petit-valot-salle.jpg"
        mapsLink="https://goo.gl/maps/Hv56pXD4TbgwHC1RA"
        title="Cocktail et dîner"
        time="17h30"
        location="Le Petit Valot"
      >
        Nous nous rendrons ensuite au Petit Valot pour le cocktail, dîner, et
        danser jusqu'au petit matin.
      </Bloc>

      <Bloc
        img="static/petit-valot.jpg"
        mapsLink="https://goo.gl/maps/Hv56pXD4TbgwHC1RA"
        title="Brunch du jeudi"
        time="13h"
        location="Le Petit Valot"
      >
        Un brunch sera servi le lendemain. Pas mal pour un jeudi.
        <br />
        Prenez vos maillots pour profiter de la piscine !
      </Bloc>
    </div>
    {/* Comment s'y rendre */}
    <Title>Questions pratiques</Title>
    <Subtitle>Comment s'y rendre&nbsp;?</Subtitle>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="py12">
        🚗 Vous serez nombreux à venir en voiture depuis Paris et ses environs.
        <br />
        <div className="pl24-ml">
          Pour ceux qui ont des places en plus ou qui cherchent un covoiturage,
          vous pouvez partager vos coordonnées sur{" "}
          <a
            className="color-blue link"
            href="https://docs.google.com/spreadsheets/d/1xYlzqVCH16RgttLSRD5BR90mg7lzV3hQADQPSHvKcxw/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            ce document.
          </a>
        </div>
        <br />
        🚈 Il y a aussi un{" "}
        <a
          className="link"
          href="https://www.oui.sncf/train/horaires/paris/briare"
          target="_blank"
          rel="noopener noreferrer"
        >
          TER
        </a>{" "}
        partant à 09h11 de Paris Bercy vers Briare (le prochain à 14h01 fait
        arriver après la cérémonie).
      </p>
      <p className="py12">
        🚴🏻‍♀️ Les plus chevronnés peuvent également venir en vélo.
      </p>
      <p className="py12">
        🚕 Le mercredi soir, nous mettrons des taxis à votre disposition pour vous
        amener aux hôtels des alentours.
      </p>

      <img
        src="/static/map.png"
        style={{ width: 750, maxWidth: "80%" }}
        className="center mx-auto block pt24"
      />
    </div>

    {/* Logement */}
    <Subtitle>Où dormir&nbsp;?</Subtitle>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p>
        Voici une liste de quelques hôtels aux alentours du lieu de
        réception&nbsp;:
      </p>
      <ul className="txt-ul py12">
        <li className="txt-li">
          <a
            className="color-blue link"
            href="https://hoteldurivage.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hôtel du Rivage
          </a>
          , hôtel mignon en bord de Loire
        </li>
        <li className="txt-li">
          <a
            className="color-blue link"
            href="https://www.domainedesroches-briare.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Domaine des Roches
          </a>
          , hôtel de charme avec piscine à 20 minutes de la salle et situé
          proche de l'Église.
        </li>
        <li className="txt-li">
          <a
            className="color-blue link"
            href="http://www.sanotel-gien.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanotel
          </a>
          , l'option la plus proche, deux étoiles
        </li>
        <li className="txt-li">
          <a
            className="color-blue link"
            href="https://all.accor.com/hotel/9344/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibis Gien
          </a>
          , le bon plan
        </li>
      </ul>
      <p>
        Le Petit Valot n'autorise malheureusement pas les tentes. Contactez-nous
        si vous voulez nos conseils pour choisir un hébergement&nbsp;!
      </p>
    </div>

    {/* Activities */}
    <Subtitle>Que faire dans la région&nbsp;?</Subtitle>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="pb12">
        <strong>Les bords de Loire</strong> à Gien sont très agréables en été.
        Les alentours du château offrent une belle vue sur le fleuve. Si vous
        avez un peu de temps, la ville est à moins d'une heure en voiture de{" "}
        <strong>Sancerre</strong>, dont le vignoble est réputé.
      </p>
      <p className="py12">
        Il y aurait des amateurs de ponts parmi nos invités, qui seront étonnés
        d'apprendre qu'on trouve à <strong>Briare</strong> le plus long
        pont-canal métallique du monde&nbsp;!
      </p>
      <img
        className="h240 center mx-auto block "
        draggable={false}
        src="/static/pont-canal.jpg"
      />
      <p className="py12">
        La belle centrale de <strong>Dampierre</strong> se visite quant à elle
        tous les jours de semaine à 15h.
      </p>
    </div>

    {/* QA */}
    <Subtitle>Autres questions</Subtitle>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="txt-bold pb12">
        Y aura-t-il des babysitters pour les enfants&nbsp;?
      </p>
      <p className="pb36">
        Nous prévoyons une salle et des babysitters pour les enfants.
        Prévenez-nous pour que nous puissions prévoir combien ils seront&nbsp;!
      </p>

      <p className="txt-bold pb12">
        Quand vous dire que nous serons présents&nbsp;?
      </p>
      <p className="pb36">
        Vous serez des nôtres&nbsp;? Bonne nouvelle&nbsp;! Votre réponse est
        souhaitée avant le 14 juin 2021.
      </p>
      <p className="txt-bold pb12">Comment vous contacter&nbsp;?</p>
      <p className="pb36">
        Écrivez-nous des mots doux ;)
        <ul className="txt-ul py12">
          <li className="txt-li">
            <strong>S</strong> : 0768762623, sarah@bensarah.fr
          </li>
          <li className="txt-li">
            <strong>B</strong> : 0767230974, ben@bensarah.fr
          </li>
        </ul>
      </p>
    </div>

    {/* Liste */}
    <div style={{ backgroundColor: "#f5fafd" }}>
      <div className="align-center medium-blue pt36 pb60">
        <h1 className="big inline-block">La liste</h1>
      </div>

      <Bloc
        img="static/tian-shan.jpg"
        mapsLink="https://goo.gl/maps/gELoca5hoDPPXf9M6"
        title="Voyage de Noces"
        time=""
        location="Asie Centrale"
      >
        Si vous voulez participer à notre voyage de noces, voici&nbsp;
        <a
          className="color-blue link"
          href="https://paypal.me/pools/c/8rch9OpG2p"
          target="_blank"
          rel="noopener noreferrer"
        >
          un lien vers une cagnotte
        </a>
        . <br />
        Si cela est possible, nous aimerions aller faire de la randonnée dans le
        Tian Shan, en Asie Centrale 🏕.
      </Bloc>
    </div>
    {/* Clin d'œil de fin */}
    <div className="flex-child--grow py36">
      <div className="align-center medium-blue pt36 pb60">
        <div>
          <h1 className="big inline-block">À vos agendas</h1>

          <div className="pt36">
            <a
              href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MWEzOXU2bGRiNTQ0NTBjOTdsdWZlaXRwOWsga25idGg4c29jMGRhaGJmMHMxZGppcTJuODhAZw&tmsrc=knbth8soc0dahbf0s1djiq2n88%40group.calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="pointer btn btn--stroke round">
                ＋ Ajouter l'événement à mon calendrier
              </button>
            </a>
          </div>
        </div>
      </div>
      <img
        className="wmax360 block mx-auto"
        src="static/nous-6-juil.jpg"
        alt="Oui on se marie pour la deuxième fois, et alors ?"
      />
    </div>
    {/* Margin at the bottom */}
    <div className="h36" />
    <div className="relative">
      <div className="absolute bottom align-center w-full my36">
        <div className="mb12">
          <a className="align-center" href="mailto:nous@bensarah.fr">
            ✉️ Contact
          </a>
        </div>
        <span className="txt-m">Made with love in confinement · © 2021</span>
      </div>
      <img src="/static/footer.png" className="w-full mb60 mb0-ml" />
    </div>
  </Page>
);
