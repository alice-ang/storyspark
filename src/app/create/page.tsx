"use client";

import { Button } from "@/components";
import { FieldValues, useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <div>
      <div className="py-12">
        <h3 className="font-semibold text-3xl text-center">
          Lets create your story 🖌️
        </h3>
        <form onSubmit={onSubmit} className=" max-w-xl mx-auto p-4 space-y-6">
          <div className="space-y-1">
            <label className="font-semibold">Book title </label>
            <input
              type="text"
              placeholder="The Brave Astronaut Eve"
              {...register("title", { required: true })}
              className="border-2 border-black rounded-lg px-4 py-2 w-full"
            />
            {errors.title && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="font-semibold">Character name </label>
            <input
              type="text"
              placeholder="Eve"
              {...register("name", { required: true })}
              className="border-2 border-black rounded-lg px-4 py-2 w-full"
            />
            {errors.name && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="font-semibold">Describe the plot </label>
            <input
              type="text"
              placeholder="Eve wanted to become an astronaut, she built herself a spaceship out of cardboard."
              {...register("plot", { required: true })}
              className="border-2 border-black rounded-lg px-4 py-2 w-full"
            />
            {errors.plot && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="font-semibold">Describe the character </label>
            <input
              type="text"
              placeholder="Eve - a 6 year old girl with long blonde hair"
              {...register("character", { required: true })}
              className="border-2 border-black rounded-lg px-4 py-2 w-full"
            />
            {errors.character && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-palette-yellow">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
