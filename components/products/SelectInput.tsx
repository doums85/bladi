'use client';

import { Label, Select } from 'flowbite-react';

export default function SelectInput() {
  return (
    <div className="max-w-md" id="select">
      <div className="mb-2 block">
        <Label htmlFor="category" className='text-white' value="Select a category" />
      </div>
      <Select id="category">
        <option selected>All category</option>
        <option> Meloui </option>
        <option>Elmsamen</option>
        <option>Samossas</option>
        <option>Feuilles de Brick</option>
        <option>Spring Rolls</option>
      </Select>
    </div>
  );
}
