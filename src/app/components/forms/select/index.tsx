'use client';
import { type FC, useId } from 'react';

import { type Nullable } from '@/types/nullable';
import { type Option } from '@/types/option';

interface Props<T = string> {
  label: string;
  options: Array<Option<T>>;
  value: Nullable<Option<T>>;
}

export const Select: FC<Props> = ({ label, options }) => {
  const id = useId();
  return (
    <div className='flex flex-col w-full'>
      <label id={`label-${id}`} htmlFor={`select-${id}`}>
        {label}
      </label>
      <select id={`select-${id}`} className='w-full'>
        <option value={undefined}>Choose one</option>
        {options.map((option) => (
          <option key={`select-${id}-option-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
