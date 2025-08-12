'use client';

import { useEffect, useRef, useState } from 'react';

import { allowedCountries } from '@/shared/lib/countries';

import { Text } from '../atoms/text';
import { TextField } from '../atoms/text-field';

export const CountryAutocomplete = ({
  placeholder,
  onChange,
  disabled,
  initialValue = '',
  hint,
}: {
  onChange?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  intent?: 'primary' | 'danger';
  variant?: 'primary' | 'secondary';
  hint?: string;
}) => {
  const [search, setSearch] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const items = Object.entries(allowedCountries).map(([value, label]) => ({
    value,
    label: label.name,
  }));

  const filteredItems = search
    ? items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()))
    : [];

  const handleSelect = (label: string) => {
    setSearch(label);
    onChange?.(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={autocompleteRef} className="relative w-full">
      <TextField
        value={search}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          setSearch(e.target.value);
          onChange?.(e.target.value);
          setIsOpen(true);
        }}
        hint={hint}
      />
      {isOpen && search && (
        <ul className="absolute top-[110%] border border-[#808080] left-0 z-10 flex max-h-52 w-full flex-col gap-2 overflow-y-auto bg-white transition-all duration-300 ease-in-out">
          {filteredItems.length ? (
            filteredItems.map((item) => (
              <li
                key={item.value}
                onClick={() => handleSelect(item.label)}
                className="z-20 cursor-pointer p-4 border-b border-[#808080]"
              >
                <Text>{item.label}</Text>
              </li>
            ))
          ) : (
            <div className="px-4 py-2">
              <Text>No Results</Text>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
