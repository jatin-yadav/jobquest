// import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom';
import MasonryGrid from '../components/MasonryGrid'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

// const contentUrls: {
//     type: 'youtube' | 'tweet',
//     title: string,
//     link: string
//     _id: string
// }[] = [
//         {
//             type: 'youtube',
//             title: "This is a youtube video",
//             link: 'https://www.youtube.com/embed/fO9xunnaEVc?si=TmFoKMHuC9L10Mrt',
//             _id: '1'
//         },
//         {
//             type: 'tweet',
//             title: "This is a tweet",
//             link: '1873640495764910145',
//             _id: '1'
//         },
//         {
//             type: 'tweet',
//             title: "This is a tweet 2",
//             link: '1871543018932814213',
//             _id: '1'
//         },
//         {
//             type: 'youtube',
//             title: "This is a youtube video 2",
//             link: 'https://www.youtube.com/embed/qB2j5FhfOd4?si=YQHaON29g_h0Yyic',
//             _id: '1'
//         },
//         {
//             type: 'youtube',
//             title: "This is a youtube video 2",
//             link: 'https://www.youtube.com/embed/qB2j5FhfOd4?si=YQHaON29g_h0Yyic',
//             _id: '1'
//         },
//         {
//             type: 'tweet',
//             title: "This is a tweet 3",
//             link: '1873621236401779097',
//             _id: '1'
//         }
//     ];

const SharedBrain = () => {
    const [contents, setContents] = useState([]);

    const paramsid = useParams().id;

    const getContent = async () => {
        try {

            const response = await axios.get(`${BACKEND_URL}/api/v1/share/${paramsid}`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            setContents(response?.data?.data?.contentData)
        } catch (error) {
            alert(error)
            setContents([])
        }
    }

    useEffect(() => {
        getContent()
        const interval = setInterval(() => {
            getContent()
        }, 60 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <div className="h-screen overflow-y-scroll w-full relative">
            <div className="sticky top-0 z-10">
                {/* <NavBar openModel={() => setOpen(true)} /> */}
            </div>
            <div className="p-4">
                <MasonryGrid items={contents} />
            </div>
        </div>
    )
}

export default SharedBrain