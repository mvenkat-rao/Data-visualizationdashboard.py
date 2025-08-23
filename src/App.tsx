import React, { useState, useMemo } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  DollarSign, ShoppingCart, Users, TrendingUp, BarChart3, 
  PieChart as PieChartIcon, Activity, Globe
} from 'lucide-react';

import { StatCard } from './components/StatCard';
import { ChartCard } from './components/ChartCard';
import { FilterPanel } from './components/FilterPanel';
import { ContactCard } from './components/ContactCard';
import { 
  salesData, customerSegments, productPerformance, 
  regionalData, dashboardStats 
} from './data/mockData';

function App() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 12 months');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  // Filter data based on selected region
  const filteredRegionalData = useMemo(() => {
    if (selectedRegion === 'All Regions') return regionalData;
    return regionalData.filter(item => item.region === selectedRegion);
  }, [selectedRegion]);

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  const formatNumber = (value: number) => 
    new Intl.NumberFormat('en-US').format(value);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Data Visualization Dashboard</h1>
            <p className="text-gray-400 mt-1">Interactive Business Intelligence & Analytics</p>
          </div>
          <div className="flex items-center space-x-4">
            <BarChart3 className="w-8 h-8 text-blue-500" />
            <div className="text-right">
              <p className="text-sm text-gray-400">Last Updated</p>
              <p className="text-white font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Contact Information */}
        <ContactCard />

        {/* Filter Panel */}
        <FilterPanel
          selectedTimeRange={selectedTimeRange}
          onTimeRangeChange={setSelectedTimeRange}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />

        {/* Key Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Revenue"
            value={formatCurrency(dashboardStats.totalRevenue)}
            change={dashboardStats.growthRate}
            icon={<DollarSign className="w-8 h-8" />}
          />
          <StatCard
            title="Total Orders"
            value={formatNumber(dashboardStats.totalOrders)}
            change={15.3}
            icon={<ShoppingCart className="w-8 h-8" />}
          />
          <StatCard
            title="Active Customers"
            value={formatNumber(dashboardStats.activeCustomers)}
            change={22.1}
            icon={<Users className="w-8 h-8" />}
          />
          <StatCard
            title="Growth Rate"
            value={`${dashboardStats.growthRate}%`}
            change={8.7}
            icon={<TrendingUp className="w-8 h-8" />}
          />
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Trend */}
          <ChartCard title="Revenue Trend" subtitle="Monthly revenue over the last 12 months">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Customer Segments */}
          <ChartCard title="Customer Segments" subtitle="Distribution of customers by segment">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="count"
                  label={({ segment, percentage }) => `${segment}: ${percentage}%`}
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number, name: string) => [formatNumber(value), 'Customers']}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Product Performance and Regional Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Product Performance */}
          <ChartCard title="Product Performance" subtitle="Sales and profit by product line">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="product" 
                  stroke="#9CA3AF" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number, name: string) => [
                    name === 'sales' ? formatCurrency(value) : formatCurrency(value), 
                    name === 'sales' ? 'Sales' : 'Profit'
                  ]}
                />
                <Legend />
                <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
                <Bar dataKey="profit" fill="#10B981" name="Profit" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Regional Performance */}
          <ChartCard title="Regional Performance" subtitle="Revenue and growth by region">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={filteredRegionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="region" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis yAxisId="left" stroke="#9CA3AF" />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number, name: string) => [
                    name === 'revenue' ? formatCurrency(value) : `${value}%`,
                    name === 'revenue' ? 'Revenue' : 'Growth Rate'
                  ]}
                />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  name="Revenue"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="growthRate" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  name="Growth Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Orders and Customers Trend */}
        <ChartCard title="Orders & Customers Trend" subtitle="Monthly orders and customer acquisition" className="mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number, name: string) => [
                  formatNumber(value), 
                  name === 'orders' ? 'Orders' : 'Customers'
                ]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Orders"
              />
              <Line 
                type="monotone" 
                dataKey="customers" 
                stroke="#F59E0B" 
                strokeWidth={3}
                name="New Customers"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Footer */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
          <div className="flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold text-white">Data Visualization Dashboard</h3>
          </div>
          <p className="text-gray-400 text-sm">
            This interactive dashboard integrates multiple data sources including sales databases, 
            customer analytics, and financial reports. Built with modern web technologies to provide 
            real-time insights and data exploration capabilities.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-300">
            <span>📊 Multiple Data Sources</span>
            <span>🎛️ Interactive Filters</span>
            <span>📈 Real-time Analytics</span>
            <span>💾 Export Capabilities</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;