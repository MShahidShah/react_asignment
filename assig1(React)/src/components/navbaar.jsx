const Nav_Components = () => {
    return(
        <div className="navbar">
            <div className="center">
        <h1>Generate more leads with a<br /> professional landing page!</h1>
        <input type="text" placeholder="Enter text here"/>
        <button>Submit</button>
        </div>
        </div>
    )
}

const Sec_Components = () => {
    return(
        <div className="sec-comp">
            <div>
            <i class="fa-regular fa-window-maximize"></i>            
            <h3>Full Responsive</h3>
            <p>This theme will look great on any<br />device no matter the size!</p>
            </div>
            <div>
            <i class="fa-brands fa-bootstrap"></i>
            <h3>BootStrap 5 Ready</h3>
            <p>Featuring the latest build of the new<br /> Bootstrap 5 frame work!</p>
            </div>
            <div>
            <i class="fa-solid fa-outdent"></i>
            <h3>Easy to Use</h3>
            <p>Ready to Use with your own content,<br />or customize the source files!</p>
            </div>
        </div>
    )
}
export {Nav_Components, Sec_Components}