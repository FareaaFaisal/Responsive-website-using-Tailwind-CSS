
import Image from "next/image";


export default function About(){
    return(
        <div>
            {/* <Header/> */}
            <br/><br/><br/><br/>
                <h1 className="font-bold sm:text-4xl text-2xl text-black-900 text-center uppercase underline mt-6">About Us<br/></h1><br/>

<p className="text-justify"><span className="font-bold sm:text-2xl text-xl text-black-600 text-left capitalize underline m-3 hover:bg-black hover:text-white">Welcome to Frosted Dreams<br/></span><br/>

<p className="text-sm m-3">At Frosted Dreams, we believe that every celebration deserves a delicious cake. Founded in 2003, our cake shop is dedicated to crafting delightful treats that bring joy to every occasion, from birthdays to weddings and everything in between.</p><br/><br/>



<span className="font-bold sm:text-2xl text-xl text-black-600 text-left capitalize underline m-3 hover:bg-black hover:text-white">Our Mission:<br/></span><br/>

<p className="text-sm m-3">We aim to create beautiful and delicious cakes that not only taste incredible but also make your special moments unforgettable. We take pride in using high-quality ingredients, ensuring each cake is made with love and care.</p><br/><br/>


<span className="font-bold sm:text-2xl text-xl text-black-600 text-left capitalize underline m-3 hover:bg-black hover:text-white">What Makes Us Unique:<br/></span><br/>

<p className="text-sm m-3">What sets Frosted Dreams apart is our commitment to customization. Whether you&apos;re dreaming of a classic chocolate cake, an elegant wedding cake, or a fun themed cake for a childs birthday, we work closely with you to bring your vision to life. Our cakes are not just desserts, they are edible works of art</p><br/><br/>


<span className="font-bold sm:text-2xl text-xl text-black-600 text-left capitalize underline m-3 hover:bg-black hover:text-white">Meet Our Team:<br/></span><br/>

<p className="text-sm m-3">Behind every cake at Frosted Dreams is a dedicated team of bakers and decorators who share a passion for baking. Each member brings their unique skills and creativity to the table, ensuring that every cake is a masterpiece.</p> <br/><br/>
<div className="flex  flex-col space-x-4 gap-x-9 p-7 sm:flex-row">
<div className="border border-gray-300 p-2 ml-4" ><Image src="/chef1.png" alt="Chef Image" width={200}  height={200} /></div>
<div className="border border-gray-300 p-2"><Image src="/chef2picedit.jpg" alt="Chef Image" width={200}  height={200} /></div>
<div className="border border-gray-300 p-2"><Image src="/chef3rep.png" alt="Chef Image" width={200}  height={200} /></div>
</div>
<br/><br/>

<span className="font-bold sm:text-2xl text-lg text-black-600 text-left capitalize underline m-3 text-wrap hover:bg-black hover:text-white">Giving Back to the Community:<br/></span><br/>

<p className="text-sm m-3">We believe in giving back to the community that has supported us. That&apos;s why we actively participate in local events and contribute to charitable causes, helping to spread sweetness beyond our bakery doors.</p><br/><br/><br/><br/></p>
           

        </div>
       
   
    );
};