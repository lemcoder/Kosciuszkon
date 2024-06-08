import { TFilters } from '../MapPage';
import FilterEtap from './FiltersComponents/FilterEtap/FilterEtap';
import FilterPowiat from './FiltersComponents/FilterPowiat/FilterPowiat';
import React from 'react';
import styles from './Filters.module.css';

type Props = {
    setFilters: React.Dispatch<React.SetStateAction<TFilters>>;
};

const Filters = ({ setFilters }: Props) => {
    return (
        <div className={styles.wrapper}>
            <FilterPowiat
                onChange={(value) => setFilters(prev => ({
                    ...prev,
                    powiat: value,
                }))}
            />

            <FilterEtap
                onChange={(value) => setFilters(prev => ({
                    ...prev,
                    etap: value,
                }))}
            />
        </div>
    );
};

export default Filters;
