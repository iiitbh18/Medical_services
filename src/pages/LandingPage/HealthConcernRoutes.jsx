import { Route, Switch } from "react-router-dom";
import HeartHealth from "./HeartHealth";
import Fitness from "./Fitness";
import WomensHealth from "./WomensHealth";
import CancerTreatment from "./CancerTreatment";
import MentalHealth from "./MentalHealth";

export default function HealthConcernRoutes() {
  return (
    <Switch>
      <Route exact path="/health-concerns/heart-health">
        <HeartHealth />
      </Route>
      <Route exact path="/health-concerns/fitness">
        <Fitness />
      </Route>
      <Route exact path="/health-concerns/womens-health">
        <WomensHealth />
      </Route>
      <Route exact path="/health-concerns/cancer-treatment">
        <CancerTreatment />
      </Route>
      <Route exact path="/health-concerns/mental-health">
        <MentalHealth />
      </Route>
    </Switch>
  );
}
