forEach: Model
fileName: EgovLeftNavIntro.jsx
path: egov-default-frontend/src/components/leftmenu
---
import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavIntro() {

    const lastSegment = window.parent.location.href.split('/').pop();
    
    {{#boundedContexts}}
    {{#aggregates}}
    if (lastSegment === '{{namePlural}}'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>{{../namePascalCase}}</h2>
                    <ul className="menu4">
                        <li><NavLink to="/{{../nameCamelCase}}/{{namePlural}}" className={({ isActive }) => (isActive ? "cur" : "")}>{{namePascalCase}}</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    {{/aggregates}}
    {{/boundedContexts}}
    return null;
}

export default EgovLeftNavIntro;