import PricingCard from "./PricingCard";

export default function PricingCardList({ plans }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 bg-[#fafafa]">
      {plans?.map((plan) => (
        <PricingCard
          key={plan.planName}
          planName={plan.planName}
          pricePerMonth={plan.pricePerMonth}
          period={plan.period}
          features={plan.features}
        />
      ))}
    </div>
  );
}
