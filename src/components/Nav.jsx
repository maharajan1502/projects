// let size = 200
import './style.css'
import Form from './Form';
function Navbar() {

    return (<>
        
        
        <nav><h1> MM Sales</h1>
            <ul>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Sales</a></li>
                <li><a href="#Contacts">Contacts</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </span>
        </nav>
        <Form />
        
        
       {/* <h2><span style={{fontsize: `${size}px`}}>hii</span></h2> 
        < button onClick={sum} > click</button >
        </>);
}
const sum = () => {
    let ar = []
    for (let i = 0; i <= size; i++) {
        if (i % "17" === 0) {
            // console.log(i)
            ar.push(i);
        }
    }
    console.log(ar)
    console.log(" ")

    // ar.map((data, index, v) => {
    //     console.log(`${index}*${data}= ${index * data}`)
    // })
    ar.forEach(element)

    function element(data) {
        console.log(data)
    } */}
    </>)
}
export default Navbar;