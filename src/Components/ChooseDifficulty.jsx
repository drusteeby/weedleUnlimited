import {Link} from 'react-router-dom';


const ChooseDifficulty = () =>
{
    let render =
        <>
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
        </>

    return render;
}

export default ChooseDifficulty;
