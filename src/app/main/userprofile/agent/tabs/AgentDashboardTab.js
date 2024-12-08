import withReducer from 'app/store/withReducer';
import reducer from 'src/app/main/dashboards/agent/store';

const AgentDashboardTab = () => {
  return <div className="my-36 flex flex-1 flex-col gap-16">Agent Info</div>;
};
export default withReducer('agentDashboard', reducer)(AgentDashboardTab);
