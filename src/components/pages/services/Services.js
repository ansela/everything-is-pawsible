import React from "react"
import { Switch, useRouteMatch, Route } from "react-router-dom"
import ServicesOverview from "./ServicesOverview"
import ServiceDetail from "./ServiceDetail"

const Services = () => {
  const { path } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <ServicesOverview />
      </Route>
      <Route path={`${path}/:serviceId`}>
        <ServiceDetail />
      </Route>
    </Switch>
  )
}

export default Services
