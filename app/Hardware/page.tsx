import { Navbar,Card,CardLeft } from "../components/index"

export default function Hardware(){

    return(

<div>

<div className="flex flex-col lg:flex-row w-full min-h-screen">
  <div className="flex flex-col w-full lg:w-1/2 h-full overflow-auto">
    <div className="w-full text-center py-4 sticky top-0 bg-white z-10">
      <Navbar />
      <div className=" flex flex-col  gap-5 mt-5">
      <CardLeft 
              title="First Album" 
              description="Click the button to listen on Spotiwhy app." 
              buttonText="Listen" 
            />
            <CardLeft 
              title="Second Album" 
              description="Explore the new hits of 2024." 
              buttonText="Explore" 
            />
            <CardLeft
              title="Third Album" 
              description="Dive into the classics." 
              buttonText="Dive In" 
            />
        
        

      </div>
    </div>
    <div className="flex flex-col items-center justify-center flex-grow overflow-auto">
      {/* Your left side content here */}
    </div>
  </div>
  <div className="flex flex-col w-full lg:w-1/2 h-full overflow-auto ">
    {/* Adjustments for right side content for better mobile view */}
    <div className="flex flex-col items-center justify-center flex-grow space-y-4 lg:space-y-10 mt-4 lg:mt-8 p-4 lg:p-0 overflow-auto">
    <Card 
              title="$72.10/week" 
              description="Mining:0xafoe502..." 
              description2="Minimum payout:$82.27" 
              buttonText="Listen"
              showIcons={true} // Correct prop usage
              value="30"
            />
            <Card 
              title="$72.10/week" 
              description="Mining:0xafoe502..." 
              description2="Minimum payout:$82.27" 
              buttonText="Explore"  
              value="70"
              showIcons2={true}
            />
            <Card 
              title="$72.10/week" 
              description="Mining:0xafoe502..." 
              description2="Minimum payout:$82.27" 
              buttonText="Dive In"
              value="90" 
              showIcons3={true}
            />
    </div>
  </div>
</div>

    </div>
                







    );






}






































