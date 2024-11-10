import Image from "next/image";

export default async function Fee(){
    await new Promise((resolve)=>{
        setTimeout(resolve, 5000)
    }

    )
    return(
        <div className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/myim5.jpg)" }}

        >
            

            <p className="text-center text-black font-bold text-sm">Our fee structure varies depending upon the student's grades.</p>
            <p className="text-center text-black">Kindly enter your grades below:</p>
            <div className="flex justify-center">
    <input type="text" className="border p-2 rounded text-center text-black" />
</div>



        </div>
    )
}





