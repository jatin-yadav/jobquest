import { useNavigate } from "react-router-dom";
import HomeNavigation from "../components/HomeNavigation";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const { addcurrentDashboard } = useAuth();
    const navigate = useNavigate();

    const buldingClicked = (type: string) => {
        addcurrentDashboard(type)
        navigate('/signin')
    }
    return (
        <section>
            <div className="fixed w-full top-0">
                <HomeNavigation />
            </div>
            <div className="bg-gray-200 pt-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold text-center px-48">Organize Your Digital Life and Unlock Your Creative Potential</h1>
                    <div className="py-5 mt-8">
                        <button className="text-3xl font-semibold bg-yellow-300 px-8 py-2 rounded-xl" onClick={() => { buldingClicked('braindashboard') }}>Start Building Your Brain</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 pt-20">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl font-bold text-center px-48">Organize Your Questions and Answers in a smarter way and Revise them in a Creative Way</h1>
                    <div className="py-5 mt-8">
                        <button className="text-3xl font-semibold bg-yellow-300 px-8 py-2 rounded-xl" onClick={() => { buldingClicked('questionnairedashboard') }}>Start Building Questionnaire</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Home;