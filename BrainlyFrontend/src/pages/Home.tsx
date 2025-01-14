import HomeNavigation from "../components/HomeNavigation";

const Home = () => {
    return (
        <section>
            <HomeNavigation openModel={() => { }} />
            <h1>Home page</h1>
            <p>This route has public access.</p>
        </section>
    );
};
export default Home;