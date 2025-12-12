
import YourGrowYourPlanCard from './business-strategy/YourGrowYourPlanCard';

export default function YourGrowYourPlanList({ plans }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-10 sm:mt-12 lg:mt-[60px]">
      {plans?.map((plan) => (
        <YourGrowYourPlanCard key={plan.planName} plan={plan} />
      ))}
    </div>
  );
}
