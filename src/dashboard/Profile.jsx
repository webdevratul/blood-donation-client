import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(authContext);
    return (
        <div className="w-[100%] md:w-[50%] lg:[60%] xl:w-[82%]">
            <div className="w-[400px] bg-yellow-50 my-20 rounded-lg shadow-lg cursor-pointer p-4 mx-auto">
                <div className="my-6">
                    <div className="w-[100px] h-[100px] mx-auto mb-4">
                        <img className="w-[100%] h-[100px] border-4 border-yellow-600 rounded-full object-cover" src={user.photoURL} alt="" />
                    </div>
                    <div className="text-center">
                        <h2><span className="font-bold">Name:</span> {user.displayName}</h2>
                        <h2 className="my-4"><span className="font-bold">E-mail:</span> {user.email}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;