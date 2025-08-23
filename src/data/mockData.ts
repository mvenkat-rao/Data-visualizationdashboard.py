import { SalesData, CustomerData, ProductPerformance, RegionalData, DashboardStats } from '../types/dashboard';

// Simulating data from CSV source
export const salesData: SalesData[] = [
  { month: 'Jan', revenue: 45000, orders: 120, customers: 95 },
  { month: 'Feb', revenue: 52000, orders: 140, customers: 110 },
  { month: 'Mar', revenue: 48000, orders: 130, customers: 105 },
  { month: 'Apr', revenue: 61000, orders: 165, customers: 135 },
  { month: 'May', revenue: 55000, orders: 150, customers: 125 },
  { month: 'Jun', revenue: 67000, orders: 180, customers: 150 },
  { month: 'Jul', revenue: 73000, orders: 195, customers: 165 },
  { month: 'Aug', revenue: 69000, orders: 185, customers: 155 },
  { month: 'Sep', revenue: 78000, orders: 210, customers: 175 },
  { month: 'Oct', revenue: 82000, orders: 225, customers: 190 },
  { month: 'Nov', revenue: 89000, orders: 245, customers: 210 },
  { month: 'Dec', revenue: 95000, orders: 260, customers: 230 }
];

// Simulating data from database source
export const customerSegments: CustomerData[] = [
  { segment: 'Enterprise', count: 450, percentage: 35, color: '#3B82F6' },
  { segment: 'SMB', count: 380, percentage: 30, color: '#10B981' },
  { segment: 'Startup', count: 290, percentage: 22, color: '#8B5CF6' },
  { segment: 'Individual', count: 165, percentage: 13, color: '#F59E0B' }
];

// Simulating data from API source
export const productPerformance: ProductPerformance[] = [
  { product: 'Analytics Pro', sales: 245000, profit: 98000, growth: 15.3 },
  { product: 'Dashboard Suite', sales: 189000, profit: 75600, growth: 23.1 },
  { product: 'Reporting Tools', sales: 156000, profit: 62400, growth: 8.7 },
  { product: 'Data Connector', sales: 134000, profit: 53600, growth: 31.2 },
  { product: 'Visualization Kit', sales: 98000, profit: 39200, growth: 12.5 }
];

// Regional performance data
export const regionalData: RegionalData[] = [
  { region: 'North America', revenue: 320000, customers: 485, growthRate: 18.5 },
  { region: 'Europe', revenue: 275000, customers: 420, growthRate: 22.3 },
  { region: 'Asia Pacific', revenue: 198000, customers: 315, growthRate: 35.7 },
  { region: 'Latin America', revenue: 145000, customers: 225, growthRate: 28.9 },
  { region: 'Middle East & Africa', revenue: 98000, customers: 165, growthRate: 42.1 }
];

export const dashboardStats: DashboardStats = {
  totalRevenue: 1036000,
  totalOrders: 2805,
  activeCustomers: 1610,
  growthRate: 24.7
};