import { PiCoinsBold } from "react-icons/pi";
import { BiSolidWallet } from "react-icons/bi";

interface CardLeft{
 
    title : string, 
    description: string , 
    buttonText : string,
    showIcons?:boolean,
    showIcons2?:boolean,




}



export default function CardLeft({title, description, buttonText,showIcons,showIcons2}:CardLeft) {
  return (
    <div className="card lg:card-side bg-gray-400 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{showIcons && <PiCoinsBold size={30}  />} {showIcons2 && <BiSolidWallet size={30}  />} {title}</h2>
      <div className="flex justify-between text-sm">
                  <h1>Day: <span>22.10</span></h1>
                  <h1>Month: <span>$560.2</span></h1>
                  <h1>Year: <span>$7640.2</span></h1>
                </div>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div>
  );


}







