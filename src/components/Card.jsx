import "../style/card.css"


const Card = ({ data }) => {
  
    //console.log("inside card component: ", data);
    return (
      <div className="card">
        <button>{data.title}</button>
        
      </div>
    );
  };
  export default Card;


