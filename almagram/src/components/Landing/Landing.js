import "./Landing.css";
import Image from './landingImg.png';


const Landing = () => {
  return (
    <div className="landing">
      <div className="frame-div">
        <img
          className="illustration-scene-plants-sa"
          alt=""
          src={Image}
        />
        <div className="almagram-div">Almagram</div>
        <div className="frame-div1">
          <div className="get-started-div">GET STARTED!</div>
        </div>
        <div className="frame-div2">
          <div className="back-to-where-it-began">
            <p className="back-to-where">Back to where</p>
            <p className="it-began">{`it began  `}</p>
          </div>
          <div className="llorem-ipsum-dolor-sit-amet-c">
            <p className="back-to-where">
              lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mattis tincidunt purus,gdggwygdyhgwhdgh dhwveydvwtedhcegdw
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
