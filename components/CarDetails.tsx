'use client';

import { Fragment } from 'react';
import Image from 'next/image';

import { CarProps } from '@types';
import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				{/* this is the modal container */}
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}
				>
					{/* this is the transition effect of the modal */}
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						{/* this is the background when the modal appears; change bg-opacity to see the effect */}
						<div className="fixed inset-0 bg-black bg-opacity-50" />
					</Transition.Child>
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 to-current">
							{/* another transition effect == scale */}
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								{/* actual modal element */}
								<Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
									<button
										type="button"
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
										onClick={
											closeModal
										}
									>
										<Image
											src="/close.svg"
											alt="close"
											width={
												20
											}
											height={
												20
											}
											className="object-contain"
										/>
									</button>

									{/* modal content */}
									<div className="flex flex-1 flex-col gap-3">
										<div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
											{/* main car image */}
											<Image
												// src={generateCarImageUrl(car)}
												src="/hero.png"
												alt="car model"
												fill
												priority
												className="object-contain"
											/>
										</div>
										{/* bottom card */}
										<div className="flex gap-3">
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													src="/hero.png"
													alt="car model"
													fill
													priority
													className="object-contain"
												/>
											</div>
										</div>
									</div>

									{/* car properties */}
									<div className="flex-1 flex flex-col gap-2">
										<h2 className="font-semibold text-xl capitalize">
											{car.make} {car.model}
										</h2>
											{/* keys, values of the car object: how do we get keys AND values? */}
										<div className="mt-3 flex flex-wrap gap-4">
											{Object.entries(car).map(([key, value]) => (
												<div className="flex justify-between gap-5 w-full text-right" key={key}>
													<h4 className="text-gray capitalize">{key.split("_").join(" ")}</h4>
													<p className="text-black-100 font-semibold">{value}</p>
												</div>
											))}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;
