import { SubmitHandler, useForm } from "react-hook-form";
import { trpc } from "../../utils/trpc";

const NicknameForm: React.FC<{ id: number; invalidatePlant: () => void }> = ({
  id,
  invalidatePlant,
}) => {
  interface IFormInput {
    name: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log("test submission", plant.data?.id);
    updatePlant(data.name, Number(id));
  };

  // should take in a name
  const updatePlantMutation = trpc.plant.update.useMutation();
  const updatePlant = async (newPlantName: string, id: number) => {
    const updatedPlantWithId = await updatePlantMutation.mutateAsync({
      name: newPlantName,
      id,
    });
    invalidatePlant();
    return updatedPlantWithId;
  };
  return (
    <form className="space-x-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input-bordered input-primary input w-full max-w-xs"
        {...register("name")}
      />

      <button
        type="submit"
        className="rounded-md bg-green-500 p-2 text-sm text-white transition hover:bg-green-600"
        // onClick={() => updatePlant("test", )}
      >
        Update Nickname
      </button>
    </form>
  );
};
export default NicknameForm;

export const NicknameFormCollapse: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        Customize a nickname.
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
