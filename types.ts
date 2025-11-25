
export interface NavItem {
  label: string;
  path: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

export interface StaffMember {
  name: string;
  role: string[];
  image: string;
  bio?: string;
}

export interface Amenity {
  title: string;
  description: string;
  icon: string;
}
