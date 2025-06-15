import { Alergy } from "@/hooks/family"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Label } from "../ui";
import { Collapsible } from "radix-ui";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface AlergiesProps {
	alergies: Alergy[]
	setAlergies: (alergies: Alergy[]) => void
	totalGuests: number
}

const emptyList = [
	{ id: 'lactose', count: 0, name: "" },
	{ id: 'milk-protein', count: 0, name: "" },
	{ id: 'vegetarian', count: 0, name: "" },
	{ id: 'vegan', count: 0, name: "" },
	{ id: 'porkFree', count: 0, name: "" },
	{ id: 'meatFree', count: 0, name: "" },
	{ id: 'nutAllergy', count: 0, name: "" },
	{ id: 'eggAllergy', count: 0, name: "" },
]

export const Alergies = ({ alergies, setAlergies, totalGuests }: AlergiesProps) => {
	const { t } = useTranslation()
	const [allergies, setLocalAlergies] = useState<Alergy[]>(AddTranslation(alergies ? alergies : emptyList));
	const [open, setOpen] = useState(alergies ? true : false);

	const handleIncrement = (allergyId: string) => {
		const updated = allergies.map(allergy => {
			if (allergy.id === allergyId && allergy.count < totalGuests) {
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
				{t("alergies")}
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
		<div className="flex items-center justify-between p-3 sm:p-3">
			<span className="text-base sm:text-sm text-gray-700 flex-1 mr-2">{allergyName}</span>
			<div className="flex items-center space-x-2 sm:space-x-3">
				<button
					type="button"
					onClick={onDecrement}
					className="rounded-xl bg-red-500 text-white hover:bg-red-600 active:bg-red-700 text-sm w-7 h-7 sm:w-7 sm:h-7 flex items-center justify-center"
				>-</button>
				<span className="text-sm sm:text-sm font-semibold text-sky-700 w-5 text-center">{count}</span>
				<button
					type="button"
					onClick={onIncrement}
					className="rounded-xl bg-green-500 text-white hover:bg-green-600 active:bg-green-700 text-lg w-7 h-7 sm:w-7 sm:h-7 flex items-center justify-center"
				>+</button>
			</div>
		</div>
	);
}

const AddTranslation = (alergies: Alergy[]): Alergy[] => {
	const { t } = useTranslation()

	return alergies.map(allergy => {
		switch (allergy.id) {
			case 'lactose':
				return { id: allergy.id, name: t("lactose_intolerant"), count: allergy.count }
			case 'milk-protein':
				return { id: allergy.id, name: t("milk_protein"), count: allergy.count }
			case 'vegetarian':
				return { id: allergy.id, name: t("vegetarian"), count: allergy.count }
			case 'vegan':
				return { id: allergy.id, name: t("vegan"), count: allergy.count }
			case 'porkFree':
				return { id: allergy.id, name: t("pork"), count: allergy.count }
			case 'meatFree':
				return { id: allergy.id, name: t("meat"), count: allergy.count }
			case 'nutAllergy':
				return { id: allergy.id, name: t("nuts"), count: allergy.count }
			case 'eggAllergy':
				return { id: allergy.id, name: t("egg"), count: allergy.count }
			default:
				return allergy
		}
	})
}