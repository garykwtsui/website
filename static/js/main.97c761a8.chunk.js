(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{194:function(e,t){},430:function(e){e.exports=JSON.parse('{"@type":"Person","name":"Gary K. W. Tsui","memberOf":[{"@type":"ProgramMembership","name":"LinkedIn","url":"http://www.linkedin.com","logo":"fa fa-linkedin"},{"@type":"ProgramMembership","name":"StackOverflow","url":"https://stackoverflow.com/users/770674/gary-tsui","logo":"fa fa-stack-overflow"},{"@type":"ProgramMembership","name":"Github","url":"https://github.com/garykwtsui","logo":"fa fa-github"},{"@type":"ProgramMembership","name":"ResearchGate","url":"https://www.researchgate.net/profile/Gary_Tsui","logo":"fa fa-researchgate"}],"alumniOf":[{"@type":"EducationOrganization","name":"The University of Hong Kong","award":"Doctor of Philosophy (Ph.D.) in Computer Science","knowsAbout":"Thesis: Fully automated segmentation of mitral valve in real-time three-dimensional ultrasound data and its applications"},{"@type":"EducationOrganization","name":"The University of Hong Kong","award":"Master of Science (MSc.) in Computer Science","knowsAbout":"Thesis: Automatic Boundary Detection in Videos"},{"@type":"EducationOrganization","name":"The University of British Columbia","award":"Bachelor of Science (BSc.) in Computer Science"}],"knowsLanguage":"en, yue-Hant-HK, zh-cmn-Hans-CN"}')},441:function(e,t,a){e.exports=a(946)},450:function(e,t,a){},459:function(e,t){},461:function(e,t){},481:function(e,t){},483:function(e,t){},528:function(e,t){},529:function(e,t){},642:function(e,t){},644:function(e,t){},653:function(e,t){},655:function(e,t){},689:function(e,t){},946:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(86),i=a.n(o),r=(a(450),a(20)),l=a(28),c=a(26),m=a(24),u=a(25),p=a(30),h=a.n(p),f=a(169),d=a(951),g=a(952),E=a(953),v=a(109),w=new(a(431).a)({accessToken:"9bfd5de2ba3a4598a8f0f9d02d34dcb1"}),b=a(243).JWT,y=a(605),k=a(815),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={assistantInput:"",assistantResponseOpen:!1,assistantResponse:""},a.contextRef=s.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"randomSamplePhrase",value:function(){var e=["Hey Gary!","Show me what can you do!","Go to work experience","Go to education","Show me publications","Get me Gary","What's Gary's phone number","What's Gary's email address"];return e[Math.floor(Math.random()*e.length)]}},{key:"fadeAssistantResponse",value:function(){var e=this;setTimeout(function(){e.setState({assistantInput:e.state.assistantInput,assistantResponseOpen:!1,assistantResponse:e.state.assistantResponse})},1e4)}},{key:"handleDialogFlowResponse",value:function(e){console.log("Response:"),console.log(e),console.log("Assistant: "+e.result.fulfillment.speech),this.setState({assistantInput:this.state.assistantInput,assistantResponseOpen:!0,assistantResponse:e.result.fulfillment.speech}),this.fadeAssistantResponse()}},{key:"handleDialogFlowError",value:function(e){console.log("Error:"),console.log(e)}},{key:"overToDialogFlow",value:function(){var e=Object(f.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.textRequest(t).then(this.handleDialogFlowResponse.bind(this)).catch(this.handleDialogFlowError.bind(this));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"authenticate",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t,a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b("newagent-63446@appspot.gserviceaccount.com",null,"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC54jlgA5NoGJ+s\nGVdlOASp7OSio4lTPKc25Rmu8buK5jNX/Nz+H92Pge3d4jfYlQt10sz0Y0sHb1UL\nxYtZN8FO8GGit+ZR+w7uVz0Fqn8nOwbp4tEbQiQ8g+wWrbBW8U/0tfVm7yqGTDNX\nP/elLdofuFH7DSkSq937vqI/BelEZ6iGT6tlYrebfHImi24lUfpqM9OcfO2y7QBm\ngvP0ErtSyr67FgDMhZn/Unm4BEdlDT39DUvJ8S40OKZh6IwMIBVTnfoPUhCYEFhH\nZGvgD6iZRFw7GtFJcT5/0ikTEp7Q4+tzomI/NaAmCG/2+KxTy6FcizKeTGeTBFR7\nffGNlhrFAgMBAAECgf9yTL57C7fYiqD5x5tgjNGmq27rkyPIyxhck65MpNgYJkqW\nutDTx+8KuhpKFeXBMo+ZeRtjgKriJ34O1FSbcm1WMk8sf2hg1hVC+Yx3BMqrP4tA\nxk1OivKSmOF+EHoeUW7uSp+xFopPimEHhY4B7pqcZqVXz6qHO1IvOp8JodjjoM2d\naLrOsvldTmlqYt/9bXMXk2pqNmbejv8YE6b75nRMvFs8FkbrbLj23b9eEMBOoI2w\nqztRGQVVqfidFTvcBjfx1M+BUffQHQuMGjrFzRYClV/SOl+3/VxHtcIVX8+anKuh\ns2ARtKQnTG6ZcGz3wzRBECCdgK6HEU8MUfYD0ekCgYEA3Se8jkeh+cpyPMhgtwao\nyrklJIiq1O0qoySak60AJXM5jo2iSAI16wjB9P0c1uEEdr7aMUkAvWTBimNyWWkD\nmL9X8wjDvh7c2iYv11jkJV8gQz9lTWD3cF56UBIRwH9/bFw7wiyc3L1rFHwLIeXk\n3nE2vBFB3fjLI4Mj74cq9QkCgYEA1yvQwfb5VpTRp0Bo2o6EJtnO1zTzU5dW+nwy\nyIfEOAnP0PQ38BJ8t2kSRkgD13K/9XtdYLoitk6wwDN/hp5a1c2EoT5y/Y5YcymA\n1cgI6dpSokkySMWY+1y49E774+jlM8B4Xgqa3E15CLUBSUJdMtU2TIU9jXu7bCPq\nUssCgt0CgYEAsCcbiFTETruTHJkaeA5k2fx4+k2ljK5P/NyGB0SQTkQmP0bPUP35\nxnkWTLZjh0B6Fr9T+lfEsBaWFk254j/ELqGSQzHjAAeDMHukNapHJwFLKGVRoj2v\nOaD3Wdnaq/KiI0SgEL0KQMTbith24YxFLW0OBOTWCyFFZMbrE7odXEkCgYEAiblF\n2aEXX0/KEd+sPZhTBfsL5bvCs5J+3b15U9lywtuk5P4sf8GVil/6jnmx28lbDOl1\nj2AUr9QWVi+gRK4/PfJaHks2lwzxmGTMTgnHisdvdOidAu9XSCzFRbr4h5yeeE2N\nvcPT84azHdudgyKzPMI0Cy6Ng23bPRCP/4ZpiRECgYEAzEPiKz+bf2YbaKocwnTe\nVydSXX3TirN5ubGBAFZZmKGoXlP0fvJF6tVKXSPnA2wpKjYFPO6vsvP5r6sqhjkD\nhPgu50tky88vQj+yPpLnuHw0yXrvM+FJEDBsIOvn6xqQDqB3yDUEbn8aMDlN7PZ+\nMEtAqEepjeHU8D8HywhfFUA=\n-----END PRIVATE KEY-----\n",["https://www.googleapis.com/auth/dialogflow"]),console.log(t),"https://dialogflow.googleapis.com/v2beta1/projects/newagent-63446/agent/sessions/23173894720:detectIntent",a={queryInput:{text:{languageCode:"en",text:"Hey Gary"}}},e.next=6,t.request({url:"https://dialogflow.googleapis.com/v2beta1/projects/newagent-63446/agent/sessions/23173894720:detectIntent",method:"POST",body:JSON.stringify(a)});case 6:n=e.sent,console.log(JSON.stringify(n));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"runSample",value:function(){var e=Object(f.a)(h.a.mark(function e(){var t,a,n,s,o,i,r=arguments;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"newagent-63446",a=k.v4(),n=new y.SessionsClient({credentials:{private_key:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC54jlgA5NoGJ+s\nGVdlOASp7OSio4lTPKc25Rmu8buK5jNX/Nz+H92Pge3d4jfYlQt10sz0Y0sHb1UL\nxYtZN8FO8GGit+ZR+w7uVz0Fqn8nOwbp4tEbQiQ8g+wWrbBW8U/0tfVm7yqGTDNX\nP/elLdofuFH7DSkSq937vqI/BelEZ6iGT6tlYrebfHImi24lUfpqM9OcfO2y7QBm\ngvP0ErtSyr67FgDMhZn/Unm4BEdlDT39DUvJ8S40OKZh6IwMIBVTnfoPUhCYEFhH\nZGvgD6iZRFw7GtFJcT5/0ikTEp7Q4+tzomI/NaAmCG/2+KxTy6FcizKeTGeTBFR7\nffGNlhrFAgMBAAECgf9yTL57C7fYiqD5x5tgjNGmq27rkyPIyxhck65MpNgYJkqW\nutDTx+8KuhpKFeXBMo+ZeRtjgKriJ34O1FSbcm1WMk8sf2hg1hVC+Yx3BMqrP4tA\nxk1OivKSmOF+EHoeUW7uSp+xFopPimEHhY4B7pqcZqVXz6qHO1IvOp8JodjjoM2d\naLrOsvldTmlqYt/9bXMXk2pqNmbejv8YE6b75nRMvFs8FkbrbLj23b9eEMBOoI2w\nqztRGQVVqfidFTvcBjfx1M+BUffQHQuMGjrFzRYClV/SOl+3/VxHtcIVX8+anKuh\ns2ARtKQnTG6ZcGz3wzRBECCdgK6HEU8MUfYD0ekCgYEA3Se8jkeh+cpyPMhgtwao\nyrklJIiq1O0qoySak60AJXM5jo2iSAI16wjB9P0c1uEEdr7aMUkAvWTBimNyWWkD\nmL9X8wjDvh7c2iYv11jkJV8gQz9lTWD3cF56UBIRwH9/bFw7wiyc3L1rFHwLIeXk\n3nE2vBFB3fjLI4Mj74cq9QkCgYEA1yvQwfb5VpTRp0Bo2o6EJtnO1zTzU5dW+nwy\nyIfEOAnP0PQ38BJ8t2kSRkgD13K/9XtdYLoitk6wwDN/hp5a1c2EoT5y/Y5YcymA\n1cgI6dpSokkySMWY+1y49E774+jlM8B4Xgqa3E15CLUBSUJdMtU2TIU9jXu7bCPq\nUssCgt0CgYEAsCcbiFTETruTHJkaeA5k2fx4+k2ljK5P/NyGB0SQTkQmP0bPUP35\nxnkWTLZjh0B6Fr9T+lfEsBaWFk254j/ELqGSQzHjAAeDMHukNapHJwFLKGVRoj2v\nOaD3Wdnaq/KiI0SgEL0KQMTbith24YxFLW0OBOTWCyFFZMbrE7odXEkCgYEAiblF\n2aEXX0/KEd+sPZhTBfsL5bvCs5J+3b15U9lywtuk5P4sf8GVil/6jnmx28lbDOl1\nj2AUr9QWVi+gRK4/PfJaHks2lwzxmGTMTgnHisdvdOidAu9XSCzFRbr4h5yeeE2N\nvcPT84azHdudgyKzPMI0Cy6Ng23bPRCP/4ZpiRECgYEAzEPiKz+bf2YbaKocwnTe\nVydSXX3TirN5ubGBAFZZmKGoXlP0fvJF6tVKXSPnA2wpKjYFPO6vsvP5r6sqhjkD\nhPgu50tky88vQj+yPpLnuHw0yXrvM+FJEDBsIOvn6xqQDqB3yDUEbn8aMDlN7PZ+\nMEtAqEepjeHU8D8HywhfFUA=\n-----END PRIVATE KEY-----\n",client_email:"newagent-63446@appspot.gserviceaccount.com"}}),s=n.sessionPath(t,a),o={session:s,queryInput:{text:{languageCode:"en",text:"Hey Gary"}}},e.next=7,n.detectIntent(o);case 7:i=e.sent,console.log(i);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"assistantHandler",value:function(e){console.log("Sending to dialogflow: "+this.assistantInput),this.authenticate()}},{key:"onChangeInput",value:function(e){"Enter"===e.key?this.assistantHandler(e):this.assistantInput=e.target.value}},{key:"assistantResponseOpen",value:function(){}},{key:"assistantResponseClose",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,{action:{icon:"keyboard",onClick:this.assistantHandler.bind(this)},onChange:this.onChangeInput.bind(this),placeholder:this.randomSamplePhrase()}),s.a.createElement("div",{ref:this.contextRef}),s.a.createElement(g.a,{color:"green",context:this.contextRef,content:s.a.createElement(E.a,{icon:!0,info:!0,fluid:!0},s.a.createElement(v.a,{name:"comment alternate outline"}),s.a.createElement(E.a.Content,null," ",this.state.assistantResponse)),open:this.state.assistantResponseOpen,position:"bottom center"}))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={assistantInput:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"assistantHandler",value:function(e){console.log("Sending to dialogflow: "+this.assistantInput),this.setState({assistantInput:""})}},{key:"onChangeInput",value:function(e){"Enter"===e.key?this.assistantHandler(e):this.assistantInput=e.target.value}},{key:"render",value:function(){var e=this.props.resumeData,t=e.memberOf;return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{id:"home"},s.a.createElement("nav",{id:"nav-wrap"},s.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),s.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),s.a.createElement("ul",{id:"nav",className:"nav"},s.a.createElement("li",{className:"current"},s.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#publication"},"Publications")),s.a.createElement("li",null,s.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),s.a.createElement("div",{className:"row banner"},s.a.createElement("div",{className:"banner-text"},s.a.createElement("ul",{className:"social"},t&&t.map(function(e){return s.a.createElement("li",{key:e.name},s.a.createElement("a",{href:e.url,target:"_blank"},s.a.createElement("i",{className:e.logo})))})),s.a.createElement("h1",{className:"responsive-headline"},'"I am ',e.name,'."'),s.a.createElement("h2",null,s.a.createElement(O,null)),s.a.createElement("hr",null))),s.a.createElement("p",{className:"scrolldown"},s.a.createElement("a",{className:"smoothscroll",href:"#about"},s.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"three columns"},s.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),s.a.createElement("div",{className:"nine columns main-col"},s.a.createElement("h2",null,"About Me"),s.a.createElement("p",null,e.aboutme),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columns contact-details"},s.a.createElement("h2",null,"Contact Details"),s.a.createElement("p",{className:"address"},s.a.createElement("span",null,e.name),s.a.createElement("br",null),s.a.createElement("span",null,e.address),s.a.createElement("br",null),s.a.createElement("span",null,e.website)))))))}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"resume"},s.a.createElement("div",{className:"row education"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Education"))),s.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.UniversityName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),s.a.createElement("p",null,e.Achievements)))}))),s.a.createElement("div",{className:"row work"},s.a.createElement("div",{className:"three columns header-col"},s.a.createElement("h1",null,s.a.createElement("span",null,"Work"))),s.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return s.a.createElement("div",{className:"row item"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("h3",null,e.CompanyName),s.a.createElement("p",{className:"info"},e.specialization,s.a.createElement("span",null,"\u2022")," ",s.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),s.a.createElement("p",null,e.Achievements)))}))))}}]),t}(n.Component),A=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return s.a.createElement("div",{className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("a",{href:"#modal-01"},s.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.name),s.a.createElement("p",null,e.description))))))})))))}}]),t}(n.Component),T=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns collapsed"},s.a.createElement("h1",null,"Check Out Some of My Works."),s.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return s.a.createElement("div",{className:"columns portfolio-item"},s.a.createElement("div",{className:"item-wrap"},s.a.createElement("a",{href:"#modal-01"},s.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"portfolio-item-meta"},s.a.createElement("h5",null,e.name),s.a.createElement("p",null,e.description))))))})))))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"row section-head"},s.a.createElement("div",{className:"ten columns"},s.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),s.a.createElement("div",{className:"row"},s.a.createElement("aside",{className:"eigth columns footer-widgets"},s.a.createElement("div",{className:"widget"},s.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return s.a.createElement("footer",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"twelve columns"},s.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return s.a.createElement("li",null,s.a.createElement("a",{href:e.url},s.a.createElement("i",{className:e.className})))})),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"\xa9 Copyright 2014 CeeVee"),s.a.createElement("li",null,"Design by ",s.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),s.a.createElement("div",{id:"go-top"},s.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},s.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),M={imagebaseurl:"https://garykwtsui.github.io/",name:"Gary K. W. Tsui",role:"Computer Scientist",linkedinId:"garykwtsui",roleDescription:"from Hong Kong, grew up in Vancouver, Canada, and now hustlin' in Silicon Valley.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/garykwtsui",className:"fa fa-github"},{name:"stackoverflow",url:"https://stackoverflow.com/users/770674/gary-tsui",className:"fa fa-stack-overflow"},{name:"researchgate",url:"https://www.researchgate.net/profile/Gary_Tsui",className:"fab fa-researchgate"}],aboutme:"B.Sc., M.Sc., and Ph.D. in Computer Science and have been working in the software engineering space for a number of years.",address:"Anywhere.",website:"https://www.drgarytsui.com",education:[{UniversityName:"The University of Hong Kong",specialization:"Doctor of Philosophy in Computer Science",MonthOfPassing:"June",YearOfPassing:"2015",Achievements:""},{UniversityName:"The University of Hong Kong",specialization:"Master of Science in Computer Science",MonthOfPassing:"September",YearOfPassing:"2006",Achievements:""},{UniversityName:"The University of British Columbia",specialization:"Bachelor of Science in Computer Science",MonthOfPassing:"May",YearOfPassing:"2005",Achievements:""}],work:[{CompanyName:"Apple Inc.",Location:"California, United States",specialization:"Senior Software Engineer",Department:"Siri International",MonthOfLeaving:"",YearOfLeaving:"Present",Achievements:""},{CompanyName:"Hospital Authority",Location:"Hong Kong",specialization:"Analyst Programmer",Department:"Clinical Departmental Systems",MonthOfLeaving:"Dec",YearOfLeaving:"2014",Achievements:""},{CompanyName:"The University of Hong Kong",Location:"Hong Kong",specialization:"Research Assistant / Teaching Assistant",Department:"Department of Computer Science - Computer Vision Group",MonthOfLeaving:"Mar",YearOfLeaving:"2015",Achievements:""}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},B=a(430),D=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(N,{resumeData:B}),s.a.createElement(j,{resumeData:M}),s.a.createElement(S,{resumeData:M}),s.a.createElement(A,{resumeData:M}),s.a.createElement(T,{resumeData:M}),s.a.createElement(C,{resumeData:M}),s.a.createElement(P,{resumeData:M}))}}]),t}(n.Component),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(945);i.a.render(s.a.createElement(D,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/website",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/website","/service-worker.js");F?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()}},[[441,1,2]]]);
//# sourceMappingURL=main.97c761a8.chunk.js.map