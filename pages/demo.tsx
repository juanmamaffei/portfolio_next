
export default function Demo ({blur}) {
    return(
        <video autoPlay muted loop className={`video ${blur}`}>         
            <source src="/videos/bg2.mp4" type="video/mp4"/>       
        </video>
    )
}