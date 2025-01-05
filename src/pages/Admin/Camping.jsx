import FormInputs from "@/components/Form/FormInputs";
import FormtextareaInput from "@/components/Form/FormtextareaInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/utils/schemas";
import Buttons from "@/components/Form/Buttons";
import CategoriesInput from "@/components/Form/CategoriesInput";

const Camping = () => {
    const {
        register,
        handleSubmit,
        formState,
        setValue
    } = useForm({ resolver: zodResolver(campingSchema) });
    const { errors, isSubmitting } = formState;
    console.log(isSubmitting)
    const Submit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log("Form Data:", data);
    };

    return (
        <section>
            <h1 className="capitalize text-2xl font-semibold mb-4">Create Camping</h1>
            <div className="border p-8 rounded-md">
                <form onSubmit={handleSubmit(Submit)}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <FormInputs
                                register={register}
                                name="title"
                                type="text"
                                placeholder="Input Your Title..."
                                error={errors}
                            />

                        </div>
                        <div>
                            <FormInputs
                                register={register}
                                name="price"
                                type="number"
                                placeholder="Input Your Price..."
                                valueAsNumber
                                error={errors}

                            />

                        </div>
                        <div>
                            <FormtextareaInput
                                register={register}
                                name="description"
                                placeholder="Input Your Description..."
                                error={errors}
                            />
                        </div>
                        <CategoriesInput
                            name='category'
                            register={register}
                            setValue={setValue}
                        />
                    </div>

                    map

                    <Buttons text="create camping" isPending={isSubmitting}
                        type="Submit"
                    />
                </form>
            </div>
        </section>
    );
};

export default Camping;
