import { Link } from "react-router-dom";
import HomeNavigation from "../components/HomeNavigation";

const Home = () => {
    return (
        <section>
            <div className="fixed w-full top-0">
                <HomeNavigation />
            </div>
            <div className="bg-gray-200 pt-20 container">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold text-center px-48">Organize Your Digital Life and Unlock Your Creative Potential</h1>
                    <div className="py-6 mt-10">

                        <Link to='/signin'>
                            <span className="text-3xl font-semibold bg-yellow-300 px-8 py-2 rounded-xl">Start Building Your Brain </span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 pt-24 container">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold text-center px-48">Organize Your Questions and Answers in a smarter way and Revise them in a Creative Way</h1>
                    <div className="py-6 mt-10">

                        <Link to='/signin'>
                            <span className="text-3xl font-semibold bg-yellow-300 px-8 py-2 rounded-xl">Start Building Questionnaire </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;