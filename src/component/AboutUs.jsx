import UserClass from "./ClassCompo";

const AboutUs = () => {

    return(

        <>

        <h1 className="text-4xl font-bold text-center">
            THis is About us page
        </h1>

        <UserClass name={"Darshan, this is class based component"}/>
        </>

    );

}

export default AboutUs;