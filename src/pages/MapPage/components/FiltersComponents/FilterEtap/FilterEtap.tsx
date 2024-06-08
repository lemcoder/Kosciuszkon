import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import etaps from './etaps';

type Props = {
    onChange: (value: string) => void;
};

const FilterEtap = ({ onChange }: Props) => {
    return (
        <Select
            autoComplete="true"
            onValueChange={onChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Etap edukacji" />
            </SelectTrigger>

            <SelectContent>
                {etaps.map(powiat => (
                    <SelectItem
                        key={powiat.id}
                        value={powiat.id.toString()}
                    >
                        {powiat.nazwa}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default FilterEtap;
