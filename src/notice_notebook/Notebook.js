import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as N from './Notebook.style.js';

import './Notebook.css';

function Notebook(){

    useEffect(() => {
        // axios.get(`${ServerConfig.address}/notification/{notification-id}`)
        // .then((result)=>{setNotebookList(result.data.notification-id)})
    }, [])

    let [notebookList, setNotebookList] = useState(['']);

    // let [title, setTitle] = useState();
    // let [date, setDate] = useState();

    return(
        <div className="background">

            <div className='title'>
                <h3 className='font'>알림장</h3>
            </div>

            <N.Notebook_Box>
                <div className="table_area">
                    <table className="table_title">
                        <thead>
                            <tr>
                                <th className="table_th_title">제목</th>
                            </tr>
                        </thead>
                    </table>

                    {
                        notebookList.map(() => {
                            return (
                                <div>
                                    <table className="table_content">
                                        <tbody className='list_hover'>
                                            <tr className="table_feed">
                                                <td className="table_td_title">안녕하세요</td>
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