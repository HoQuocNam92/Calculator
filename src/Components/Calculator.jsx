import { useState } from 'react';
import '../CSS/style.css'
function Calculator() {
    const [datas, setDatas] = useState('');
    return (
        <>
            <div>
                <div className="container_box">
                    <div className="container">
                        <div id="result">
                            <input type="text" value={datas} id="resuult_box" />
                        </div>
                        <div className="key_board">
                            <div className="row_one">
                                <input value={'7'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'8'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'9'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'DEL'} type='button' onClick={(e) => setDatas(datas.slice(0, -1))} />
                                <input value={'AC'} type='button' onClick={(e) => setDatas('')} />

                            </div>
                            <div className="row_two">
                                <input value={'4'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'5'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'6'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'X'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={':'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />


                            </div>
                            <div className="row_three">
                                <input value={'1'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'2'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'3'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'+'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />
                                <input value={'-'} type='button' onClick={(e) => setDatas(datas + e.target.value)} />



                            </div>
                            <div className="row_four">
                                <input type='button' value={0} onClick={(e) => setDatas(datas + e.target.value)} />
                                <input type='button' value={'.'} onClick={(e) => setDatas(datas + e.target.value)} />
                                <input type='button' value={'x10'} onClick={(e) => setDatas(datas + e.target.value)} />
                                <input type='button' value={'Ans'} onClick={(e) => setDatas(datas + e.target.value)} />
                                <input type='button' value={'='} onClick={() => setDatas(eval(datas))} />

                            </div>

                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}
export default Calculator;