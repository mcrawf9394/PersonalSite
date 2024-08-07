import '../stylesheet/Contact.css'
function Contact () {
    return <>
        <h1>I can be reached in the following ways</h1>
        <div className='buttonContainer'>
            <a href="https://linkedin.com/in/michael-crawford-345aa3294" target="_blank" rel="noopener noreferrer">
                <img className='icons' src="../../linkedin-icon.svg" alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/mcrawf9394" target='_blank' rel="noopener noreferrer">
                <img className='icons' src="../../github-icon.svg" alt="Github Icon" />
            </a>
        </div>
    </>
}
export default Contact