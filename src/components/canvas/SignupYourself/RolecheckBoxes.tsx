import { FC } from 'react';

interface RolecheckBoxesProps {
  role: Array<string>;
}

const RolecheckBoxes: FC<RolecheckBoxesProps> = ({ role }) => {
  console.info('RolecheckBoxes', role);
  return (
    <div className="mt-4 flex flex-wrap gap-4">
      {role?.map(role => (
        <label key={role} className="flex cursor-pointer items-center space-x-2 border px-4 py-2 hover:shadow-sm">
          <input type="checkbox" name="roles" value={role} className="size-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-800">{role}</span>
        </label>
      ))}
    </div>
  );
};

export default RolecheckBoxes;
