import MasonryGrid from "./components/MasonryGrid"
import NavBar from "./components/NavBar"
import Sidebar from "./components/Sidebar"

function App() {

  const contentUrls: {
    type: 'youtube' | 'tweet',
    title: string,
    link: string
  }[] = [
      {
        type: 'youtube',
        title: "This is a youtube video",
        link: 'https://www.youtube.com/embed/fO9xunnaEVc?si=TmFoKMHuC9L10Mrt'
      },
      {
        type: 'tweet',
        title: "This is a tweet",
        link: '1873640495764910145',
      },
      {
        type: 'tweet',
        title: "This is a tweet 2",
        link: '1871543018932814213',
      },
      {
        type: 'youtube',
        title: "This is a youtube video 2",
        link: 'https://www.youtube.com/embed/qB2j5FhfOd4?si=YQHaON29g_h0Yyic',
      },
      {
        type: 'youtube',
        title: "This is a youtube video 2",
        link: 'https://www.youtube.com/embed/qB2j5FhfOd4?si=YQHaON29g_h0Yyic',
      },
      {
        type: 'tweet',
        title: "This is a tweet 3",
        link: '1873621236401779097',
      }

    ];

  return (
    <>
      <section className="bg-gray-200 h-screen flex">
        <Sidebar />
        <div className="h-screen overflow-y-scroll w-full relative">
          <div className="sticky top-0 z-10">
            <NavBar />
          </div>
          <div className="p-4">
            <MasonryGrid items={contentUrls} />
          </div>
        </div>
      </section>
    </>
  )
}

export default App