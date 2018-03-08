export interface IFilterOptions {
    title: string;
    isSelected: boolean;
};

export class FilterOptions implements IFilterOptions {
    title: string;
    isSelected: boolean;
    constructor(option: FilterOptions) {
        this.title = option.title;
        this.isSelected = option.isSelected;
    }
};

export const FilterOptionsList: FilterOptions[] = [
    {
        title: '24 houres front desk',
        isSelected: false
    },
    {
        title: 'Breakfast available',
        isSelected: true
    },
    {
        title: 'Cleaning Service',
        isSelected: false
    },
    {
        title: 'Elevator',
        isSelected: false
    },
    {
        title: 'Wifi',
        isSelected: false
    },
    {
        title: 'Free Internet',
        isSelected: false
    },
    {
        title: 'Luggage storage',
        isSelected: false
    },
    {
        title: 'Number of floors - 13',
        isSelected: true
    },
    {
        title: 'Restuarant',
        isSelected: false
    },
    {
        title: 'Safe-deposit box at front desk',
        isSelected: false
    },
    {
        title: 'Total number of rooms 300',
        isSelected: false
    },
    {
        title: 'Valet parking',
        isSelected: true
    },
    {
        title: 'Wedding services',
        isSelected: false
    }
];