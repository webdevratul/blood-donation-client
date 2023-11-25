import { Link } from "react-router-dom";



const Login = () => {

    return (
        <>
            <div className="hero bg-base-200 py-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 font-serif">
                                <button className="btn bg-[#EA062B] mb-2 text-white text-xl">Login</button>
                                <button className="btn  mb-2 bg-[#111111] border-none text-xl text-white">Login With Google</button>
                            </div>
                            <p>If you are new in this website please <Link to="/register" className="underline text-blue-600 text-xl">Register</Link>  </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;



