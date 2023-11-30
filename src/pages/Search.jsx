import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const Search = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: district = [] } = useQuery({
        queryKey: ['district'],
        queryFn: async () => {
            const res = await axiosSecure.get('/district');
            return res.data;
        },
    });

    const { data: upazila = [] } = useQuery({
        queryKey: ['upazila'],
        queryFn: async () => {
            const res = await axiosSecure.get('/upazila');
            return res.data;
        },
    });

    const handleSearchDonor = async (e) => {
        e.preventDefault();

    };

    return (
        <div className="w-[100%] bg-[#E3E3E3] py-24">
            <div className="w-[100%] xl:w-[60%] mx-auto">
                <h2 className="text-4xl font-bold pb-8 text-center text-gray-500">
                    If needed Search Donor
                </h2>
                <form className="w-[82%] mx-auto" onSubmit={handleSearchDonor}>
                    {/* Blood Group dropdown */}
                    <select
                        className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2"
                        name="bloodGrp"
                        required
                    >
                        {/* ... options for blood group */}
                        <option value="district">Select Blood Group</option>
                        <option value="district">A+</option>
                        <option value="district">B+</option>
                        <option value="district">A-</option>
                        <option value="district">B-</option>
                        <option value="district">AB+</option>
                        <option value="district">AB-</option>
                        <option value="district">O+</option>
                        <option value="district">O-</option>
                    </select>

                    {/* Recipient Donner E-mail input */}
                    <small className="m-2 text-gray-400">Donner E-mail*</small>
                    <input
                        className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2"
                        type="email"
                        name="recipientDonnerEmail"
                    />

                    {/* District dropdown */}
                    <small className="m-2 text-gray-400">District*</small>
                    <select
                        className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2"
                        name="district"
                        required
                    >
                        <option value="district">Select District</option>
                        {district?.map((district, idx) => (
                            <option key={idx} value={district.name}>
                                {district.name}
                            </option>
                        ))}
                    </select>

                    {/* Upazila dropdown */}
                    <small className="m-2 text-gray-400">Upazila*</small>
                    <select
                        className="w-[100%] h-10 bg-white outline-none rounded-md m-2 px-2"
                        name="upazila"
                        required
                    >
                        <option value="upazila">Select Upazila</option>
                        {upazila?.map((upazila, idx) => (
                            <option key={idx} value={upazila.name}>
                                {upazila.name}
                            </option>
                        ))}
                    </select>

                    {/* Submit button */}
                    <input
                        className="w-[100%] h-10 outline-none rounded-md m-2 px-2 bg-[#EA062B] text-white text-xl font-semibold cursor-pointer"
                        type="submit"
                        value="Search Donor"
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;
