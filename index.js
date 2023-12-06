const Notification = (props) => {
  //  Write your code here.
  const { name, clas } = props;
  return <p className={clas}>{name}</p>;
};

const element = (
  //  Write your code here.
  <div className="main">
    <h1>Notifications</h1>
    <div className="tab">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification name="Information Message" clas="p1" />
    </div>
    <div className="tab2">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification name="Information Message" clas="p1" />
    </div>
    <div className="tab3">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification name="Information Message" clas="p1" />
    </div>
    <div className="tab4">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification name="Information Message" clas="p1" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
