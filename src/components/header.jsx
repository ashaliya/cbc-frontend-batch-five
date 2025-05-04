
import UserData from "./userData";

export default function Header(){
    console.log("Header component loading...")
    return(
        <div className= "bg-red-500">
            <h1 className="font-bold text-blue-700 text-[300px]">Crystal Beauty clear</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illum ex minus! Dolorum eveniet aspernatur nemo explicabo natus rem reiciendis voluptatum velit dolorem, amet quo labore dolore impedit totam ipsum.</p>
            <UserData></UserData>
        </div>
    )
}