import { Helmet } from "react-helmet";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header />
    </div>
  );
}
