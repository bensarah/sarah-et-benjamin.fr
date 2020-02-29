import A from "./ExternalLink";

export default props => (
  <div
    className="flex-parent flex-parent--column flex-parent--row-ml v-full mb60 py18 px18"
    style={{
      backgroundImage:
        "linear-gradient(120deg, rgb(217, 229, 255), rgb(242, 245, 251), #fff4f8)"
    }}
  >
    <div
      className="flex-child w-full h240 w360-ml wmin360-ml h240-ml hmin240-ml shadow-darken10"
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
        <A href={props.mapsLink}>📍{props.location} </A>
        <br className="pl6 none-mxl" />
      </div>
      <p>{props.children}</p>
    </div>
  </div>
);
