import './App.css'
import logo from './assets/logo.png'
import leftlogo from './assets/Frame.png'
import rightlogo from './assets/rightside.png'
function App() {

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
          <div className="button"><a href="#">Login</a></div>
        </div>
      </nav>
      <div className="dir-struct">
        <i class="fa fa-home" aria-hidden="true"></i>
        {` > Flashcard > Mathematics > `}<strong>Relation and Function</strong>
      </div>
      <div className="page-title">Relation and Functions ( Mathematics )</div>
      <div className="tabs">
        <div className="tab">
          <div className="tab-title">Study</div>
          <div className="line"></div>
        </div>
        <div className="tab">
          <div className="tab-title">Quiz</div>
        </div>
        <div className="tab">
          <div className="tab-title">test</div>
        </div>
        <div className="tab">
          <div className="tab-title">Game</div>
        </div>
        <div className="tab">
          <div className="tab-title">Other</div>
        </div>
      </div>
      <div className="centerbox">
        <div className="coloredbox">
          <div className="icon-row">
            <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
            <i class="fa fa-volume-up" aria-hidden="true"></i>
          </div>
          <div className="expression">9+6+7X-2X-3</div>
        </div>
        <div className="bottom">
          <i class="fa fa-repeat" aria-hidden="true"></i>
          <div className="angle"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
          <div>01/10</div>
          <div className="angle"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
          <i class="fa fa-arrows-alt" aria-hidden="true"></i>
        </div>
      </div>
      <div className="middle-bar">
        <img src={leftlogo} alt="" />
        <img src={rightlogo} alt="" />
      </div>
      <div className="faq-section">
        <div className="title-faq">FAQ</div>
        <div className="faq-list">
          <div className="faqs">
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="faqs">
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="faqs">
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
          <div className="faqs">
            <p>Lorem ipsum dolor sit amet.</p>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
