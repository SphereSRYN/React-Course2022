/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

//vanila js 문법
const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";

console.log(h1);
//<h1 class="header">

const element = <h1 className="header">This is JSX</h1>;
console.log(element);
/*
Object
$$typeof: Symbol(react.element)
key: null
props: {
  className: 'header',
  children: 'This is JSX'}
ref: null
type: "h1"
_owner: null
_store: {validated: false}
_self: null
_source: null
[[Prototype]]: Object
 */
// jsx로 작성하면 retrun 되는건 plain old js 오브젝트인걸 알수있음
// react가  inperpret할 수 있는 used to create actual element
function Main({ name }) {
  return <h1>안녕{name}</h1>;
}
console.log(Main);
/* ƒ Main(_ref) {
  var name = _ref.name;

  return React.createElement(
    "h1",
    null,
    "\uC548\uB155",
    name
  );
}*/

const page = (
  <div>
    <h1>h1</h1>
    <p>p</p>
  </div>
); //parenthesis로 감싸줭
console.log(page);
/*
          {
  type: "div",
  key: null,
  ref: null,
  props: {
    children: [
      {
        type: "h1",
        key: null,
        ref: null,
        props: { className: "header", children: "This is JSX" },
        _owner: null,
        _store: {},
      },
      {
        type: "p",
        key: null,
        ref: null,
        props: { children: "This is a paragraph" },
        _owner: null,
        _store: {},
      },
    ],
  },

};
*/
/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
function Nav_() {
  return (
    <nav>
      <h1>website</h1>
      <ul>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <input type="search" placeholder="search" />
      <button type="button">search</button>
    </nav>
  );
}
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

ReactDOM.render(<Nav_ />, document.getElementById("root"));
{
  /* // document.getElementById("root").append(h1) */
}
