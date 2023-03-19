import { useState } from "react";
function Card({ id, name, info, price, image ,removetour}) {
    const [Readmore, setReadmore] = useState(false);

    function readMorehandler() {
         setReadmore(!Readmore);
    }

    return (<div className="container" >
        <img src={image} className="imgContainer" />
        <p className="price">{price}</p>
        <p className="name">{name}</p>
        <p>{Readmore ? info : info.substring(0, 200)+`...`} <span className="spantag" onClick={readMorehandler}>{Readmore ? `show less` : `Read More`}</span></p>
        <button className="btn-red" onClick={()=>removetour(id)}>Not Interested</button>
    </div>);
}
export default Card;