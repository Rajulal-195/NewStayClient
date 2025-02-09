import "./mailList.css"

const MailList = () => {
  return (

    <div className="mail abos">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button className="btn btn-smalll-secondary">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList