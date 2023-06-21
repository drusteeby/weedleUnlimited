import { Link } from 'react-router-dom';


const ChooseDifficulty = () =>
{
    let render =
        <>
            <div className='App-header'>
                <Link to="/SuperEasy">
                    <button type="button">
                        Super Easy
                    </button>
                </Link>
                <Link to="/Normal">
                    <button type="button">
                        Normal
                    </button>
                </Link>
                <Link to="/Hard">
                    <button type="button">
                        Hard
                    </button>
                </Link>
            </div>
        </>

    return render;
}

export default ChooseDifficulty;
