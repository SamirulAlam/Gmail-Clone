import React from 'react';
import "./EmailRow.css";
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router';

function EmailRow({title,subject,description,time,id}) {

    const history =useHistory()
    return (
        <div onClick={()=>history.push('/mail')} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">{description}</span>
                </h4>
            </div>
            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
