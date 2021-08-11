npx create-react-app my-app
cd my-app
npm start

yarn add react react-dom

document.getElementById("myHead").innerHTML =
	"<span id='headerText'>Title</span>"
	+ "<span id='headerSubtext'>Subtitle</span>";

  document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
	+ " rights reserved.</p>"
	+ "<p id='credits'>Note Taking by You</p>"
	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";

  class Counter extends React.Component {

 state = {

   count: 0

 };

 render() {

   return (

     <div>

       <p>The current count: {this.state.count}</p>

       <button>

         Add to the list here.

       </button>

     </div>

   )

 }

}
