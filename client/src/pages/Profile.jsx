import { useSelector } from "react-redux";
import { useRef, useState } from "react";

export default function Profile() {
  const fileRef = useRef(null)
  const { currentUser } = useSelector((state) => state.user);
  const [file,setFile] = useState(undefined);
  console.log(file);
  
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file"  ref={fileRef} hidden accept="image/*" 
          onChange={(e)=> setFile(e.target.files[0])}
          />
        <img onClick={ () => fileRef.current.click() }
          className="rounded-full h-24 w-24 object-cover cursor-pointer
        self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-500 text-white rounded-lg p-3 uppercase
        hover:opacity-95 disabled:opacity-88" >update</button>
      </form>
      <div className="flex justify-between mt-5" >
          <span className="text-red-700 cursor-pointer" >Delete account</span>
          <span className="text-red-700 cursor-pointer" >Sign out</span>

      </div>
    </div>
  );
}
