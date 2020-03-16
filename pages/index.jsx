import dynamic from "next/dynamic";

import Page from "../layouts/main.js";
import FramedImage from "../components/FramedImage.jsx";
import Logo from "../components/Logo.jsx";
import Bloc from "../components/Bloc.jsx";

export default () => (
  <Page>
    <div className="flex-parent flex-parent--row-reverse-ml flex-parent--row-ml flex-parent--column px36 py36 grid-ml">
      {/* Image */}
      <div className="relative flex-child align-right flex-child--grow viewport-almost">
        <FramedImage src="static/nous-yosemite.jpg" />
        <div className="absolute top left py12 px12">
          <Logo
            stroke="#fff"
            fill="none"
            style={{ height: 60 }}
            className="align-left"
          />
        </div>
      </div>
      {/* white Left space only for large screens */}
      <div
        style={{
          background: "url(/static/frame.png) no-repeat bottom center",
          backgroundSize: "contain"
        }}
        className="relative dark-blue flex-child w360-ml hmin360 w-full px12 py12 flex-parent flex-parent--column flex-parent--center-main flex-parent--center-cross"
      >
        <div
          style={{
            background: "url(/static/frame-top2.png) no-repeat top center",
            backgroundSize: "contain"
          }}
          className="absolute w-full h-full top-0"
        />
        <h1>Sarah et Benjamin</h1>
        <span className="txt-h2 ml24-ml font-weight200 inline-block">
          20 juin 2020
        </span>
      </div>
    </div>
    {/* Intro */}
    <div
      className="mx-auto px36 flex-parent flex-parent--space-between-main flex-parent--center-cross items-center"
      style={{ width: "min(64rem, 90%)" }}
    >
      <div style={{ height: "min-content" }}>
        <p className="pb12">
          Après bientôt 7 ans et une trentaine de sommets, nous avons décidé de
          nous marier&nbsp;!
        </p>
        <p className="pb12">
          Rendez-vous pour le solstice à{" "}
          <span className="dancing-script dark-blue txt-h3">Gien</span>, dans le
          Loiret . Hâte de vous y retrouver&nbsp;!
        </p>
      </div>
      <img className="right w120" src="/static/loiret.png"></img>
    </div>
    {/* Timeline */}
    <div className="align-center medium-blue pt60 pb60">
      <h1 className="big inline-block pt36">Le programme</h1>
      <br className="none-ml" />
      <span className="big ml24-ml font-weight200 inline-block">20 juin</span>
    </div>
    <Bloc
      img="static/gien.jpg"
      mapsLink="https://goo.gl/maps/szGkRGerZ2dNLzsZ7"
      title="Cérémonie"
      time="15h"
      location="Église de Gien"
    >
      Rejoignons-nous pour la célébration qui aura lieu en l'église de Gien
      (Loiret) à 15h.
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
      title="Brunch du dimanche"
      time="13h"
      location="Le Petit Valot"
    >
      Un brunch sera servi le lendemain, n'oubliez-pas vos maillots de
      bain&nbsp;!
    </Bloc>
    {/* Comment s'y rendre */}
    <div className="align-center medium-blue py36">
      <h1 className="big inline-block">Comment s'y rendre ?</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="py12">
        Vous serez nombreux à venir en voiture depuis Paris et ses environs.
        Pour ceux qui ont des places en plus ou qui cherchent un covoiturage,
        vous pouvez partager vos coordonnées sur{" "}
        <a
          className="color-blue link"
          href="https://docs.google.com/spreadsheets/d/1xYlzqVCH16RgttLSRD5BR90mg7lzV3hQADQPSHvKcxw/edit?usp=sharing"
        >
          ce document
        </a>
        . Il y a aussi un{" "}
        <a
          className="link"
          href="https://www.oui.sncf/train/horaires/paris/gien"
        >
          TER
        </a>{" "}
        partant de Paris Bercy vers Gien.
      </p>
      <p className="py12">
        Le samedi soir, nous mettrons des taxis à votre disposition pour vous
        amener aux hôtels des alentours.
      </p>

      <img src="/static/map.png" className="w600 center mx-auto block" />
    </div>

    {/* Logement */}
    <div className="align-center medium-blue py36">
      <h1 className="big inline-block">Où dormir ?</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p>
        Voici une liste de quelques hôtels aux alentours du lieu de
        réception&nbsp;:
      </p>
      <ul className="txt-ul py12">
        <li className="txt-li">
          <a className="color-blue link" href="https://hoteldurivage.com/">
            Hôtel du Rivage
          </a>
          , hôtel mignon en bord de Loire
        </li>
        <li className="txt-li">
          <a
            className="color-blue link"
            href="https://www.domainedesroches-briare.fr/"
          >
            Domaine des Roches
          </a>
          , hôtel de charme avec piscine à 20 minutes de la salle
        </li>
        <li className="txt-li">
          <a className="color-blue link" href="http://www.sanotel-gien.fr/">
            Sanotel
          </a>
          , l'option la plus proche, deux étoiles
        </li>
        <li className="txt-li">
          <a
            className="color-blue link"
            href="https://all.accor.com/hotel/9344/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps"
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

    {/* Logement */}
    <div className="align-center medium-blue py36">
      <h1 className="big inline-block">Que faire dans la région ?</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="py12">
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
    <div className="align-center medium-blue py36">
      <h1 className="big inline-block">D'autres questions&nbsp;?</h1>
    </div>
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
        souhaitée avant le 20 avril 2020.
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
    <div className="align-center medium-blue py36">
      <h1 className="big inline-block">La liste</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="py36">
        Votre présence seule nous comble, mais si vous avez envie de participer
        à notre voyage de noces, nous aurons bientôt un lien vers notre
        cagnotte.
      </p>
    </div>
    {/* Clin d'oil de fin */}
    <div className="flex-child--grow py36">
      <div className="align-center medium-blue pt36 pb60">
        <div>
          <h1 className="big inline-block">À vos agendas</h1>

          <div>
            <a
              href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NDJwZWM0MW5lc3Y4YTZzaGYxYXJxdDFxanUgZ2ZnNGhzMHQ1ZDVpb2FkZ29yczk1bnE4aWdAZw&tmsrc=gfg4hs0t5d5ioadgors95nq8ig%40group.calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn--stroke round">
                ＋ Ajouter l'événement à mon agenda
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
    <a className="align-center" href="mailto:nous@bensarah.fr">
      ✉️ Contact
    </a>
    {/* Margin at the bottom */}
    <div className="h36" />
    <div className="relative">
      <div className="absolute bottom align-center w-full mx36 my36">test</div>
      <img src="/static/footer.png" className="w-full" />
    </div>
  </Page>
);
