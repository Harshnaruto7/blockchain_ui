import {Navbar,Card} from "./index"


export default function Main() {
  return (
    <div>

      {/* <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card rounded-box place-items-center">
          <Navbar />
          <div className=" grid justify-items-center... ">
        
          </div>
          
        </div>
        <div className="divider lg:divider-horizontal">OR</div> 
      
        <div className="grid flex-grow h-32 card rounded-box place-items-center ">

         
          <div className=" flex flex-col grow gap-10 mt-20 ">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <br></br>
          </div>
     




        </div>
      </div> */}


<div className="flex flex-col lg:flex-row w-full min-h-screen">
  <div className="flex flex-col w-full lg:w-1/2 h-full overflow-auto">
    <div className="w-full text-center py-4 sticky top-0 bg-white z-10">
      <Navbar />
      <div className=" flex flex-col  gap-5 mt-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>

      </div>
    </div>
    <div className="flex flex-col items-center justify-center flex-grow overflow-auto">
      {/* Your left side content here */}
    </div>
  </div>
  <div className="flex flex-col w-full lg:w-1/2 h-full overflow-auto">
    {/* Adjustments for right side content for better mobile view */}
    <div className="flex flex-col items-center justify-center flex-grow space-y-4 lg:space-y-10 mt-4 lg:mt-20 p-4 lg:p-0 overflow-auto">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</div>









    </div>
  );
}
