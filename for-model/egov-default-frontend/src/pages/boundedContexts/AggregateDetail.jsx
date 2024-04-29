
forEach: Aggregate
fileName: {{namePascalCase}}Detail.jsx
path: egov-default-frontend/src/pages/{{camelCase boundedContext.name}}
---

import { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import axios from 'axios';

import * as EgovNet from 'api/egovFetch'
import { NOTICE_BBS_ID } from 'config'
import CODE from 'constants/code'
import URL from 'constants/url'

import EgovAttachFile from 'components/EgovAttachFile'
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform'

function EgovNoticeDetail(props) {
    console.group("EgovNoticeDetail");
    console.log("EgovNoticeDetail [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovNoticeDetail [location] : ", location);

    // const bbsId = location.state.bbsId || NOTICE_BBS_ID;
    const {{keyFieldDescriptor.name}} = location.state.{{keyFieldDescriptor.name}};
    const searchCondition = location.state.searchCondition;

    {{#if commands}}
    {{#commands}}
    {{#if isExtendedVerb}}
    const [{{nameCamelCase}}open, set{{namePascalCase}}Open] = useState(false);
    {{/if}}
    {{/commands}}
    {{/if}}
    const condition = true; 

    const [entity, setEntity] = useState("");

    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [boardDetail, setBoardDetail] = useState({});
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const retrieveDetail = () => {
        const retrieveDetailURL = `/{{namePlural}}/{{#wrapKeyField keyFieldDescriptor.name}}{{/wrapKeyField}}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setBoardDetail(resp);
            }
        );
    }
    useEffect(function () {
        retrieveDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function deleteList(){
        axios.delete(`/{{namePlural}}/{{#wrapKeyField keyFieldDescriptor.name}}{{/wrapKeyField}}`)
        navigate('/{{boundedContext.nameCamelCase}}/{{namePlural}}');
    }
    {{#if commands}}
    {{#commands}}
    {{#if isExtendedVerb}}
    function {{nameCamelCase}}(){

        axios.put(`/orders/{{#wrapKeyField ../keyFieldDescriptor.name}}{{/wrapKeyField}}/acceptorder`, {{#wrapHeadMustache ../keyFieldDescriptor.name}}{{/wrapHeadMustache}}: entity }) 
        .then(response => {
            // set{{namePascalCase}}Open(false);
        })
    }
    {{/if}}
    {{/commands}}
    {{/if}}

    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home">Home</Link></li>
                        <li><Link to="/{{boundedContext.nameCamelCase}}/{{namePlural}}">{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}</Link></li>
                        <li>{masterBoard && masterBoard.bbsNm}</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents NOTICE_VIEW" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}</h1>
                        </div>

                        {/* <!-- 게시판 상세보기 --> */}
                        <div className="board_view">
                            <div className="board_view_top">
                                <div className="tit">{{#wrapMustache keyFieldDescriptor.name}}{{/wrapMustache}}</div>
                                <div className="info">
                                    <dl>
                                        <dt>{{#ifNotNull displayName keyFieldDescriptor.namePascalCase}}{{/ifNotNull}}</dt>
                                        <dd>{{#wrapMustache keyFieldDescriptor.name}}{{/wrapMustache}}</dd>
                                    </dl>
                                    {{#aggregateRoot.fieldDescriptors}}
                                    {{#unless isKey}}
                                    <dl>
                                        <dt>{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}</dt>
                                        <dd>{boardDetail && boardDetail.{{nameCamelCase}} }</dd>
                                    </dl>
                                    {{/unless}}
                                    {{/aggregateRoot.fieldDescriptors}}
                                </div>
                            </div>
                            <div className="board_btn_area">
                                <div style=\{{ display: "flex", flexDirection: "row"}}>
                                    <div style=\{{marginTop: "5px"}}>
                                        {{#if commands}}
                                        {{#commands}}
                                        {{#if isExtendedVerb}}
                                        <button className="btn btn_blue_h46 w_100"
                                         onClick={() => {
                                            if (condition) {  
                                            set{{namePascalCase}}Open(true);
                                            }
                                        }}>
                                            {{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}
                                        </button>
                                        {{/if}}
                                        {{/commands}}
                                        {{/if}}
                                    </div>
                                </div>
                                <div className="right_col btn1" style=\{{marginTop: "5px"}}>
                                    <Link to="/{{boundedContext.nameCamelCase}}/{{namePlural}}"
                                        className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                                <div className="right_col btn1" style=\{{marginTop: "5px", marginRight: "9%"}}>
                                    <button
                                        onClick={deleteList}
                                        className="btn btn_blue_h46 w_100">삭제
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 게시판 상세보기 --> */}
                        {{#if commands}}
                        {{#commands}}
                        {{#if isExtendedVerb}}
                        <div>
                            <Dialog open={{# wrapHeadMustache nameCamelCase}}{{/wrapHeadMustache}}open} onClose={() => set{{namePascalCase}}Open(false)}>
                                <DialogTitle>{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}</DialogTitle>
                                <DialogContent>
                                    <TextField 
                                        autoFocus
                                        margin="dense"
                                        id="{{#fieldDescriptors}}{{#if isKey}}{{name}}{{/if}}{{/fieldDescriptors}}"
                                        label="{{#fieldDescriptors}}{{#if isKey}}{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}{{/if}}{{/fieldDescriptors}}"
                                        type="text"
                                        fullWidth
                                        value={entity}
                                        onChange={(e) => setEntity(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={() => set{{namePascalCase}}Open(false)} className="btn btn_blue_h46 w_100">
                                        취소
                                    </button>
                                    <button onClick={{#wrapMustache nameCamelCase}}{{/wrapMustache}} className="btn btn_blue_h46 w_100">
                                    {{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        {{/if}}
                        {{/commands}}
                        {{/if}}
                        
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovNoticeDetail;

<function>
    window.$HandleBars.registerHelper('wrapKeyField', function (keyField) {
        if (keyField) {
            return '${' + keyField +'}';
        }
        return keyField;
    });
    
    window.$HandleBars.registerHelper('wrapMustache', function (field) {
        if (field) {
            return '{'+ field + '}';
        }
        return field;
    });
    window.$HandleBars.registerHelper('wrapHeadMustache', function (field) {
        if (field) {
            return '{'+ field;
        }
        return field;
    });
</function>