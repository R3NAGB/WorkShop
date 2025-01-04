
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"


// eslint-disable-next-line react/prop-types
const FormtextareaInput = ({ register, name, type, placeholder, error }) => {
    return (
        <div>
            <Label>{name}</Label>
            <Textarea
                {...register(name)}
                rows={5}
                type={type} placeholder={placeholder}
                className={`${error[name] && "border-red-500"}`}

            />
            {error[name] && (
                <p className="text-red-500 text-sm">{error[name].message}</p>
            )}


        </div>
    )
}

export default FormtextareaInput
