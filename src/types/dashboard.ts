export interface SalesData {
  month: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface CustomerData {
  segment: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ProductPerformance {
  product: string;
  sales: number;
  profit: number;
  growth: number;
}

export interface RegionalData {
  region: string;
  revenue: number;
  customers: number;
  growthRate: number;
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  activeCustomers: number;
  growthRate: number;
}