import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import PortfolioHome from "./pages/PortfolioHome";
import PortfolioHouse from "./pages/PortfolioHouse";
import PortfolioTrade from "./pages/PortfolioTrade";
import PortfolioGrid from "./pages/PortfolioGrid";


function Router() {
  return (
    <Switch>
      <Route path={"/portfolio"} component={PortfolioGrid} />
      <Route path={"/house"} component={PortfolioHouse} />
      <Route path={"/trade"} component={PortfolioTrade} />
      <Route path={"/"} component={PortfolioHome} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}
function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
