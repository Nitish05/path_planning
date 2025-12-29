import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CityResult } from '../core/types';
import { searchCity } from '../services/nominatim';

interface CitySearchProps {
  onSelect: (city: CityResult) => void;
  disabled?: boolean;
}

export function CitySearch({ onSelect, disabled }: CitySearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CityResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const doSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const cities = await searchCity(searchQuery);
      setResults(cities);
      setShowDropdown(cities.length > 0);
    } catch (error) {
      console.error('Search failed:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      doSearch(value);
    }, 300);
  }, [doSearch]);

  const handleSelect = useCallback((city: CityResult) => {
    setQuery(city.displayName.split(',')[0]);
    setShowDropdown(false);
    setResults([]);
    onSelect(city);
  }, [onSelect]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleSelect(results[0]);
    }
  }, [results, handleSelect]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="control-group" ref={containerRef}>
      <label>City</label>
      <form className="city-search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a city..."
          disabled={disabled}
          onFocus={() => results.length > 0 && setShowDropdown(true)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled || isSearching || results.length === 0}
        >
          {isSearching ? '...' : 'Load'}
        </button>
      </form>
      {showDropdown && results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '6px',
            marginTop: '4px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: 1000
          }}
        >
          {results.map((city, index) => (
            <div
              key={`${city.osmId}-${index}`}
              onClick={() => handleSelect(city)}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                borderBottom: index < results.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.8)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {city.displayName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
