import Layout from "../components/Layout";
import sizeContainer from "../containers/size";
import { Component } from "react";
import { Home } from "../components/Segments";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

type State = {
  size: boolean | "large" | "medium" | "small";
};

export default class Main extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { size: false };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    size = sizeContainer.changeSize(window);
    this.setState({ size: size });
  }
  render() {
    return (
      <Layout>
        <div id="home">
          <Home size={this.state.size} />
        </div>
      </Layout>
    );
  }
}
