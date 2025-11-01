import React, { useState, useEffect } from 'react';
import { useProjects } from '../context/ProjectContext';
import { FiSearch } from 'react-icons/fi';

// Logika Debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

const ProjectFilters = () => {
  const { filters, setFilters } = useProjects();
  
  // State lokal untuk input search agar bisa di-debounce
  const [localSearch, setLocalSearch] = useState(filters.search);
  const debouncedSearch = useDebounce(localSearch, 500); // Tunda 500ms

  // Kirim search term ke context HANYA setelah di-debounce
  useEffect(() => {
    setFilters(prevFilters => ({
      ...prevFilters,
      search: debouncedSearch
    }));
  }, [debouncedSearch, setFilters]);

  // Handler untuk dropdown (tidak perlu debounce)
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));

    // Jika search di-clear manual, update local state juga
    if (name === 'search' && value === '') {
      setLocalSearch('');
    }
  };

  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4">
      {/* Search Input */}
      <div className="relative grow">
        <input
          type="text"
          name="search"
          placeholder="Search project by title..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Filter Tipe */}
      <select
        name="type"
        value={filters.type}
        onChange={handleFilterChange}
        className="shrink-0 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="">All Types</option>
        <option value="Web Application">Web Application</option>
        <option value="Website">Website</option>
        <option value="Mobile Application">Mobile Application</option>
        <option value="Game">Game</option>
        {/* Tambahkan tipe lain jika perlu */}
      </select>

      {/* Filter Urutan */}
      <select
        name="sortOrder"
        value={filters.sortOrder}
        onChange={handleFilterChange}
        className="shrink-0 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="order">Default Order</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default ProjectFilters;