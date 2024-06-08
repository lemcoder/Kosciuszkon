import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import powiats from './powiats';

type Props = {
    onChange: (value: string) => void;
};

const FilterPowiat = ({ onChange }: Props) => {

    const options = powiats
        .map(x => ({
            name: x.name.toLowerCase(),
            teryt: x.teryt,
        }))
        .sort((a, b) => {
            const x = a.name.toLowerCase();
            const y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });

    return (
        <Select
            autoComplete="true"
            onValueChange={onChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Powiat" />
            </SelectTrigger>

            <SelectContent>
                {options.map(powiat => (
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
