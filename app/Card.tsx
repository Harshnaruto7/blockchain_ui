import { LiaEthereum } from "react-icons/lia";
import { SiBitcoinsv } from "react-icons/si";
import { SiMonero } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";


interface CardProp{
 
  title : string, 
  description: string , 
  description2: string , 
  buttonText : string,
  showIcons?: boolean; // Corrected prop name
  value:string,
  showIcons2?:boolean
  showIcons3?:boolean

}




export default function Card({title, description, buttonText,showIcons,value,showIcons2,showIcons3,description2}:CardProp){

  return(

   <div>


<div className="card lg:card-side bg-gray-400 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <progress className="progress progress-warning w-56" value={value} max="100"></progress>
      <p>{description}<span className="mx-10">{description2}</span></p>
      
      <div className="card-actions justify-start">
      {showIcons && <LiaEthereum size={50}  />} {/* Correctly conditionally render the icon */}
      {showIcons2 && <SiBitcoinsv size={50}  />} {/* Correctly conditionally render the icon */}
      {showIcons3 && <SiMonero size={50} />} {/* Correctly conditionally render the icon */}
        {/* <button className="btn btn-primary">{buttonText}</button> */}
        <h1>10.2410245836 ETH</h1>
      </div>
      <div className=" flex justify-end">
      <BsThreeDotsVertical />
      </div>
    </div>
  </div>



   </div>

  );


}


































