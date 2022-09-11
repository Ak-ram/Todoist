import { Component, members } from "../../utils/modules.jsx";
class Members extends Component {
  state = {
    memberId: 0,
    categories: [
      "creatives",
      "developers",
      "students",
      "small businesses",
      "entrepreneurs",
      "freelancers",
    ],
  };

  showMember = (e) => {
    this.setState({
      memberId: Array.prototype.indexOf.call(
        e.target.parentNode.children,
        e.target
      ), // pick the index of targeted element
    });
    let ele = document.getElementsByTagName("button");

    for (let i = 0; i < ele.length; i++) {
      ele[i].classList.remove("members__presentation--active");
      e.target.classList.add("members__presentation--active");
    }
  };
  render() {
    return (
      <>
        <section className="members my-2 d-none d-md-flex">
          <div className="container">
            <div className="members__presentation row align-items-center justify-content-between">
              <div className="members__presentation--wise col-6 pb-3 px-3 order-1 order-md-0">
                <blockquote className="fs-4 pt-5 pb-3">
                  <span className="reversed-quote">“</span>
                  {members[this.state.memberId].wise}
                </blockquote>
                <span>{members[this.state.memberId].memberName}</span>
                <div className="fake_footer d-flex justify-content-between flex-md-column flex-lg-row">
                  <span>{members[this.state.memberId].position}</span>
                  <a href="r" className="text-primary ">
                    {members[this.state.memberId].moreInfoIcon}
                    {members[this.state.memberId].moreInfo}
                  </a>
                </div>
              </div>
              <div className="member-avatar col-5">
                <img
                  src={members[this.state.memberId].avatar}
                  alt=""
                  className="img-thumbnail border-0"
                />
              </div>
            </div>

            <div className="members__presentation--switcher mx-auto d-flex justify-content-center p-2 my-3">
              {this.state.categories.map((category) => {
                return (
                  <button
                  key={`__${Math.random()*23}__`}
                    className="btn py-3 text-capitalize"
                    onClick={this.showMember}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Members;
