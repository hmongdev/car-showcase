import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: string;
	btnType?: 'button' | 'submit';
	containerStyles?: string;
	handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

export interface OptionProps {
	title: string;
	value: string;
}
export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}
