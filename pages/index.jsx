import Page from "../layouts/main.js";
import FramedImage from "../components/FramedImage.jsx";
import Logo from "../components/Logo.jsx";
import Bloc from "../components/Bloc.jsx";
import A from "../components/ExternalLink";

export default () => (
  <Page>
    <div className="flex-parent flex-parent--row-reverse-ml flex-parent--row-ml flex-parent--column px36 py36 grid-ml viewport-almost-ml">
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
          background: "url(/static/eucalyptus.jpg) no-repeat center center",
          backgroundSize: "cover"
        }}
        className="dark-blue flex-child w360-ml hmin180 w-full px12 py12 flex-parent flex-parent--column flex-parent--center-main flex-parent--center-cross"
      >
        <h1>Sarah & Benjamin</h1>
        <span className="txt-h2 ml24-ml font-weight200 inline-block">
          20 juin 2020 à Gien
        </span>
      </div>
    </div>
    {/* Timeline */}
    <div className="align-center dark-green pt36 pb60">
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
      Un brunch sera servi le lendemain, n'oubliez-pas vos maillots de bain !
    </Bloc>
    {/* Comment s'y rendre */}
    <div className="align-center dark-green py36">
      <h1 className="big inline-block">Transports</h1>
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
    </div>

    {/* Logement */}
    <div className="align-center dark-green py36">
      <h1 className="big inline-block">Où dormir ?</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p>
        Voici une liste de quelques hôtels aux alentours du lieu de réception:
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
        si vous voulez nos conseils pour choisir un hébergement !
      </p>
    </div>

    {/* Logement */}
    <div className="align-center dark-green py36">
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
        pont-canal métallique du monde !
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
    <div className="align-center dark-green py36">
      <h1 className="big inline-block">D'autres questions ?</h1>
    </div>
    <div className="mx-auto px36" style={{ width: "min(64rem, 90%)" }}>
      <p className="txt-bold pb12">
        Y aura-t-il des babysitters pour les enfants ?
      </p>
      <p className="pb36">
        Nous prévoyons une salle et des babysitters pour les enfants.
        Prévenez-nous pour que nous puissions prévoir combien ils seront !
      </p>

      <p className="txt-bold pb12">
        Quand vous dire que nous serons présents ?
      </p>
      <p className="pb36">
        Vous serez des nôtres ? Bonne nouvelle ! Votre réponse est souhaitée
        avant le 20 avril 2020.
      </p>
      <p className="txt-bold pb12">Comment vous contacter ?</p>
      <p className="pb36">
        Écrivez-nous des mots doux ;)
        <ul className="txt-ul py12">
          <li className="txt-li">
            <strong>S</strong>: 0768762623, sarah@bensarah.fr
          </li>
          <li className="txt-li">
            <strong>B</strong>: 0767230974, ben@bensarah.fr
          </li>
        </ul>
      </p>
    </div>

    {/* Liste */}
    <div className="align-center dark-green py36">
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
      <div className="align-center dark-green pt36 pb60">
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
  </Page>
);
