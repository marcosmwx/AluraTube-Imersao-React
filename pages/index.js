import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
       
    };

   

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
               
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    
                </Timeline>
            </div>
        </>
    );
}

export default HomePage



const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 150px;
        padding: 16px 32px;
        gap: 16px;
        background-image:url("https://images.wallpaperscraft.com/image/single/mask_totem_smoke_192795_1366x768.jpg");
        
    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div style={{color:"#FFFF"}}>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.sub}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(Props) {
    
    const playlistNames = Object.keys(Props.playlists);
   
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = Props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}