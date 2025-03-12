import { Link } from 'react-router-dom';

const ChooseDifficulty = () =>
{
    let render =
        <>


            <table className="table">
            <colgroup>
    <col style={{ width: "25%" }} />
    <col style={{ width: "50%" }} />
    <col style={{ width: "25%" }} />
  </colgroup>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <Link to="/SuperEasy" >
                                <button type="button" className="btn btn-primary w-100">Super Easy</button>
                            </Link>
                        </td>
                        <td />
                    </tr>

                        <tr>
                            <td />
                            <td>
                                <Link to="/Normal" >
                                    <button type="button" className="btn btn-primary w-100">Normal</button>
                                </Link>
                            </td>
                            <td />
                        </tr>

                        <tr>
                            <td />
                            <td>
                                <Link to="/Hard" >
                                    <button type="button" className="btn btn-primary w-100">Hard</button>
                                </Link>
                            </td>
                            <td />
                        </tr>

                </tbody>
            </table>
            {/* <div className="App-header d-flex gap-2">
    <Link to="/SuperEasy" >
    <View style={styles.container}>
        <button type="button" containerViewStyle={{width: '100%', marginLeft: 0}}>
            Super Easy
        </button>
        </View>
    </Link>
    <Link to="/Normal" className="d-flex flex-grow-1">
        <button type="button" containerViewStyle={{width: '100%', marginLeft: 0}}>
            Normal
        </button>
    </Link>
    <Link to="/Hard" className="d-flex flex-grow-1">
        <button type="button" containerViewStyle={{width: '100%', marginLeft: 0}}>
            Hard
        </button>
    </Link>
</div> */}
        </>

    return render;
}

export default ChooseDifficulty;
