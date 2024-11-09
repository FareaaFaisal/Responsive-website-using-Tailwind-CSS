import Image from "next/image";


export default function Branches(){
    return(
        <div>
            {/* <Header/> */}
            <br/><br/><br/><br/>
                <h1 className="font-bold sm:text-4xl text-2xl text-black-900 text-center uppercase underline mt-6">Our Branches<br/></h1><br/>


<div className="flex space-x-4 gap-x-9 p-7 justify-center sm:justify-normal">
<div className="border border-gray-300 p-2"><Image src="/branch.png" alt="Chef Image" width={200}  height={200} /></div></div>
            {/* <Footer/> */}
        </div>
     
    );
};