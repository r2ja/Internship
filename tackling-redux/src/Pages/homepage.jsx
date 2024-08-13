import '../CSS/homepage.css'
import { useNavigate } from 'react-router-dom'


function HomePage() {

    const navigate = useNavigate()

    const goPage = () => {
        navigate("/Products");
    }

    return (
        <div>
            <h1 className="homepage-title">Welcome to <br /> Producto</h1>
            <p className="homepage-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec a mi dapibus, congue mi sit amet, porttitor odio.
                Sed volutpat massa vitae metus ultrices auctor.
                Aenean ac congue nunc, sed laoreet diam.
                Quisque sodales, purus non imperdiet elementum,
                ipsum lectus dapibus tortor, in placerat mi neque
                vel justo. Pellentesque vel suscipit mauris,
                et ultricies massa. Duis pulvinar mi non vestibulum
                sollicitudin. Vivamus tincidunt porttitor
                ipsum ut varius. Donec sed dolor sit amet
                justo mattis interdum suscipit ut odio.
                Maecenas nec urna maximus nisi posuere consequat.
            </p>

            <div className='btn-div'>
                <button className='homepage-btn' onClick={() => goPage()}>Check out Products</button>

            </div>
        </div>
    )
}

export default HomePage;