import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ServerConfig from './../config/server.json';
import * as N from './Notebook.style.js';

import './Notebook.css';

function Notebook(){

    useEffect(() => {
        axios.get(`${ServerConfig.address}/notification/{notification-id}`)
        .then((result)=>{setNotebookList(result.data.content)})
    }, [])

    let [notebookList, setNotebookList] = useState(['안녕하세요 오늘은 이러한 활동을 했습니다.','내일 강한 바람이 분다고 합니다. 조심하세요','오늘 햇볕이 강합니다. 자외선 차단제를 발라주세요']);

    // let [title, setTitle] = useState();
    // let [date, setDate] = useState();

    return(
        <div className="background">

            <div className='title'>
                <h3 className='font'>알림장</h3>
            </div>

            <N.Notebook_Box>
                <div>
                    <table className="table_title">
                        <thead>
                            <tr>
                                <th className="table_th_title">내용</th>
                            </tr>
                        </thead>
                    </table>

                    {
                        notebookList.map((a, i) => {
                            return (
                                <div>
                                    <table className="table_content">
                                        <tbody className='list_hover'>
                                            <tr>
                                                <td className="table_td_title">{a}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                    }

                </div>
            </N.Notebook_Box>

        </div>
    )
}

export default Notebook;