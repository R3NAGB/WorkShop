
import { Input } from "../ui/input"
import { Label } from "../ui/label"


// eslint-disable-next-line react/prop-types
const FormInputs = ({ register, name, type, placeholder, error }) => {
    return (
        <div>
            <Label>{name}</Label>
            <Input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className={`${error[name] && "border-red-500"}`}

            />
            {error[name] && (
                <p className="text-red-500 text-sm">{error[name].message}</p>
            )}

        </div>
    )
}

export default FormInputs
