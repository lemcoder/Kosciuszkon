import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import React from 'react';
import powiats from './powiats';

type Props = {};

const FilterPowiat = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>

            <SelectContent>
                {powiats.map(powiat => (
                    <SelectItem
                        key={powiat.teryt}
                        value={powiat.teryt}
                    >
                        {powiat.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FilterPowiat;
