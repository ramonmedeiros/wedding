import { Alergy } from "@/hooks/family"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Label } from "../ui";
import { Collapsible } from "radix-ui";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface AlergiesProps {
	setAlergies: (alergies: Alergy[]) => void
}

export const Alergies = ({ setAlergies }: AlergiesProps) => {
	const { t } = useTranslation()
	const [allergies, setLocalAlergies] = useState<Alergy[]>([
		{ id: 'lactose', name: '🥤 Lactose Intolerance', count: 0 },
		{ id: 'vegetarian', name: '🥦 Vegetarian', count: 0 },
		{ id: 'vegan', name: '🌱 Vegan', count: 0 },
		{ id: 'porkFree', name: '🐖 Pork-Free', count: 0 },
		{ id: 'meatFree', name: '🥩 Meat-Free', count: 0 },
		{ id: 'nutAllergy', name: '🥜 Nut Allergy', count: 0 },
		{ id: 'eggAllergy', name: '🥚 Egg Allergy', count: 0 },
	]);
	const [open, setOpen] = useState(false);

	const handleIncrement = (allergyId: string) => {
		const updated = allergies.map(allergy => {
			if (allergy.id === allergyId) {
				return { ...allergy, count: allergy.count + 1 };
			}
			return allergy;
		});
		setLocalAlergies(updated)
		setAlergies(updated)
	};

	const handleDecrement = (allergyId: string) => {
		const updated = allergies.map(allergy => {
			if (allergy.id === allergyId) {
				return { ...allergy, count: Math.max(0, allergy.count - 1) };
			}
			return allergy;
		});
		setLocalAlergies(updated)
		setAlergies(updated)
	};

	return (
		<Collapsible.Root open={open} onOpenChange={setOpen}>
			<Label className="pt-3 text-wedding-darkgray text-lg">
				Alergies
			</Label>
			<Collapsible.Trigger>
				<div className="ml-3 mt-4 mb-4 inline-flex bg-inherit rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-150">
					{open ? <ChevronDownIcon /> : <ChevronRightIcon />}
				</div>
			</Collapsible.Trigger>
			<Collapsible.Content>
				<div className="justify-center">
					<div className="w-full max-w-xl bg-white rounded-xl overflow-hidden">
						<div className="divide-y divide-gray-200">
							{allergies.map(allergy => (
								<AllergyCounterItem
									key={allergy.id}
									allergyName={allergy.name}
									count={allergy.count}
									onIncrement={() => handleIncrement(allergy.id)}
									onDecrement={() => handleDecrement(allergy.id)}
								/>
							))}
						</div>
					</div>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}

function AllergyCounterItem({ allergyName, count, onIncrement, onDecrement }) {
	return (
		<div className="flex items-center justify-between p-4 sm:p-5">
			<span className="text-base sm:text-sm text-gray-700 flex-1 mr-2">{allergyName}</span>
			<div className="flex items-center space-x-2 sm:space-x-3">
				<button
					type="button"
					onClick={onDecrement}
					className="rounded-xl bg-red-500 text-white hover:bg-red-600 active:bg-red-700 text-sm w-8 h-8 sm:w-5 sm:h-5 flex items-center justify-center"
				>-</button>
				<span className="text-sm sm:text-sm font-semibold text-sky-700 w-5 text-center">{count}</span>
				<button
					type="button"
					onClick={onIncrement}
					className="rounded-xl bg-green-500 text-white hover:bg-green-600 active:bg-green-700 text-lg w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
				>+</button>
			</div>
		</div>
	);
}
