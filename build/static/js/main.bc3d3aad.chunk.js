(this.webpackJsonpnewtest=this.webpackJsonpnewtest||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(2),i=t.n(r),s=(t(13),t(3)),o=t(4),l=t(7),m=t(6);var d=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"img-container row"},e.cast.map((function(a){return c.a.createElement("div",{key:a.id,className:"col-3 pb-4"},c.a.createElement("div",{className:"card shadow "},c.a.createElement("div",{clasName:"card-body"},c.a.createElement("img",{onClick:function(){e.onClick(a.id)},className:"img-fluid rounded-lg",alt:a.name,src:a.image}))))}))))},g=t(5);var u=function(e){return c.a.createElement("div",{className:"jumbotron text-center"},c.a.createElement("h1",{className:"strong"},"Good Memory Everyone!"),c.a.createElement("h3",null,"...Now what was I talking about?"),c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-md-2"}),c.a.createElement("div",{className:"card col-md-3"},c.a.createElement("h2",null,"Score: ",e.score," ")),c.a.createElement("div",{className:"col-md-2"}),c.a.createElement("div",{className:"card col-md-3"},c.a.createElement("h2",null,"High Score: ",e.highScore)," "),c.a.createElement("div",{className:"col-md-2"})))},h=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).clickHandle=function(e){var a=n.state.cast.map((function(a){return a.id===e&&(!1===a.clicked?(n.updateScore(),n.state.score>=n.state.highScore&&(n.updateHighScore(),n.state.highScore===n.state.cast.length&&n.winGame()),a.clicked=!0):n.restartGame()),a}));n.shuffleCards(a),console.log(a),n.setState({cast:a})},n.shuffleCards=function(e){e.sort((function(){return Math.random()-.5}))},n.updateScore=function(){n.setState({score:n.state.score+1})},n.updateHighScore=function(){n.setState({highScore:n.state.highScore+1})},n.winGame=function(){alert("You've won"),n.setState({highScore:0}),n.restartGame()},n.restartGame=function(){n.setState({score:0});var e=n.state.cast.map((function(e){return e.clicked=!1,e}));n.setState({cast:e})},n.state={score:0,cast:g,highScore:0},n}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u,{score:this.state.score,highScore:this.state.highScore}),c.a.createElement(d,{cast:this.state.cast,onClick:this.clickHandle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('[{"id":1,"name":"Phillip J. Fry","image":"/images/Fry.png","clicked":false},{"id":2,"name":"Taranga Leela","image":"/images/Leela.png","clicked":false},{"id":3,"name":"Bender Bending Rodrigez","image":"/images/Bender.png","clicked":false},{"id":4,"name":"Amy Wong Kroker","image":"/images/Amy.png","clicked":false},{"id":5,"name":"Dr. John Zoidberg","image":"/images/Zoidberg.png","clicked":false},{"id":6,"name":"Professor Hubert J. Farnsworth","image":"/images/professor.png","clicked":false},{"id":7,"name":"Hermes Conrad","image":"/images/hermes.png","clicked":false},{"id":8,"name":"Roberto","image":"/images/Roberto.png","clicked":false},{"id":9,"name":"Lord Nibbler","image":"/images/nibbler.png","clicked":false},{"id":10,"name":"Robot Santa","image":"/images/robot-santa.png","clicked":false},{"id":11,"name":"Retriever","image":"/images/zapp.png","clicked":false},{"id":12,"name":"Yellow Lab","image":"/images/kif.png","clicked":false}]')},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bc3d3aad.chunk.js.map