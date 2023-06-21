import { useRef, useState } from "react";
import {
  AiOutlineBars,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

function App() {
  const [showLink, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleShowLinks = () => {
    setShowLinks(!showLink);
  };

  let style = {
    height: showLink
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>
            coding <span>doc</span>
          </h2>
          <AiOutlineBars className="toggle" onClick={handleShowLinks} />
        </div>

        <div style={style} className="links-container" ref={linksContainerRef}>
          <ul ref={linksRef} className="links">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">projects</a>
            </li>
            <li>
              <a href="/">contact</a>
            </li>
            <li>
              <a href="/">profile</a>
            </li>
          </ul>
        </div>

        <div className="icons-container">
          <ul className="icons">
            <li>
              <a href="">
                <AiFillTwitterCircle />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
