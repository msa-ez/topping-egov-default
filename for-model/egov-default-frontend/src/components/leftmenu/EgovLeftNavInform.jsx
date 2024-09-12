forEach: Model
fileName: EgovLeftNavInform.jsx
path: egov-default-frontend/src/components/leftmenu
---
import React from 'react';

// import URL from 'constants/url';
import { NavLink } from 'react-router-dom';

function EgovLeftNavInform() { 
    const lastSegment = window.parent.location.href.split('/').pop();
    
    {{#boundedContexts}}
    {{#aggregates}}
    if (lastSegment === '{{namePlural}}'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>{{#ifNotNull displayName ../namePascalCase}}{{/ifNotNull}}</h2>
                    <ul className="menu4">
                        <li><NavLink to="/{{../nameCamelCase}}/{{namePlural}}" className={({ isActive }) => (isActive ? "cur" : "")}>{{#ifNotNull displayName namePascalCase}}{{/ifNotNull}}</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    {{/aggregates}}
    {{/boundedContexts}}
    return null;
}

export default React.memo(EgovLeftNavInform);