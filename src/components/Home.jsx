import '../stylesheet/Home.css'
function Home () {
    return <>
        <h1 className='homeText'>Sam Crawford</h1>
        <h2 className='homeText'>Full-Stack Web Developer</h2>
        <div className='technologies'>
            <img className='techPics' src="../../javascript.svg" alt="JavaScript" />
            <img className='techPics' src="../../css-3.svg" alt="CSS" />
            <img className='techPics' src="../../html-5.svg" alt="HTML" />
            <img className='techPics' src="../../mongodb.svg" alt="MongoDB" />
            <img className='techPics' src="../../express.svg" alt="Express" />
            <img className='techPics' src="../../nodejs.svg" alt="Node" />
            <img className='techPics' src="../../react.svg" alt="React" />
        </div>
    </>
}
export default Home