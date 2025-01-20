import { useState } from "react";
import AddQuestionModal from "../components/AddQuestionModal"
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

const QuestionnaireDashboard = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AddQuestionModal open={open} onClose={() => setOpen(false)} />
            <section className="bg-gray-200 h-screen flex">
                <Sidebar />
                <div className="h-screen overflow-y-scroll w-full relative">
                    <div className="sticky top-0 z-10">
                        <NavBar openModel={() => setOpen(true)} />
                    </div>
                    <div className="p-4">
                        {/* <MasonryGrid items={contents} /> */}
                        QuestionnaireDashboard
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuestionnaireDashboard