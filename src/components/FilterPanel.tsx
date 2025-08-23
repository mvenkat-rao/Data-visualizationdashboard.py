import React from 'react';
import { Calendar, Filter, Download } from 'lucide-react';

interface FilterPanelProps {
  selectedTimeRange: string;
  onTimeRangeChange: (range: string) => void;
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedTimeRange,
  onTimeRangeChange,
  selectedRegion,
  onRegionChange
}) => {
  const timeRanges = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 12 months'];
  const regions = ['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East & Africa'];

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-400" />
          <span className="text-white font-medium">Filters</span>
        </div>
        <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Time Range
          </label>
          <select 
            value={selectedTimeRange} 
            onChange={(e) => onTimeRangeChange(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {timeRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
          <select 
            value={selectedRegion} 
            onChange={(e) => onRegionChange(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Data Source</label>
          <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Sources</option>
            <option>Sales Database</option>
            <option>Customer Analytics</option>
            <option>Financial Reports</option>
          </select>
        </div>
      </div>
    </div>
  );
};