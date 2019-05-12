import Ligne9 from "./Ligne9.jsx";

export default props => (
  <div className="bg-faintblue flex-parent flex-parent--column flex-parent--row-ml v-full mb60 py18 px18">
    <div
      className="flex-child w-full h240 w360-ml wmin360-ml h240-ml hmin240-ml"
      style={{
        backgroundImage: `url("${props.img}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-48px"
      }}
    />
    <div className="flex-child pt18 pb36 px36 flex-child--grow">
      <h1 className="dark-blue inline-block">{props.title}</h1>
      <span className="inline-block pl24 font-condensed font-weight200 font-size36">
        {props.time}
      </span>
      <div className="pb18">
        <a
          className="link pr6"
          href={props.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          📍{props.location}{" "}
        </a>
        <Ligne9 />
        <span className="pl6">{props.station}</span>
      </div>
      <p>{props.children}</p>
    </div>
  </div>
);
