// import { useState } from "react";
// import "./Card.css"

// const Card = ({ languages }) => {
//     const [isClicked, setIsClicked] = useState(true);
//     return (
//         <div className="cardSection">
//             {languages.map((item) => {
//                 const { name, img, options } = item;
//                 return (
//                     <>
//                         {isClicked && <div className="cardItem" onClick={()=> setIsClicked(!isClicked)}>
//                             <img src={img} alt={name} width="130" height="auto" />
//                             <h2>{name}</h2>
//                         </div>}

//                         {!isClicked && <div className="cardItem" onClick={()=> setIsClicked(!isClicked)}>
//                             <ul>
//                                 {options.map((e)=>{
//                                     return <li>{e}</li>
//                                 })}
//                             </ul>
//                         </div>}


//                     </>
//                 )
//             })}
//         </div>
//     )
// }

// export default Card

// import { useState } from "react";

import "./Card.css"
const Card = ({ languages }) => {
    const itemDisplay = (e) => {
        if (e.target.closest(".firstChild") != null) {
            e.target.closest(".firstChild").style.display = "none";
            e.target.closest(".cardItem").lastElementChild.style.display = "block";
        }

    }

    const listDisplay = (e) => {
        e.target.closest(".cardList").style.display = "none";
        e.target.closest(".cardItem").firstElementChild.style.display = "block";
    }

    return (
        <div className="cardSection">
            {languages.map((item, index) => {
                const { name, img, options } = item;
                return (
                    <div key={index}>
                        <div className="cardItem" onClick={itemDisplay} >
                            <div className="firstChild">
                                <img src={img} alt={name} width="130" height="auto" />
                                <h2>{name}</h2>
                            </div>
                            
                            <div className="cardList" onClick={listDisplay}>
                                <ul>
                                    {options.map((e, i) => {
                                        return <li key={i}>{e}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card