
import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"
import { categories } from "@/utils/categories"

const CategoriesInput = ({ name, register, setValue }) => {
    //javaScript
    return (
        <div className="mb-2">
            <input hidden
                {...register(name)}
            />
            <Label className="capitalize ">
                {name}
            </Label>
            <Select
                onValueChange={(value) => setValue(name, value)}
                required>

                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Please Select Category " />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item, index) => {
                            // console.log(item.label)
                            return <SelectItem
                                key={index}
                                value={item.label}>
                                <span className="flex gap-4 items-center">
                                    <item.icon />
                                    <p className="capitalize">{item.label}</p>

                                </span>
                            </SelectItem>
                        })
                    }

                </SelectContent>
            </Select>

        </div>
    )
}

export default CategoriesInput
