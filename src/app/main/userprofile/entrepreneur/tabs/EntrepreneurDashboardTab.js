import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import AgentLiveChatStatus from 'src/app/main/dashboards/entrepreneur/agentstatus/AgentLiveChatStatus';
import StepperEntrepreneurDashboard from 'src/app/main/dashboards/entrepreneur/stepper/StepperEntrepreneurDashboard';
import reducer from 'src/app/main/dashboards/entrepreneur/store';
import EntrepreneurDashboardWidget from 'src/app/main/dashboards/entrepreneur/widgets/EntrepreneurDashboardWidget';

const EntrepreneurDashboardTab = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="my-36 flex flex-1 flex-col gap-16">
      <StepperEntrepreneurDashboard />
      <motion.div variants={item} className="sm:col-span-2 md:col-span-4">
        <EntrepreneurDashboardWidget />
      </motion.div>
      <AgentLiveChatStatus />
    </div>
  );
};
export default withReducer('entrepreneurDashboard', reducer)(EntrepreneurDashboardTab);
