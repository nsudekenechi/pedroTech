import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
export const Form = () => {
    const schema = yup.object({
        firstName: yup.string().required("Field cannot be empty!"),
        email: yup.string().email("Email Address not Valid").required(),
        age: yup.number().min(18).positive().required().integer(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter Name" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
            <input type="email" placeholder="Enter Name" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Enter Age" {...register("age")} />
            <input type="password" placeholder="Enter Password"  {...register("password")} />
            <input type="password" placeholder="Enter Confirm Password" {...register("confirmPassword")} />
            <input type="submit" value={"Submit"} />
        </form>
    )
}