(window.webpackJsonpprocrast=window.webpackJsonpprocrast||[]).push([[0],{55:function(e,t,a){e.exports=a(97)},60:function(e,t,a){},79:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=(a(60),a(61),a(26)),s=a(27),i=a(28),u=a(32),m=a(29),p=a(33),h=a(49),d=a(12),g=a(48),E=a.n(g),b=(a(79),a(16)),f=a.n(b);a(80),a(82);f.a.initializeApp({apiKey:"AIzaSyAwUUAEAOi-ePiTmfVnGMVhEzM3krLjDKQ",authDomain:"upperline-app.firebaseapp.com",databaseURL:"https://upperline-app.firebaseio.com",projectId:"upperline-app",storageBucket:"",messagingSenderId:"837043626791",appId:"1:837043626791:web:69b8e37241c861e7"});var y=f.a.auth(),w=f.a.firestore(),v=f.a,j=a(100),P=a(101),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,myProjects:null}.mapStateKeys=function(){Object.keys(a.state).map(function(e){return a.state[e]})},a.signInUser=function(){var e=new v.auth.GoogleAuthProvider;y.signInWithPopup(e).then(function(e){var t=e.user;console.log(t.uid),w.collection("users").doc(t.uid).set({loggedIn:!0,name:t.displayName})}).catch(function(e){console.log(e)})},a.getLoggedUsers=function(){w.collection("users").where("loggedIn","==",!0).get().then(function(e){var t=[];e.forEach(function(e){var a=e.data();t.push(a)}),a.setState({loggedInUsers:t})}).catch(function(e){return console.log(e)})},a.signOutUser=function(){y.signOut()},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(c.a)({},n,t))},a.getProjectsFromFirebase=function(e){console.log("uid"),console.log(e),w.collection("projects").where("id","==",e).get().then(function(e){console.log(e);var t=[];e.forEach(function(e){var a=e.data();t.push(a)}),a.setState({myProjects:t},console.log(t))}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("This works"),this.getLoggedUsers();y.onAuthStateChanged(function(t){var a;t?(console.log(t.uid),e.setState({user:{photoURL:t.photoURL,email:t.email,displayName:t.displayName,uid:t.uid}}),a=t.uid,e.getProjectsFromFirebase(a)):e.setState({user:null})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement("main",null,r.a.createElement(C,{signout:this.signOutUser,user:this.state.user,signin:this.signInUser}),r.a.createElement(d.b,{exact:!0,path:"/",component:function(){return r.a.createElement(O,{user:e.state.user})}}),r.a.createElement(d.b,{path:"/welcome",component:function(){return r.a.createElement(k,{user:e.state.user,projects:e.state.myProjects,getProjects:e.getProjectsFromFirebase})}}))))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={myProjects:null},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(c.a)({},n,t))},a.saveProjectInFirebase=function(){w.collection("projects").add({name:a.state.name,time:a.state.time,date:new Date(a.state.date),deadline:new Date(a.state.deadline),description:a.state.description,id:a.props.user.uid}).then(function(e){a.setState({}),a.props.getProjects(a.props.user.uid),E.a.post("https://us-central1-upperline-app.cloudfunctions.net/sendProcrast",{email:a.props.user.email,displayName:a.props.user.displayName,message:"\n          Hello!\n          "})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;return e.user?r.a.createElement("div",{className:"welcomePage"},r.a.createElement("h1",{className:"welcomePageTitle"},r.a.createElement("br",null),"Welcome, ",e.user&&e.user.displayName,"!"),r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("h2",null," Are you ready to conquer your procrastination monster?"),r.a.createElement("br",null),r.a.createElement("h3",null,"If you are, scroll down to add a new project or goal. You got this!"),r.a.createElement("br",null),r.a.createElement("h3",null,"If you are not, watch the following video to get some inspiration."),r.a.createElement("br",null),r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/arj7oStGLkU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"myProjects myProjectsTitle"},"My Projects"),this.props.projects&&this.props.projects.map(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Project Name: ",e.name),r.a.createElement("br",null),r.a.createElement("p",null,"Time for Project: ",e.time," days"),r.a.createElement("br",null),r.a.createElement("p",null,"Date: ",e.date.toDate().toString()),r.a.createElement("br",null),r.a.createElement("p",null,"Deadline: ",e.deadline.toDate().toString()),r.a.createElement("br",null),r.a.createElement("p",null,"Description of Project: ",e.description))}),r.a.createElement("p",{className:"descriptionTwo"},r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Insert in info about a new project or goal, and we will notify you the maximum procrastination time you have on your hand through email. So check your emails for alerts! Even though we would all like to be conquerors of our procrastination monster all the time, we are human at the end of the day, and we will need help along the way to defeat our own internal monsters."),r.a.createElement("p",{className:"input"},r.a.createElement("br",null),"Name: ",r.a.createElement("input",{name:"name",onChange:this.handleChange,value:this.state.name,type:"text"})),r.a.createElement("p",{className:"input"},r.a.createElement("br",null),"Time (Days): ",r.a.createElement("input",{name:"time",onChange:this.handleChange,value:this.state.time,type:"number"})),r.a.createElement("p",{className:"input"},r.a.createElement("br",null),"Date: ",r.a.createElement("input",{name:"date",onChange:this.handleChange,value:this.state.date,type:"date"})),r.a.createElement("p",{className:"input"},r.a.createElement("br",null),"Deadline: ",r.a.createElement("input",{name:"deadline",onChange:this.handleChange,value:this.state.deadline,type:"date"})),r.a.createElement("p",{className:"input"},r.a.createElement("br",null),"Description: ",r.a.createElement("input",{name:"description",onChange:this.handleChange,value:this.state.description,type:"text"})),r.a.createElement("button",{onClick:this.saveProjectInFirebase,className:"addButton"},"Add Project"),r.a.createElement("br",null),r.a.createElement("br",null))):r.a.createElement(d.a,{to:"/"})}}]),t}(r.a.Component);function C(e){return r.a.createElement(j.a,{bg:"light",expand:"lg"},r.a.createElement("img",{className:"img",src:"https://thumbs.dreamstime.com/b/productivity-increase-black-icon-vector-sign-isolated-background-productivity-increase-concept-symbol-illustration-productivity-133183535.jpg"}),r.a.createElement(j.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(P.a,{className:"mr-auto"})),r.a.createElement("div",null,e.user&&r.a.createElement("button",{onClick:e.signout,className:"loginButton"},"SignOut"),!e.user&&r.a.createElement("button",{onClick:e.signin,className:"loginButton"},"Login")))}function O(e){return e.user?r.a.createElement(d.a,{to:"/welcome"}):r.a.createElement("div",{className:"homePage"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{className:"homePageTitle"},"Procrast"),r.a.createElement("h2",{className:"slogan"},"Meh. I will finish it later."),r.a.createElement("br",null),r.a.createElement("p",{className:"description"},"Although we don't want to admit it, we all procrastinate. Procrastination is something that hunts us all. But life's too short to procrastinate. Are you afraid that your procrastination monster is dominating your life? Well, don't worry. This is the app for you."))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.b23f05a8.chunk.js.map